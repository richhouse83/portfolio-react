import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="brand">
        R<i className="fas fa-code spin-hover"></i>H
      </div>
      <div className="nav">
        <a href="#about">about</a> / <a href="#experience">experience</a> /{" "}
        <a href="#projects">projects</a> /{" "}
        <span id="contact-link">contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
