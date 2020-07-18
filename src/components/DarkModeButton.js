import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function DarkModeButton({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme} className={`dark-mode-toggle ${theme}`}>
      <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} />
    </button>
  );
}

DarkModeButton.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
