const Question = ({ question, onAnswer }) => {
    return (
      <div>
        <h2 className="question-text">{question.text}</h2>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>
    );
  };
  
  export default Question;
  