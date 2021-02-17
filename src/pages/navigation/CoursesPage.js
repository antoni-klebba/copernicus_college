import React from "react";
import MainCart from "../../components/MainCart";
import "../../styles/pages/MainPage.css";

const Courses = (props) => {
  const courses = props.coursesList.map((item) => <MainCart key={item.title} {...item} />);
  return (
    <div className="main_page">
      <div className="container">
        <div className="page">{courses}</div>
      </div>
    </div>
  );
};

export default Courses;
