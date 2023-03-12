import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";
import "../../css/cart.css";
import { useRecoilValue } from "recoil";
import { cartState, userState } from "../../atoms";

const Cart = () => {
  const items = useRecoilValue(cartState);
  const [cart, setCart] = useState([]);
  const user = useRecoilValue(userState);

  useEffect(() => {
    const getCart = async () => {
      try {
        const response = await axios.get("/api/cart/find/" + user._id);
        setCart(response.data.products);
        console.log("response.data")
      } catch (error) {}
    };
    getCart();
  }, []);
  

  // console.log(cart)

  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {/* {cart.map((item) => (
          <CartItems key={item._id} item={item} />
        ))} */}
        {cart}
      </div>
      <div className="checkout-list">
        <h1>Summary</h1>
        <h2>This is the summary of your cart</h2>
        <h2>Price: $50</h2>
        <h3>We accept cash on delivery only</h3>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
