import "./styles/score-board.css";

export function FunctionalScoreBoard({
  correctCount,
  incorrectCount,
  answersLeft,
}) {
  const fishLeft = answersLeft.slice(correctCount + incorrectCount);

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {fishLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
