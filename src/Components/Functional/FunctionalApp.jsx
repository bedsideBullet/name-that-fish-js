import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "../data/fishes";
import { useState } from "react";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const totalCount = correctCount + incorrectCount;
  const answersLeft = initialFishes.map((fish) => fish.name);
  const isGameOver = totalCount === initialFishes.length;
  return (
    <>
      {!isGameOver && (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={answersLeft}
          />

          <FunctionalGameBoard
            currentFishIndex={totalCount}
            setCorrectCount={setCorrectCount}
            setIncorrectCount={setIncorrectCount}
          />
        </>
      )}
      {isGameOver && (
        <FunctionalFinalScore
          correctCount={correctCount}
          incorrectCount={incorrectCount}
        />
      )}
    </>
  );
}
