import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import TopBar from "./layouts/TopBar";
import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";
import Page from "./layouts/Page";
import Footer from "./layouts/Footer";
//Menu in pl and eng
const ListPl = [
  { id: 0, path: "/o-nas", name: "O nas" },
  { id: 1, path: "/kursy/lista", name: "Kursy" },
  { id: 2, path: "/wyklady/lista", name: "Wykłady" },
  { id: 3, path: "/abc/lista", name: "ABC" },
  { id: 4, path: "/podreczniki/lista", name: "Podręczniki" },
  { id: 5, path: "/wykladowcy/lista", name: "Wykładowcy" },
  { id: 6, path: "/kategorie/lista", name: "Kategorie" },
];
const ListEn = [
  { id: 0, path: "/o-nas", name: "About us" },
  { id: 1, path: "/kursy/lista", name: "Courses" },
  { id: 2, path: "/wyklady/lista", name: "Lectures" },
  { id: 3, path: "/abc/lista", name: "ABC" },
  { id: 4, path: "/podreczniki/lista", name: "Textbooks" },
  { id: 5, path: "/wykladowcy/lista", name: "Instructors" },
  { id: 6, path: "/kategorie/lista", name: "Categories" },
];

class App extends Component {
  state = {
    language: "pl",
  };
  //Menu in pl and eng
  menuPl = ListPl.map((item) => (
    <li key={item.path}>
      <NavLink className="link_reset" to={item.path}>
        {item.name}
      </NavLink>
    </li>
  ));

  menuEn = ListEn.map((item) => (
    <li key={item.path}>
      <NavLink className="link_reset" to={item.path}>
        {item.name}
      </NavLink>
    </li>
  ));

  changeLanguage = (language) => {
    if (language === "en") {
      alert(
        "Please note that this is a beta english version of the Copernicus College platform which is still undergoing final testing"
      );
    }

    this.setState({
      language,
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <section className="top_bar">
            <TopBar lang={this.state.language} />
          </section>
          <nav className="navigation">
            <Navigation menuPl={this.menuPl} menuEn={this.menuEn} lang={this.state.language} />
          </nav>
          <header className="header">
            <Header lang={this.state.language} />
          </header>
          <section className="page">
            <Page />
          </section>
          <footer className="footer">
            <Footer
              lang={this.state.language}
              menuPl={this.menuPl}
              menuEn={this.menuEn}
              changeLang={this.changeLanguage}
            />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
