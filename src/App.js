import React, { Component } from "react";
import CookieConsent from "react-cookie-consent";
import "react-skeleton-css/styles/skeleton.2.0.4.css";

import Header from "./Header";
import Project from "./Project";
import "./styles/App.css";

import duunitin from "./content/duunitin.json";
import kasvunmahdollistajat from "./content/kasvunmahdollistajat.json";
import portfolio from "./content/portfolio.json";
import turboclean from "./content/turboclean.json";
import fridgepi from "./content/fridgepi.json";
import bikevisu from "./content/bike-visu.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <hr />
          <div id="projects" />
          <Project content={duunitin} />
          <hr />
          <Project content={kasvunmahdollistajat} inverse />
          <hr />
          <Project content={portfolio} />
          <hr />
          <Project content={turboclean} inverse />
          <hr />
          <Project content={fridgepi} />
          <hr />
          <Project content={bikevisu} />
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
