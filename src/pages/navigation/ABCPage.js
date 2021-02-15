import React, { Component } from "react";
import ABCVideo from "../../components/ABCVideo";

import "../../styles/pages//ABCPage.css";

import trudny_i_latwy from "../../images/thumbnails/abc/trudny_i_latwy.jpg";
import neuronalny_korelat from "../../images/thumbnails/abc/neuronalny_korelat.jpg";
import swiadomosc_jako_przedmiot from "../../images/thumbnails/abc/swiadomosc_jako_przedmiot.jpg";
import metody_badania_swiadomosci from "../../images/thumbnails/abc/metody_badania_swiadomosci.jpg";
import eksperyment from "../../images/thumbnails/abc/eksperyment.jpg";
import czy_nauka_jest_wiedza from "../../images/thumbnails/abc/czy_nauka_jest_wiedza.jpg";
import anarchizm_metodologiczny from "../../images/thumbnails/abc/anarchizm_metodologiczny.jpg";
import hipoteza_ad_hoc from "../../images/thumbnails/abc/hipoteza_ad_hoc.jpg";

class ABCPage extends Component {
  state = {
    videoList: [
      {
        title: "Trudny i łatwy problem świadomości",
        src: "https://www.youtube-nocookie.com/embed/VTsJLdbiBoQ",
        path: "trudny-i-latwy-problem-swiadomosci",
        thumbnailURL: trudny_i_latwy,
      },
      {
        title: "Neuronalny korelat świadomości",
        src: "https://www.youtube-nocookie.com/embed/EtV9nMZh0cY",
        path: "neuronalny-korelat-swiadomosci",
        thumbnailURL: neuronalny_korelat,
      },
      {
        title: "Świadomość jako przedmiot badań naukowych",
        src: "https://www.youtube-nocookie.com/embed/i4iQsrr0pPU",
        path: "swiadomosc-jako-przedmiot",
        thumbnailURL: swiadomosc_jako_przedmiot,
      },
      {
        title: "Metody badania świadomości",
        src: "https://www.youtube-nocookie.com/embed/tdpwr1PWJm8",
        path: "metody-badania-swiadomosci",
        thumbnailURL: metody_badania_swiadomosci,
      },
      {
        title: "Eksperyment",
        src: "https://www.youtube-nocookie.com/embed/DDLMtnSxsMg",
        path: "eksperyment",
        thumbnailURL: eksperyment,
      },
      {
        title: "Czy nauka jest wiedzą?",
        src: "https://www.youtube-nocookie.com/embed/GDqQZYWwmuk",
        path: "czu-nauka-jest-wiedza",
        thumbnailURL: czy_nauka_jest_wiedza,
      },
      {
        title: "Anarchizm metodologiczny",
        src: "https://www.youtube-nocookie.com/embed/ZTR6bF2u9SM",
        path: "anarchizm-metodologiczny",
        thumbnailURL: anarchizm_metodologiczny,
      },
      {
        title: "Hipoteza ad hoc",
        src: "https://www.youtube-nocookie.com/embed/EB6RHV-Dc1E",
        path: "hipoteza-ad-hoc",
        thumbnailURL: hipoteza_ad_hoc,
      },
    ],
  };

  abcVideos = this.state.videoList.map((item) => <ABCVideo key={item.title} {...item} />);
  render() {
    return (
      <div className="abc">
        <div className="container">
          <div className="page">{this.abcVideos}</div>
        </div>
      </div>
    );
  }
}

export default ABCPage;
