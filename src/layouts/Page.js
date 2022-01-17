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
      <Route path="/copernicus_college/o-nas" component={AboutPage} />
      <Route path="/copernicus_college/fundacja-centrum-kopernika" component={FunCopCenter} />
      <Route path="/copernicus_college/regulamin" component={TermsOfUsePage} />
      <Route path="/copernicus_college/kodeks-honorowy" component={CodeOfHonorPage} />
      <Route path="/copernicus_college/faq" component={FAQPage} />
      <Route path="/copernicus_college/kontakt" component={ContactPage} />
      {/* Complex pages */}
      <Route
        path="/copernicus_college/"
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
        path="/copernicus_college/kursy/lista"
        exact
        render={() => <CoursesPage coursesList={props.coursesList} />}
      />
      <Route
        path="/copernicus_college/wyklady/lista"
        exact
        render={() => <LecturesPage lecturesList={props.lecturesList} />}
      />
      <Route
        path="/copernicus_college/abc/lista"
        exact
        render={() => <ABCPage videosList={props.videosList} />}
      />
      <Route
        path="/copernicus_college/podreczniki/lista"
        exact
        render={() => <TextbooksPage textbooksList={props.textbooksList} />}
      />
      <Route
        path="/copernicus_college/wykladowcy/lista"
        exact
        render={() => <InstructorsPage instructorsList={props.instructorsList} />}
      />
      <Route
        path="/copernicus_college/kategorie/lista"
        exact
        render={() => <CategoriesPage categoriesList={props.categoriesList} />}
      />
      <Route path="" render={() => <ErrorPage />} />
    </Switch>
  );
};

export default Page;
