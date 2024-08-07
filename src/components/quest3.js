import React, { useState } from 'react';
import test3 from './test3.json';
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
                Your overall <b>anger score</b> is quite high. You seem to get angry much more often than the average individual does.
. Whatever the case, learning to control your anger would likely prove beneficial.
Anger is a firecracker of an emotion, and can have serious repercussions on your health and relationships.
If you want you can try our solutions see if it could do some help You can try some of these exercise for 21 days since, it would take 21 days habit for changing you present self.
<br/>Task Bar:<br/>-
 1. Meditation for (20 mins).<br/>
 2. Identify triggers. And avoid such people and things.<br/>
 3. Daily activities that do not give you much stress<br/>
 4. 10 count method.<br/>
 5. Try to differentiate between ego and personal points and prioritize your anger<br/>
 6. Laughter therapy<br/>
7. Don’t talk until necessary.<br/>
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
            Your overall <b>anger score</b> appears to fall in the "normal" range. This means that you get angry in some situations but aren't the type to blow up all the time.
You realize that sometimes, it's just not worth the headache. This is generally a very healthy approach, as suppressing your anger is harmful to your health and your relationships
<br/>Task Bar:-<br/>
 1. Meditation for (20 mins).<br/>
 2. Identify triggers. And avoid such people and things.<br/>
 3. Daily activities that do not give you much stress<br/>
 4. Try to differentiate between ego and personal points and prioritize your anger<br/>
5. Don’t talk until necessary.        </p></div>
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
            Your overall <b>anger score</b> is very low. This means that you are highly skilled at coping with potentially angering situations.
There is also the possibility, however, that you are denying your real feelings of anger.
Remember, it's ok to feel angry sometimes, as long as you express it in a healthy way.
<br/>Task Bar:-<br/>
 1. Meditation for (20 mins).<br/>
 2. Identify triggers. And avoid such people and things.<br/>
 3. Try to differentiate between ego and personal points and prioritize your anger
     </p>
                </div>
            
           </div>

        ); 
    }
}

const Quest3 = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [showResult, setShowResult] = useState(false);

  const { questions } = test3;
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

export default Quest3;
