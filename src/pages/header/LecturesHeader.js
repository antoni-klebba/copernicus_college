import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/pages/header/LecturesHeaderBackground.css";
import "../../styles/pages/header/GeneralHeader.css";

const LecturesHeader = (props) => {
  return (
    <div className="header_container_lectures">
      <div className="header_text">
        <h1>{props.lang === "pl" ? "Wykłady" : "Lectures"}</h1>
      </div>
      <ul className="header_nav">
        <li>
          <NavLink exact to="/">
            Start
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/wyklady/lista">
            {props.lang === "pl" ? "Wykłady" : "Lectures"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LecturesHeader;
