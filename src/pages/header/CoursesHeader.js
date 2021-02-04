import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/pages/header/CoursesHeaderBackground.css";
import "../../styles/pages/header/GeneralHeader.css";

const CoursesHeader = () => {
  return (
    <div className="header_container">
      <div className="header_text">
        <h1>Kursy</h1>
      </div>
      <ul className="header_nav">
        <li>
          <NavLink exact to="/">
            Start
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/kursy/lista">
            Kursy
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CoursesHeader;
