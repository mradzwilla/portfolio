import React, { useEffect } from "react";
import DownArrow from "./DownArrow";
import lightbulb from "../assets/lightbulb.png";
import { motion, useAnimation } from "framer-motion";

export default function Header() {
  return (
    <section className="intro">
      <div className="text-wrapper">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          Mike Radzwilla
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, top: -30 }}
          animate={{ opacity: 1, top: 0 }}
          transition={{ duration: 0.3, delay: 2.5 }}
        >
          Web Developer
        </motion.h2>
      </div>

      <div className="img-wrapper">
        <motion.img
          src={lightbulb}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 1 }}
        ></motion.img>
      </div>
      <DownArrow />
    </section>
  );
}
