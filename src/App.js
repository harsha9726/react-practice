import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: [
      {name: "John"},
      {name: "Doe"},
      {name: "Rock"}
    ],
    paragraph:'None'
  }
  paragraphChangeHandler = (event) => {
    this.setState(
      { username: [
        {name: event.target.value},
        {name: event.target.value},
        {name: event.target.value}
      ],
        paragraph: event.target.value }
    )
  }
  render() {
    return (
      <div className="App">
        <UserInput
          username={this.state.username[0].name}
          changed={this.paragraphChangeHandler}/>
        <UserOutput
          username={this.state.username[1].name}
          paragraph={this.state.paragraph}/>
        <UserOutput
          username={this.state.username[2].name}
          paragraph={this.state.paragraph}/>
      </div>
    );
  }
}

export default App;
