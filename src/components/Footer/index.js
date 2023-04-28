import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper wrapper">
        <div className="footer__left">Witta Glöckner &copy; </div>
        <div className="footer__right">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="">
              <FontAwesomeIcon icon={faInstagram} className="icon__instagram is--footer"/>
          </a>
          <Link to="/contact" className="footer__link">Contact</Link>
          <Link to="/impressum" className="footer__link">Impressum</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
