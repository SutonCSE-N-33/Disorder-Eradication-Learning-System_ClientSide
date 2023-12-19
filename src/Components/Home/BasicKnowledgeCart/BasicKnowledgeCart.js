import React from 'react';
import './BasicKnowledgeCart.css';
import {useNavigate} from 'react-router-dom';
const BasicKnowledgeCart = ({knowledge}) => {
  const navigate = useNavigate();
  const handleItem = () => {
    navigate('/basicKnowledge/'+knowledge.title)
  }
    return (
        <div class="col-3 mb-4" style={{cursor:'pointer'}} onClick={handleItem}>
              <div class="videoItem">
                <img src={knowledge.img} width="200px" alt="" />
                <div class="videoItemText">
                  <h5>{knowledge.title}</h5>
                  <h6>
                    <i class="vItemIcon fa-solid fa-heart"></i>
                    <span>5 Likes</span>
                  </h6>
                </div>
              </div>
            </div>
    );
};

export default BasicKnowledgeCart;