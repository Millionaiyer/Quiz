import React from 'react';
import { useState } from 'react';
const questions = [
  {
    prompt: 'what color is the sky ?',
    correctAnswer: 'Blue',
    answers: ['Blue', 'Green', 'Yellow', 'Red'],
  },

  {
    prompt: 'what day is it today ?',
    correctAnswer: 'Wednesday',
    answers: ['monday', 'tuesday', 'Wednesday', 'friday'],
  },
  {
    prompt: 'what month are we in ?',
    correctAnswer: 'December',
    answers: ['March', 'December', 'April', 'May'],
  },
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const isGameOver = currentQuestionIndex >= questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  const Quiz = () => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore((score) => score + 1);
          }
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }}
      >
        <h1>{currentQuestion.prompt}</h1>
        <div className="flex flex-col justifoy-center gap-6 my-4 ">
          {currentQuestion.answers.map((answer, index) => {
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="answer"
                  id={index}
                  onChange={() => setSelectedAnswer(answer)}
                  checked={answer === selectedAnswer}
                ></input>
                {answer}
              </label>
            );
          })}
          <button> submit</button>
        </div>
      </form>
    );
  };

  const ScoreScreen = () => {
    const numberOfWrongAnswers = questions.length - score;

    return (
      <>
        Your Score Is {score}, You Got {numberOfWrongAnswers} Questions Wrong{' '}
      </>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {isGameOver ? <ScoreScreen /> : <Quiz />}
    </div>
  );
};

export default App;
