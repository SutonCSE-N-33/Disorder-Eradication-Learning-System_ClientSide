import React from 'react';
import './GeneralUserLogin.css';
const GeneralUserLogin = ({loginWithGoogle}) => {
    return (
        <div style={{height:"100vh"}} className="m-auto">
        <div className="general-user text-white">
        <h3 className='text-center'>Login as a General User</h3>
       <button onClick={loginWithGoogle}  className='submit-btn'>Login With Google</button>
    </div>
        </div>
    );
};

export default GeneralUserLogin;