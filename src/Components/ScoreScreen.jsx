const ScoreScreen = () => {
  const [score, setScore] = useState(0);
  const numberOfWrongAnswers = questions.length - score;

  return (
    <>
      Your Score Is {score}, You Got {numberOfWrongAnswers} Questions Wrong{' '}
    </>
  );
};

export default ScoreScreen;
