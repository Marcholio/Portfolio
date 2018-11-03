import React from "react";
import content from "./content/header.json";
import "./styles/header.css";

export default () => (
  <div className="row header">
    <div className="six columns">
      <h1>{content.welcome}</h1>
      {content.intro}
      {content.engagement}
    </div>
    <div className="six columns">
      <img
        src="/images/profile.png"
        alt="Profile"
        title="Me"
        id="profile-pic"
      />
      <div className="link-wrapper">
        <div>
          <a href="/CV.pdf" className="button" download>
            {content.downloadCv}
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/tyrkkomarkus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Marcholio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  </div>
);
