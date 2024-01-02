import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Blobs.css";

function useMouseTracker(callback) {
  useEffect(() => {
    function handleMouseMove(event) {
      //   console.log(event.view.getXPath());
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      callback({ x: mouseX, y: mouseY });
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [callback]);
}

const Blobs = () => {
  const blobRef = useRef(null);

  useMouseTracker(({ x, y }) => {
    x -= 100;
    y -= 100;

    if (blobRef.current) {
      gsap.to(blobRef.current, {
        duration: 0.3,
        x,
        y,
        ease: "power2.out",
      });
    }
  });

  return (
    <div ref={blobRef} className="blob-container">
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="blob b3"></div>
    </div>
  );
};

export default Blobs;
