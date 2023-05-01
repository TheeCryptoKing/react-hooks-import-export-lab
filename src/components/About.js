import React from "react";
import { image } from "../data/user.js";
// two dots because have to leave component folder and enter the data folder 
function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;