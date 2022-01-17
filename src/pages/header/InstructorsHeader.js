import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/pages/header/InstructorsHeaderBackground.css";
import "../../styles/pages/header/GeneralHeader.css";

const InstructorsHeader = (props) => {
  return (
    <div className="header_container_Instructors">
      <div className="header_text">
        <h1>{props.lang === "pl" ? "Wykładowcy" : "Instructors"}</h1>
      </div>
      <ul className="header_nav">
        <li>
          <NavLink exact to="/copernicus_college/">
            Start
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/copernicus_college/wykladowcy/lista">
            {props.lang === "pl" ? "Wykładowcy" : "Instructors"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default InstructorsHeader;
