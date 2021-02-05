import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import TopBar from "./layouts/TopBar";
import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";
import Page from "./layouts/Page";
import Footer from "./layouts/Footer";

const list = [
  { id: 0, path: "/o-nas", name: "O nas" },
  { id: 1, path: "/kursy/lista", name: "Kursy" },
  { id: 2, path: "/wyklady/lista", name: "Wykłady" },
  { id: 3, path: "/abc", name: "ABC" },
  { id: 4, path: "/podreczniki/lista", name: "Podręczniki" },
  { id: 5, path: "/wykladowcy/lista", name: "Wykładowcy" },
  { id: 6, path: "/kategorie", name: "Kategorie" },
];

class App extends Component {
  state = {};

  menu = list.map((item) => (
    <li key={item.path}>
      <NavLink className="link_reset" to={item.path}>
        {item.name}
      </NavLink>
    </li>
  ));

  render() {
    return (
      <Router>
        <div className="app">
          <section className="top_bar">
            <TopBar />
          </section>
          <nav className="navigation">
            <Navigation menu={this.menu} />
          </nav>
          <header className="header">
            <Header />
          </header>
          <section className="page">
            <Page />
          </section>
          <footer className="footer">
            <Footer menu={this.menu} />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
