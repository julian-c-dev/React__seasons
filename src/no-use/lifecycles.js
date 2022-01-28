import React from "react";
import ReactDOM from "react-dom";

class Example extends React.Component {
  // ^ state within the Constructor Method
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }

  // ^ this way is easy and shame than using constructor method:
  // ^ state = { lat: null, errorMessage: "" };

  // ! Life Cycles => btwn constructor and render

  //* this method is called JUST ONCE, after our comp is render => execute block inside and then rerender again.
  componentDidMount() {
    console.log("My component was rendered to the screen");
    // its recomended to centralize all our data loading stuff (Such as API geolocation)
    // into the componentDidMount() in order to have more clear code.
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //* its called EVERY SINGLE TIME that our comp. is UPDATED.
  // its good place to do more data-loadin when state/pros change
  componentDidUpdate() {
    console.log("My component was just updated and it rerendered");
  }

  //* its good place to do cleanup (specially for non-React stuff)
  componentWillUnmount() {
    console.log("My component was just removed");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude:{this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<Example />, document.querySelector("#example"));
