import React, { useRef, useEffect, useState } from "react";
import "./OutlinedBox.css";
import "../utils.js";

const OutlinedBox = ({ children }) => {
  const containerRef = useRef(null);
  const dimBoxRef = useRef(null);
  const [c, setC] = useState(-1);
  const [className, setClassName] = useState("none");

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current && dimBoxRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        dimBoxRef.current.textContent = `${Math.round(
          rect.width
        )}px × ${Math.round(rect.height)}px`;
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [c]);
  return (
    <div
      onClick={() => {
        setC(c * -1);
        setClassName(c == -1 ? "1px solid blue" : "none");
      }}
      contentEditable={c == -1 ? "true" : "false"}
      ref={containerRef}
      style={{ outline: className }}
      className="resizable-container"
    >
      {c == 1 ? (
        <div
          ref={dimBoxRef}
          className={`dim-box-wrapper resize-box ${c == -1 ? "outlined" : ""}`}
        ></div>
      ) : null}
      <>{children}</>
      {c == 1 ? (
        <>
          <div className="resize-box top-left animate-dim-box"></div>
          <div className="resize-box top-right"></div>
          <div className="resize-box bottom-left"></div>
          <div className="resize-box bottom-right"></div>{" "}
        </>
      ) : null}
      {/* <button
        onClick={() => {
          setC(c * -1);
          setClassName(c == -1 ? "1px solid blue" : "none");
        }}
      >
        bu
      </button> */}
    </div>
  );
};

export default OutlinedBox;
