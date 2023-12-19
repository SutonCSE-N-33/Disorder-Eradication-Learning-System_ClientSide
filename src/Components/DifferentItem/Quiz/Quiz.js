import React, { useEffect, useState } from 'react';
import QuizCart from '../QuizCart/QuizCart';
import './Quiz.css';
const Quiz = () => {
    const [quizData,setQuizData] = useState([])
    useEffect(()=>{
                   fetch('http://localhost:5000/getQuiz')
                   .then(result => result.json())
                   .then(data => {
                            setQuizData(data)
                   })
    },[])
    return (
        <div id="quizBox" class="quizBox">
        <div class="question">
          
                         {
                              quizData.map(data => <QuizCart data={data}></QuizCart>)
                         }
                
        </div>
      
    </div>
    );
};

export default Quiz;