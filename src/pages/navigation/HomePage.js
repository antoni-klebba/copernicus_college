import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MainCart from "../../components/MainCart";

import "../../styles/pages/HomePage.css";
class HomePage extends Component {
  state = {};

  recommendedRender = () =>
    this.props.homeRecommended.map((item) => {
      return <MainCart key={item.title} {...item} />;
    });

  coursesRender = () =>
    this.props.homeCourses.map((item) => {
      return <MainCart key={item.title} {...item} />;
    });

  lecturesRender = () =>
    this.props.homeLectures.map((item) => {
      return <MainCart key={item.title} {...item} />;
    });

  textbooksRender = () =>
    this.props.homeTextbooks.map((item) => {
      return <MainCart key={item.title} {...item} />;
    });

  render() {
    return (
      <div className="home_page">
        <div className="container">
          <div className="page">
            <section className="row">
              <div className="top_part">
                <h2>Polecane teraz</h2>
              </div>
              <div className="main_part">{this.recommendedRender()}</div>
            </section>
            <section className="row">
              <div className="top_part">
                <h2>Kursy</h2>
                <NavLink className="link_reset" to="/copernicus_college/kursy/lista">
                  Zobacz wszystkie
                </NavLink>
              </div>
              <div className="main_part">{this.coursesRender()}</div>
            </section>
            <section className="row">
              <div className="top_part">
                <h2>Wykłady gościnne</h2>
                <NavLink className="link_reset" to="/copernicus_college/wyklady/lista">
                  Zobacz wszystkie
                </NavLink>
              </div>
              <div className="main_part">{this.lecturesRender()}</div>
            </section>
            <section className="row">
              <div className="top_part">
                <h2>Podręczniki</h2>
                <NavLink className="link_reset" to="/copernicus_college/podreczniki/lista">
                  Zobacz wszystkie
                </NavLink>
              </div>
              <div className="main_part">{this.textbooksRender()}</div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
