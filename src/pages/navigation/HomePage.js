import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MainCart from "../../components/MainCart";
import Recommended from "../../components/Recommended";

import "../../styles/pages/HomePage.css";
class HomePage extends Component {
  state = {
    coursesListCopy: this.props.coursesList,
    recommendedList: [],
  };

  generateRecommendedList = () => {
    let recommendedList = this.state.recommendedList;
    const randomNum = Math.floor(Math.random() * this.state.coursesListCopy.length);
    const recommendedElement = this.state.coursesListCopy.splice(randomNum, 1);
    recommendedList.push(recommendedElement);
    this.setState((prevState) => {
      return {
        coursesListCopy: prevState.coursesListCopy,
        recommendedList: prevState.recommendedList + recommendedList,
      };
    });
  };

  componentDidMount = () => {
    for (let i = 0; i < 4; i++) {
      this.generateRecommendedList();
    }
    // console.log(this.state.recommendedList);
  };

  render() {
    return (
      <div className="home_page">
        <div className="container">
          <div className="page">
            <section className="row">
              <div className="top_part">
                <h2>Polecane teraz</h2>
              </div>
              <div className="main_part">
                <Recommended recommendedList={this.state.recommendedList} />
              </div>
            </section>
            <section className="row">
              <div className="top_part">
                <h2>Kursy</h2>
                <NavLink className="link_reset" to="/kursy/lista">
                  Zobacz wszystkie
                </NavLink>
              </div>
              <div className="main_part"></div>
            </section>
            <section className="row">
              <div className="top_part">
                <h2>Wykłady gościnne</h2>
                <NavLink className="link_reset" to="/wyklady/lista">
                  Zobacz wszystkie
                </NavLink>
              </div>
              <div className="main_part"></div>
            </section>
            <section className="row">
              <div className="top_part">
                <h2>Podręczniki</h2>
                <NavLink className="link_reset" to="/podreczniki/lista">
                  Zobacz wszystkie
                </NavLink>
              </div>
              <div className="main_part"></div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
