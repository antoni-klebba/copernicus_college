import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/components/Textbook.css";

const Instructors = ({ title, about, path, thumbnail, status }) => {
  return (
    <div className="textbook">
      <NavLink className="link_reset" to={path}>
        <div className="image">
          <img src={thumbnail} alt={title} />
          <div className="hidden_text">
            <p>
              <span>Zobacz szczegóły podręcznika</span>
            </p>
          </div>
          <div className="top_left_triangle"></div>
          <span className="icon">
            <i className="fas fa-book"></i>
          </span>
        </div>
        <div className="bottom_cart">
          <h4 className="textbook_title">{title}</h4>
          <p className="textbook_about">{about}</p>
          <p className="textbook_status">{status}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Instructors;
