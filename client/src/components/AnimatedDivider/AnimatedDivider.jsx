import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./AnimatedDivider.css";

const AnimatedDivider = ({ color }) => {
  const dividerRef = useRef(null);
  const bgColor = color || "black";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: dividerRef.current,
        duration: 2.3,
        start: "top 90%",
        end: "top 10%",
        scrub: true,
        // markers: true, // Remove in production (for debugging)
      },
    });

    tl.fromTo(
      dividerRef.current,
      { width: 0 },
      { width: "100vw", ease: "power1.in" }
    );
  }, []);

  return (
    <div className="divider-wrapper">
      <div
        ref={dividerRef}
        style={{ backgroundColor: bgColor }}
        className="animated-divider"
      ></div>
    </div>
  );
};

export default AnimatedDivider;
