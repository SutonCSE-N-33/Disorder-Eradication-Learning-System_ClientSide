import React, { useEffect, useState } from 'react';
import BasicKnowledge from './BasicKnowledge/BasicKnowledge';
import Header from './Header/Header';
import Herbal from './Herbal/Herbal';
import './Home.css';
import SexualHealthContent from './SexualHealth/SexualHealthContent';
const Home = () => {

  const [contentCategory,setContentCategory] = useState('basicKnowledge');

  const handleContentCategory = category =>{
    setContentCategory(category)
  }



  let content;
  if(contentCategory === 'basicKnowledge'){
    content = <BasicKnowledge></BasicKnowledge>;
  }else if(contentCategory === 'sexualHealth'){
    content = <SexualHealthContent></SexualHealthContent>
  }else{
    content = <Herbal></Herbal>
  }

 
    return (
        <div className='min' style={{backgroundColor:"#282c34"}}>
            <Header></Header>
            <section id="frontBox">
        <div class="">
          <div id="menuBar">
            <nav id="videoMenu" class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                      <a onClick={()=>handleContentCategory('basicKnowledge')} class="nav-link">Basic Knowledge</a>
                    </li>
                    <li class="nav-item">
                      <a onClick={()=>handleContentCategory('sexualHealth')} class="nav-link">Sexual Health</a>
                    </li>
                    <li class="nav-item">
                      <a onClick={()=>handleContentCategory('herbal')} class="nav-link">Herbal Medico</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
      {
        content
      }
     
      </div>
    );
};

export default Home;