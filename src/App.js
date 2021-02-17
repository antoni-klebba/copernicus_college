import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import TopBar from "./layouts/TopBar";
import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";
import Page from "./layouts/Page";
import Footer from "./layouts/Footer";

//Textbooks thumbnails
import metodologiaNaukSpolecznychIHumanistycznych from "./images/thumbnails/textbooks/metodologia-nauk-spolecznych-i-humanistycznych.png";
import interdyscyplinarnoscWNaukachHumanistycznychISpolecznych from "./images/thumbnails/textbooks/interdyscyplinarnosc-w-naukach-humanistycznych-i-spolecznych..png";
import kognitywistykaWPraktyce from "./images/thumbnails/textbooks/kognitywistyka-w-praktyce.png";
import wprowadzenieDoFilozofiiUmysluIKognitywistyki from "./images/thumbnails/textbooks/wprowadzenie-do-filozofii-umyslu-i-kognitywistyki.png";
import biologiaEwolucyjnaIntuicyjneWprowadzenie from "./images/thumbnails/textbooks/biologia-ewolucyjna-intuicyjne-wprowadzenie.png";
import wstepDoBiblistyki from "./images/thumbnails/textbooks/wstep-do-biblistyki.png";
import naukaAReligiaCz1 from "./images/thumbnails/textbooks/nauka-a-religia-cz-1.png";
import wprowadzenieDoFilozofiiNauki from "./images/thumbnails/textbooks/wprowadzenie-do-filozofii-nauki.png";

//Instructors thumbnails
import bartoszBrozek from "./images/thumbnails/Instructors/bartosz-brozek.png";
import gregoryChaitin from "./images/thumbnails/Instructors/gregory-chaitin.png";
import grzegorzBlicharz from "./images/thumbnails/Instructors/grzegorz-blicharz.png";
import joanaBarcik from "./images/thumbnails/Instructors/joana-barcik.png";
import johnBarrow from "./images/thumbnails/Instructors/john-barrow.png";
import julianBarbour from "./images/thumbnails/Instructors/julian-barbour.png";
import marcoBersanelli from "./images/thumbnails/Instructors/marco-bersanelli.png";
import marekBinder from "./images/thumbnails/Instructors/marek-binder.png";
import michaelArbib from "./images/thumbnails/Instructors/michael-arbib.png";
import nedBlock from "./images/thumbnails/Instructors/ned-block.png";

