import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faAddressCard,
  faCode,
  faTasks,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import "../mobile.css";

const Menu = props => (
  <div className="mobile-menu">
    <button onClick={props.closeMobileMenu}>
      <FontAwesomeIcon icon={faTimes} className="exit-menu" />
    </button>

    <Link to="/portfolio">
      <FontAwesomeIcon icon={faAddressCard} /> &nbsp; About Me
    </Link>
    <Link to="/portfolio/languages">
      <FontAwesomeIcon icon={faCode} /> &nbsp; Languages & Frameworks
    </Link>
    <Link to="/portfolio/projects">
      <FontAwesomeIcon icon={faTasks} /> &nbsp; Projects
    </Link>
    <Link to="/portfolio/contact">
      <FontAwesomeIcon icon={faEnvelope} /> &nbsp; Contact Me
    </Link>
  </div>
);

export default Menu;
