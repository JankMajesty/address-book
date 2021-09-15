import React, { Component } from "react";
import { Users } from "./Users";
import { User } from "./User";
console.clear()

const URL = "https://randomuser.me/api?results=25"

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isHidden: true,
      buttonText: "Show Details"
    };
  }

  // handleClick = () => {
  //   let buttonText = this.state.buttonText == "Show Details" ? "Hide Details" : "Show Details"
  //   let status = this.state.isHidden === true ? false : true

  //   this.setState({
  //     isHidden: status,
  //     buttonText: buttonText
  //   })
  // }


  async componentDidMount() {
    let response = await fetch(URL);
    let json = await response.json();
    let { results } = json;
    
    this.setState({
      users: results
  });
}

componentDidUpdate() {
  console.log("Updated", this.state.users);
}

  render() {
    
    return (
      <div className="App">
        <Users people={this.state.users} isHidden={this.state.isHidden} />
      </div>

    );
  }
}