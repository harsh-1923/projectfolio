import React, { useState, useEffect } from "react";
import "./GridLayout.css";

const GridLayout = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const calculateGridWidth = () => {
    const VPWidth = window.innerWidth;
    const availableWidth = VPWidth - 160;
    return (availableWidth - 7 * 20) / 8;
  };

  const [gridWidth, setGridWidth] = useState(calculateGridWidth());

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setGridWidth(calculateGridWidth());
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div className="gl-wrapper">
      <div className="grid" style={{ minWidth: gridWidth }}></div>
      <div className="grid" style={{ minWidth: gridWidth }}></div>
      <div className="grid" style={{ minWidth: gridWidth }}></div>
      <div className="grid" style={{ minWidth: gridWidth }}></div>
      <div className="grid" style={{ minWidth: gridWidth }}></div>
      <div className="grid" style={{ minWidth: gridWidth }}></div>
      <div className="grid" style={{ minWidth: gridWidth }}></div>
      <div className="grid last" style={{ minWidth: gridWidth }}></div>
    </div>
  );
};

export default GridLayout;
