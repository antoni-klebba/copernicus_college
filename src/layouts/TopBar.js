import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/layouts/TopBar.css";

class TopBar extends Component {
  state = {};
  render() {
    return (
      <div className="top_bar">
        <div className="container">
          <div className="search_container">
            <input type="text" />
            <button className="search_button">L</button>
          </div>
        </div>
        <div className="login_container">
          <button className="login">
            <span>K</span>Logowanie
          </button>
          |
          <Link to="/rejestracja">
            <span>R</span>Rejestracja
          </Link>
        </div>
      </div>
    );
  }
}

export default TopBar;
