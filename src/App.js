import React, { Component } from "react";
import CookieConsent from "react-cookie-consent";
import "react-skeleton-css/styles/skeleton.2.0.4.css";

import Header from "./Header";
import Project from "./Project";
import "./styles/App.css";

import test from "./content/test.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <hr />
          <Project content={test} />
          <hr />
          <Project content={test} inverse />
          <hr />
          <Project content={test} />
          <hr />
          <Project content={test} inverse />
        </div>
        <CookieConsent
          location="bottom"
          buttonText="Got it!"
          contentStyle={{ margin: 0 }}
          buttonStyle={{
            margin: "0 0.5rem",
            padding: "0 8px",
            borderRadius: "8px",
            background: "none",
            color: "white"
          }}
          expires={150}
        >
          This website uses Google Analytics to track usage
        </CookieConsent>
      </div>
    );
  }
}

export default App;
