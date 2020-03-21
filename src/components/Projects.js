import React from "react";
import wise from "../images/projects/wise-code.png";
import geek from "../images/projects/geektext.png";
import rhaz from "../images/projects/rhaz.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";

const Projects = props => (
  <div className="projects">
    <div className="projects-menu">
      <button className="active-languages-option">Work</button>
      <button>Personal</button>
    </div>
    <div className="project-list">
      <div className="project1">
        <div className="flip">
          <div className="front">
            <img src={wise} alt="wise-code" />
          </div>
          <div className="back">
            <div className="project-name">
              <strong>Wise Code - Mobile</strong>
            </div>
            <div className="contributions">
              My Contributions:
              <ul>
                <li>
                  Implemented and maintained Graphql API for data management app
                  (WiseDB).
                </li>
                <li>
                  Successfully created scripts to find and fix faulty data.
                </li>
                <li>
                  Helped improve mutation efficiency and code cleanliness
                  (refactoring).
                </li>
              </ul>
            </div>
            <div className="tech">
              Technologies used:
              <ul>
                <li>Graphql</li>
                <li>Prisma</li>
                <li>Yoga</li>
                <li>Redis</li>
                <li>Kubernetes</li>
                <li>Docker</li>
              </ul>
            </div>
            <div className="code-link">
              <a
                href="https://wisecode.io"
                rel="noopener noreferrer"
                target="_blank"
                className="project-link"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
              <p className="project-link">
                <FontAwesomeIcon icon={faCode} />
              </p>
            </div>
          </div>
        </div>
      </div>
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
      <div className="project4">
        <div className="flip">
          <div className="front">
            <img src={geek} alt="geek-text" />
          </div>
          <div className="back long">
            <div className="contributions-long">
              <strong className="project-name">Geek Text</strong>
              <br />
              <br />
              My Contributions:
              <ul>
                <li>Login feature.</li>
                <li>Create-account feature.</li>
                <li>
                  Implemented Stripe API for payment storage/verification.
                </li>
              </ul>
            </div>
            <div className="tech-long">
              <br />
              <br />
              Technologies used:
              <ul>
                <li>ReactJS</li>
                <li>Java Springboot</li>
                <li>Postgresql</li>
              </ul>
            </div>
            <div className="code-link-long">
              <a
                href="https://geek-text.netlify.com/"
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
    </div>
  </div>
);

export default Projects;
