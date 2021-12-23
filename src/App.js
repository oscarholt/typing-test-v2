import React, { Component } from "react";
import Preview from "./Preview.js";
import Speed from "./Speed.js";

const initialState = {
  text: "test",
  userInput: "",
};

class App extends Component {
  state = initialState;

  onRestart = () => {
    this.setState(initialState);
  };

  onUserInputChange = (e) => {
    const v = e.target.value;
    this.setState({
      userInput: v,
    });
  };

  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Preview
              text={this.state.text}
              userInput={this.state.userInput}
            ></Preview>
            <textarea
              value={this.state.userInput}
              onChange={this.onUserInputChange}
              className="form-control mb-3"
              placeholder="Start typing..."
            ></textarea>
            <Speed></Speed>
            <div className="text-right">
              <button className="btn btn-light" onClick={this.onRestart}>
                Restart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
