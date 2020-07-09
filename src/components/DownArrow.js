import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function DownArrow() {
  return (
    <div className="arrow-container">
      <FontAwesomeIcon
        icon={faAngleDown}
        className="animated pulse infinite down-arrow"
      />
    </div>
  );
}
