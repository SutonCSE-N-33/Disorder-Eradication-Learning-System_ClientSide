import React from 'react';
import './BasicKnowledge.css'
import img1 from '../../../assets/images/bfk.jpg';
import img2 from '../../../assets/images/programmer.jpeg';
import img3 from '../../../assets/images/story.jpg';
import img4 from '../../../assets/images/pessure.jpg';
import img5 from '../../../assets/images/sexual-health.jpg';
import img6 from '../../../assets/images/navigating.png';
import img7 from '../../../assets/images/Tool-work.jpg';
import img8 from '../../../assets/images/electricians.jpg';
import img9 from '../../../assets/images/herbal.jpg';
import BasicKnowledgeCart from '../BasicKnowledgeCart/BasicKnowledgeCart';
const BasicKnowledge = () => {
    const basicKnowledgeInfo = [
        {
            id:1,
            title:"Basic first aid kit",
            img:img1
        },
        {
            id:2,
            title:"Be A Programmer",
            img:img2
        },
        {
            id:3,
            title:"Funny Story",
            img:img3
        },
        {
            id:4,
            title:"Be A Home Doctor",
            img:img4
        },
        {
            id:5,
            title:"Sexual Health",
            img:img5
        },
        {
            id:6,
            title:"Navigating",
            img:img6
        },
        {
            id:7,
            title:"Tool Work",
            img:img7
        },
        {
            id:8,
            title:"science Box",
            img:img8
        },
        {
            id:9,
            title:"Herbal Medico",
            img:img9
        },
    ]
    return (
        <section class="allVideosContainer">
        <div class="allVideoItems">
          <div class="row mx-auto">
               {
                   basicKnowledgeInfo.map(knowledge => <BasicKnowledgeCart key={knowledge.id} knowledge={knowledge}></BasicKnowledgeCart>)
               }
          </div>
        </div>
      </section>
   
    );
};

export default BasicKnowledge;