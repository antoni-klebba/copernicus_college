import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/components/Instructor.css";

const Instructors = ({ path, name, thumbnail }) => {
  return (
    <div className="instructor">
      <NavLink className="link_reset" to={path}>
        <img src={thumbnail} alt={name} />
        <h4 className="instructor_name">{name}</h4>
      </NavLink>
    </div>
  );
};

export default Instructors;
