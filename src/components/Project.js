import React, { useState, useRef, useLayoutEffect } from "react";
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
  const [show, doShow] = useState(false);
  const item = useRef(null);

  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;

    const itemPos = topPos(item.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if ((itemPos < scrollPos) & !show) {
        doShow(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [show]);

  return (
    <div className={`project-container${show ? " in" : ""}`} ref={item}>
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
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Demo"
              >
                <FontAwesomeIcon icon={faPlay} />
              </a>
            )}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
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
