import React from 'react';
import './Sidebar.css';
import dashboard from '../../../assets/icons/dashboard.png';
import channel from '../../../assets/icons/db-channel.png';
import profile from '../../../assets/icons/db-profile.png';
import settings from '../../../assets/icons/db-settings.png';
import help from '../../../assets/icons/db-help.png';
import signOut from '../../../assets/icons/db-signout.png';
import { useNavigate } from 'react-router-dom';
const Sidebar = ({handleSignOut}) => {
    
    return (
        <div className="db-sidebar">
                  
                    <ul>
                        <li><a style={{color:"white",fontSize:"15px"}}><img src={dashboard} alt="" />Dashboard</a></li>
                        <li><a style={{color:"white"}}><img src={channel} alt="" />Channel</a></li>
                        <li><a style={{color:"white"}}><img src={profile} alt="" />Profile</a></li>
                        <li><a style={{color:"white"}}><img src={settings} alt="" />Settings</a></li>
                        <li><a style={{color:"white"}}><img src={help} alt="" />Help</a></li>
                        <li><a onClick={handleSignOut} style={{color:"white"}}><img src={signOut} alt="" />SignOut</a></li>
                    </ul>
                </div>
    );
};

export default Sidebar;