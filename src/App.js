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

import duunitinImg from "./static/duunitin.jpg";
import kmImg from "./static/kasvunmahdollistajat.png";
import portfolioImg from "./static/portfolio.png";
import turbocleanImg from "./static/turboclean.png";
import fridgepiImg from "./static/fridgePi.png";
import bikeVisuImg from "./static/bike-visu.png";
import background from "./static/background.jpg";

import duunitinThumb from "./static/thumbnails/duunitin.jpg";
import kmThumb from "./static/thumbnails/kasvunmahdollistajat.png";
import portfolioThumb from "./static/thumbnails/portfolio.png";
import turbocleanThumb from "./static/thumbnails/turboclean.png";
import fridgePiThumb from "./static/thumbnails/fridgePi.png";
import bikeVisuThumb from "./static/thumbnails/bike-visu.png";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <Header />
          <hr />
          <div id="projects" />
          <Project
            content={duunitin}
            img={duunitinImg}
            thumbnail={duunitinThumb}
          />
          <hr />
          <Project
            content={kasvunmahdollistajat}
            inverse
            img={kmImg}
            thumbnail={kmThumb}
          />
          <hr />
          <Project
            content={portfolio}
            img={portfolioImg}
            thumbnail={portfolioThumb}
          />
          <hr />
          <Project
            content={turboclean}
            inverse
            img={turbocleanImg}
            thumbnail={turbocleanThumb}
          />
          <hr />
          <Project
            content={fridgepi}
            img={fridgepiImg}
            thumbnail={fridgePiThumb}
          />
          <hr />
          <Project
            content={bikevisu}
            inverse
            img={bikeVisuImg}
            thumbnail={bikeVisuThumb}
          />
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
