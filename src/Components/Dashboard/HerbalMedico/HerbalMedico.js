import React, { useState } from 'react';

const HerbalMedico = () => {
  const [herbalData,setHerbalData] = useState({
    title:"",
    description:""
  })

  

  const handleData = e =>{
              const newData = {...herbalData};
              newData[e.target.name] = e.target.value;
              setHerbalData(newData)
  }

  const handleSubmitData = e =>{
    e.preventDefault();
    fetch("http://localhost:5000/addHerbalData",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(herbalData)
})
.then(function(res){ console.log(res) })
  }
    return (
        <div class="textContent same">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="textInput scroll">
                        <form class="row">
                            <div class="col-12">
                            <h1 className='text-center text-white'>HerbalMedico</h1>
                              <label for="inputEmail4" class="form-label">Title</label>
                              <input type="text" onBlur={handleData} name="title" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-12">
                              <label for="inputAddress" class="form-label">Description</label>
                              <div class="form-floating">
                                <textarea onBlur={handleData} name="description" class="form-control" id="floatingTextarea"></textarea>
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

export default HerbalMedico;