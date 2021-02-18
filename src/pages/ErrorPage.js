import React from "react";
import "../styles/pages/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error_page">
      <div className="error_text">
        <h4>Ta strona nie istnieje</h4>
        <p>Upewnij się czy został wpisany poprawny adres strony.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
