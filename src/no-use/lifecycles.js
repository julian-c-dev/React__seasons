// ! Life Cycles

import React from "react";
import ReactDOM from "react-dom";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }
  // ! Life Cycles => btwn constructor and render
  // this method is called JUST ONCE, after our comp is render => execute block inside and then rerender again.
  // its recomended to centralize all our data loading stuff (Such as API geolocation)
  // into the componentDidMount() in order to have more clear code.
  componentDidMount() {
    console.log("My component was rendered to the screen");
  }

  // Its called EVERY SINGLE TIME that our comp. is UPDATED.
  // its good place to do more data-loadin when state/pros change
  componentDidUpdate() {
    console.log("My component was just updated and it rerendered");
  }

  // its good place to do cleanup (specially for non-React stuff)
  componentWillUnmount() {
    console.log("My component was just removed");
  }

  render() {
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<Example />, document.querySelector("#example"));
