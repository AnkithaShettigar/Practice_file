import React, { useEffect, useMemo, useState } from 'react';
import Template from './Template';
import Timer from './Timer';

const TestScreen = () => {
  const [questionsNum, setQuestionsNum] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('0');

  const data = [
    {
      id: 1,
      question:
        'Which of the following is used in Reactjs to increase performance?',
      answers: [
        {
          text: 'Virtual DOM',
          correct: true,
        },
        {
          text: 'Original DOM',
          correct: false,
        },
        {
          text: 'Both A and B',
          correct: false,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        'Identify the one which is used to pass data to components from outside',
      answers: [
        {
          text: 'Render with argument',
          correct: false,
        },
        {
          text: 'setState',
          correct: false,
        },
        {
          text: 'propsType',
          correct: false,
        },
        {
          text: 'props',
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: 'Choose the following language in which React.js written?',
      answers: [
        {
          text: 'python',
          correct: false,
        },
        {
          text: 'javascript',
          correct: true,
        },
        {
          text: 'Java',
          correct: false,
        },
        {
          text: 'PHP',
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question:
        'Which of the following port is the default where webpack-dev-server runs?',
      answers: [
        {
          text: '3000',
          correct: true,
        },
        {
          text: '3306',
          correct: false,
        },
        {
          text: '3030',
          correct: false,
        },
        {
          text: '4000',
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question:
        'Total ways of defining variables in ES6 is ,choose the correct answer?',
      answers: [
        {
          text: '1',
          correct: false,
        },
        {
          text: '2',
          correct: false,
        },
        {
          text: '3',
          correct: true,
        },
        {
          text: '4',
          correct: false,
        },
      ],
    },
  ];

  const marks = useMemo(
    () =>
      [
        { id: 1, marks: '5' },
        { id: 2, marks: '10' },
        { id: 3, marks: '15' },
        { id: 4, marks: '20' },
        { id: 5, marks: '25' },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionsNum > 1 &&
      setEarned(marks.find((item) => item.id === questionsNum - 1).marks);
  }, [marks, questionsNum]);
  return (
    <div className="home-container testscreen">
      <div className="main">
        {stop ? (
          <>
            <h1 className="endtext">your Score : {earned}</h1>
            <h3 className="thank">Thank you</h3>
          </>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionsNum={questionsNum} />
              </div>
            </div>
            <div className="bottom">
              <Template
                data={data}
                setStop={setStop}
                questionsNum={questionsNum}
                setQuestionsNum={setQuestionsNum}
              />
            </div>
          </>
        )}
      </div>
      <div className="marks">
        <ul className="list-mark">
          {marks.map((item) => (
            <li
              className={
                questionsNum === item.id ? 'marksItem active' : 'marksItem'
              }
            >
              <span className="marksNum">{item.id}</span>
              <span className="marksNumScore">{item.marks}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestScreen;
