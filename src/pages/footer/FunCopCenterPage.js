import React from "react";

import TopPageBar from "../../components/TopPageBar";

import "../../styles/pages/OnlyText.css";

const FunCopCenterPage = () => {
  return (
    <>
      <TopPageBar />
      <div className="only_text">
        <div className="container">
          <div className="cart">
            <div className="cart_text">
              <p className="justify margin_bottom_1x">
                Fundacja Centrum Kopernika z siedzibą w Krakowie prowadzi działalność mającą na celu
                wspieranie przedsięwzięć Centrum Kopernika Badań Interdyscyplinarnych, zwłaszcza w
                zakresie popularyzacji nauki oraz edukacji.
              </p>
              <p className="margin_bottom_1x">
                Całoroczna działalność Fundacji Centrum Kopernika jest współfinansowane ze środków
                Miasta Krakowa.
              </p>
              <p>Zarząd Fundacji</p>
              <p className="margin_bottom_1x">
                dr hab. Janusz Mączka (prezes), prof. dr hab. Bartosz Brożek, dr mec. Marcin Gorazda
              </p>
              <p>Adres</p>
              <p>Fundacja Centrum Kopernika</p>
              <p className="margin_bottom_1x">pl. Szczepański 8, 31-011 Kraków</p>
              <p>NIP 676 23 85 496</p>
              <p>Numer konta: 92 1090 2053 0000 0001 2289 4260</p>
              <p className="margin_bottom_1x">Santander Bank Polska SA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunCopCenterPage;
