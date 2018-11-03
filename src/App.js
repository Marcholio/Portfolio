import React, { Component } from "react";
import "react-skeleton-css/styles/skeleton.2.0.4.css";

import Header from "./Header";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
