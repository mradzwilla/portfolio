import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project({
  title,
  photo,
  description,
  skills,
  github,
  demo,
}) {
  return (
    <div className="project-container">
      <div className="project-section">
        <div className="left">
          <img src={`/images/${photo}`} alt="" />
        </div>
        <div className="right">
          <h1>{title}</h1>
          <p>{description}</p>
          <ul className="skills">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
          <div className="links">
            {demo && (
              <a href={demo} target="_blank" aria-label="Demo">
                <FontAwesomeIcon icon={faPlay} />
              </a>
            )}
            <a href={github} target="_blank" aria-label="Github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  github: PropTypes.string,
  demo: PropTypes.string,
};
