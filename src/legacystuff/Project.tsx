import React from "react";
import LazyLoad from "react-lazyload";

type ProjectProps = {
  content: {
    title: string;
    url: string;
    tags: string[];
    description: string;
  };
  img: string;
  thumbnail: string;
};

const project = (props: ProjectProps) => (
  <div className={`row project`}>
    <div className="five columns">
      <LazyLoad
        once
        offset={300}
        placeholder={<img src={props.thumbnail} alt={props.content.title} />}
      >
        <img src={props.img} alt={props.content.title} />
      </LazyLoad>
    </div>
    <div className="seven columns">
      <a href={props.content.url} target="_blank" rel="noopener noreferrer">
        <h2>{props.content.title}</h2>
      </a>
      <div>{props.content.description}</div>
      <div className="tag-wrapper">
        {props.content.tags.map((t) => (
          <div className="tag" key={t}>
            {t}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default project;
