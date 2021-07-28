import React from "react";
import "./App.scss";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  h1Style = {
    display: "inline-block",
    color: "teal",
    border: "1px solid teal",
    padding: ".3em .5em"
  };

  render() {
    return (
      <div className="react-app">
        <h1 style={this.h1Style}>React App</h1>
      </div>
    );
  }
}
export default App;
