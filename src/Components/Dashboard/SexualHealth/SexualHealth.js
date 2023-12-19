import React, { useState } from 'react';
import './SexualHealth.css';
const SexualHealth = ({loggedInUser}) => {
  console.log(loggedInUser.randomUser)
  const [healthData,setHealthData] = useState({
    title:"",
    description:"",
    random:null
  })

  const handleData = e =>{
              const newData = {...healthData};
              newData[e.target.name] = e.target.value;
              setHealthData(newData)
  }
console.log(healthData)
  const handleSubmitData = e =>{
    
    healthData.random = loggedInUser.randomUser;
    e.preventDefault();
    fetch("http://localhost:5000/addSexualHealth",
{
    headers: {
      
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(healthData)
})
.then(res=>{ console.log(res) })
  }
    return (
        <div class="textContent same">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="textInput scroll">
                        <form class="row">
                            <div class="col-12">
                            <h1 className='text-center text-white'>Sexual health</h1>
                              <label for="inputEmail4" class="form-label">Title</label>
                              <input type="text" name="title" onBlur={handleData} class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-12">
                              <label for="inputAddress" class="form-label">Description</label>
                              <div class="form-floating">
                                <textarea name="description" class="form-control" onBlur={handleData} id="floatingTextarea" height="200px"></textarea>
                              </div>
                            </div>
                           
    
                            <div class="col-12 mt-3">
                              <button type="submit" onClick={handleSubmitData} class="btn d-block ms-auto">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
    );
};

export default SexualHealth;