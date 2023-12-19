import React, { useEffect, useState } from 'react';
import PlaylistCart from '../PlaylistCart/PlaylistCart';
import './PlayList.css';
const PlayList = ({item,hitVideo}) => {

    const [videos,setVideos] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/getVideo/'+item)
        .then(data => data.json())
        .then(res => {
            setVideos(res);
        })
    },[item])
    
    return (
        <div id="playlist" class="playlist">
                                     <div class="card">
                                            <h5 class="card-header">Computer Modeling & Simulation</h5>
                                            <div class="card-body">
                                                <div class="playlistVideoBox">
                                                    <div class="v_item">
                                                        <div class="row">
                                                            {
                                                                videos.map((video)=> <PlaylistCart video={video} hitVideo={hitVideo}></PlaylistCart>)
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                       
                                            </div>
                                        </div>

                                    </div>
    );
};

export default PlayList;