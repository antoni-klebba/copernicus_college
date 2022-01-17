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
            <button className="login link_reset">
              <span>
                <i className="fas fa-unlock-alt"></i>
              </span>
              {this.props.lang === "pl" ? "Logowanie" : "Log In"}
            </button>
            <span className="separate">|</span>
            <Link link_reset to="/copernicus_college/rejestracja">
              <span>
                <i className="far fa-edit"></i>
              </span>
              {this.props.lang === "pl" ? "Rejestracja" : "Registration"}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
