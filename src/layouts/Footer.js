import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../styles/layouts/Footer.css";

import collegeLogo from "../images/footer/copernicus_college_logo2.png";
import centerLogo from "../images/footer/copernicus_center_logo.png";
import univerLogo from "../images/footer/uniwersytet_logo.png";

class Footer extends Component {
  state = {
    langValue: "pl",
    secondListEn: [
      { path: "o-nas", name: "About Us" },
      { path: "fundacja-centrum-kopernika", name: "Copernicus Center Foundation" },
      { path: "regulamin", name: "Terms of service" },
      { path: "kodeks-honorowy", name: "Honor code" },
      { path: "faq", name: "FAQ" },
      { path: "kontakt", name: "Contact" },
    ],
    secondListPl: [
      { path: "o-nas", name: "O nas" },
      { path: "fundacja-centrum-kopernika", name: "Fundacja Centrum Kopernika" },
      { path: "regulamin", name: "Regulamin" },
      { path: "kodeks-honorowy", name: "Kodeks honorowy" },
      { path: "faq", name: "FAQ" },
      { path: "kontakt", name: "Kontakt" },
    ],
  };

  secondMenuPl = this.state.secondListPl.map((item) => (
    <li key={item.path}>
      <NavLink className="link_reset" to={item.path}>
        {item.name}
      </NavLink>
    </li>
  ));

  secondMenuEn = this.state.secondListEn.map((item) => (
    <li key={item.path}>
      <NavLink className="link_reset" to={item.path}>
        {item.name}
      </NavLink>
    </li>
  ));

  userChooseLang = (e) => {
    this.setState({
      langValue: e.target.value,
      isChanged: true,
    });
  };

  render() {
    return (
      <>
        <section className="top_section">
          <div className="container">
            <div className="footer_about">
              <NavLink className="link_reset" to="/">
                <img src={collegeLogo} alt="Copernicus College" />
              </NavLink>
              <h4>Copernicus College</h4>
              <p>
                Pierwsza polska platforma umożliwiająca szerokiej publiczności uczestniczenie w
                wykładach i kursach uniwersyteckich prowadzonych przez najlepszych polskich uczonych
                i młodych naukowców - online i całkowicie bezpłatnie
              </p>
            </div>
            <div className="footer_nav">
              <ul>{this.props.lang === "pl" ? this.secondMenuPl : this.secondMenuEn}</ul>
            </div>
            <div className="footer_top_right">
              <p className="contact">
                <span>
                  <i className="far fa-envelope"></i>
                </span>
                kontakt@copernicuscollege.pl
              </p>
              <p className="socials">
                <a
                  className="link_reset social_link"
                  href="https://www.facebook.com/CopernicusCollege"
                  alt="Facebook">
                  <span>
                    <i className="fab fa-facebook-f"></i>
                  </span>
                </a>
                <a
                  className="link_reset social_link"
                  href="https://www.youtube.com/user/CopernicusCenter"
                  alt="Youtube">
                  <span>
                    <i className="fab fa-youtube-square"></i>
                  </span>
                </a>
              </p>
              <div className="form">
                <p>{this.lang === "pl" ? "Wybór języka" : "Choose language"}</p>
                <div className="footer_form" method="get" value="en">
                  <select className="lang" name="lang" id="lang" onChange={this.userChooseLang}>
                    <option value="pl">polski</option>
                    <option value="en">English</option>
                  </select>
                  <button
                    className="btn_reset"
                    disabled={this.state.langValue === this.props.lang ? true : false}
                    onClick={() => this.props.changeLang(this.state.langValue)}>
                    Zmień
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mid_section">
          <div className="container">
            <div className="footer_left_logo">
              <a className="link_reset " href="https://www.copernicuscenter.edu.pl/">
                <img src={centerLogo} alt="Copernicus Center" />
              </a>
            </div>
            <div className="footer_right_logo">
              <a className="link_reset " href="https://www.uj.edu.pl/">
                <img src={univerLogo} alt="Uniwersytet Jagielloński" />
              </a>
            </div>
          </div>
        </section>

        <section className="bottom_section">
          <div className="container">
            <div className="footer_nav">
              <ul>{this.props.lang === "pl" ? this.props.menuPl : this.props.menuEn}</ul>
            </div>
            <div className="footer_bottom_right">
              <div>
                © 2014-2021, <h6>Copernicus Center for Interdisciplinary Studies</h6>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Footer;
