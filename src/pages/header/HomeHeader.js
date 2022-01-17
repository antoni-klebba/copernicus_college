import React from "react";
import { Link } from "react-router-dom";

import "../../styles/pages/header/HomeHeader.css";

const HomeHeader = (props) => {
  return (
    <div className="home_header_container">
      <div className="home_header_flex_container">
        <div className="home_header_text">
          <h2>
            {props.lang === "pl" ? "Kursy i wykłady akademickie," : "Study for free,"} <br />
            {props.lang === "pl" ? "dostępne dla każdego," : "in English,"}
            <br />
            {props.lang === "pl" ? "online" : "via the Internet"}
          </h2>
        </div>
        <div className="join_us_button">
          <button>
            <Link to="/copernicus_college/registration">
              {props.lang === "pl" ? "Dołącz do nas! " : "Join us! "}
              <i className="fas fa-angle-double-right"></i>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
