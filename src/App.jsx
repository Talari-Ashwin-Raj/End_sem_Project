import React from "react";
import Quiz from "./components/Quiz";
import "./App.css";

const App = () => {
  return (
    <div className="quiz-container">
      <h1 className="title">Personality Quiz</h1>
      <Quiz />
    </div>
  );
};

export default App;
