import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [visiblity, setVisibility] = useState(false);
  return (
    <div className="navbar-wrapper">
      <div className="logo-wrapper">
        <h3>Harsh Sharma</h3>
      </div>
      <div
        className={`mobile-options-wrapper ${
          visiblity ? "visible appear-animate" : "appear-out hidden"
        }`}
      >
        <div className="mobile-options">
          <h1>iasudf</h1>
          <h1>iasudf</h1>
          <h1>iasudf</h1>
          <h1>iasudf</h1>
        </div>
      </div>
      <div className="menu-btn-wrapper">
        <svg
          onClick={() => setVisibility(!visiblity)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="menu-btn"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
