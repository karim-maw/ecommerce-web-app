import React from "react";
import { useState } from "react";


const CartItems = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  console.log(item)
  const editCart = (type) => {
    if (type === "decrement") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="cart-card">
      <img src={item.img} alt="" />
      <div className="cart-info">
        <h2>{item.title}</h2>
        <h2>${item.price}</h2>
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
