import React from "react";
import { HeartStraight, MagnifyingGlass, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";


const ProductCard = ({data}) => {
  return (
    <div className="product-card">
      <img src={data.img} alt="" />
      <div className="product-hover">
        <ShoppingCart size={32} className="product-icon" />
        <Link to={`/product/${data._id}`}>
          <MagnifyingGlass size={32} className="product-icon" />
        </Link>
        <HeartStraight size={32} className="product-icon" />
      </div>
    </div>
  );
};

export default ProductCard;
