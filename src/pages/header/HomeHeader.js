import React from "react";
import { Link } from "react-router-dom";

import "../../styles/pages/header/HomeHeader.css";

const HomeHeader = () => {
  return (
    <div className="home_header_container">
      <div className="home_header_flex_container">
        <div className="home_header_text">
          <h2>
            Kursy i wykłady akademickie, <br />
            dostępne dla każdego, <br />
            online
          </h2>
        </div>
        <div className="join_us_button">
          <button>
            <Link to="/registration">
              Dołącz do nas! <i class="fas fa-angle-double-right"></i>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
