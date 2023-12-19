import React, { useState } from 'react';
import './VideoUpload.css';
import uploadImg from '../../../assets/icons/uploadFile3.gif';
const VideoUpload = ({handleVideoSubmit,handleVideoData,handleVideo}) => {
  


    return (
        <div className="upload">
                            <div className="row">
                                <div className="col-3">
                                    <div className="card" style={{width:"100%"}}>
                                        <img src={uploadImg} className="card-img-top" alt="..." />
                                        <div className="card-body text-center">
                                            <h4 className="text-start">Upload your video and Show your skills</h4>
                                            <p className="card-text text-start">You can upload your content from here</p>
                                            <input type="file" id="uploadfile" name="myVideo" onChange={handleVideo} />
                                            <label for="uploadfile" className="uploadBtn mt-3">Upload</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="videoText">
                                        <div className="textForm">
                                            <form className="row">
                                                <div className="col-12">
                                                  <label for="inputEmail4" className="form-label">Title</label>
                                                  <input type="text" name='title' onBlur={handleVideoData} className="form-control" id="inputEmail4" />
                                                </div>
                                                <div className="col-12">
                                                  <label for="inputAddress" className="form-label">Description</label>
                                                  <div className="form-floating">
                                                    <textarea className="form-control" name="description" onBlur={handleVideoData} id="floatingTextareaVideo"></textarea>
                                                  </div>
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputEmail4"  className="form-label">Playlist Name</label>
                                                    <input type="text" name="playlist" onBlur={handleVideoData} className="form-control" id="inputEmail4" />
                                                  </div>
                                                <div className="col-md-6">
                                                  <label for="inputCity" className="form-label">Select Category :</label><br />
                                                  <select name="category" onBlur={handleVideoData} id="">
                                                     <option value="Be a Home Doctor">Be a Home Doctor</option>
                                                     <option value="Basic first aid kit">Basic first aid kit</option>
                                                     <option value="Be A Programmer">Be A Programmer</option>
                                                     <option value="Funny Story">Funny Story</option>
                                                     <option value="Sexual Health">Sexual Health</option>
                                                     <option value="Navigating">Navigating</option>
                                                     <option value="Sexual Health">Sexual Health</option>
                                                     <option value="Science Box">Science Box</option>
                                                     <option value="Herbal Medico">Herbal Medico</option>
                                                  </select>
                                                </div>
  
                                                <div className="col-12 mt-3">
                                                  <button type="submit" onClick={handleVideoSubmit} className="btn d-block ms-auto">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
};

export default VideoUpload;