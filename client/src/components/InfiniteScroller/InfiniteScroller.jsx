import React, { useRef, useEffect } from "react";
import "./InfiniteScroller.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
// gsap.registerPlugin(ScrollTrigger);
const InfiniteScroller = ({ content }) => {
  let xPercent = 0;
  let direction = useRef(-1);

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  const [pos, setPos] = useState(xPercent);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          //   console.log(e.getVelocity());
          direction.current = e.direction * -1;
        },
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    console.log(xPercent);
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent +=
      ((window.innerWidth - 0) / (window.innerWidth - 100)) *
      0.1 *
      direction.current;
    setPos(xPercent);
  };

  return (
    <>
      <div className="test1"></div>
      <div className="main">
        <div className="sliderContainer">
          <div ref={slider} className="slider">
            <p uppercase ref={firstText}>
              {content} -{" "}
            </p>
            <p ref={secondText}>{content} - </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfiniteScroller;
