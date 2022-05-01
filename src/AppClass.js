import { Component, memo } from "react";
import "./App.css";
import ComA from "./components/ComA";
import ComE from "./components/ComE";

const ComB = () => <p>ComB</p>;
const ComD = memo(() => <p>ComD</p>);

class App extends Component {
  state = {
    valBool: false,
  };

  ComC = () => <p>ComC</p>;
  ComF = memo(() => {
    return <p>ComF</p>;
  });

  renderComponentG = () => {
    console.log("ComG");
    return <p>ComG</p>;
  };

  render() {
    const { valBool } = this.state;
    return (
      <div className="App">
        <h1>HOME</h1>
        <ComA />
        <ComB />
        <this.ComC />
        <ComD />
        <ComE />
        <this.ComF />
        {this.renderComponentG()}
        <button 
          onClick={() => this.setState({ valBool: !valBool })}>
          Set Val Bool
        </button>
      </div>
    );
  }
}

export default App;
