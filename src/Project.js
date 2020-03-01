import React from "react";
import LazyLoad from "react-lazy-load";

import "./styles/header.css";

export default props => (
  <div className={`row project ${props.inverse ? "inverse" : ""}`}>
    <div className="five columns">
      <LazyLoad offset={300}>
        <img src={props.img} alt={props.content.title} />
      </LazyLoad>
    </div>
    <div className="seven columns">
      <a href={props.content.url} target="_blank" rel="noopener noreferrer">
        <h4>{props.content.title}</h4>
      </a>
      <div>{props.content.description}</div>
      <div className="tag-wrapper">
        {props.content.tags.map(t => (
          <div className="tag" key={t}>
            {t}
          </div>
        ))}
      </div>
    </div>
  </div>
);
