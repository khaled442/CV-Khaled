import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 0.6 },
      { id: 2, value: "CSS", xp: 0.88 },
      { id: 3, value: "HTML", xp: 0.98 },
      { id: 4, value: "C++", xp: 0.35 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.75 },
      { id: 2, value: "Redux", xp: 0.69 },
      { id: 3, value: "Boootstrap", xp: 0.98 },
      { id: 4, value: "Sass", xp: 0.4 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="Languages"
        />
        <ProgressBar
          title="Frameworks & Bibliothéque"
          className="frameworksDsiplay "
          languages={frameworks}
        />
      </div>
    );
  }
}

export default Languages;
