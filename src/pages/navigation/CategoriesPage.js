import React from "react";
import Category from "../../components/Category";

import "../../styles/pages/CategoriesPage.css";
const categoriesList = [
  { id: 0, text: "Filozofia", path: "filozofia" },
  { id: 1, text: "Fizyka", path: "fizyka" },
  { id: 2, text: "Chemia", path: "chemia" },
  { id: 3, text: "Kosmologia", path: "kosmologia" },
  { id: 4, text: "Teologia", path: "teologia" },
  { id: 5, text: "Neuroscience", path: "neuroscience" },
  { id: 6, text: "Kognitywistyka", path: "kognitywistyka" },
  { id: 7, text: "Astronomia", path: "astronomia" },
  { id: 8, text: "Filozofia przyrody", path: "filozofia-przyrody" },
  { id: 9, text: "Psychologia", path: "psychologia" },
  { id: 10, text: "Edukacja", path: "edukacja" },
  { id: 11, text: "Filozofia nauki", path: "filozofia-nauki" },
  { id: 12, text: "Metodologia nauk", path: "metodologia-nauk" },
  { id: 13, text: "Matematyka", path: "matematyka" },
  { id: 14, text: "Prymatologia", path: "prymatologia" },
  { id: 15, text: "Antropologia", path: "antropologia" },
  { id: 16, text: "Medycyna", path: "medycyna" },
  { id: 17, text: "Psychiatria", path: "psychiatria" },
  { id: 18, text: "Neurobiologia", path: "neurobiologia" },
  { id: 19, text: "Filozofia religii", path: "filozofia-religii" },
  { id: 20, text: "Religioznawstwo", path: "religioznawstwo" },
  { id: 21, text: "Kulturoznawstwo", path: "kulturoznawstwo" },
  { id: 22, text: "Historia nauki", path: "historia-nauki" },
  { id: 23, text: "Genetyka", path: "genetyka" },
  { id: 24, text: "Biologia", path: "biologia" },
  { id: 25, text: "Nauki o życiu", path: "nauki-o-zyciu" },
  { id: 26, text: "Ewolucja", path: "ewolucja" },
  { id: 27, text: "Nauki prawne", path: "nauki-prawne" },
  { id: 28, text: "Prawo karne", path: "prawo-karne" },
  { id: 29, text: "Historia", path: "historia" },
  { id: 30, text: "Metodologia nauk", path: "metodologia-nauk" },
];

const CategoriesPage = () => {
  const categories = categoriesList.map((category) => <Category key={category.id} {...category} />);

  return (
    <div className="categories_list">
      <div className="container">
        <div className="page">{categories}</div>
      </div>
    </div>
  );
};

export default CategoriesPage;
