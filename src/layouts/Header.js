import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeHeader from "../pages/header/HomeHeader";
import CoursesHeader from "../pages/header/CoursesHeader";
import LecturesHeader from "../pages/header/LecturesHeader";
import ABCHeader from "../pages/header/ABCHeader";
import TextbooksHeader from "../pages/header/TextbooksHeader";
import InstructorsHeader from "../pages/header/InstructorsHeader";
import CategoriesHeader from "../pages/header/CategoriesHeader";

const Header = (props) => {
  const lang = props.lang;
  return (
    <div className="header">
      <Switch>
        <Route path="/copernicus_college/" exact render={() => <HomeHeader lang={lang} />} />
        <Route
          path="/copernicus_college/kursy/lista"
          exact
          render={() => <CoursesHeader lang={lang} />}
        />
        <Route
          path="/copernicus_college/wyklady/lista"
          exact
          render={() => <LecturesHeader lang={lang} />}
        />
        <Route
          path="/copernicus_college/abc/lista"
          exact
          render={() => <ABCHeader lang={lang} />}
        />
        <Route
          path="/copernicus_college/podreczniki/lista"
          exact
          render={() => <TextbooksHeader lang={lang} />}
        />
        <Route
          path="/copernicus_college/wykladowcy/lista"
          exact
          render={() => <InstructorsHeader lang={lang} />}
        />
        <Route
          path="/copernicus_college/kategorie/lista"
          exact
          render={() => <CategoriesHeader lang={lang} />}
        />
      </Switch>
    </div>
  );
};

export default Header;
