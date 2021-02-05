import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/layouts/TopBar.css";

class TopBar extends Component {
  state = {};
  render() {
    return (
      <div className="top_bar">
        <div className="top_bar_flex_container">
          <div className="container">
            <div className="search_container">
              <input type="text" placeholder="Szukaj" />
              <button className="search_button">
                <span>
                  <i className="fas fa-search"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="login_container">
            <button className="login">
              <span>
                <i class="fas fa-unlock-alt"></i>
              </span>
              Logowanie
            </button>
            <span className="separate">|</span>
            <Link to="/rejestracja">
              <span>
                <i class="far fa-edit"></i>
              </span>
              Rejestracja
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
