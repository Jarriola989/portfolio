import React, { Component } from "react";
import java from "../images/languages/Java.jpg";
import htmlcss from "../images/languages/html-css.jpg";
import jsts from "../images/languages/js-ts.png";
import graphql from "../images/languages/graphql.png";
import cplusplus from "../images/languages/cplusplus.jpg";

class LanguagesPanel extends Component {
  constructor() {
    super();
    this.state = {
      java: "close",
      htmlcss: "close",
      jsts: "close",
      graphql: "close",
      cplusplus: "close"
    };
  }

  openPanel = div => {
    const panelOptions = ["java", "htmlcss", "jsts", "graphql", "cplusplus"];
    const panelsToClose = panelOptions.filter(option => {
      return option !== div.target.alt;
    });
    if (this.state[div.target.alt] === "close") {
      this.setState({
        [div.target.alt]: "open"
      });
      panelsToClose.map(panel => {
        return this.setState({
          [panel]: "close"
        });
      });
    } else {
      this.setState({
        [div.target.alt]: "close"
      });
    }
  };

  render() {
    return (
      <div className="panel-container">
        <div className={this.state.java} onClick={this.openPanel}>
          <img src={java} alt="java" id="java" />
        </div>
        <div className={this.state.htmlcss} onClick={this.openPanel}>
          <img src={htmlcss} alt="htmlcss" />
        </div>
        <div className={this.state.jsts} onClick={this.openPanel}>
          <img src={jsts} alt="jsts" />
        </div>
        <div className={this.state.graphql} onClick={this.openPanel}>
          <img src={graphql} alt="graphql" />
        </div>
        <div className={this.state.cplusplus} onClick={this.openPanel}>
          <img src={cplusplus} alt="cplusplus" />
        </div>
      </div>
    );
  }
}

export default LanguagesPanel;
