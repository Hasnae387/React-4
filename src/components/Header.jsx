import React from 'react';
import '../styles/Header.css';


function Header() {
  return (
    <header className="header">
       <div className="hours">
        Ouvert 7j/7 | 11h - 00h
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src="src/assets/img_Logo/Moroc_Logo.png" alt="Logo" />
        </div>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#takeout">Take Out</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#restaurant">Restaurant</a></li>
          <li><a href="#contact">Contact us</a></li>
          <li><a href="#about">About us</a></li>
        </ul>
        <div className="header-button">
          <button className="button-commander">Command</button>
          <button className="button-contact">07 61 59 45 28</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

