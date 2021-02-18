import React from "react";
import MainCart from "./MainCart";

const Recommended = (props) => {
  console.log(props.recommendedList);

  // const recommended = props.recommendedList.map((item) => <MainCart key={item.title} {...item} />);

  return <div className="asd">{/* {recommended} */}</div>;
};

export default Recommended;
