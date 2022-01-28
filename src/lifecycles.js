// ! Life Cycles

import React from "react";
import ReactDOM from "react-dom";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }
  // ! Life Cycles => btwn constructor and render
  componentDidMount() {
    console.log("My component was rendered to the screen");
  }

  componentDidUpdate() {
    console.log("My component was just updated and it rerendered");
  }

  componentWillUnmount() {
    console.log("My component was just removed");
  }

  render() {
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<Example />, document.querySelector("#example"));
