import React from 'react';
import './CommentBox.css';
const CommentBox = () => {
    return (
        <div id="d_c" class="description_comment">
        <div class="descriptionBox text-light">
            <span class="badge subscribe">Subscribe</span>
            <span class="badge bg-ldl">like <span
                    class="ldlicon fa-solid fa-thumbs-up"></span></span>
            <span class="badge bg-ldl">Dislike <span
                    class="ldlicon fa-solid fa-thumbs-down"></span></span>
            <h3>How to do gardening?</h3>
            <h6>This video is made by <span>Noortaz Razoana</span> </h6>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia
                earum
                iste beatae a numquam excepturi, eos quis enim quibusdam, mollitia
                commodi
                est ad aperiam eaque nulla sint itaque alias? Ipsam magni commodi
                officia.
            </p>
        </div>
        <div class="commentBox">
            <div class="card">
                <h5 class="card-header">
                    <img src="assets/images/g.jpg" alt="" />
                    <span>Noortaz Razoana</span>
                </h5>
                <div class="card-body">
                    <p class="card-text">Your contents are very informative. I learned a
                        lot from your content.</p>
                    <span class="badge bgBadge">View <span>9</span> Replies</span>
                    <span class="badge bgBadge">Reply</span>
                    <span class="ldlicon fa-solid fa-thumbs-down"></span>
                    <span class="ldlicon fa-solid fa-thumbs-up"></span>
                </div>
            </div>
        </div>
        <div class="commentBox">
            <div class="card">
                <h5 class="card-header">
                    <img src="assets/images/g.jpg" alt="" />
                    <span>Noortaz Razoana</span>
                </h5>
                <div class="card-body">
                    <p class="card-text">Your contents are very informative. I learned a
                        lot from your content.</p>
                    <span class="badge bgBadge">View <span>9</span> Replies</span>
                    <span class="badge bgBadge">Reply</span>
                    <span class="ldlicon fa-solid fa-thumbs-down"></span>
                    <span class="ldlicon fa-solid fa-thumbs-up"></span>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CommentBox;