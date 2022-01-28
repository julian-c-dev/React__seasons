import React from "react";
import ReactDOM from "react-dom";
//import SeasonDisplay from "./seasonDisplay";

class App extends React.Component {
  // Estate within the Constructor Method
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // ! we called setState
        this.setState({
          lat: position.coords.latitude,
        });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  // ! Life Cycles
  componentDidMount() {
    console.log("My component was rendered to the screen");
  }

  componentDidUpdate() {
    console.log("My component was just updated and it rerendered");
  }

  componentWillUnmount() {
    console.log("My component was just removed");
  }

  // React says we have to define render!!
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

ReactDOM.render(<App />, document.querySelector("#root"));
