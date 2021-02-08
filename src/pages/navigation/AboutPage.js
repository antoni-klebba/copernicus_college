import React from "react";

import TopPageBar from "../../components/TopPageBar";

import "../../styles/pages/OnlyText.css";

const AboutPage = () => {
  return (
    <>
      <TopPageBar />
      <div className="only_text">
        <div className="container">
          <div className="cart">
            <div className="cart_text">
              <p className="center strong margin_bottom_2x">Copernicus College</p>
              <p className="justify margin_bottom_1x">
                Założony w 2014 roku Copernicus College to pierwsza w Polsce platforma typu MOOC
                (masowe otwarte kursy online) umożliwiająca szerokiej publiczności uczestniczenie w
                kursach uniwersyteckich przez internet. Każdy może tu pogłębiać wiedzę i rozwijać
                własne zainteresowania w pełni bezpłatnie, online, po polsku, u najlepszych polskich
                uczonych oraz młodych ambitnych naukowców. Znajdziecie tu kursy, wykłady gościnne
                oraz podręczniki.
              </p>
              <p className="justify margin_bottom_1x">
                Kursy składają się z kilku lub kilkunastu modułów (nagranych wykładów), podzielonych
                na kilkunastominutowe części, a także z dodatkowych materiałów – artykułów
                naukowych, fragmentów książek czy zestawów ćwiczeń i testów. Wszystko to pozwoli Wam
                wygodnie przyswajać wiedzę i rozwijać swoje zainteresowania bez wychodzenia z domu.
                Ukończenie kursu wymaga – jak to na uniwersytecie – zdania egzaminu, którego
                zaliczenie umożliwi pobranie certyfikatu.
              </p>
              <p className="justify margin_bottom_1x">
                Obok kursów na naszej platformie znaleźć można e-podręczniki pozwalające uzupełnić
                wiedzę przed przystąpieniem do bardziej specjalistycznego kursu, a także wykłady
                gościnne, wygłoszone przez gwiazdy światowej nauki, przetłumaczone na język polski i
                wzbogacone o dodatkowe materiały.
              </p>
              <p className="justify margin_bottom_3x">
                Copernicus College jest projektem finansowanym przez Fundację Centrum Kopernika oraz
                Uniwersytet Jagielloński i działa pod patronatem Centrum Kopernika Badań
                Interdyscyplinarnych.
              </p>
              <p className="strong margin_bottom_1x">Zespół Copernicus College</p>
              <p>dr Marek Jakubiec – dyrektor</p>
              <p>Dariusz Jurkowski – koordynator ds. IT</p>
              <p>Diana Sałacka – promocja i kontakt z Użytkownikami</p>
              <p className="margin_bottom_2x">mec. Anna Pajączkowska – obsługa prawna</p>
              <p className="strong margin_bottom_1x">Rada Copernicus College</p>
              <p>prof. dr hab. Bartosz Brożek (przewodniczący)</p>
              <p>prof. dr hab. Michał Heller</p>
              <p>dr Mateusz Hohol</p>
              <p>Piotr Urbańczyk</p>
              <p className="margin_bottom_1x">Michał Furman</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
