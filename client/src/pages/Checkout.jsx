import React from "react";
import "../css/checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  
  return (
    <div className="checkout-cont">
      <p className="checkout-title">Enter the the requirments</p>
      <form action="">
        <input required type="text" placeholder="Name" />
        <input required type="text" placeholder="Last Name" />
        <input required type="email" placeholder="email" />
        <input required type="text" placeholder="description" />
        <p>Identify the size of your product in the description</p>
        <button>Checkout</button>
      </form>
    </div>
  );
};

export default Checkout;
