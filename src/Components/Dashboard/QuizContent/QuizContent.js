import React, { useState } from 'react';

const QuizContent = ({parsingToQuiz}) => {

  const [quizData,setQuizData] = useState({
    question:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    answer:"",
  })

  

  const handleData = e =>{
              const newData = {...quizData};
              newData[e.target.name] = e.target.value;
              setQuizData(newData);
  }

  
 
   let handleSubmitData;
  if(parsingToQuiz !== ''){
     handleSubmitData = e =>{
      e.preventDefault();
      quizData.title = parsingToQuiz;
      fetch("http://localhost:5000/addQuiz",
  {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(quizData)
  })
  .then(function(res){ console.log(res) })
    }
  }else{
    alert("Please Upload Your Video");
  }

  
  
    return (
        <div class="textContent same">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="textInput scroll">
                        <form class="row">
                            <div class="col-12">
                            <h3 className='text-center text-white'>CreateQuiz On {parsingToQuiz}</h3>
                              <label for="inputEmail4" class="form-label">Question</label>
                              <input type="text" name="question" onBlur={handleData}  class="form-control" id="inputEmail4" />
                            </div>
                        
                            
                            <div class="col-md-6">
                              <label for="inputCity" class="form-label">Option-1</label>
                              <input type="text" name="option1" onBlur={handleData} class="form-control" id="inputCity" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputState" class="form-label">Option-2</label>
                                <input type="text" name="option2" onBlur={handleData} class="form-control" id="inputCity" />
                            </div>

                            <div class="col-md-6">
                              <label for="inputCity" class="form-label">Option-3</label>
                              <input type="text" name="option3" onBlur={handleData} class="form-control" id="inputCity" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputState" class="form-label">Option-4</label>
                                <input type="text" name="option4" onBlur={handleData} class="form-control" id="inputCity" />
                            </div>

                            <div class="col-12">
                              <label for="inputEmail4" class="form-label">Answer</label>
                              <input type="text" name="answer" onBlur={handleData} class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-12 mt-3">
                              <button type="submit" onClick={handleSubmitData} class="btn d-block ms-auto">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
    );
};

export default QuizContent;