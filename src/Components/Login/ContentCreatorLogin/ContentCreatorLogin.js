import React from 'react';
import loginGif from '../../../assets/icons/working.gif';
import './ContentCreatorLogin.css';
const ContentCreatorLogin = ({handleValidData,newUser,setNewUser,handleSignIn}) => {
    return (
        <div style={{height:"100vh"}}>
        <div id="loginBox" class="loginBox ls_Box allbox">
        <div class="loginGif">
            <img src={loginGif} alt="" width="200px" />
        </div>
    <div id="signUpBox" class="signUpBox ls_Box allbox">
       
        {
            newUser && <div class="input-group flex-nowrap my-3 px-3">
            <span class="input-group-text" id="addon-wrapping">
                <i class="fa-solid fa-file-signature inputIcon"></i>
            </span>
            <input type="text" onBlur={handleValidData} class="form-control" name="name" placeholder="Username" />
        </div>
        }
        <div class="input-group flex-nowrap my-3 px-3">
            <span class="input-group-text" id="addon-wrapping">
                <i class="fa-solid fa-at inputIcon"></i>
            </span>
            <input type="text" class="form-control" onBlur={handleValidData} name="email" placeholder="Email" />
        </div>
        {
            newUser && <div class="input-group flex-nowrap my-3 px-3">
            <span class="input-group-text" id="addon-wrapping">
                <i class="fa-solid fa-file-signature inputIcon"></i>
            </span>
            <input type="date" onBlur={handleValidData} class="form-control" name="age" placeholder="Age" />
        </div>
        }
        <div class="input-group flex-nowrap my-3 px-3">
            <span class="input-group-text" id="addon-wrapping">
                <i class="fa-solid fa-lock inputIcon"></i>
            </span>
            <input type="text" class="form-control" onBlur={handleValidData} name="password" placeholder="Password" />
        </div>
      {
          newUser &&   <div class="input-group flex-nowrap my-3 px-3">
          <span class="input-group-text" id="addon-wrapping">
              <i class="fa-solid fa-lock inputIcon"></i>
          </span>
          <input type="text" class="form-control" onBlur={handleValidData} name="confirmPassword" placeholder="Confirm Password" />
      </div>
      }
        <button type="button" onClick={handleSignIn} class="btn btnDesign mx-auto d-block">{newUser?'SignUp':'SignIn'}</button>
        {
            newUser ? <p>If you have an account <span onClick={() => setNewUser(!newUser)}>Login</span> here!</p>:<p>If you have not an account <span onClick={()=>setNewUser(!newUser)}>SignUp</span> here!</p>
        }
        
    </div>
        </div>
        </div>
    );
};

export default ContentCreatorLogin;