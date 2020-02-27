import React from "react";
import LanguagesPanel from "./LanguagesPanel";

const Languages = props => (
  <div className="languages">
    <div className="languages-title">
      <button>Languages</button>
      <button>Frameworks and Tools</button>
    </div>
    <LanguagesPanel />
    <h2 className="frameworks-title">IN PROGRESS</h2>
  </div>
);

export default Languages;
