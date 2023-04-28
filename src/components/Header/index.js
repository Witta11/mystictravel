import * as React from "react";
import Navbar from "./Navbar";
import NavbarImage from "./NavbarImage";
import "../../scss/index.scss";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <NavbarImage />
    </div>
  );
};

export default Header;
