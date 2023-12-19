import React, { useEffect, useState } from 'react';
import './DifferentItem.css';
import Header from '../Home/Header/Header';
import sampleVideo from '../../assets/Video/v.mp4';
import UtilitiesMenu from './UtilitiesMenu/UtilitiesMenu';
import CommentBox from './CommentBox/CommentBox';
import PlayList from './PlayList/PlayList';
import Quiz from './Quiz/Quiz';
import { useParams } from 'react-router-dom';
const DifferentItem = () => {
    const {item} = useParams();
   
    const [category,setCategory] = useState('commentBox');
   
     const [sampleVideos,setSampleVideos] = useState(sampleVideo)
     const hitVideo = (openVideo) =>{
           console.log(openVideo)
     }
     

    const showUtilities = (utilities) =>{
                   setCategory(utilities)
    }
    let selectCategory;
      if(category === 'commentBox'){
       selectCategory = <CommentBox></CommentBox>
    }else if(category === 'playList'){
        selectCategory = <PlayList item={item} hitVideo={hitVideo}></PlayList>
    }else if(category === 'quiz'){
        selectCategory = <Quiz></Quiz>
    }
    return (
        <div style={{backgroundColor:"#282c34"}}>
            <Header></Header>
            <section id="frontBox">
             <div id="watchBox" class="watchBox">
                <div class="row">
                <div class="col-7">
                <div class="video-container">
                    <video class="videoStream" controls="play">
                        <source src={sampleVideo} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className="col-md-5">
                <div className="otherUtilities">
                          <UtilitiesMenu showUtilities={showUtilities}></UtilitiesMenu>
                          <div className="utilitiesList">
                              <div className="allUtilities bg-transparent">
                                    {
                                       selectCategory
                                    }
                              </div>
                          </div>
                </div>
            </div>
            </div>
            </div>
             </section>
        </div>
    );
};

export default DifferentItem;