import React, { useEffect, useState } from "react";
import "../../../scss/index.scss";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbar__wrapper">
          <Link to="/" activeClassName="navbar__link-active" className="navbar__links">LOGO</Link>
          <div className="navbar-right">
            <Link activeClassName="navbar__link-active" to="/mystic" className="navbar__links is--link">Mystic</Link>
            <Link activeClassName="navbar__link-active" to="/travel" className="navbar__links is--link">Travel</Link>
            {/* <Link activeClassName="navbar__link-active" to="/yoga" className="navbar__links is--link">Yoga</Link> */}
            <Link activeClassName="navbar__link-active" to="/about" className="navbar__links">About Me</Link>
            <a
            target="_blank"
            rel="noopener noreferrer"
            href="">
              <FontAwesomeIcon icon={faInstagram} className="icon__instagram"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
