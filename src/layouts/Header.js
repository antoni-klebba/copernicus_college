import React from "react";
import { Route, Switch } from "react-router-dom";

import "../styles/layouts/Header.css";

import HomeHeader from "../pages/header/HomeHeader";
import CoursesHeader from "../pages/header/CoursesHeader";
import LecturesHeader from "../pages/header/LecturesHeader";
import TextbooksHeader from "../pages/header/TextbooksHeader";
import LecturersHeader from "../pages/header/LecturersHeader";

const Header = () => {
  return (
    <div className="header">
      <Switch>
        <Route path="/" exact component={HomeHeader} />
        <Route path="/kursy/lista" exact component={CoursesHeader} />
        <Route path="/wyklady/lista" component={LecturesHeader} />
        <Route path="/podreczniki/lista" component={TextbooksHeader} />
        <Route path="/wykladowcy/lista" component={LecturersHeader} />
      </Switch>
    </div>
  );
};

export default Header;
