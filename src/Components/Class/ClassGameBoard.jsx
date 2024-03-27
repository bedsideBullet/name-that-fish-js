import { Component } from "react";
import { initialFishes } from "../data/fishes";

export class ClassGameBoard extends Component {
  state = {
    fishGuess: "",
  };

  handleAnswer = (answer) => {
    const { correctCount, incorrectCount } = this.props;
    const currentFishIndex = correctCount + incorrectCount;
    const nextFishToName = initialFishes[currentFishIndex];

    if (answer === nextFishToName.name) {
      this.props.onCorrectGuess();
    } else {
      this.props.onIncorrectGuess();
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleAnswer(this.state.fishGuess);

    this.setState({
      fishGuess: "",
    });
  };

  render() {
    const { correctCount, incorrectCount } = this.props;
    const currentFishIndex = correctCount + incorrectCount;
    const nextFishToName = initialFishes[currentFishIndex];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            id="fish-guess"
            value={this.state.fishGuess}
            onChange={(e) => this.setState({ fishGuess: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
