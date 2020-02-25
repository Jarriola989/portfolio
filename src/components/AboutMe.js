import React from "react";
import computer from "../images/computer.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const AboutMe = props => (
  <div className="content">
    <div className="computer">
      <img src={computer} alt="computer" />
    </div>

    <h1 className="name">
      Hello, <br />
      my name is Janeth Arriola.
    </h1>
    <p className="about">
      I currently work as a <strong>full-stack software developer</strong> and
      enjoy challenging tasks, team collaboration and added responsibility. I am
      a problem solver working to constantly expand my knowledge. I am
      self-driven, detail- oriented, adaptable, and coachable, and hope to get
      the chance to work on high-impact projects.
    </p>
    <div className="icons">
      <button className="resume">
        <FontAwesomeIcon icon={faFileDownload} />
      </button>
      <button
        className="linkedin"
        onClick={() => {
          window.location.href =
            "https://www.linkedin.com/in/janeth-arriola-a01463158/";
        }}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </button>
      <button
        className="github"
        onClick={() => {
          window.location.href = "https://github.com/Jarriola989";
        }}
      >
        <FontAwesomeIcon icon={faGithub} />
      </button>
    </div>
  </div>
);

export default AboutMe;
