import React, { Component } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Languages from "./components/Languages";
import Projects from "./components/Projects";

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
            path="/"
            render={withRouter(props => (
              <Navbar {...props} />
            ))}
          />
          <Route exact path="/" component={AboutMe} />
          <Route path="/languages" component={Languages} />
          <Route path="/projects" component={Projects} />
        </div>
        {console.log("URL", process.env.PUBLIC_URL)}
      </BrowserRouter>
    );
  }
}

export default App;
