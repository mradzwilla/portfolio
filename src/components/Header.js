import React from "react";
import DownArrow from "./DownArrow";

export default function Header() {
  return (
    <section className="intro animated fadeIn">
      <h1 className="animated fadeIn">Mike Radzwilla</h1>
      <h2 className="animated fadeInDown">Web Developer</h2>
      <DownArrow />
    </section>
  );
}
