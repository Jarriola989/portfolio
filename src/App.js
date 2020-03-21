import React, { Component } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./mobile.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: window.location.pathname
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="box">
          <Route
            path="/portfolio"
            render={withRouter(props => (
              <Navbar {...props} />
            ))}
          />
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
