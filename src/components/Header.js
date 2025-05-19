import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="EduMentor Home Tuition" />
          <span>EduMentor Home Tuition</span>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="contact-btn">
          <a href="tel:+917347309010">Call Now</a>
        </div>
      </div>
    </header>
  );
};

export default Header;