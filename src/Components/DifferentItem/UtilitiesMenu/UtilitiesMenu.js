import React from 'react';
import './UtilitiesMenu.css'
const UtilitiesMenu = ({showUtilities}) => {
    return (
        <div class="utilitiesMenu">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a id="d_c_Btn" onClick={() => showUtilities('commentBox')} class="nav-link active" aria-current="page" href="#">D/C</a>
            </li>
            <li class="nav-item">
                <a id="playlistBtn" onClick={() => showUtilities('playList')} class="nav-link">Playlist</a>
            </li>
            <li class="nav-item">
                <a id="quizBtn" onClick={() => showUtilities('quiz')} class="nav-link">Quiz</a>
            </li>
        </ul>
    </div>
    );
};

export default UtilitiesMenu;