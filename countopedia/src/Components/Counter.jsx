import React from "react";
import attack from "../Images/attack.png";
import defend from "../Images/defend.png";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      lastPlay: "",
      gameStatus: "",
    };
  }

  handleAttack = () => {
    this.setState((prevCount) => {
      let newCount = prevCount.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
        gameStatus: newCount > 10 ? "You Win!" : prevCount.gameStatus,
        lastPlay: "Attack",
      };
    });
  };

  handleDefence = () => {
    this.setState((prevCount) => {
      let newCount = prevCount.count - Math.round(Math.random() * 10);

      return {
        count: newCount,
        gameStatus: newCount < -10 ? "You lost!!" : prevCount.gameStatus,
        lastPlay: "Defence",
      };
    });
  };

  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());

    if (playMode == 0) {
      this.handleAttack();
    } else {
      this.handleDefence();
    }
  };

  handleReset = () => {
    this.setState(() => {
      return {
        count: 0,
        gameStatus:"",
        lastPlay:"",
      };
    });
  };

  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game Score : {this.state.count}</h1>
        <p> YOu win at +10 points and lose at -10 points!</p>
        <p> Last Play: {this.state.lastPlay}</p>
        <h3> Game Status: {this.state.gameStatus}</h3>
        <div className="row">
          <div className="col-6 col-md-3 offset-md-3">
            <img
              style={{
                width: "100%",
                cursor: "pointer",
                border: "1px solid green",
              }}
              className="p-4 rounded"
              src={attack}
              onClick={this.handleAttack}
            />
          </div>
          <div className="col-6 col-md-3 ">
            <img
              style={{
                width: "100%",
                cursor: "pointer",
                border: "1px solid red",
              }}
              className="p-4 rounded"
              src={defend}
              onClick={this.handleDefence}
            />
          </div>
          <div className="col-12 col-md-4 offset-md-4">
            <button
              className="btn btn-secondary w-100 mt-2"
              onClick={this.handleRandomPlay}
            >
              Random Play
            </button>
            <br />
            <button
              className="btn btn-warning w-100 mt-2"
              style={{ width: "200px" }}
              onClick={this.handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
