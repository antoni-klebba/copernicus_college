import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/layouts/Footer.css";

import collegeLogo from "../images/footer/copernicus_college_logo2.png";
import centerLogo from "../images/footer/copernicus_center_logo.png";
import univerLogo from "../images/footer/uniwersytet_logo.png";

const list = [
  { path: "o-nas", name: "O nas" },
  { path: "fundacja-centrum-kopernika", name: "Fundacja Centrum Kopernika" },
  { path: "regulamin", name: "Regulamin" },
  { path: "kodeks-honorowy", name: "Kodeks honorowy" },
  { path: "faq", name: "FAQ" },
  { path: "kontakt", name: "Kontakt" },
];

const Footer = (props) => {
  const secondMenu = list.map((item) => (
    <li key={item.path}>
      <NavLink className="link_reset" to={item.path}>
        {item.name}
      </NavLink>
    </li>
  ));

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
              wykładach i kursach uniwersyteckich prowadzonych przez najlepszych polskich uczonych i
              młodych naukowców - online i całkowicie bezpłatnie
            </p>
          </div>
          <div className="footer_nav">
            <ul>{secondMenu}</ul>
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
              <p>Wybór języka</p>
              <form className="footer_form">
                <select className="lang" name="lang" id="lang">
                  <option value="pl">Polski</option>
                  <option value="en">English</option>
                </select>
                <button className="btn_reset" disabled="">
                  Zmień
                </button>
              </form>
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
            <ul>{props.menu}</ul>
          </div>
          <div className="footer_bottom_right">
            <p>
              © 2014-2021, <h6>Copernicus Center for Interdisciplinary Studies</h6>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
