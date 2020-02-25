import React from "react";
import cplusplus from "../images/c++.png";
import graphql from "../images/graphql.png";
import javascript from "../images/javascript.png";
import typescript from "../images/typescript.png";
import java from "../images/java.png";
import html from "../images/html.png";
import css from "../images/css.png";
import sql from "../images/sql.png";

const Languages = props => (
  <div className="languages">
    <div className="java">
      <img src={java} alt="java" />
    </div>
    <div className="javascript">
      <img src={javascript} alt="javascript" />
    </div>
    <div className="typescript">
      <img src={typescript} alt="typescript" />
    </div>

    <div className="html">
      <img src={html} alt="html" />
    </div>
    <div className="css">
      <img src={css} alt="css" />
    </div>
    <div className="graphql">
      <img src={graphql} alt="graphql" />
    </div>
    <div className="sql">
      <img src={sql} alt="sql" />
    </div>
    <div className="cplusplus">
      <img src={cplusplus} alt="C++" />
    </div>
  </div>
);

export default Languages;
