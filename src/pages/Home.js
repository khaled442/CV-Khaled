import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Khaled boudaya</h1>
          <h2>développeur Front-end</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target="blank">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
