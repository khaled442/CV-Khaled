import React from "react";
import { NavLink } from "react-router-dom";
// import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img
            style={{ width: "120px", height: "120px" }}
            src="./media/khaled.jpg"
            alt="profil-pic"
          />
          <h3>Khaled Boudaya</h3>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="navActive">
                <i className="fas fa-home"></i>
                <span>Accueil</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/competenaces" activeClassName="navActive">
                <i className="fas fa-mountain"></i>
                <span>Compétences</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/portfolio" activeClassName="navActive">
                <i className="fas fa-images"></i>
                <span>Portfolio</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact" activeClassName="navActive">
                <i className="fas fa-address-book"></i>
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/boudaya-khaled-32841212b"
                target="blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/khaled44" target="blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Boudaya.Khaled" target="blank">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
          <div className="signature">
            <p> Khaled boudaya - 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
