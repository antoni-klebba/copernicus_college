import React, { Component } from "react";
import Instructor from "../../components/Instructor";
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
    instructorsList: [
      {
        id: 0,
        name: "Bartosz Brożek",
        path: "/wykladowcy/lista/bartosz-brozek",
        thumbnail: bartoszBrozek,
      },
      {
        id: 1,
        name: "Gregory Chaitin",
        path: "/wykladowcy/lista/gregory-chaitin",
        thumbnail: gregoryChaitin,
      },
      {
        id: 2,
        name: "Grzegorz Blicharz",
        path: "/wykladowcy/lista/grzegorz-blicharz",
        thumbnail: grzegorzBlicharz,
      },
      {
        id: 3,
        name: "Joana Barcik",
        path: "/wykladowcy/lista/joana-barcik",
        thumbnail: joanaBarcik,
      },
      {
        id: 4,
        name: "John Barrow",
        path: "/wykladowcy/lista/john-barrow",
        thumbnail: johnBarrow,
      },
      {
        id: 5,
        name: "Julian Barbour",
        path: "/wykladowcy/lista/julian-barbour",
        thumbnail: julianBarbour,
      },
      {
        id: 6,
        name: "Marco Bersanelli",
        path: "/wykladowcy/lista/marco-bersanelli",
        thumbnail: marcoBersanelli,
      },
      {
        id: 7,
        name: "Marek Binder",
        path: "/wykladowcy/lista/marek-binder",
        thumbnail: marekBinder,
      },
      {
        id: 8,
        name: "Michael Arbib",
        path: "/wykladowcy/lista/michael-arbib",
        thumbnail: michaelArbib,
      },
      {
        id: 9,
        name: "Ned Block",
        path: "/wykladowcy/lista/ned-block",
        thumbnail: nedBlock,
      },
      {
        id: 10,
        name: "Bartosz Brożek",
        path: "/wykladowcy/lista/bartosz-brozek",
        thumbnail: bartoszBrozek,
      },
      {
        id: 11,
        name: "Gregory Chaitin",
        path: "/wykladowcy/lista/gregory-chaitin",
        thumbnail: gregoryChaitin,
      },
      {
        id: 12,
        name: "Grzegorz Blicharz",
        path: "/wykladowcy/lista/grzegorz-blicharz",
        thumbnail: grzegorzBlicharz,
      },
      {
        id: 13,
        name: "Joana Barcik",
        path: "/wykladowcy/lista/joana-barcik",
        thumbnail: joanaBarcik,
      },
      {
        id: 14,
        name: "John Barrow",
        path: "/wykladowcy/lista/john-barrow",
        thumbnail: johnBarrow,
      },
      {
        id: 15,
        name: "Julian Barbour",
        path: "/wykladowcy/lista/julian-barbour",
        thumbnail: julianBarbour,
      },
      {
        id: 16,
        name: "Marco Bersanelli",
        path: "/wykladowcy/lista/marco-bersanelli",
        thumbnail: marcoBersanelli,
      },
      {
        id: 17,
        name: "Marek Binder",
        path: "/wykladowcy/lista/marek-binder",
        thumbnail: marekBinder,
      },
      {
        id: 18,
        name: "Michael Arbib",
        path: "/wykladowcy/lista/michael-arbib",
        thumbnail: michaelArbib,
      },
      {
        id: 19,
        name: "Ned Block",
        path: "/wykladowcy/lista/ned-block",
        thumbnail: nedBlock,
      },
    ],
  };

  instructors = this.state.instructorsList.map((item) => <Instructor key={item.id} {...item} />);

  render() {
    return (
      <div className="lecturers_page">
        <div className="container">
          <div className="page">{this.instructors}</div>
        </div>
      </div>
    );
  }
}

export default LecturersPage;
