import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/layouts/Navigation.css";

import logo1 from "../images/navigation/copernicus_college_logo1.png";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <div className="container">
        <div className="logo_container">
          <NavLink to="/" exact>
            <img className="logo" src={logo1} alt="Copernicus College" />
          </NavLink>
        </div>
        <div className="nav_container">
          <ul className="nav_flex">{props.lang === "pl" ? props.menuPl : props.menuEn}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
