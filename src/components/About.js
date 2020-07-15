import React from "react";
import headshot from "../assets/images/headshot.jpg";
import DownArrow from "./DownArrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <section>
      <div className="about" id="about">
        <div className="left">
          <img src={headshot} alt="Headshot" />
        </div>
        <div className="right">
          <h1>About Me</h1>
          <p>
            Welcome! I am a web developer from Philadelphia, PA currently
            working for Parx Casino. I have music and philosophy degrees from
            Ithaca College and am an alumnus of the New York Code & Design
            Academy.
          </p>
          <p>I am also passionate about theater and jiujitsu.</p>
          <p>Thank you for visiting!</p>
          <div id="cta_links">
            <a
              href="https://www.linkedin.com/in/michaelradzwilla/"
              target="_blank"
              alt="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/mradzwilla"
              target="_blank"
              alt="Github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:mradzwilla@gmail.com" alt="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
      <DownArrow />
    </section>
  );
}
