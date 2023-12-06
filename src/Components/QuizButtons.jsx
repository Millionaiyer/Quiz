import React from 'react';

const QuizButtons = ({
  onSubmit,
  onBack,
  submitButtonName,
  backButtonName,
}) => {
  return (
    <div className="flex flex-col justify-center gap-6 my-4">
      <button onClick={onSubmit}>{submitButtonName}</button>
      <button onClick={onBack}>{backButtonName}</button>
    </div>
  );
};

export default QuizButtons;
