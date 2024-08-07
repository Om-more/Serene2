import React, { useState } from 'react';
import test4 from './test4.json';
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
                According to your results, you tend to <b>procrastinate</b>  in most, if not all, areas of your life.
When it comes to unpleasant tasks, your will do whatever you can (consciously or not) to avoid them.
This will likely become a serious problem if not addressed - or it may already be a serious issue in your life<br/>
Task Bar:-<br/>
 1. Find an interest a.k.a. ikigai technique<br/>
2. Set a goal.<br/>
3. Pomodoro technique..<br/>
 4. Set an alarm for every activity for a week.<br/>
 5. Avoid social media.<br/>
6. Talk to your close ones about yourself/ talk to yourself.<br/>
7. Don’t seek results just do the work..      </p></div>
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
Task Bar:-<br/>
 1. Find an interest a.k.a. ikigai technique<br/>
2. Set a goal.<br/>
3. Pomodoro technique..<br/>
 4. Set an alarm for every activity for a week.<br/>
 5. Avoid social media.    <br/>               </p></div>
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
            According to your results, you have a slight tendency to <b>procrastinate</b> .
If you are generally happy with the quality of your work and the results that you get, there is no need to change<br/>
Task Bar:-<br/>
1. Pomodoro technique..<br/>
 2. Set an alarm for every activity for a week.<br/>
 3. Avoid social media.<br/>        </p> </div>
           </div>

        ); 
    }
}

const Quest4 = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [showResult, setShowResult] = useState(false);

  const { questions } = test4;
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

export default Quest4;
