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
              <p>FunCopCenterPage</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunCopCenterPage;
