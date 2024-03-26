import "./styles/score-board.css";
const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard({ correctCount, incorrectCount }) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.slice(correctCount + incorrectCount).map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
