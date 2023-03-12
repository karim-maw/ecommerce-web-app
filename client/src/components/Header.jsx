import { CaretDoubleDown } from "phosphor-react";
import React from "react";
import "../css/header.css";
import headerpic from "../assets/header.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-cont">
      <img src={headerpic} alt="" />
      <h1>Welcome to HK</h1>
      <h2>High quality products and good prices</h2>
      <h3>Discover our products</h3>
      <button onClick={() => navigate("/categories")} className="header-button">
        Shop now
      </button>
      <CaretDoubleDown className="arrow" size={32} />
    </div>
  );
};

export default Header;
