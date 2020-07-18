import React from "react";

import "normalize.css";
import "./index.scss";

import Header from "./components/Header";
import DarkModeButton from "./components/DarkModeButton";
import About from "./components/About";
import Projects from "./components/Projects";
import { ThemeProvider } from "./contexts/theme";
import { useDarkMode } from "./useDarkMode";

function App() {
  const [theme, setTheme, componentMounted] = useDarkMode();
  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider value={theme}>
      <div className={`App ${theme}`}>
        <Header />
        <About theme={theme} />
        <Projects />
        <DarkModeButton theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
