import React, { useState } from "react";
import "./Navbar.css";
import FillButton from "../FillButton/FillButton";
import gsap from "gsap";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
    isNavOpen
      ? gsap.to(".expanded_nav_wrapper", {
          height: "100vh",
          opacity: 1,
          duration: 0.5,
          ease: "power1.in",
          onComplete: () => {
            gsap.to(".expanded_nav_content", {
              opacity: 1,
              duration: 0.5,
            });
          },
        })
      : gsap.to(".expanded_nav_wrapper", {
          height: 0,
          duration: 0.5,
          ease: "power1.out",
        });
    console.log(isNavOpen);
  };
  return (
    <>
      <div className="expanded_nav_wrapper"></div>
      <div className="navbar-wrapper">
        <div className="logo">HARSH SHARMA</div>
        <div className="options">
          <FillButton clickHandler={handleNavToggle} value={"Get in touch"} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