class App extends Component {
  state = {
    textbooksList: [
      {
        title: "Metodologia nauk społecznych i humanistycznych",
        about:
          "Czym różnią się metody wykorzystywane przez przedstawicieli różnych nauk humanistycznych i społecznych? Co analiza metodologii określonej dyscypliny może nam powiedzieć o tej dyscyplinie?",
        path: "/podreczniki/lista/metodologia-nauk-spolecznych-i-humanistycznych",
        thumbnail: metodologiaNaukSpolecznychIHumanistycznych,
        status: "Nieograniczony dostęp",
        type: "textbook",
      },
      {
        title: "Interdyscyplinarność w naukach humanistycznych i społecznych",
        about:
          "Czym jest interdyscyplinarność i jak przejawia się w różnych dyscyplinach? Na czym polega specyfika interdyscyplinarności nauk humanistycznych i społecznych?",
        path: "/podreczniki/lista/interdyscyplinarnosc-w-naukach-humanistycznych-i-spolecznych",
        thumbnail: interdyscyplinarnoscWNaukachHumanistycznychISpolecznych,
        status: "Nieograniczony dostęp",
        type: "textbook",
      },
      {
        title: "kognitywistyka w praktyce",
        about:
          "Podręcznik Kognitywistyka w praktyce jest poświęcony rozmaitym zastosowaniom najnowszych osiągnięć nauk kognitywnych.",
        path: "/podreczniki/lista/kognitywistyka-w-praktyce",
        thumbnail: kognitywistykaWPraktyce,
        status: "Nieograniczony dostęp",
        type: "textbook",
      },
      {
        title: "Wprowadzenie do filozofii umysłu i kognitywistyki",
        about:
          "Podręcznik stanowi przystępne wprowadzenie do wybranych zagadnień z zakresu filozofii umysłu.",
        path: "/podreczniki/lista/wprowadzenie-do-filozofii-umyslu-i-kognitywistyki",
        thumbnail: wprowadzenieDoFilozofiiUmysluIKognitywistyki,
        status: "Nieograniczony dostęp",
        type: "textbook",
      },
      {
        title: "Biologia ewolucyjna: intuicyjne wprowadzenie",
        about:
          "Zawsze chiałeś wiedzieć na czym tak naprawdę polega ewolucja biologiczna, ale nie wiedziałeś gdzie szukać?",
        path: "/podreczniki/lista/biologia-ewolucyjna-intuicyjne-wprowadzenie",
        thumbnail: biologiaEwolucyjnaIntuicyjneWprowadzenie,
        status: "Nieograniczony dostęp",
        type: "textbook",
      },
      {
        title: "Wstep do biblistyki",
        about:
          "Podręcznik stanowi przystępne wprowadzenie do lektury Biblii. Zawarte w nim uwagi okażą się przydatne zarówno dla osób zainteresowanych teologią chrześcijańską, jak i Biblią jako częścią kultury.",
        path: "/podreczniki/lista/wstep-do-biblistyki",
        thumbnail: wstepDoBiblistyki,
        status: "Nieograniczony dostęp",
        type: "textbook",
      },
      {
        title: "Nauka a religia - cz. 1",
        about:
          "Podręcznik dr hab. Teresy Obolevitch stanowi wprowadzenie do analizy relacji występujących pomiędzy nauką i religią.",
        path: "/podreczniki/lista/nauka-a-religia-cz-1",
        thumbnail: naukaAReligiaCz1,
        status: "Nieograniczony dostęp",
        type: "textbook",
      },
      {
        title: "Wprowadzenie do filozofii nauki",
        about:
          "Przystępne wprowadzenie do filozofii nauki skierowane do wszystkich osób – zarówno „humanistów”, przedstawicieli dyscyplin empirycznych, jak i inżynierów, chcących podjąć refleksję nad nauką.",
        path: "/podreczniki/lista/wprowadzenie-do-filozofii-nauki",
        thumbnail: wprowadzenieDoFilozofiiNauki,
        status: "Nieograniczony dostęp",
        type: "textbook",
      },
    ],
    coursesList: [
      {
        title: "Metodologia nauk społecznych i humanistycznych",
        about:
          "Czym różnią się metody wykorzystywane przez przedstawicieli różnych nauk humanistycznych i społecznych?",
        path: "/podreczniki/lista/metodologia-nauk-spolecznych-i-humanistycznych",
        thumbnail: metodologiaNaukSpolecznychIHumanistycznych,
        status: "Zakończenie bieżącej edycji: 16 maja 2021",
        type: "course",
      },
      {
        title: "Interdyscyplinarność w naukach humanistycznych i społecznych",
        about: "Czym jest interdyscyplinarność i jak przejawia się w różnych dyscyplinach?",
        path: "/podreczniki/lista/interdyscyplinarnosc-w-naukach-humanistycznych-i-spolecznych",
        thumbnail: interdyscyplinarnoscWNaukachHumanistycznychISpolecznych,
        status: "Zakończenie bieżącej edycji: 9 czerwca 2021",
        type: "course",
      },
      {
        title: "kognitywistyka w praktyce",
        about:
          "Podręcznik Kognitywistyka w praktyce jest poświęcony rozmaitym zastosowaniom najnowszych osiągnięć nauk kognitywnych.",
        path: "/podreczniki/lista/kognitywistyka-w-praktyce",
        thumbnail: kognitywistykaWPraktyce,
        status: "Zakończenie bieżącej edycji: 24 sierpnia 2021",
        type: "course",
      },
      {
        title: "Wprowadzenie do filozofii umysłu i kognitywistyki",
        about:
          "Podręcznik stanowi przystępne wprowadzenie do wybranych zagadnień z zakresu filozofii umysłu.",
        path: "/podreczniki/lista/wprowadzenie-do-filozofii-umyslu-i-kognitywistyki",
        thumbnail: wprowadzenieDoFilozofiiUmysluIKognitywistyki,
        status: "Zakończenie bieżącej edycji: 26 kwietnia 2021",
        type: "course",
      },
      {
        title: "Biologia ewolucyjna: intuicyjne wprowadzenie",
        about:
          "Zawsze chiałeś wiedzieć na czym tak naprawdę polega ewolucja biologiczna, ale nie wiedziałeś gdzie szukać?",
        path: "/podreczniki/lista/biologia-ewolucyjna-intuicyjne-wprowadzenie",
        thumbnail: biologiaEwolucyjnaIntuicyjneWprowadzenie,
        status: "Start: 24 lutego 2021",
        type: "course",
      },
      {
        title: "Wstep do biblistyki",
        about:
          "Podręcznik stanowi przystępne wprowadzenie do lektury Biblii. Zawarte w nim uwagi okażą się przydatne zarówno dla osób zainteresowanych teologią chrześcijańską, jak i Biblią jako częścią kultury.",
        path: "/podreczniki/lista/wstep-do-biblistyki",
        thumbnail: wstepDoBiblistyki,
        status: "Start: 31 kwietnia 2021",
        type: "course",
      },
      {
        title: "Nauka a religia - cz. 1",
        about:
          "Podręcznik dr hab. Teresy Obolevitch stanowi wprowadzenie do analizy relacji występujących pomiędzy nauką i religią.",
        path: "/podreczniki/lista/nauka-a-religia-cz-1",
        thumbnail: naukaAReligiaCz1,
        status: "Zakończenie bieżącej edycji: 26 kwietnia 2021",
        type: "course",
      },
      {
        title: "Wprowadzenie do filozofii nauki",
        about:
          "Przystępne wprowadzenie do filozofii nauki skierowane do wszystkich osób – zarówno „humanistów”, przedstawicieli dyscyplin empirycznych, jak i inżynierów.",
        path: "/podreczniki/lista/wprowadzenie-do-filozofii-nauki",
        thumbnail: wprowadzenieDoFilozofiiNauki,
        status: "Zakończenie bieżącej edycji: 26 kwietnia 2021",
        type: "course",
      },
    ],
    lecturesList: [
      {
        title: "Metodologia nauk społecznych i humanistycznych",
        about:
          "Czym różnią się metody wykorzystywane przez przedstawicieli różnych nauk humanistycznych i społecznych? Co analiza metodologii określonej dyscypliny może nam powiedzieć o tej dyscyplinie?",
        path: "/podreczniki/lista/metodologia-nauk-spolecznych-i-humanistycznych",
        thumbnail: metodologiaNaukSpolecznychIHumanistycznych,
        status: "Nieograniczony dostęp",
        type: "lecture",
      },
      {
        title: "Interdyscyplinarność w naukach humanistycznych i społecznych",
        about:
          "Czym jest interdyscyplinarność i jak przejawia się w różnych dyscyplinach? Na czym polega specyfika interdyscyplinarności nauk humanistycznych i społecznych?",
        path: "/podreczniki/lista/interdyscyplinarnosc-w-naukach-humanistycznych-i-spolecznych",
        thumbnail: interdyscyplinarnoscWNaukachHumanistycznychISpolecznych,
        status: "Nieograniczony dostęp",
        type: "lecture",
      },
      {
        title: "kognitywistyka w praktyce",
        about:
          "Podręcznik Kognitywistyka w praktyce jest poświęcony rozmaitym zastosowaniom najnowszych osiągnięć nauk kognitywnych.",
        path: "/podreczniki/lista/kognitywistyka-w-praktyce",
        thumbnail: kognitywistykaWPraktyce,
        status: "Nieograniczony dostęp",
        type: "lecture",
      },
      {
        title: "Wprowadzenie do filozofii umysłu i kognitywistyki",
        about:
          "Podręcznik stanowi przystępne wprowadzenie do wybranych zagadnień z zakresu filozofii umysłu.",
        path: "/podreczniki/lista/wprowadzenie-do-filozofii-umyslu-i-kognitywistyki",
        thumbnail: wprowadzenieDoFilozofiiUmysluIKognitywistyki,
        status: "Nieograniczony dostęp",
        type: "lecture",
      },
      {
        title: "Biologia ewolucyjna: intuicyjne wprowadzenie",
        about:
          "Zawsze chiałeś wiedzieć na czym tak naprawdę polega ewolucja biologiczna, ale nie wiedziałeś gdzie szukać?",
        path: "/podreczniki/lista/biologia-ewolucyjna-intuicyjne-wprowadzenie",
        thumbnail: biologiaEwolucyjnaIntuicyjneWprowadzenie,
        status: "Nieograniczony dostęp",
        type: "lecture",
      },
      {
        title: "Wstep do biblistyki",
        about:
          "Podręcznik stanowi przystępne wprowadzenie do lektury Biblii. Zawarte w nim uwagi okażą się przydatne zarówno dla osób zainteresowanych teologią chrześcijańską, jak i Biblią jako częścią kultury.",
        path: "/podreczniki/lista/wstep-do-biblistyki",
        thumbnail: wstepDoBiblistyki,
        status: "Nieograniczony dostęp",
        type: "lecture",
      },
      {
        title: "Nauka a religia - cz. 1",
        about:
          "Podręcznik dr hab. Teresy Obolevitch stanowi wprowadzenie do analizy relacji występujących pomiędzy nauką i religią.",
        path: "/podreczniki/lista/nauka-a-religia-cz-1",
        thumbnail: naukaAReligiaCz1,
        status: "Nieograniczony dostęp",
        type: "lecture",
      },
      {
        title: "Wprowadzenie do filozofii nauki",
        about:
          "Przystępne wprowadzenie do filozofii nauki skierowane do wszystkich osób – zarówno „humanistów”, przedstawicieli dyscyplin empirycznych, jak i inżynierów, chcących podjąć refleksję nad nauką.",
        path: "/podreczniki/lista/wprowadzenie-do-filozofii-nauki",
        thumbnail: wprowadzenieDoFilozofiiNauki,
        status: "Nieograniczony dostęp",
        type: "lecture",
      },
    ],
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
    categoriesList: [
      { id: 0, text: "Filozofia", path: "filozofia" },
      { id: 1, text: "Fizyka", path: "fizyka" },
      { id: 2, text: "Chemia", path: "chemia" },
      { id: 3, text: "Kosmologia", path: "kosmologia" },
      { id: 4, text: "Teologia", path: "teologia" },
      { id: 5, text: "Neuroscience", path: "neuroscience" },
      { id: 6, text: "Kognitywistyka", path: "kognitywistyka" },
      { id: 7, text: "Astronomia", path: "astronomia" },
      { id: 8, text: "Filozofia przyrody", path: "filozofia-przyrody" },
      { id: 9, text: "Psychologia", path: "psychologia" },
      { id: 10, text: "Edukacja", path: "edukacja" },
      { id: 11, text: "Filozofia nauki", path: "filozofia-nauki" },
      { id: 12, text: "Metodologia nauk", path: "metodologia-nauk" },
      { id: 13, text: "Matematyka", path: "matematyka" },
      { id: 14, text: "Prymatologia", path: "prymatologia" },
      { id: 15, text: "Antropologia", path: "antropologia" },
      { id: 16, text: "Medycyna", path: "medycyna" },
      { id: 17, text: "Psychiatria", path: "psychiatria" },
      { id: 18, text: "Neurobiologia", path: "neurobiologia" },
      { id: 19, text: "Filozofia religii", path: "filozofia-religii" },
      { id: 20, text: "Religioznawstwo", path: "religioznawstwo" },
      { id: 21, text: "Kulturoznawstwo", path: "kulturoznawstwo" },
      { id: 22, text: "Historia nauki", path: "historia-nauki" },
      { id: 23, text: "Genetyka", path: "genetyka" },
      { id: 24, text: "Biologia", path: "biologia" },
      { id: 25, text: "Nauki o życiu", path: "nauki-o-zyciu" },
      { id: 26, text: "Ewolucja", path: "ewolucja" },
      { id: 27, text: "Nauki prawne", path: "nauki-prawne" },
      { id: 28, text: "Prawo karne", path: "prawo-karne" },
      { id: 29, text: "Historia", path: "historia" },
    ],
    language: "pl",
    ListPl: [
      { id: 0, path: "/o-nas", name: "O nas" },
      { id: 1, path: "/kursy/lista", name: "Kursy" },
      { id: 2, path: "/wyklady/lista", name: "Wykłady" },
      { id: 3, path: "/abc/lista", name: "ABC" },
      { id: 4, path: "/podreczniki/lista", name: "Podręczniki" },
      { id: 5, path: "/wykladowcy/lista", name: "Wykładowcy" },
      { id: 6, path: "/kategorie/lista", name: "Kategorie" },
    ],
    ListEn: [
      { id: 0, path: "/o-nas", name: "About us" },
      { id: 1, path: "/kursy/lista", name: "Courses" },
      { id: 2, path: "/wyklady/lista", name: "Lectures" },
      { id: 3, path: "/abc/lista", name: "ABC" },
      { id: 4, path: "/podreczniki/lista", name: "Textbooks" },
      { id: 5, path: "/wykladowcy/lista", name: "Instructors" },
      { id: 6, path: "/kategorie/lista", name: "Categories" },
    ],
  };
  //Menu in pl and eng
  menuPl = this.state.ListPl.map((item) => (
    <li key={item.path}>
      <NavLink className="link_reset" to={item.path}>
        {item.name}
      </NavLink>
    </li>
  ));

  menuEn = this.state.ListEn.map((item) => (
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
            <Page {...this.state} />
          </section>
          <footer className="footer">
            <Footer
              lang={this.state.language}
              menuPl={this.state.menuPl}
              menuEn={this.state.menuEn}
              changeLang={this.changeLanguage}
            />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
