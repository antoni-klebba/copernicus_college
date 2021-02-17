import React from "react";
import Instructor from "../../components/Instructor";
import "../../styles/pages/InstructorsPage.css";

const InstructorsPage = (props) => {
  const instructors = props.instructorsList.map((item) => <Instructor key={item.id} {...item} />);
  return (
    <div className="Instructors_page">
      <div className="container">
        <div className="page">{instructors}</div>
      </div>
    </div>
  );
};

export default InstructorsPage;
