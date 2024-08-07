import React, { useState } from 'react';
import test1 from './test1.json';
import './test.css';
 // Adjust the path as necessary

const Solu1 = ({ result }) => {
    if(result.score >=13)
    {
        return (
            <div class="text-center">
                <div class="text-danger">
                    <h1>Be Careful, Your Mental Health seems critical</h1>
                </div>
                <div class="abc">
                    <p>Your answers suggest you are suffering from severe <b>depression</b>.
                        It is important that you schedule an appointment with your doctor or a mental health worker now. If you want you can try our solutions see if it could do some help You can try some of these exercise for 21 days since, it would take 21 days habit for changing you present self.</p>
                        <p><br/>
                        Task Bar:-<br/>
                            1. Hobby time.<br/>
                            2. Avoid social media.<br/>
                            3. Find and avoid triggers.<br/>
                            4. Contact to the person who you can speak about.<br/>
                            5. Listen music or watch any movies that have fun/ you like.<br/>
                            6. Breakdown tasks into daily activities<br/>
                            7. Have a complete sleep..
                        </p>
                </div>
                
               
           </div>

        );
    }
    else if(result.score <=12 && result.score>=6 )
    {
        return (
            <div class="text-center">
                <div class="text-warning">
                    <h1>Your mental health seems a bit unstable</h1>
                </div>
                <div class="xyz">
                <p>Your answers suggest you are suffering from moderate to severe <b>depression</b>.
                It doesn't necessarily mean you have depression but is important that you schedule an appointment with your doctor or a mental health worker.
                <br/>    Task Bar:-<br/>
                            1. Avoid social media.<br/>
                            2. Find and avoid triggers.<br/>
                            3. Contact to the person who you can speak about.<br/>
                            4. Listen music or watch any movies that have fun/ you like.
                </p>
                </div>
                
           </div>

        ); 
    }
    else {
        return (
            <div class="text-center">
                <div class="text-success">
                    <h1>Your mental health seems stable</h1>
                </div>
                <div class="pqr">
                <p>Your answers suggest you are suffering from minimal <b>depression</b>. Consider watchful waiting, and testing again normally within two weeks.
                Still if you don't feel quite right, we recommend you schedule an appointment with your doctor
                <br/>      Task Bar:-<br/>
                            1. Avoid social media.<br/>
                            2. Find and avoid triggers.<br/>
                            3. Contact to the person who you can speak about.
                </p>
                </div>
           </div>

        ); 
    }
}

const Quest1 = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [showResult, setShowResult] = useState(false);

  const { questions } = test1;
  const { question, choices } = questions[activeQuestion];

  const onClickNext = () => {
    if (selectedAnswerIndex !== null) {
      const selectedChoice = choices[selectedAnswerIndex];
      setResult((prev) => ({
        ...prev,
        score: prev.score + selectedChoice.points,
        correctAnswers: prev.correctAnswers + (selectedChoice.points > 0 ? 1 : 0),
        wrongAnswers: prev.wrongAnswers + (selectedChoice.points === 0 ? 1 : 0),
      }));
      setSelectedAnswerIndex(null);
      if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const onAnswerSelected = (index) => {
    setSelectedAnswerIndex(index);
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
            <span className="total-question">/{addLeadingZero(questions.length)}</span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((choice, index) => (
              <li
                onClick={() => onAnswerSelected(index)}
                key={choice.answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                {choice.answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button class="tbut" onClick={onClickNext} disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>Total Questions: <span>{questions.length}</span></p>
          <p>Total Score: <span>{result.score}</span></p>
          <Solu1 result={result} />
        </div>
      )}
    
    </div>
  );
};

export default Quest1;
