import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/pages/header/TextbooksHeaderBackground.css";
import "../../styles/pages/header/GeneralHeader.css";

const TextbooksHeader = (props) => {
  return (
    <div className="header_container_textbooks">
      <div className="header_text">
        <h1>{props.lang === "pl" ? "Podręczniki" : "Textbooks"}</h1>
      </div>
      <ul className="header_nav">
        <li>
          <NavLink exact to="/">
            Start
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/podreczniki/lista">
            {props.lang === "pl" ? "Podręczniki" : "Textbooks"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default TextbooksHeader;
