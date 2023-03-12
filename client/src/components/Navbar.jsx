import React from "react";
import "../css/navbar.css";
import { ShoppingCart, List, X } from "phosphor-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";


const Navbar = () => {
  
  const menuRef = useRef()
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    menuRef.current.classList.toggle('open');
  };

  return (
    <nav onClick={toggleMenu} className="navbar">
      <button className="menu-open nav-icons">
        <List size={25} />
      </button>
      <button className="menu-closed nav-icons">
        <X size={25} />
      </button>

      <h2>Logo</h2>
      <ul ref={menuRef} className="normal closed">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Products</Link>
        </li>
        <li>
          <Link to="/offers">Offers</Link>
        </li>
      </ul>
      <Link to="/cart">
        <ShoppingCart size={25} />
      </Link>
    </nav>
  );
};

export default Navbar;
