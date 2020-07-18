import React from "react";
import DownArrow from "./DownArrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import darkPhoto from "../assets/dark-mode-photo.jpg";
import lightPhoto from "../assets/headshot.jpg";

export default function About({ theme }) {
  return (
    <section>
      <div className="about" id="about">
        <div className="left">
          <img src={theme === "light" ? lightPhoto : darkPhoto} alt="" />
        </div>
        <div className="right">
          <h1>About Me</h1>
          <p>
            I am a web developer in Philadelphia, PA currently working for Parx
            Casino. I have music and philosophy degrees from Ithaca College and
            am an alumnus of the New York Code & Design Academy.
          </p>
          <p>I am also passionate about theater and jiujitsu.</p>
          <p>Thank you for visiting!</p>
          <div id="cta_links">
            <a
              href="https://www.linkedin.com/in/michaelradzwilla/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/mradzwilla" target="_blank">
              <FontAwesomeIcon icon={faGithub} alt="Github" />
            </a>
            <a href="mailto:mradzwilla@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} alt="Send email" />
            </a>
          </div>
        </div>
      </div>
      <DownArrow />
    </section>
  );
}
