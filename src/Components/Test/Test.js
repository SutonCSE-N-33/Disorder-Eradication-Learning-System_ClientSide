import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import {tus} from 'tus-js-client';
const tus = require("tus-js-client");

const accessToken = 'e11834c02aa691f03eb967d09399d106';

const headerDelete = {
  Accept: 'application/vnd.vimeo.*+json;version=3.4',
  Authorization: `bearer ${accessToken}`,
  'Content-Type': 'application/x-www-form-urlencode'
};

const headerPatch = {
  'Tus-Resumable': '1.0.0',
  'Upload-Offset': 0,
  'Content-Type': 'application/offset+octet-stream',
  Accept: 'application/vnd.vimeo.*+json;version=3.4'
};

const headerPost = {
  Accept: 'application/vnd.vimeo.*+json;version=3.4',
  Authorization: `bearer ${accessToken}`,
  'Content-Type': 'application/json'
};
const Test = () => {
  const [videoUrl, setVideoUrl] = useState('');

  const handleChange = async eventObject => {
    // Get the selected file from the input element
    const file = eventObject.target.files[0];
    const fileName = file.name;
    const fileSize = file.size.toString();
    console.log(file, fileName, fileSize);

    const response = await axios({
      method: 'post',
      url: `Access-Control-Allow-Origin:https://api.vimeo.com/user176127151/videos`,
      headers: headerPost,
      data: {
        upload: {
          approach: 'tus',
          size: fileSize
        }
      }
    });

    console.log(response);

    // Create a new tus upload
    const upload = new tus.Upload(file, {
    
      endPoint: 'Access-Control-Allow-Origin:https://api.vimeo.com/user176127151/videos',
      uploadUrl: response.data.upload.upload_link,
      retryDelays: [0, 3000, 5000, 10000, 20000],
      metadata: {
        filename: file.name,
        filetype: file.type
      },
      headers: {},
      onError: function(error) {
        console.log('Failed because: ' + error);
      },
      onProgress: function(bytesUploaded, bytesTotal) {
        let percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        console.log(bytesUploaded, bytesTotal, percentage + '%');
      },
      onSuccess: function() {
        console.log('Download %s from %s', upload.file.name, upload.url);
        setVideoUrl(upload.url);
      }
    });

    

    // Start the upload
  upload.start();
   
  };
     
    
      return (
        <div >
        <div> Vimeo upload test</div>
        <input onChange={handleChange} type='file' />
        <a href={videoUrl}>Video link</a>
    
        </div>
      );
};

export default Test;