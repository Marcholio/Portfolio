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
import bikeVisu from "./content/bike-visu.json";

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
    <div className="App" style={{ backgroundImage: `url(background.webp)` }}>
      <div className="container">
        <Header />
        <div id="projects" />
        <Project
          content={katsastustilastot}
          img={"katsastustilastot.png"}
          thumbnail={"thumbnails/katsastustilastot.png"}
        />
        <Project
          content={portfolio}
          img={"portfolio.webp"}
          thumbnail={"thumbnails/portfolio.png"}
        />
        <Project
          content={polttoainesaa}
          img={"polttoainesaa.webp"}
          thumbnail={"thumbnails/polttoainesaa.png"}
        />
        <Project
          content={vueTodo}
          img={"vuetodo.webp"}
          thumbnail={"thumbnails/vuetodo.png"}
        />
        <Project
          content={turboclean}
          img={"turboclean.webp"}
          thumbnail={"thumbnails/turboclean.png"}
        />
        <Project
          content={fridgepi}
          img={"fridgePi.webp"}
          thumbnail={"thumbnails/fridgePi.png"}
        />
        <Project
          content={duunitin}
          img={"duunitin.webp"}
          thumbnail={"thumbnails/duunitin.jpg"}
        />
        <Project
          content={bikeVisu}
          img="bike-visu.webp"
          thumbnail="thumbnails/bike-visu.png"
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
