import React, { useEffect, useState } from 'react';
import SexualHealthCart from '../SexualHealthCart/SexualHealthCart';
import './SexualHealthContent.css';
const SexualHealthContent = () => {

  const [healthData,setHealthData] = useState([]);
 console.log(healthData)
  useEffect(()=>{
    fetch('http://localhost:5000/getSexualHealth')
    .then(res => res.json())
    .then(data => {
      setHealthData(data)
    })
  },[])
    return (
        <section id="frontBox" style={{backgroundColor:"#282c34"}}>
        <div id="sx_ed_box" class="allbox">
          <div class="row">
            <div class="col-12">
              <div class="sx_ed scroll">
                <div
                  class="accordion"
                  id="accordionFlushExample"
                >
                  {
                      healthData.map(data => <SexualHealthCart data={data}></SexualHealthCart>)
                  }
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SexualHealthContent;