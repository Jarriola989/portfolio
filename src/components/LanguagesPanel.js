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
      open: false
    };
  }

  render() {
    return (
      <div className="panel-container">
        <div className="java close">
          <img src={java} alt="java" />
        </div>
        <div className="close">
          <img src={htmlcss} alt="html-css" />
        </div>
        <div className="close">
          <img src={jsts} alt="js-ts" />
        </div>
        <div className="close">
          <img src={graphql} alt="graphql" />
        </div>
        <div className="close">
          <img src={cplusplus} alt="c++" />
        </div>
      </div>
    );
  }
}

export default LanguagesPanel;
