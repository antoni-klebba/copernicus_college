import React from "react";
import MainCart from "../../components/MainCart";
import "../../styles/pages/MainPage.css";

const Textbooks = (props) => {
  const textbooks = props.textbooksList.map((item) => <MainCart key={item.title} {...item} />);
  return (
    <div className="main_page">
      <div className="container">
        <div className="page">{textbooks}</div>
      </div>
    </div>
  );
};

export default Textbooks;
