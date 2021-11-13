import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérets</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Sports</span>
        </li>
        <li className="hobby">
          <i className="fas fa-book"></i>
          <span>Lecture</span>
        </li>
        <li className="hobby">
          <i class="fab fa-playstation"></i>
          <span>Jeux Video</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
