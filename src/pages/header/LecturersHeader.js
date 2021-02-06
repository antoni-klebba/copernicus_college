import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/pages/header/LecturersHeaderBackground.css";
import "../../styles/pages/header/GeneralHeader.css";

const LecturersHeader = (props) => {
  return (
    <div className="header_container_lecturers">
      <div className="header_text">
        <h1>{props.lang === "pl" ? "Wykładowcy" : "Instructors"}</h1>
      </div>
      <ul className="header_nav">
        <li>
          <NavLink exact to="/">
            Start
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/wykladowcy/lista">
            {props.lang === "pl" ? "Wykładowcy" : "Instructors"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LecturersHeader;
