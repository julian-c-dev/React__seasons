import React from "react";
import ReactDOM from "react-dom";
//import SeasonDisplay from "./seasonDisplay";

class App extends React.Component {
  // Estate within the Constructor Method
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // ! we called setState to updated our state which leads to rerender our comp.
        this.setState({
          lat: position.coords.latitude,
        });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
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
