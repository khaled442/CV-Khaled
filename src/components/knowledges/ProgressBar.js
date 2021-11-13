import React from "react";

const ProgressBar = (props) => {
  console.log(props);
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Anneés d'expérience</span>
        <span> 0 ans</span>
        <span>1 ans</span>
      </div>

      <div>
        {props.languages.map((item) => {
          let xpYeras = 1;
          let progressBar = (item.xp / xpYeras) * 100 + "%";

          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
