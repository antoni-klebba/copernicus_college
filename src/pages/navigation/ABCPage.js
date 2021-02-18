import React from "react";
import ABCVideo from "../../components/ABCVideo";

import "../../styles/pages//ABCPage.css";

const ABCPage = (props) => {
  const abcVideos = props.videosList.map((item) => <ABCVideo key={item.title} {...item} />);
  return (
    <div className="abc">
      <div className="container">
        <div className="page">{abcVideos}</div>
      </div>
    </div>
  );
};

export default ABCPage;
