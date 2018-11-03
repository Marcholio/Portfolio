import React from "react";
import content from "./content/header.json";
import "./styles/header.css";

const text = props => (
  <div className="seven columns">
    <h4>{props.content.title}</h4>
    <div>{props.content.description}</div>
    <div className="tag-wrapper">
      {props.content.tags.map(t => (
        <div className="tag">{t}</div>
      ))}
    </div>
  </div>
);

const img = props => (
  <div className="five columns">
    <img src={`/images/${props.content.image}`} />
  </div>
);

export default props => (
  <div className="row project">
    {props.inverse ? text(props) : img(props)}
    {props.inverse ? img(props) : text(props)}
  </div>
);
