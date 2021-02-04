import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import TopBar from "./layouts/TopBar";
import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";
import Page from "./layouts/Page";
import Footer from "./layouts/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="app">
          <section className="top_bar">
            <TopBar />
          </section>
          <nav className="navigation">
            <Navigation />
          </nav>
          <header className="header">
            <Header />
          </header>
          <section className="page">
            <Page />
          </section>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
