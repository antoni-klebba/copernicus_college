import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/components/MainCart.css";

const Instructors = ({ title, about, path, thumbnail, status, type }) => {
  const seeDetails = () => {
    if (type === "textbook") return "podręcznika";
    if (type === "lecture") return "wykładu";
    if (type === "course") return "kursu";
  };
  return (
    <div className="main_cart">
      <NavLink className="link_reset" to={path}>
        <div className="image">
          <img src={thumbnail} alt={title} />
          <div className="hidden_text">
            <p>
              <span>Zobacz szczegóły {seeDetails()}</span>
            </p>
          </div>
          <div className="top_left_triangle"></div>
          <span className="icon">
            <i className="fas fa-book"></i>
          </span>
        </div>
        <div className="bottom_cart">
          <h4 className="main_cart_title">{title}</h4>
          <p className="main_cart_about">{about}</p>
          <p className="main_cart_status">{status}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Instructors;
