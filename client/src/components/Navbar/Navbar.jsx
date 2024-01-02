import React, { useState } from "react";
import "./Navbar.css";
import FillButton from "../FillButton/FillButton";

const Navbar = () => {
  // const [visiblity, setVisibility] = useState(false);
  return (
    <div className="navbar-wrapper">
      <div className="logo">HARSH SHARMA</div>
      <div className="options">
        <FillButton value={"Get in touch"} />
      </div>
    </div>
  );
};

export default Navbar;
