import React from "react";
import {Link} from 'react-router-dom'


const CategoriesOptions = ({ category }) => {
  return (
    <div className="category">
      <img src={category.img} alt="" />
      <div className="on-cat">
        <h2>{category.title}</h2>
        <Link to={`/categories/${category.cat}`}>
          <button className="category-btn">Shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesOptions;
