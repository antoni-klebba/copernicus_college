import React from "react";
import { Route, Switch } from "react-router-dom";

import "../styles/layouts/Page.css";

// only text pages
import AboutPage from "../pages/navigation/AboutPage";
import FunCopCenter from "../pages/footer/FunCopCenterPage";
import TermsOfUsePage from "../pages/footer/TermsOfUsePage";
import CodeOfHonorPage from "../pages/footer/CodeOfHonorPage";
import FAQPage from "../pages/footer/FAQPage";
import ContactPage from "../pages/footer/ContactPage";

// complex pages
import HomePage from "../pages/navigation/HomePage";
import CoursesPage from "../pages/navigation/CoursesPage";
import LecturesPage from "../pages/navigation/LecturesPage";
import ABCPage from "../pages/navigation/ABCPage";
import TextbooksPage from "../pages/navigation/TextbooksPage";
import LecturersPage from "../pages/navigation/LecturersPage";
import CategoriesPage from "../pages/navigation/CategoriesPage";

const Page = () => {
  return (
    <Switch>
      {/* Only text pages */}
      <Route path="/o-nas" component={AboutPage} />
      <Route path="/fundacja-centrum-kopernika" component={FunCopCenter} />
      <Route path="/regulamin" component={TermsOfUsePage} />
      <Route path="/kodeks-honorowy" component={CodeOfHonorPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/kontakt" component={ContactPage} />
      {/* Complex pages */}
      <Route path="/" exact component={HomePage} />
      <Route path="/kursy/lista" component={CoursesPage} />
      <Route path="/wyklady/lista" component={LecturesPage} />
      <Route path="/abc/lista" component={ABCPage} />
      <Route path="/podreczniki/lista" component={TextbooksPage} />
      <Route path="/wyklady/lista" component={LecturersPage} />
      <Route path="/kategorie/lista" component={CategoriesPage} />
    </Switch>
  );
};

export default Page;
