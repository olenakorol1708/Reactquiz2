import React from "react";
import "./index.scss";

const questions = [
  {
    title: " What can be inside the curly braces in JSX?",
    variants: ["valid JavaScript expression", "bug-free markup", "JSON file"],
    correct: 0,
  },
  {
    title: "React apps are made out of...",
    variants: ["special objects", "blocks of pictures", "components"],
    correct: 3,
  },
  {
    title: " What is React components?",
    variants: ["JavaScript functions", "JavaScript variables", "HTML tags"],
    correct: 0,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <svg className = 'result__aword'
        
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
      >
        <path
          fill="#0092E4"
          d="M20.87,17.25l-2.71-4.68A6.9,6.9,0,0,0,19,9.25a7,7,0,0,0-14,0,6.9,6.9,0,0,0,.84,3.32L3.13,17.25A1,1,0,0,0,4,18.75l2.87,0,1.46,2.46a1,1,0,0,0,.18.22,1,1,0,0,0,.69.28h.14a1,1,0,0,0,.73-.49L12,17.9l1.93,3.35a1,1,0,0,0,.73.48h.14a1,1,0,0,0,.7-.28.87.87,0,0,0,.17-.21l1.46-2.46,2.87,0a1,1,0,0,0,.87-.5A1,1,0,0,0,20.87,17.25ZM9.19,18.78,8.3,17.29a1,1,0,0,0-.85-.49l-1.73,0,1.43-2.48a7,7,0,0,0,3.57,1.84ZM12,14.25a5,5,0,1,1,5-5A5,5,0,0,1,12,14.25Zm4.55,2.55a1,1,0,0,0-.85.49l-.89,1.49-1.52-2.65a7.06,7.06,0,0,0,3.56-1.84l1.43,2.48Z"
        />
      </svg>
      <h2>
        You've gave {correct} correct aswers from {questions.length}
      </h2>
      <a href="/">
        <button>Try again</button>
      </a>
    </div>
  );
}
function Game({ question, onClickVariant, step }) {
  const percentage = Math.round((step / questions.length) * 100);
  console.log(percentage);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li key={text} onClick={() => onClickVariant(index)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  const onClickVariant = (index) => {
    if (index === question.correct) {
      setCorrect((prev) => prev + 1);
      console.log(setCorrect);
    }
    console.log(step, index);
    setStep(step + 1);
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game question={question} onClickVariant={onClickVariant} step={step} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
