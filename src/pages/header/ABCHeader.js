import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/pages/header/GeneralHeaderSecond.css";

const ABCHeader = (props) => {
  return (
    <div className="header_container_abc">
      <div className="container">
        <div className="second_header_text">
          <h1>ABC</h1>
        </div>
        <ul className="header_nav">
          <li>
            <NavLink exact to="/">
              Start
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/abc/lista">
              ABC
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ABCHeader;
