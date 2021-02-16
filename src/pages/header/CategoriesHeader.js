import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/pages/header/GeneralHeaderSecond.css";

const ABCHeader = (props) => {
  return (
    <div className="header_container_categories">
      <div className="container">
        <div className="second_header_text">
          <h1>{props.lang === "pl" ? "Kategorie" : "Categories"}</h1>
        </div>
        <ul className="header_nav">
          <li>
            <NavLink exact to="/">
              Start
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/kategorie/lista">
              {props.lang === "pl" ? "Kategorie" : "Categories"}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ABCHeader;
