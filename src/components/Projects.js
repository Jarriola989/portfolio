import React, { Component } from "react";
import PersonalProjects from "./PersonalProjects";
import wise from "../images/projects/wise-code.png";
import wisedb from "../images/projects/wisedb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      professional: true
    };
  }

  switchToPersonal = () => {
    this.setState({
      professional: false
    });
  };

  switchToProfessional = () => {
    this.setState({
      professional: true
    });
  };

  render() {
    if (this.state.professional) {
      return (
        <div className="projects">
          <div className="projects-menu">
            <button
              className="active-projects"
              onClick={this.switchToProfessional}
            >
              Professional
            </button>
            <button onClick={this.switchToPersonal}>Personal</button>
          </div>
          <div className="project-list">
            <div className="project-box">
              <div className="project-image">
                <img src={wise} alt="wise-code" />
              </div>

              <div className="project-info">
                <div className="project-title">WISE Code-Mobile</div>

                <div className="contributions">
                  <strong>My Contributions:</strong>
                  <ul>
                    <li>
                      Node/Graphql API for data management app (WiseDB) used by
                      WiseCode.
                    </li>
                  </ul>
                </div>
                <div className="tech-stack">
                  <strong>Stack:</strong>
                  <ul className="stack">
                    <li>NodeJS</li>
                    <li>Graphql</li>
                    <li>Prisma</li>
                    <li>Yoga</li>
                    <li>Redis</li>
                    <li>Kubernetes</li>
                    <li>Docker</li>
                    <li>Mongodb</li>
                  </ul>
                </div>
                <div className="code-link">
                  <a
                    href="https://wisecode.io"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="project-link"
                  >
                    <button>
                      <FontAwesomeIcon icon={faLink} /> Live
                    </button>
                  </a>
                  <p className="project-link private">
                    <button disabled>
                      <FontAwesomeIcon icon={faEyeSlash} /> Source Code
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="project-box">
              <div className="project-image">
                <img src={wisedb} alt="wise-db" />
              </div>
              <div className="project-info">
                <div className="project-title">WISEdb</div>
                <div className="contributions">
                  <strong>My Contributions:</strong>
                  <ul>
                    <li>
                      Designed/implemented features to parse and match data.
                    </li>
                    <li>Scripts to efficiently find/fix faulty data.</li>
                  </ul>
                </div>
                <div className="tech-stack">
                  <strong>Stack:</strong>
                  <ul className="stack">
                    <li>NodeJS</li>
                    <li>Graphql</li>
                    <li>Prisma</li>
                    <li>Yoga</li>
                    <li>Redis</li>
                    <li>Kubernetes</li>
                    <li>Docker</li>
                    <li>Mongodb</li>
                  </ul>
                </div>
                <div className="code-link">
                  <p className="project-link private">
                    <button disabled>
                      <FontAwesomeIcon icon={faEyeSlash} /> Live
                    </button>
                  </p>
                  <p className="project-link private">
                    <button disabled>
                      <FontAwesomeIcon icon={faEyeSlash} /> Source Code
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="project-box">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="projects">
          <div className="projects-menu">
            <button onClick={this.switchToProfessional}>Professional</button>
            <button className="active-projects" onClick={this.switchToPersonal}>
              Personal
            </button>
          </div>
          <PersonalProjects />
        </div>
      );
    }
  }
}
export default Projects;
{
  /* <div className="projects">


    <div className="project2">
      <div className="flip">
        <div className="front">
          <img src={rhaz} alt="rhaz" />
        </div>
        <div className="back">
          <div className="project-name">
            <strong>RHAZ</strong>
          </div>
          <div className="contributions">
            My Contributions:
            <ul>
              <li>Logic for alien movement and re-generation.</li>
            </ul>
          </div>
          <div className="tech">
            Technologies used:
            <ul>
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
              <FontAwesomeIcon icon={faLink} />
            </a>
            <a href="/" className="project-link">
              <FontAwesomeIcon icon={faCode} />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="project3">
      <div className="flip">
        <div className="front coming-soon"></div>
        <div className="back">
          <strong className="project-name">NEW PROJECT COMING SOON!</strong>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  </div>
</div> */
}
