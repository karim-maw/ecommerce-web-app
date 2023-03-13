import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const CartItems = ({ item }) => {
  const [cartItem, setCartItem] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const editCart = (type) => {
    if (type === "decrement") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
console.log(item.productId + "lol")
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/products/find/" + item.productId
        );
        console.log(response.data);

        setCartItem(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [item.productId]);

  return (
    <div className="cart-card">
      {cartItem && <img src={cartItem.img} alt="" />}
      <div className="cart-info">
        {cartItem && <h2>{cartItem.title}</h2>}
        {cartItem && <h2>${cartItem.price}</h2>}
        <div className="edit-cart">
          <button
            onClick={() => editCart("decrement")}
            className="decrement-btn"
          >
            -
          </button>
          <input value={quantity} type="text" readOnly />
          <button
            onClick={() => editCart("increment")}
            className="increment-btn"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
