import React from "react";
import { Link } from "react-scroll";
import ReactGA from "react-ga";
import content from "./content/header.json";

import profileImg from "./static/profile.webp";
import linkedinImg from "./static/linkedin.png";
import githubImg from "./static/github.png";
import CV from "./static/CV.pdf";

import "./styles/header.css";

const header = () => (
  <div className="row header">
    <div className="six columns">
      <h1>{content.welcome}</h1>
      <p>{content.intro}</p>
      <Link to="projects" duration={500} smooth>
        {content.engagement}
      </Link>
    </div>
    <div className="six columns">
      <img src={profileImg} alt="Profile" title="Me" id="profile-pic" />
      <div className="link-wrapper">
        <div>
          <ReactGA.OutboundLink
            eventLabel="CV"
            to={CV}
            download
            className={"button"}
          >
            {content.downloadCv}
          </ReactGA.OutboundLink>
        </div>
        <div>
          <ReactGA.OutboundLink
            eventLabel="LinkedIn"
            to="https://www.linkedin.com/in/tyrkkomarkus/"
            target="_blank"
          >
            <img src={linkedinImg} alt="linkedin" title="LinkedIn" />
          </ReactGA.OutboundLink>
        </div>
        <div>
          <ReactGA.OutboundLink
            eventLabel="GitHub"
            to="https://github.com/Marcholio"
            target="_blank"
          >
            <img src={githubImg} alt="github" title="GitHub" />
          </ReactGA.OutboundLink>
        </div>
      </div>
    </div>
  </div>
);

export default header;
