import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../mobile.css";

const Menu = props => (
  <div className="mobile-menu">
    <button onClick={props.closeMobileMenu}>
      <FontAwesomeIcon icon={faTimes} className="exit-menu" />
    </button>

    <Link to="/portfolio">About Me</Link>
    <Link to="/portfolio/languages">Languages & Frameworks</Link>
    <Link to="/portfolio/projects">Projects</Link>
    <Link to="/portfolio/contact">Contact Me</Link>
  </div>
);

export default Menu;
