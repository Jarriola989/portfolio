import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import geek from "../images/projects/geektext.png";
import rhaz from "../images/projects/rhaz.png";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";

const PersonalProjects = () => (
  <div className="project-list">
    <div className="project-box">
      <div className="project-image">
        <img src={geek} alt="geek-text" />
      </div>
      <div className="project-info">
        <div className="project-title">Geek Text</div>

        <div className="contributions">
          <strong>My Contributions:</strong>
          <ul>
            <li>Login feature.</li>
            <li>Create-account feature.</li>
            <li>Implemented Stripe API for payment storage/verification.</li>
          </ul>
        </div>
        <div className="tech-stack">
          <strong>Stack:</strong>
          <ul className="stack">
            <li>ReactJS</li>
            <li>Java</li>
            <li> Springboot</li>
            <li>Postgresql</li>
          </ul>
        </div>
        <div className="code-link">
          <a
            href="https://geek-text.netlify.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="project-link"
          >
            <button>
              <FontAwesomeIcon icon={faLink} /> Live
            </button>
          </a>
          <p className="project-link">
            <button disabled>
              <FontAwesomeIcon icon={faCode} /> Source Code
            </button>
          </p>
        </div>
      </div>
    </div>
    <div className="project-box">
      <div className="project-image">
        <img src={rhaz} alt="rhaz" />
      </div>
      <div className="project-info">
        <div className="project-title">RHAZ</div>

        <div className="contributions">
          <strong>My Contributions:</strong>
          <ul>
            <li>Logic for alien movement and re-generation.</li>
          </ul>
        </div>
        <div className="tech-stack">
          <strong>Stack:</strong>
          <ul className="stack">
            <li>Unity</li>
            <li>C#</li>
          </ul>
        </div>
        <div className="code-link">
          <a
            href="https://simmer.io/@Dazen/rhaz"
            rel="noopener noreferrer"
            target="_blank"
            className="project-link"
          >
            <button>
              <FontAwesomeIcon icon={faLink} /> Live
            </button>
          </a>
          <p className="project-link">
            <button disabled>
              <FontAwesomeIcon icon={faCode} /> Source Code
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default PersonalProjects;
