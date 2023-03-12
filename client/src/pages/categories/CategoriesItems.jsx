import React from "react";
import { useParams } from "react-router-dom";

const CategoriesItems = () => {
  const { cat } = useParams();

  return <div>
    {cat}
  </div>;
};

export default CategoriesItems;
