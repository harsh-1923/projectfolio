// import React from "react";
// import "./landing.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect } from "react";

// const Landing = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     let direction = 1; // 1 = forward, -1 = backward scroll

//     const roll1 = roll(".rollingText", { duration: 10 }),
//       roll2 = roll(".rollingText02", { duration: 10 }, true),
//       scroll = ScrollTrigger.create({
//         onUpdate(self) {
//           if (self.direction !== direction) {
//             direction *= -1;
//             gsap.to([roll1, roll2], { timeScale: direction, overwrite: true });
//           }
//         },
//       });
//   }, []);

//   // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
//   function roll(targets, vars, reverse) {
//     vars = vars || {};
//     vars.ease || (vars.ease = "none");
//     const tl = gsap.timeline({
//         repeat: -1,
//         onReverseComplete() {
//           this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
//         },
//       }),
//       elements = gsap.utils.toArray(targets),
//       clones = elements.map((el) => {
//         let clone = el.cloneNode(true);
//         el.parentNode.appendChild(clone);
//         return clone;
//       }),
//       positionClones = () =>
//         elements.forEach((el, i) =>
//           gsap.set(clones[i], {
//             position: "absolute",
//             overwrite: false,
//             top: el.offsetTop,
//             left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth),
//           })
//         );
//     positionClones();
//     elements.forEach((el, i) =>
//       tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0)
//     );
//     window.addEventListener("resize", () => {
//       let time = tl.totalTime(); // record the current time
//       tl.totalTime(0); // rewind and clear out the timeline
//       positionClones(); // reposition
//       tl.totalTime(time); // jump back to the proper time
//     });
//     return tl;
//   }
//   return (
//     <>
//       <div className="wrapperRollingText">
//         <div className="rollingText text">
//           Harsh Sharma <span>• •</span>
//         </div>
//       </div>

//       {/* <div className="wrapperRollingText02" l>
//         <div class="rollingText02 text">
//           <span>• GreenSock •</span> Ultra high-performance, professional-grade
//           animation for the modern web
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default Landing;

import React, { useEffect, useRef } from "react";
import "./landing.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Landing = () => {
  const roll1Ref = useRef(null);
  const roll2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let direction = 1; // 1 = forward, -1 = backward scroll

    const roll1 = roll(".rollingText", { duration: 10 }, roll1Ref),
      roll2 = roll(".rollingText02", { duration: 10 }, roll2Ref, true),
      scroll = ScrollTrigger.create({
        onUpdate(self) {
          if (self.direction !== direction) {
            direction *= -1;
            gsap.to([roll1, roll2], { timeScale: direction, overwrite: true });
          }
        },
      });
  }, []);

  // Helper function that creates the rolling text animation
  function roll(targets, vars, ref, reverse) {
    vars = vars || {};
    vars.ease || (vars.ease = "none");
    const tl = gsap.timeline({
      repeat: -1,
      onReverseComplete() {
        // Check if the timeline's progress is exactly at the end before adjusting time
        if (tl.progress() === 1) {
          tl.totalTime(tl.totalTime() + tl.duration() * 10);
        }
      },
    });

    gsap.utils.toArray(targets).forEach((el) => {
      let clone = el.cloneNode(true);
      el.parentNode.appendChild(clone);
      ref.current = tl.to(
        [el, clone],
        { xPercent: reverse ? 100 : -100, ...vars },
        0
      );
    });

    window.addEventListener("resize", () => {
      let time = tl.totalTime(); // Record the current time
      tl.totalTime(0); // Rewind and clear out the timeline
      tl.eventCallback("onComplete", () => {
        tl.clear(); // Clear timeline's callbacks and tweens after completion
      });
      tl.eventCallback("onReverseComplete", () => {
        tl.clear(); // Clear timeline's callbacks and tweens after reverse completion
      });
      tl.clear(); // Clear any previously added callbacks and tweens
      tl.invalidate().restart(); // Invalidate and restart the timeline to reposition elements
      tl.totalTime(time); // Jump back to the proper time
    });

    return tl;
  }

  return (
    <>
      <div className="wrapperRollingText">
        <div className="rollingText text">
          <h1 className="big-name">Harsh Sharma</h1>
          <span className="space">s</span>
        </div>
      </div>
    </>
  );
};

export default Landing;
