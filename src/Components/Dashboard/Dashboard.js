import React, { useState,useEffect } from 'react';
import Header from '../Home/Header/Header';
import './Dashboard.css';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import VideoUpload from './VideoUpload/VideoUpload';
import { useContext } from "react"
import {useNavigate,Outlet} from 'react-router-dom';
import { foodContext } from "../../App";
import SexualHealth from './SexualHealth/SexualHealth';
import HerbalMedico from './HerbalMedico/HerbalMedico';
import QuizContent from './QuizContent/QuizContent';
const Dashboard = () => {
    document.title = 'DashBoard';
    const [loggedInUser,setLoggedInUser] = useContext(foodContext);
    const [contentForm,setContentForm] = useState('VideoUpload');
    console.log(contentForm);
    const navigate = useNavigate();
    const handleSignOut = () =>{
        setLoggedInUser('');
        navigate('/home')
    }

    const handleContentForm = (contentCategory) =>{
             setContentForm(contentCategory)
    }


    // videoUpload Section
    const [video,setVideo] = useState({
        myVideo:null,
        url:null,
    });
    console.log(video)
     const [parsingToQuiz,setParsingToQuiz] = useState('');
     console.log(parsingToQuiz)
  const [videosData,setVideosData] = useState({
    title:"",
    description:"",
    playlist:"",
    category:""
  })
 
  const handleVideo = e =>{
    setVideo({
        ...video,
        myVideo:e.target.files[0],
        url:URL.createObjectURL(e.target.files[0]),
      });
  }

  const handleVideoData = (e) => {
    const newVideo = {...videosData};
    newVideo[e.target.name] = e.target.value;
    setVideosData(newVideo);
}


const formData = new FormData();
formData.append('myVideo',video.myVideo);
formData.append('url',video.url);
formData.append('title',videosData.title);
formData.append('description',videosData.description);
formData.append('playlist',videosData.playlist);
formData.append('category',videosData.category);
formData.append('random',loggedInUser.randomUser);
const handleVideoSubmit =e =>{
  e.preventDefault();
 
fetch('http://localhost:5000/videoUpload',{
 method: "POST",
 body: formData
})
.then(res => {
    console.log('successfully');
    alert("Submitted Successfully");
    setParsingToQuiz(videosData.title)
})
}


// Category display Section
    let categoryContentForm;
    if(contentForm === 'VideoUpload'){
        categoryContentForm = <VideoUpload handleVideo={handleVideo} handleVideoSubmit={handleVideoSubmit} handleVideoData={handleVideoData}></VideoUpload>
    }else if(contentForm === 'SexualHealth'){
        categoryContentForm = <SexualHealth loggedInUser={loggedInUser}></SexualHealth>
    }else if(contentForm === 'HerbalMedico'){
        categoryContentForm = <HerbalMedico loggedInUser={loggedInUser}></HerbalMedico>
    }else if(contentForm === 'CreateQuiz'){
        categoryContentForm =<QuizContent loggedInUser={loggedInUser} parsingToQuiz={parsingToQuiz}></QuizContent>
    }
    return (
        <div style={{paddingBottom:"40px",backgroundColor:"#282c34"}}>
        
        <section id="frontBox" class="">
            <div id="dashBoard" className="allbox row">
                    <div className='col-md-3'>
                       <Sidebar  handleSignOut={handleSignOut}></Sidebar>
                    </div>
                    <div className="db-channel col-md-9">
                            <div style={{marginLeft:"-60px"}}>
                            <Navbar handleContentForm={handleContentForm}></Navbar>
                            {
                                categoryContentForm
                            }
                            </div>
                    </div>
            </div>
     </section>
        </div>
    );
};

export default Dashboard;