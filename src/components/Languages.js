import React, { Component } from "react";
import LanguagesPanel from "./LanguagesPanel";
import FrameworksPanel from "./FrameworksPanel";
import "../mobile.css";

class Languages extends Component {
  constructor() {
    super();
    this.state = {
      languages: true
    };
  }

  switchToLanguages = () => {
    this.setState({
      languages: true
    });
  };

  switchToFrameworks = () => {
    this.setState({
      languages: false
    });
  };

  render() {
    if (this.state.languages) {
      return (
        <div className="languages">
          <div className="languages-title">
            <button
              className="active-languages-option"
              onClick={this.switchToLanguages}
            >
              Languages
            </button>
            <button onClick={this.switchToFrameworks}>
              Frameworks and Tools
            </button>
          </div>
          <LanguagesPanel />
          <h2 className="frameworks-title">IN PROGRESS</h2>
        </div>
      );
    } else {
      return (
        <div className="languages">
          <div className="languages-title">
            <button onClick={this.switchToLanguages}>Languages</button>
            <button
              className="active-languages-option"
              onClick={this.switchToFrameworks}
            >
              Frameworks and Tools
            </button>
          </div>
          <FrameworksPanel />
          <h2 className="frameworks-title">IN PROGRESS</h2>
        </div>
      );
    }
  }
}

export default Languages;
