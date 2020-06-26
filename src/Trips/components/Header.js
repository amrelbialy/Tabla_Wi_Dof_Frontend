import React from "react";
import "../../css/style.css";
import img from "../../img/cover3.jpg";
import img1 from "../../img/newcover2.jpg";

const Header = props => {
  return (
    <header id="home" className="header">
      <img src={img1} alt="" />
    </header>
  );
};

export default Header;
