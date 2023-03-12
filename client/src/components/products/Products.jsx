import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import "../../css/products.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cat } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          cat
            ? `http://localhost:5000/api/products/find?category=${cat}`
            : "http://localhost:5000/api/products/find/"
        );
        setProducts(result.data);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="products">
      <h1>Our Products</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="products-container">
          <div className="cards">
            {cat
              ? products.map((product) => (
                  <ProductCard data={product} key={product._id} />
                ))
              : products
                  .slice(0, 10)
                  .map((product) => (
                    <ProductCard data={product} key={product._id} />
                  ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
