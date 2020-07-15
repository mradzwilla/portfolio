import React from "react";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <Project
        title="DevConnector"
        photo="devconnector.png"
        description="Test"
        skills={["React", "Redux", "Express", "MongoDB"]}
        github="https://github.com/mradzwilla/devconnector"
        demo="https://radzwilla-devconnector.herokuapp.com/"
      />
    </section>
  );
}
