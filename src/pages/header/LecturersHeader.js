import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/pages/header/LecturersHeaderBackground.css";
import "../../styles/pages/header/GeneralHeader.css";

const LecturersHeader = () => {
  return (
    <div className="header_container">
      <div className="header_text">
        <h1>Wykładowcy</h1>
      </div>
      <ul className="header_nav">
        <li>
          <NavLink exact to="/">
            Start
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/wykladowcy/lista">
            Wykładowcy
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LecturersHeader;
