import React, { useEffect, useState } from 'react';
import HerbalCart from '../HerbalCart/HerbalCart';

const Herbal = () => {
    const [herbalData,setHerbalData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/getHerbal')
    .then(res => res.json())
    .then(data => {
      setHerbalData(data)
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
                      herbalData.map(data => <HerbalCart data={data}></HerbalCart>)
                  }
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Herbal;