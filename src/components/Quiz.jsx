import { useState } from "react";
import questions from "../data/questions";
import personalities from "../data/personalities";
import Question from "./Question";
import Result from "./Result";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (value) => {
    const updated = [...answers, value];
    setAnswers(updated);
    setCurrent(current + 1);
  };

  const restartQuiz = () => {
    setAnswers([]);
    setCurrent(0);
  };

  if (answers.length === questions.length) {
    const key = answers.join("");
    const personality = personalities[key] || "Unknown Personality";
    return (
      <div>
        <Result personality={personality} />
        <button className="restart-button" onClick={restartQuiz}>
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div>
      <Question question={questions[current]} onAnswer={handleAnswer} />
      <p className="progress">
        Question {current + 1} of {questions.length}
      </p>
    </div>
  );
};

export default Quiz;

