import React from "react";

import TopPageBar from "../../components/TopPageBar";

import "../../styles/pages/OnlyText.css";

const ContactPage = () => {
  return (
    <>
      <TopPageBar />
      <div className="only_text">
        <div className="container">
          <div className="cart">
            <div className="cart_text">
              <p className="strong margin_bottom_1x">Kontakt</p>
              <p className="margin_bottom_1x">
                W sprawach dotyczących funkcjonowania serwisu Copernicus College prosimy pisać na
                adres: kontakt@copernicuscollege.pl
              </p>
              <p className="margin_bottom_1x">
                Przed wysłaniem wiadomości uprzejmie prosimy o sprawdzenie sekcji "Najczęściej
                zadawane pytania" ("FAQ").
              </p>
              <p className="margin_bottom_1x">
                Jesteśmy otwarci na współpracę ze światem biznesu. Przedsiębiorstwa, z którymi
                obecnie realizujemy przedsięwzięcia edukacyjne, to między innymi Google LLC i Roche
                Holding AG. Współpracujemy także z uczelniami, innymi instytucjami edukacyjnymi i
                organizacjami pozarządowymi. Jeżeli jesteście Państwo zainteresowani podjęciem
                wspólnych działań, prosimy o kontakt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
