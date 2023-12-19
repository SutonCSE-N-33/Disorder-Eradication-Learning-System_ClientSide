import React, { useState,useEffect } from 'react';
import './Login.css';
import {useContext} from 'react';
import firebaseConfig from '../FirebaseConfigue';
import { useLocation, useNavigate } from 'react-router-dom';
import ContentCreatorLogin from './ContentCreatorLogin/ContentCreatorLogin';
import GeneralUserLogin from './GeneralUserLogin/GeneralUserLogin';
import { GoogleAuthProvider, getAuth,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {foodContext} from '../../App'

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Login = () => {
    document.title = "Login";
    const location = useLocation();
    const userType = location.state.option;
    const navigate = useNavigate();
    const [loggedInUser,setLoggedInUser] = useContext(foodContext);
    const [generalUser,setGeneralUser] = useState({
          name:"",
          email:""
    })
   
    const [newUser,setNewUser] = useState(false);
    const [unValid,setUnValid] = useState(false);
    const [contentCreator,setContentCreator] = useState({
        name:"",
        email:"",
        age:"",
        password:"",
        confirmPassword:"",
        success:false,
        randomUser:null
    })
    console.log(contentCreator);
    
    const provider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    const {displayName,email} = user;
    const newUser = {
        name:displayName,
        email:email
    }
    setGeneralUser(newUser);
    setLoggedInUser(newUser);
    dbGeneralUser(newUser);

  }).catch((error) => {
   
    const errorMessage = error.message;
   
  });
    }

    const dbGeneralUser = (newUser) => {
        fetch("http://localhost:5000/generalUser",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(newUser)
})
.then(res => {
    if(res.status === 200){
       navigate('/differentItem');
    }
})
    }

    const handleValidData = e =>{
        let isValid;
        if(e.target.name === 'email'){
            const regEx = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            isValid = regEx.test(e.target.value);
        }if(e.target.name === 'password'){
            const minimumChar = e.target.value.length>6;
            const pattern = /^(?=.*[0-9])/;
            const validPassword = pattern.test(e.target.value);
            isValid = minimumChar && validPassword;
        }if(e.target.name === 'confirmPassword'){
            const confirmPassword = e.target.value;
            isValid = (contentCreator.password === confirmPassword);
        }
        if(e.target.name === 'name'){
            isValid =true;
        }
        if(e.target.name === 'age'){
            isValid =true;
        }
        if(isValid){
            const newUserInfo = {...contentCreator};
            newUserInfo[e.target.name] = e.target.value;
            setContentCreator(newUserInfo);
        }if(!isValid){
            setUnValid(!unValid);
        }     
    }

    const handleSignIn = e => {
        e.preventDefault();
        if(newUser && contentCreator.email && contentCreator.confirmPassword){
           createUserWithEmailAndPassword(auth, contentCreator.email, contentCreator.password)
        .then((res) => {
            const randomUser = Math.floor((Math.random() * 100) + 1);
        const newUserInfo = {...contentCreator};
        newUserInfo.success = true;
        newUserInfo.randomUser = randomUser;
        setContentCreator(newUserInfo);
        setLoggedInUser(newUserInfo);
        dbContentCreator(newUserInfo);
        setNewUser(!newUser);
      })
      .catch((error) => {
        const newUserInfo = {...contentCreator};
        newUserInfo.success = false;
        setContentCreator(newUserInfo);
      })
        }
    
        if(!newUser && contentCreator.email && contentCreator.password){
            signInWithEmailAndPassword(auth, contentCreator.email, contentCreator.password)
            .then((res) => {
                const newUserInfo = {...contentCreator};
                newUserInfo.success = true;
                setContentCreator(newUserInfo);
                setLoggedInUser(newUserInfo)
                navigate('/dashboard')
            })
            .catch((error) => {
                
                const newUserInfo = {...contentCreator};
                newUserInfo.success = false;
                setContentCreator(newUserInfo);
            });
    }

    }

    const dbContentCreator = data =>{
        fetch("http://localhost:5000/contentCreator",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(res =>console.log("Successfully"))
    }
 
    let user;
    if(userType === "contentCreator"){
       user = <ContentCreatorLogin handleSignIn={handleSignIn} setNewUser={setNewUser} newUser={newUser} handleValidData={handleValidData}></ContentCreatorLogin>
    }else if(userType === "generalUser"){
       user = <GeneralUserLogin loginWithGoogle={loginWithGoogle}></GeneralUserLogin>
    }
    return (
        <div style={{backgroundColor:"#282c34"}}>
          {
              user
          }
        </div>
    );
};

export default Login;