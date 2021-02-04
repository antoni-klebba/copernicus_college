import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/layouts/Navigation.css";

import logo1 from "../images/navigation/copernicus_college_logo1.png";

const list = [
  { id: 0, path: "/o-nas", name: "O nas" },
  { id: 1, path: "/kursy/lista", name: "Kursy" },
  { id: 2, path: "/wyklady/lista", name: "Wykłady" },
  { id: 3, path: "/abc", name: "ABC" },
  { id: 4, path: "/podreczniki/lista", name: "Podręczniki" },
  { id: 5, path: "/wykladowcy/lista", name: "Wykładowcy" },
  { id: 6, path: "/kategorie", name: "Kategorie" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </li>
  ));

  return (
    <div className="navigation">
      <div className="container">
        <div className="logo_container">
          <NavLink to="/" exact>
            <img className="logo" src={logo1} alt="Copernicus College" />
          </NavLink>
        </div>
        <div className="nav_container">
          <ul className="nav_flex">{menu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
