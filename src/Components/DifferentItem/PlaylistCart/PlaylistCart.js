import React, { useEffect, useState } from 'react';
import './PlaylistCart.css';
const PlaylistCart = ({video,hitVideo}) => {
    const [openCommentBox,setOpenCommentBox] = useState(false);
    const [commentData,setCommentData] = useState({});
    
   
    const handleComment = e =>{
        setCommentData({
            description:e.target.value
        })
    }

    const submitData = ()=>{
        commentData.videoId = video.id;
        fetch('http://localhost:5000/comment',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify(commentData)
        })
    }
 
    
    return (
        <div>
        <div class="col-3">
        <video onClick={()=>hitVideo("hello")} preload="auto" controls >
    <source src= {video.url} />
</video>
        
    </div>
    <div class="col-9">
        <div class="v_item_text">
            <h5>{video.title}</h5>
            <p>
                <span>L: 5:20</span>
                <a href="">{video.playlistName}</a>
            </p>
            <i id="pv-Satting"
                class="fa-solid fa-ellipsis-vertical"></i>
            <span id="pv-Serial">1</span>
        </div>
    </div>
    <div className="commentBox">
       <h4 onClick={()=>setOpenCommentBox(!openCommentBox)}>Comment Box Here</h4>
      
       {
           openCommentBox && <div><textarea name="comment" onBlur={handleComment} ></textarea><br/> <button onClick={submitData}>Submit</button></div>
       }
       
      
    </div>
        </div>
    );
};

export default PlaylistCart;