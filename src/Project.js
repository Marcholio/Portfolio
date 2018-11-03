import React from "react";
import "./styles/header.css";

const text = props => (
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
);

const img = props => (
  <div className="five columns">
    <img src={`/images/${props.content.image}`} alt={props.content.title} />
  </div>
);

export default props => (
  <div className="row project">
    {props.inverse ? text(props) : img(props)}
    {props.inverse ? img(props) : text(props)}
  </div>
);
