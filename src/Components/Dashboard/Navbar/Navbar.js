import React, { memo } from 'react';
import searchImg from '../../../assets/icons/db-search.png';
import './Navbar.css';
const Navbar = ({handleContentForm}) => {
    return (
        <div class="channel-menu">
        <ul class="nav justify-content-center">
          
            <li class="nav-item">
              <a class="nav-link" onClick={()=>handleContentForm('VideoUpload')}>VideosUpload</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={()=>handleContentForm('SexualHealth')}>SexualHealth</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={()=>handleContentForm('HerbalMedico')}>HerbalMedico</a>
            </li>
            <li class="nav-item">
            <a className="nav-link active" onClick={()=>handleContentForm('CreateQuiz')}>CreateQuiz</a>
          </li>
            <li class="nav-item">
                <div class="input-group input-group-sm mb-3">
                    <input type="text" class="form-control" placeholder="search" />
                    <span class="input-group-text" id="inputGroup-sizing-sm">
                        <img src={searchImg} alt="" />
                    </span>
                </div>
            </li>
          </ul>
    </div>
    );
};

export default Navbar;