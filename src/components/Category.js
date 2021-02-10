import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/components/Category.css";

const Category = ({ text, path }) => {
  return (
    <div className="category">
      <NavLink className="link_reset" to={path}>
        {text}
      </NavLink>
    </div>
  );
};

export default Category;
