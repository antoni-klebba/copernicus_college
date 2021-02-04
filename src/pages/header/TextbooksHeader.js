import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/pages/header/TextbooksHeaderBackground.css";
import "../../styles/pages/header/GeneralHeader.css";

const TextbooksHeader = () => {
  return (
    <div className="header_container_textbooks">
      <div className="header_text">
        <h1>Podręczniki</h1>
      </div>
      <ul className="header_nav">
        <li>
          <NavLink exact to="/">
            Start
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/podreczniki/lista">
            Podręczniki
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default TextbooksHeader;
