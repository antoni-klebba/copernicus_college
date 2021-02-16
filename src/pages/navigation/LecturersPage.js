import React, { Component } from "react";
import Instructors from "../../components/Instructors";
import "../../styles/pages/LecturersPage.css";

import bartoszBrozek from "../../images/thumbnails/lectures/bartosz-brozek.png";
import gregoryChaitin from "../../images/thumbnails/lectures/gregory-chaitin.png";
import grzegorzBlicharz from "../../images/thumbnails/lectures/grzegorz-blicharz.png";
import joanaBarcik from "../../images/thumbnails/lectures/joana-barcik.png";
import johnBarrow from "../../images/thumbnails/lectures/john-barrow.png";
import julianBarbour from "../../images/thumbnails/lectures/julian-barbour.png";
import marcoBersanelli from "../../images/thumbnails/lectures/marco-bersanelli.png";
import marekBinder from "../../images/thumbnails/lectures/marek-binder.png";
import michaelArbib from "../../images/thumbnails/lectures/michael-arbib.png";
import nedBlock from "../../images/thumbnails/lectures/ned-block.png";

class LecturersPage extends Component {
  state = {
    instructors: [
      {
        id: 0,
        name: "Bartosz Brożek",
        path: "/bartosz-brozek",
        thumbnail: bartoszBrozek,
      },
      {
        id: 1,
        name: "Gregory Chaitin",
        path: "/gregory-chaitin",
        thumbnail: gregoryChaitin,
      },
      {
        id: 2,
        name: "Grzegorz Blicharz",
        path: "/grzegorz-blicharz",
        thumbnail: grzegorzBlicharz,
      },
      {
        id: 3,
        name: "Joana Barcik",
        path: "/joana-barcik",
        thumbnail: joanaBarcik,
      },
      {
        id: 4,
        name: "John Barrow",
        path: "/john-barrow",
        thumbnail: johnBarrow,
      },
      {
        id: 5,
        name: "Julian Barbour",
        path: "/julian-barbour",
        thumbnail: julianBarbour,
      },
      {
        id: 6,
        name: "Marco Bersanelli",
        path: "/marco-bersanelli",
        thumbnail: marcoBersanelli,
      },
      {
        id: 7,
        name: "Marek Binder",
        path: "/marek-binder",
        thumbnail: marekBinder,
      },
      {
        id: 8,
        name: "Michael Arbib",
        path: "/michael-arbib",
        thumbnail: michaelArbib,
      },
      {
        id: 9,
        name: "Ned Block",
        path: "/ned-block",
        thumbnail: nedBlock,
      },
    ],
  };
  render() {
    return (
      <div className="lecturers_page">
        <div className="container">
          <div className="page">
            <Instructors instructors={this.state.instructors} />
          </div>
        </div>
      </div>
    );
  }
}

export default LecturersPage;
