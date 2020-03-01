import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import content from "./content/header.json";

import profileImg from "./static/profile.png";
import CV from "./static/CV.pdf";
import linkedinImg from "./static/linkedin.png";
import githubImg from "./static/github.png";
import "./styles/header.css";

export default () => (
  <div className="row header">
    <div className="six columns">
      <h1>{content.welcome}</h1>
      <p>{content.intro}</p>
      <AnchorLink href="#projects">{content.engagement}</AnchorLink>
    </div>
    <div className="six columns">
      <img src={profileImg} alt="Profile" title="Me" id="profile-pic" />
      <div className="link-wrapper">
        <div>
          <a href={CV} className="button" download>
            {content.downloadCv}
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/tyrkkomarkus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinImg} alt="linkedin" title="LinkedIn" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Marcholio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubImg} alt="github" title="GitHub" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
