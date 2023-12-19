import React, {useState} from "react";
import { Link } from 'react-router-dom';
import "./../style/Navbar.css"; // Sesuaikan dengan struktur folder Anda
import logo from "./../assets/logo.png"; // Sesuaikan dengan struktur folder Anda

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="app-name">Donat JSG Group</span>
        <ul className="menu">
          <li className="menu-item"><Link to="/">Home</Link></li>
          <li className="menu-item"><Link to="/Order">Order</Link></li>
          <li className="menu-item">Reward</li>
          <li className="menu-item">About</li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="cart-button">Keranjang</button>
       <Link to ="/Login"><button className="sign-in-button">Sign In</button></Link> 
        
        <button className="sign-out-button">Sign Out</button>
      </div>
    </nav>
  );
};

export default Navbar;
