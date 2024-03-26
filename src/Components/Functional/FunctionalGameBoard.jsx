import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

export const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

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
