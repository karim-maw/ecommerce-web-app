import React from "react";
import "../css/product.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartItemsSelector, cartState, userState } from "../atoms";
import Filter from "../components/Filter";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [storedCart, setStoredCart] = useState(false);
  const [product, setProduct] = useState({});
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const [productSize, setProductSize] = useState([]);
  const [productColor, setProductColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const user = useRecoilValue(userState);
  const [userId, setUserId] = useState("");

  // const cartDelete = useRecoilValue(cartItemsSelector)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/find/" + id
        );
        setProduct(res.data);
        setProductSize(res.data.size);
        setProductColor(res.data.color);
      } catch (e) {
        console.error(e.message);
      }
    };
    getProduct();
  }, [id]);

  console.log(product._id)

  const addToCart = () => {
    setStoredCart(true);
    setCartItem([...cartItem, product]);
  };

  const addToCart2 = async (productId, userId) => {
    try {
      const response = await axios.post("http://localhost:5000/api/cart/", {
        userId,
        products: [
          {
            productId,
          },
        ],
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="product-container">
      <div className="product-info">
        <img className="" src={product.img} alt="" />
        <div className="product-customize">
          <h1>{product.title}</h1>
          <h2>{product.desc}</h2>
          <h3>${product.price}</h3>
          <select
            className="product-button-edit"
            name="size"
            id=""
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option hidden value="size">
              size
            </option>

            {productSize.map((filterSize) => (
              <option className="option" value={filterSize}>
                {filterSize}
              </option>
            ))}
          </select>

          <select
            className="product-button-edit"
            name="color"
            id=""
            defaultValue="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option hidden value="color">
              color
            </option>
            {/* {productColor.map((filterColor) => (
              <option className="option" value={filterColor}>
                {filterColor}
              </option>
            ))} */}
            <option className="" value={productColor}>
              {productColor}
            </option>
          </select>
          <button
            onClick={() => addToCart2(`${product._id}`, user._id)}
            disabled={storedCart}
            className="add-to-cart product-button-edit"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
