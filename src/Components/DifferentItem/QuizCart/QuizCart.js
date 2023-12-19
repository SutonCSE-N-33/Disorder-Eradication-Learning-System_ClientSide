import React from 'react';
import './QuizCart.css';
const QuizCart = ({data}) => {
    
    return (
        <div class="card">
        <h5 class="card-header">{data.question}<span id="quizSubmit"
                class="badge" type="submit">Submit</span></h5>

        <div class="card-body">
        <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""
                            id="flexCheckDefault" />
                        <label class="form-check-label text-light"
                            for="flexCheckDefault">
                            {data.option1}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""
                            id="flexCheckDefault" />
                        <label class="form-check-label text-light"
                            for="flexCheckDefault">
                            {data.option2}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""
                            id="flexCheckDefault" />
                        <label class="form-check-label text-light"
                            for="flexCheckDefault">
                            {data.option3}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""
                            id="flexCheckDefault" />
                        <label class="form-check-label text-light"
                            for="flexCheckDefault">
                            {data.option4}
                        </label>
                    </div>
                    </div>
            </div>
    );
};

export default QuizCart;