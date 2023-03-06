import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbar__wrapper">
          <Link to="/" activeClassName="navbar__link-active" className="navbar__links"></Link>
          <div className="navbar-right">
            <Link activeClassName="navbar__link-active" to="/about" className="navbar__links is--link">About</Link>
            <Link activeClassName="navbar__link-active" to="/listing" className="navbar__links is--link">Art</Link>
            <Link activeClassName="navbar__link-active" to="/contact" className="navbar__links">Contact</Link>
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
