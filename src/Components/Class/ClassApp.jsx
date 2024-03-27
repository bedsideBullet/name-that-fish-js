import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../data/fishes";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  onCorrectGuess = () => {
    this.setState((prevState) => ({
      correctCount: prevState.correctCount + 1,
    }));
  };
  onIncorrectGuess = () => {
    this.setState((prevState) => ({
      incorrectCount: prevState.incorrectCount + 1,
    }));
  };
  render() {
    const { incorrectCount, correctCount } = this.state;
    const totalCount = correctCount + incorrectCount;
    const answersLeft = initialFishes.map((fish) => fish.name);
    return (
      <>
        {totalCount < initialFishes.length && (
          <>
            <ClassScoreBoard
              correctCount={correctCount}
              incorrectCount={incorrectCount}
              answersLeft={answersLeft}
            />

            <ClassGameBoard
              correctCount={correctCount}
              incorrectCount={incorrectCount}
              onCorrectGuess={this.onCorrectGuess}
              onIncorrectGuess={this.onIncorrectGuess}
            />
          </>
        )}

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
