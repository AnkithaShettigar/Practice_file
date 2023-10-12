import React, { useEffect, useState } from 'react';

const Template = ({ data, setStop, questionsNum, setQuestionsNum }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAns, setSelectedAns] = useState(null);
  const [className, setClassName] = useState('answer');

  useEffect(() => {
    setQuestion(data[questionsNum - 1]);
  }, [data, questionsNum]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (ans) => {
    setSelectedAns(ans);
    setClassName('answer active');
    delay(3000, () =>
      setClassName(ans.correct ? 'answer correct' : 'answer wrong')
    );
    delay(6000, () => {
      if (ans.correct) {
        setQuestionsNum((prev) => prev + 1);
        setSelectedAns(null);
      } else {
        setStop(true);
      }
    });
  };

  return (
    <div className="content">
      <div className="questions">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((ans) => (
          <div
            className={selectedAns === ans ? className : 'answer'}
            onClick={() => handleClick(ans)}
          >
            {ans.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template;
