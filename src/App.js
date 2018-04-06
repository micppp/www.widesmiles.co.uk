import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <img src={logo} className="site-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
