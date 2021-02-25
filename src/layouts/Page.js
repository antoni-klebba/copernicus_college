import React from "react";
import { Route, Switch } from "react-router-dom";

// only text pages
import AboutPage from "../pages/navigation/AboutPage";
import FunCopCenter from "../pages/footer/FunCopCenterPage";
import TermsOfUsePage from "../pages/footer/TermsOfUsePage";
import CodeOfHonorPage from "../pages/footer/CodeOfHonorPage";
import FAQPage from "../pages/footer/FAQPage";
import ContactPage from "../pages/footer/ContactPage";
import ErrorPage from "../pages/ErrorPage";

// complex pages
import HomePage from "../pages/navigation/HomePage";
import CoursesPage from "../pages/navigation/CoursesPage";
import LecturesPage from "../pages/navigation/LecturesPage";
import ABCPage from "../pages/navigation/ABCPage";
import TextbooksPage from "../pages/navigation/TextbooksPage";
import InstructorsPage from "../pages/navigation/InstructorsPage";
import CategoriesPage from "../pages/navigation/CategoriesPage";

const Page = (props) => {
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
      <Route
        path="/"
        exact
        render={() => (
          <HomePage
            homeCourses={props.homeCourses}
            homeRecommended={props.homeRecomended}
            homeLectures={props.homeLectures}
            homeTextbooks={props.homeTextbooks}
          />
        )}
      />
      <Route
        path="/kursy/lista"
        exact
        render={() => <CoursesPage coursesList={props.coursesList} />}
      />
      <Route
        path="/wyklady/lista"
        exact
        render={() => <LecturesPage lecturesList={props.lecturesList} />}
      />
      <Route path="/abc/lista" exact render={() => <ABCPage videosList={props.videosList} />} />
      <Route
        path="/podreczniki/lista"
        exact
        render={() => <TextbooksPage textbooksList={props.textbooksList} />}
      />
      <Route
        path="/wykladowcy/lista"
        exact
        render={() => <InstructorsPage instructorsList={props.instructorsList} />}
      />
      <Route
        path="/kategorie/lista"
        exact
        render={() => <CategoriesPage categoriesList={props.categoriesList} />}
      />
      <Route path="" render={() => <ErrorPage />} />
    </Switch>
  );
};

export default Page;
