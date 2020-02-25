import React, { Component } from "react";
import { Link } from "react-router-dom";

// let url = window.location.href.split('/');
// let path = window.location.pathname;

class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { pathname } = this.props.location;
    return (
      <div className="navigation">
        <div className="inner-nav">
          <Link to="/" className={"/" === pathname ? "active" : "inactive"}>
            About Me
          </Link>

          <Link
            to="/languages"
            className={"/languages" === pathname ? "active" : "inactive"}
          >
            Languages & Frameworks
          </Link>

          <Link
            to="/projects"
            className={"/projects" === pathname ? "active" : "inactive"}
          >
            My Projects
          </Link>

          <Link
            to="contact"
            className={"/contact" === pathname ? "active" : "inactive"}
          >
            Contact Me
          </Link>
        </div>
        {/* {console.log(pathname)} */}
      </div>
    );
  }
}

export default Navbar;
