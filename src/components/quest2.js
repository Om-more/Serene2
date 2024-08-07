import React, { useState } from 'react';
import test2 from './test2.json';
import './test.css';

const Solu1 = ({ result }) => {
    if(result.score >=13)
    {
        return (
            <div class="text-center">
                <div class="text-danger">
                    <h1>Be Careful, Your Mental Health seems critical</h1>
                </div>
                <div class="abc">
                <p> 
                Your answers suggest a Strong indication that you are experiencing symptoms common among people with an <b>anxiety disorder</b>.
However, this quiz is no substitute for a proper diagnosis from a health care professional and we would encourage you to schedule an appointment with your doctor or other mental health professional now
If you want you can try our solutions see if it could do some help You can try some of these exercise for 21 days since, it would take 21 days habit for changing you present self.
<br/>Task Bar:-<br/>
 1. Meditation for (20 mins).<br/>
2. Hobby time.<br/>
 3. Identifying the factor that is fearing you.<br/>
 4. Doing at least one thing that makes you fear.<br/>
 5. Listen music or watch any movies that have fun/ you like.<br/>
6. Talk to your close ones about yourself/ talk to yourself.<br/>
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
                <p> 
            Your answers suggest a Mild indication that you have symptoms common among people with an <b>anxiety disorder</b>.
However, this quiz is no substitute for a proper diagnosis from a health care professional and we would encourage you to schedule an appointment with your doctor or other mental health professional now.
<br/>Task Bar:-<br/>
 1. Meditation for (20 mins).<br/>
 2. Identifying the factor that is fearing you.<br/>
 3. Doing at least one thing that makes you fear.<br/>
4. Talk to your close ones about yourself/ talk to yourself.<br/>
5. Have a complete sleep..   </p></div>
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
                <p> 
            Your answers suggest that there is Little or No indication that you have symptoms common among people with an <b>anxiety disorder</b>.
            However, this quiz is no substitute for a proper diagnosis from a health care professional and we would encourage you to schedule an appointment with your doctor or other mental health professional now
            <br/>  Task Bar:-<br/>

 1. Identifying the factor that is fearing you.<br/>
2. Talk to your close ones about yourself/ talk to yourself.
 </p></div>
           </div>

        ); 
    }
}

const Quest2 = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [showResult, setShowResult] = useState(false);

  const { questions } = test2;
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

export default Quest2;
