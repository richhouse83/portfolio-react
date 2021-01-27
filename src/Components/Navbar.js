import React from "react";

const Navbar = () => {
  const contacts = (event) => {
    const contactTop = document.querySelector("#contact-top");
    contactTop.classList.toggle("hidden");
  };
  return (
    <nav className="navbar" id="navbar">
      <div className="brand">
        R<i className="fas fa-code spin-hover"></i>H
      </div>
      <div className="nav">
        <a href="#about">about</a> / <a href="#experience">experience</a> /{" "}
        <a href="#projects">projects</a> /{" "}
        <span id="contact-link" onClick={contacts}>
          contact
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
