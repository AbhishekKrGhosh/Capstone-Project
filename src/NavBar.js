import React from "react";
import images from './Images/VegDelight.png';
import './Navbar.css';

function NavBar(){
    return(
        <>
        <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
        <img src={images} alt="app__logo" /></a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#YourOrders">YourOrders</a></li>
        <li className="p__opensans"><a href="#YourReview">YourReview</a></li>
      </ul>
      
    </nav>
        </>
    )
}
export default NavBar;