import React, { Component } from "react";
import react from "../images/frameworks/react.png";
import node from "../images/frameworks/node.jpg";
import springboot from "../images/frameworks/springboot.png";
import prisma from "../images/frameworks/prisma.png";

class FrameworksPanel extends Component {
  constructor() {
    super();
    this.state = {
      react: "close",
      node: "close",
      springboot: "close",
      prisma: "close",
      yoga: "close"
    };
  }

  openPanel = div => {
    const panelOptions = ["react", "node", "springboot", "prisma", "yoga"];
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
          <img src={react} alt="react" />
        </div>
        <div className={this.state.htmlcss} onClick={this.openPanel}>
          <img src={node} alt="node" />
        </div>
        <div className={this.state.jsts} onClick={this.openPanel}>
          <img src={springboot} alt="springboot" />
        </div>
        <div className={this.state.graphql} onClick={this.openPanel}>
          <img src={prisma} alt="prisma" />
        </div>
        <div className={this.state.cplusplus} onClick={this.openPanel}>
          <img src={"/"} alt="cplusplus" />
        </div>
      </div>
    );
  }
}

export default FrameworksPanel;
