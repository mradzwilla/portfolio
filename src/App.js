import React from "react";

import "normalize.css";
import "./assets/css/index.css";
import "./assets/css/animate.css";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
