import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Render(props) {
  return <div>{props.component}</div>;
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 0,
      maxProgressValue: 200
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  increase() {
    if (this.state.progressValue < this.state.maxProgressValue) {
      this.setState(state => ({ progressValue: state.progressValue + 1 }));
    } else {
      throw new Error("Progress Value is greater than 200");
      return;
    }
  }
  decrease() {
    if (this.state.progressValue > 0) {
      this.setState(state => ({ progressValue: state.progressValue - 1 }));
    } else {
      throw new Error("Progress Value is less than 0");
      return;
    }
  }
  render() {
    return (
      <div>
        <h1>The React Progress Bar Example</h1>
        <hr />
        <div className="progress-bar-form">
          <button onClick={this.decrease}>-</button>
          <progress
            id="progress-bar"
            value={this.state.progressValue}
            max={this.state.maxProgressValue}
          >
            0 out of 200
          </progress>
          <button onClick={this.increase}>+</button>
          <p>
            {this.state.progressValue} out of {this.state.maxProgressValue}{" "}
            tasks complete
          </p>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Render component={<App />} />, rootElement);
