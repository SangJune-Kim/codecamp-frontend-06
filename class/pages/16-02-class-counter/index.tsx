import { Component } from "react";

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: this.state.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기</button>
      </div>
    );
  }
}
