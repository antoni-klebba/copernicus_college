import React from "react";
import Category from "../../components/Category";

import "../../styles/pages/CategoriesPage.css";

const CategoriesPage = (props) => {
  const categories = props.categoriesList.map((category) => (
    <Category key={category.id} {...category} />
  ));

  return (
    <div className="categories_list">
      <div className="container">
        <div className="page">{categories}</div>
      </div>
    </div>
  );
};

export default CategoriesPage;
