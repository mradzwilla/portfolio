import React from "react";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <Project
        title="CrowdCoin"
        photo="crowdcoin.png"
        description="Social networking site for developers"
        skills={["Web3", "Solidity", "React", "Semantic UI React"]}
        github="https://github.com/mradzwilla/ethereum-kickstarterr"
      />
      <Project
        title="DevConnector"
        photo="devconnector.png"
        description="Social networking site for developers"
        skills={["React", "Redux", "Node", "Express", "MongoDB"]}
        github="https://github.com/mradzwilla/devconnector"
        demo="https://radzwilla-devconnector.herokuapp.com/"
      />
      <Project
        title="LunchHunch"
        photo="lunch-hunch-logo.png"
        description="LunchHunch helps conquer lunchtime indecisiveness by asking the user a few simple questions and recommending a nearby place to eat via the Yelp API."
        skills={["React", "Node", "Yelp API"]}
        github="https://github.com/mradzwilla/githubBattle"
        demo="http://my-lunch-hunch.herokuapp.com/"
      />
      <Project
        title="Let's Get Trivial!"
        photo="trivial.png"
        description="Test your wits across the spectrum of useless knowledge. Answer 5 questions from five random categories to complete each round!"
        skills={["React", "Redux", "Node"]}
        github="http://lets-get-trivial.herokuapp.com/"
        demo="https://github.com/mradzwilla/triviaApp"
      />
      <Project
        title="GitHub Battle"
        photo="githubbattle.png"
        description="Enter two users to compare their GitHub profiles and view Github's most popular repos"
        skills={["React", "React Hooks", "GitHub API", "Node"]}
        github="https://github.com/mradzwilla/githubBattle"
        demo="https://radzwilla-github-battle.netlify.app"
      />
    </section>
  );
}
