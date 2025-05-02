const Result = ({ personality }) => {
    return (
      <div>
        <h2 className="result-title">Your Personality Type</h2>
        <p className="result-text">{personality}</p>
      </div>
    );
  };
  
  export default Result;
  