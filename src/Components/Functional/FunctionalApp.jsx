import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "./FunctionalGameBoard";
import { useState } from "react";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const totalCount = correctCount + incorrectCount;

  return (
    <>
      <FunctionalScoreBoard
        correctCount={correctCount}
        incorrectCount={incorrectCount}
      />
      {totalCount < initialFishes.length && (
        <FunctionalGameBoard
          currentFishIndex={totalCount}
          setCorrectCount={setCorrectCount}
          setIncorrectCount={setIncorrectCount}
        />
      )}
      {totalCount === initialFishes.length && (
        <FunctionalFinalScore
          correctCount={correctCount}
          incorrectCount={incorrectCount}
        />
      )}
    </>
  );
}
