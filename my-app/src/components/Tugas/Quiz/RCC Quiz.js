import React, { Component } from "react";

class RCCQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teks: "Saat ini sedang berlangsung Quis Ke 2",
    };
  }

  render() {
    return <div>{this.state.teks}</div>;
  }
}

export default RCCQuiz;
