import { Component } from "react";
import { Images } from "../../assets/Images";

const initialFishes = [
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

export class ClassGameBoard extends Component {
  state = {
    fishGuess: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { fishGuess } = this.state;
    const { currentFishIndex } = this.props;
    const nextFishToName = initialFishes[currentFishIndex];

    if (fishGuess === nextFishToName.name) {
      this.props.onCorrectGuess();
    } else {
      this.props.onIncorrectGuess();
    }

    this.setState({
      fishGuess: "",
    });
  };

  render() {
    const { currentFishIndex } = this.props;
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
