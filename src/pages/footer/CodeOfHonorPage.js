import React from "react";

import TopPageBar from "../../components/TopPageBar";

import "../../styles/pages/OnlyText.css";

const CodeOfHonorPage = () => {
  return (
    <>
      <TopPageBar />
      <div className="only_text">
        <div className="container">
          <div className="cart">
            <div className="cart_text">
              <p className="strong margin_bottom_1x">Zapisując się na kursy zgadzam się:</p>
              <p className="margin_bottom_1x">
                · wypełniać wszystkie testy oraz egzaminy końcowe samodzielnie;
              </p>
              <p className="margin_bottom_1x">
                · samodzielnie przygotowywać wszystkie wypowiedzi pisemne zamieszczane na stronach
                Copernicus College;
              </p>
              <p className="margin_bottom_1x">
                · założyć i utrzymywać tylko jedno konto użytkownika, a także nie udostępniać innym
                osobom danych do logowania do swojego konta;
              </p>
              <p className="margin_bottom_1x">
                · nie podejmować żadnych nieprawomyślnych działań, których celem jest poprawienie
                własnych wyników w testach i egzaminach i/lub pogorszenie wyników innych
                użytkowników;
              </p>
              <p className="margin_bottom_3x">
                · nie publikować na Forum poprawnych odpowiedzi udzielanych przez siebie w testach i
                podczas egzaminów, ani nie udostępniać ich w żadnej innej formie innym użytkownikom.
              </p>
              <p className="strong margin_bottom_1x">
                Zachęcamy użytkowników Copernicus College do:
              </p>
              <p className="margin_bottom_1x">
                · zapoznawania się ze wszystkimi materiałami dostępnymi w ramach poszczególnych
                kursów;
              </p>
              <p className="margin_bottom_1x">· odrabiania prac domowych;</p>
              <p className="margin_bottom_1x">· zadawania pytań prowadzącym kursy na Forum;</p>
              <p className="margin_bottom_1x">· dyskusji z innymi użytkownikami na Forum.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeOfHonorPage;
