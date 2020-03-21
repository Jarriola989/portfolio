import React, { Component } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Menu from "./components/Menu";
import "./mobile.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mobileMenu: false
    };
  }

  openMobileMenu = () => {
    this.setState({ mobileMenu: true });
  };

  closeMobileMenu = () => {
    this.setState({ mobileMenu: false });
  };

  render() {
    // if(this.state.mobileMenu){
    //   return
    // }
    return (
      <BrowserRouter>
        <div className="box">
          <Route
            path="/portfolio"
            render={withRouter(props => (
              <Navbar {...props} />
            ))}
          />
          <button
            onClick={() => {
              this.openMobileMenu();
            }}
          >
            <FontAwesomeIcon className="mobile-menu-btn" icon={faCaretDown} />
          </button>
          {this.state.mobileMenu === true ? (
            <Route
              path="/portfolio"
              render={props => (
                <Menu {...props} closeMobileMenu={this.closeMobileMenu} />
              )}
            />
          ) : (
            ""
          )}
          {/* <Route path="/portfolio" component={Menu} /> */}
          <Route exact path="/portfolio" component={AboutMe} />
          <Route path="/portfolio/languages" component={Languages} />
          <Route path="/portfolio/projects" component={Projects} />
          <Route path="/portfolio/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
