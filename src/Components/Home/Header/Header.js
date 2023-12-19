import React, { useState } from 'react';
import './Header.css';
import Modal from 'react-modal';
import {Link, useNavigate} from 'react-router-dom';

Modal.setAppElement('#root');
const Header = () => {
  const [logo,setLogo] = useState(false);
  const [modalOpen,setModalOpen] = useState(false);
  const path = useNavigate();
  const [userType,setUserType] = useState({
       option:""
  })

  const userInputHandle = e =>{
            const newUserType = {...userType};
            newUserType[e.target.name] = e.target.value;
            setUserType(newUserType)
  }

  const openModal = () => {
    setModalOpen(true);
  }
const goToAccount = () => {
  path('/login',{state:userType})
}

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:'500px',
      height:"200px",
      padding:'40px',
      borderRadius:"5px"
    },
  };
  
  
    return (
        <section class="topBar">
        <nav
          className="navbar navbar navbar-expand-lg navbar-light bg-transparent">
          <div class="container-fluid">
            <a className="logo navbar-brand text-light" onMouseOver={() => setLogo(!logo)} onMouseOut={() => setLogo(!logo)} >{logo ? 'Disorder Eradication learning System' : "DELS"}</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="navbarSupportedContent collapse navbar-collapse">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a onClick={()=>path('/')} class="nav-link active"> Home</a >
                </li>
                <li class="nav-item">
                  <a class="nav-link">Explore</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link">About Us</a>
                </li>
                <li class="nav-item">
                  <a onClick={openModal} class="nav-link" >Account</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
        <Modal
        isOpen={modalOpen}
        style={customStyles}
      >
        <h2 className="text-center">Select The User Type</h2>
        <form>
          <label for="cars" class="form-control">
          <input type="radio" onChange={userInputHandle} name="option" value="generalUser" />Viewers
          <input type="radio" onChange={userInputHandle} name="option" value="contentCreator" />Content Creator
</label>
        </form>
        <button onClick={goToAccount} style={{transform:'translate(130px,20px)',padding:"5px 20px",background:"black",color:"white"}} className='primary-btn'>Create Account</button>
      </Modal>
        </div>
     
      </section>
    );
};

export default Header;
