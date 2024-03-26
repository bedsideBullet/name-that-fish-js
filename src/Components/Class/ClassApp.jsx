import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../Functional/FunctionalGameBoard";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    currentFishIndex: 0,
  };

  onCorrectGuess = () => {
    this.setState((prevState) => ({
      correctCount: prevState.correctCount + 1,
      currentFishIndex: prevState.currentFishIndex + 1,
    }));
  };
  onIncorrectGuess = () => {
    this.setState((prevState) => ({
      incorrectCount: prevState.incorrectCount + 1,
      currentFishIndex: prevState.currentFishIndex + 1,
    }));
  };
  render() {
    const { incorrectCount, correctCount, currentFishIndex } = this.state;
    const totalCount = correctCount + incorrectCount;
    return (
      <>
        <>
          <ClassScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
          {totalCount < initialFishes.length && (
            <ClassGameBoard
              correctCount={correctCount}
              incorrectCount={incorrectCount}
              currentFishIndex={currentFishIndex}
              onCorrectGuess={this.onCorrectGuess}
              onIncorrectGuess={this.onIncorrectGuess}
            />
          )}
        </>
        {totalCount === initialFishes.length && (
          <ClassFinalScore
            totalCount={totalCount}
            correctCount={correctCount}
          />
        )}
      </>
    );
  }
}
