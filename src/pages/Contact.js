import React from "react";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1> Contactez-Moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span> Tunisie-Sfax</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <span className="clickInput"> +216 55 427 146</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span className="clickInput"> boudayakhaled@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/boudaya-khaled-32841212b/"
              target="blank"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/khaled442" target="blank">
              <h4>GitHub</h4>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/Boudaya.Khaled" target="blank">
              <h4>Facebook</h4>
              <i className="fab fa-facebook"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
