import "./styles/game-board.css";
import { initialFishes } from "../data/fishes";
import { useState } from "react";

export function FunctionalGameBoard({
  setCorrectCount,
  setIncorrectCount,
  currentFishIndex,
}) {
  const [guess, setGuess] = useState("");
  const nextFishToName = initialFishes[currentFishIndex];

  const handleSubmit = (e) => {
    e.preventDefault();
    guess === nextFishToName.name
      ? setCorrectCount((prevCorrectCount) => prevCorrectCount + 1)
      : setIncorrectCount((prevIncorrectCount) => prevIncorrectCount + 1);
    setGuess("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
