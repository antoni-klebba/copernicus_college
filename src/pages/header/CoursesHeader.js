import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/pages/header/CoursesHeaderBackground.css";
import "../../styles/pages/header/GeneralHeader.css";

const CoursesHeader = (props) => {
  return (
    <div className="header_container_courses">
      <div className="header_text">
        <h1>{props.lang === "pl" ? "Kursy" : "Courses"}</h1>
      </div>
      <ul className="header_nav">
        <li>
          <NavLink exact to="/">
            Start
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/kursy/lista">
            {props.lang === "pl" ? "Kursy" : "Courses"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CoursesHeader;
