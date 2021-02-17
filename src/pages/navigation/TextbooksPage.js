import React, { Component } from "react";
import Textbook from "../../components/Textbook";
import "../../styles/pages/TextbooksPage.css";

import metodologiaNaukSpolecznychIHumanistycznych from "../../images/thumbnails/textbooks/metodologia-nauk-spolecznych-i-humanistycznych.png";
import interdyscyplinarnoscWNaukachHumanistycznychISpolecznych from "../../images/thumbnails/textbooks/interdyscyplinarnosc-w-naukach-humanistycznych-i-spolecznych..png";
import kognitywistykaWPraktyce from "../../images/thumbnails/textbooks/kognitywistyka-w-praktyce.png";
import wprowadzenieDoFilozofiiUmysluIKognitywistyki from "../../images/thumbnails/textbooks/wprowadzenie-do-filozofii-umyslu-i-kognitywistyki.png";
import biologiaEwolucyjnaIntuicyjneWprowadzenie from "../../images/thumbnails/textbooks/biologia-ewolucyjna-intuicyjne-wprowadzenie.png";
import wstepDoBiblistyki from "../../images/thumbnails/textbooks/wstep-do-biblistyki.png";
import naukaAReligiaCz1 from "../../images/thumbnails/textbooks/nauka-a-religia-cz-1.png";
import wprowadzenieDoFilozofiiNauki from "../../images/thumbnails/textbooks/wprowadzenie-do-filozofii-nauki.png";

class Textbooks extends Component {
  state = {
    textbooksList: [
      {
        title: "Metodologia nauk społecznych i humanistycznych",
        about:
          "Czym różnią się metody wykorzystywane przez przedstawicieli różnych nauk humanistycznych i społecznych? Co analiza metodologii określonej dyscypliny może nam powiedzieć o tej dyscyplinie?",
        path: "/podreczniki/lista/metodologia-nauk-spolecznych-i-humanistycznych",
        thumbnail: metodologiaNaukSpolecznychIHumanistycznych,
        status: "Nieograniczony dostęp",
      },
      {
        title: "Interdyscyplinarność w naukach humanistycznych i społecznych",
        about:
          "Czym jest interdyscyplinarność i jak przejawia się w różnych dyscyplinach? Na czym polega specyfika interdyscyplinarności nauk humanistycznych i społecznych?",
        path: "/podreczniki/lista/interdyscyplinarnosc-w-naukach-humanistycznych-i-spolecznych",
        thumbnail: interdyscyplinarnoscWNaukachHumanistycznychISpolecznych,
        status: "Nieograniczony dostęp",
      },
      {
        title: "kognitywistyka w praktyce",
        about:
          "Podręcznik Kognitywistyka w praktyce jest poświęcony rozmaitym zastosowaniom najnowszych osiągnięć nauk kognitywnych.",
        path: "/podreczniki/lista/kognitywistyka-w-praktyce",
        thumbnail: kognitywistykaWPraktyce,
        status: "Nieograniczony dostęp",
      },
      {
        title: "Wprowadzenie do filozofii umysłu i kognitywistyki",
        about:
          "Podręcznik stanowi przystępne wprowadzenie do wybranych zagadnień z zakresu filozofii umysłu.",
        path: "/podreczniki/lista/wprowadzenie-do-filozofii-umyslu-i-kognitywistyki",
        thumbnail: wprowadzenieDoFilozofiiUmysluIKognitywistyki,
        status: "Nieograniczony dostęp",
      },
      {
        title: "Biologia ewolucyjna: intuicyjne wprowadzenie",
        about:
          "Zawsze chiałeś wiedzieć na czym tak naprawdę polega ewolucja biologiczna, ale nie wiedziałeś gdzie szukać?",
        path: "/podreczniki/lista/biologia-ewolucyjna-intuicyjne-wprowadzenie",
        thumbnail: biologiaEwolucyjnaIntuicyjneWprowadzenie,
        status: "Nieograniczony dostęp",
      },
      {
        title: "Wstep do biblistyki",
        about:
          "Podręcznik stanowi przystępne wprowadzenie do lektury Biblii. Zawarte w nim uwagi okażą się przydatne zarówno dla osób zainteresowanych teologią chrześcijańską, jak i Biblią jako częścią kultury.",
        path: "/podreczniki/lista/wstep-do-biblistyki",
        thumbnail: wstepDoBiblistyki,
        status: "Nieograniczony dostęp",
      },
      {
        title: "Nauka a religia - cz. 1",
        about:
          "Podręcznik dr hab. Teresy Obolevitch stanowi wprowadzenie do analizy relacji występujących pomiędzy nauką i religią.",
        path: "/podreczniki/lista/nauka-a-religia-cz-1",
        thumbnail: naukaAReligiaCz1,
        status: "Nieograniczony dostęp",
      },
      {
        title: "Wprowadzenie do filozofii nauki",
        about:
          "Przystępne wprowadzenie do filozofii nauki skierowane do wszystkich osób – zarówno „humanistów”, przedstawicieli dyscyplin empirycznych, jak i inżynierów, chcących podjąć refleksję nad nauką.",
        path: "/podreczniki/lista/wprowadzenie-do-filozofii-nauki",
        thumbnail: wprowadzenieDoFilozofiiNauki,
        status: "Nieograniczony dostęp",
      },
    ],
  };

  textbooks = this.state.textbooksList.map((item) => <Textbook key={item.title} {...item} />);

  render() {
    return (
      <div className="textbooks_page">
        <div className="container">
          <div className="page">{this.textbooks}</div>
        </div>
      </div>
    );
  }
}

export default Textbooks;
