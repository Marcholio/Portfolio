import React, { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import ReactGA from "react-ga";
import { useCookies } from "react-cookie";
import "react-skeleton-css/styles/skeleton.2.0.4.css";

import Header from "./Header";
import Project from "./Project";
import "./styles/App.css";

import duunitin from "./content/duunitin.json";
import katsastustilastot from "./content/katsastustilastot.json";
import portfolio from "./content/portfolio.json";
import turboclean from "./content/turboclean.json";
import fridgepi from "./content/fridgepi.json";
import polttoainesaa from "./content/polttoainesaa.json";
import vueTodo from "./content/vuetodo.json";

import duunitinImg from "./static/duunitin.webp";
import katsastustilastotImg from "./static/katsastustilastot.png";
import portfolioImg from "./static/portfolio.webp";
import turbocleanImg from "./static/turboclean.webp";
import fridgepiImg from "./static/fridgePi.webp";
import polttoainesaaImg from "./static/polttoainesaa.webp";
import vueTodoImg from "./static/vuetodo.webp";
import background from "./static/background.webp";

import duunitinThumb from "./static/thumbnails/duunitin.jpg";
import katsastustilastotThumb from "./static/thumbnails/katsastustilastot.png";
import portfolioThumb from "./static/thumbnails/portfolio.png";
import turbocleanThumb from "./static/thumbnails/turboclean.png";
import fridgePiThumb from "./static/thumbnails/fridgePi.png";
import polttoainesaaThumb from "./static/thumbnails/polttoainesaa.png";
import vueTodoThumb from "./static/thumbnails/vuetodo.png";

const App = () => {
  const [cookies] = useCookies(["CookieConsent", "CookieConsent-legacy"]);
  const [consentGiven, setConsentGiven] = useState(
    cookies.CookieConsent || cookies["CookieConsent-legacy"]
  );

  useEffect(() => {
    if (consentGiven) {
      ReactGA.initialize("UA-72133544-1");
    }
  }, [consentGiven]);

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <Header />
        <div id="projects" />
        <Project content={vueTodo} img={vueTodoImg} thumbnail={vueTodoThumb} />
        <Project
          content={katsastustilastot}
          img={katsastustilastotImg}
          thumbnail={katsastustilastotThumb}
        />
        <Project
          content={duunitin}
          img={duunitinImg}
          thumbnail={duunitinThumb}
        />
        <Project
          content={portfolio}
          img={portfolioImg}
          thumbnail={portfolioThumb}
        />
        <Project
          content={turboclean}
          img={turbocleanImg}
          thumbnail={turbocleanThumb}
        />
        <Project
          content={fridgepi}
          img={fridgepiImg}
          thumbnail={fridgePiThumb}
        />
        <Project
          content={polttoainesaa}
          img={polttoainesaaImg}
          thumbnail={polttoainesaaThumb}
        />
      </div>
      <CookieConsent
        location="bottom"
        onAccept={() => setConsentGiven(true)}
        onDecline={() => setConsentGiven(false)}
        enableDeclineButton={true}
        declineButtonText="Decline"
        buttonText="Accept"
        contentStyle={{ margin: 0 }}
        declineButtonStyle={{
          margin: "0 0.5rem",
          padding: "0 8px",
          borderRadius: "8px",
          background: "none",
          color: "white",
        }}
        buttonStyle={{
          margin: "0 0.5rem",
          padding: "0 8px",
          borderRadius: "8px",
          background: "none",
          color: "white",
        }}
        expires={365}
      >
        This website uses Google Analytics to track usage
      </CookieConsent>
    </div>
  );
};

export default App;
