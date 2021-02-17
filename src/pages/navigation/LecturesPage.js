import React from "react";
import MainCart from "../../components/MainCart";
import "../../styles/pages/MainPage.css";

const Lectures = (props) => {
  const lectures = props.lecturesList.map((item) => <MainCart key={item.title} {...item} />);
  return (
    <div className="main_page">
      <div className="container">
        <div className="page">{lectures}</div>
      </div>
    </div>
  );
};

export default Lectures;
