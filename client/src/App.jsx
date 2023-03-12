import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Categories from "./pages/categories/Categories";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/Checkout";
import {RecoilRoot} from "recoil"
import Products from "./components/products/Products";
import Profile from "./pages/Profile";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <>
        <RecoilRoot>
          <Navbar />
          {/* <Intro/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/categories/:cat" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </RecoilRoot>
    </>
  );
}

export default App;
