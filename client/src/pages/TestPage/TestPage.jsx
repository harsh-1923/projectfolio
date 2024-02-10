// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import "./TestPage.css";

// const TextAnimation = () => {
//   const textRef = useRef(null);
//   const inputRef = useRef(null);

//   const animateTextChange = () => {
//     const newText = inputRef.current.value;
//     const textElement = textRef.current;

//     if (textElement && newText.trim() !== "") {
//       gsap.to(textElement, {
//         duration: 0.5,
//         y: -20,
//         opacity: 0,
//         ease: "power3.in",
//         onComplete: () => {
//           textElement.innerText = newText;

//           gsap.fromTo(
//             textElement,
//             { y: 20, opacity: 0 },
//             {
//               duration: 0.5,
//               y: 0,
//               opacity: 1,
//               ease: "power3.inOut",
//             }
//           );
//         },
//       });
//     }
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} placeholder="Enter text" />
//       <button onClick={animateTextChange}>Animate Text</button>
//       <div className="s">
//         <h1 className="bold" ref={textRef}>
//           Your initial text hereSJKdb sldjkbf
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default TextAnimation;

// import React, { useEffect } from "react";

// const TestPage = () => {
//   const handleIntersection = (entries) => {
//     entries.forEach((entry) => {
//       const { target, isIntersecting, intersectionRatio } = entry;
//       const sectionName = target.getAttribute("id");

//       if (isIntersecting && intersectionRatio >= 0.9) {
//         console.log(`Entered ${sectionName} section`);
//       } else {
//         console.log(`Left ${sectionName} section`);
//       }
//     });
//   };

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: "60%",
//       threshold: 0.9,
//     };

//     const observer = new IntersectionObserver(handleIntersection, options);

//     const sections = document.querySelectorAll("section"); // Change this selector to match your section elements

//     sections.forEach((section) => {
//       observer.observe(section);
//     });

//     return () => {
//       sections.forEach((section) => {
//         observer.unobserve(section);
//       });
//     };
//   }, []);

//   return (
//     <div className="pad">
//       {/* Your webpage sections
//       <section id="home">Home</section>
//       <section id="about">About</section>
//       <section id="work">Work</section>
//       <section id="project">Project</section>
//       <section id="contact">Contact</section>
//       <section id="faq">FAQ</section> */}
//       <TextAnimation />
//     </div>
//   );
// };

// export default TestPage;

// import React, { useEffect, useRef } from "react";
// import "./TestPage.css";
// import AnimatedDivider from "../../components/AnimatedDivider/AnimatedDivider.jsx";

// import { gsap } from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Navbar = () => {
//   //   const [t, setT] = React.useState(0);
//   const liCRef = useRef(null);
//   //   useEffect(() => {
//   //     gsap.registerPlugin(ScrollTrigger);

//   //     gsap.to(liCRef.current, {
//   //       duration: 0.5,
//   //       y: t,
//   //       ease: "power3.inOut", // You can adjust the easing function as needed
//   //     });
//   //   }, [t]);
//   let t = 0;

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.utils.toArray(".li").forEach((li) => {
//       const dataTrigger = li.dataset.trigger; // Fetching the data-trigger attribute
//       console.log(dataTrigger);

//       ScrollTrigger.create({
//         trigger: `.${dataTrigger}`,
//         start: "top 50%",
//         // end: "top 20%",
//         markers: true,
//         onEnter: () => {
//           gsap.to(liCRef.current, {
//             duration: 0.5,
//             y: (t += 20) * -1,
//             ease: "power3.inOut",
//           });

//           // Use the dataTrigger value for specific actions
//           console.log(`ENTER: ${dataTrigger}`);
//         },
//         onEnterBack: () => {
//           //   gsap.to(liCRef.current, {
//           //     duration: 0.5,
//           //     y: (t -= 20) * 1,
//           //     ease: "power3.inOut",
//           //   });

//           ScrollTrigger.create;

//           console.log(`ENTER BACK: ${dataTrigger}`);
//         },
//         // Other ScrollTrigger options...
//       });
//     });
//   }, [t]);
//   return (
//     <div className="nb-wrapper">
//       <div className="lg">
//         <h4>HARSH SHARMA</h4>
//         <div className="scroller">
//           <div
//             ref={liCRef}
//             // style={{ transform: `translateY(${t}px)` }}
//             className="li-c"
//           >
//             <div className="li" data-trigger="home">
//               Home
//             </div>
//             <div className="li" data-trigger="about">
//               About
//             </div>
//             <div className="li" data-trigger="work">
//               Work
//             </div>
//             <div className="li" data-trigger="contact">
//               Contact
//             </div>
//             <div className="li" data-trigger="faqs">
//               FAQs
//             </div>
//           </div>
//         </div>
//         {/* <button
//         //   onClick={() => {
//         //     setT(t + 18 * -1);
//         //     console.log(t);
//         //   }}
//           className="b"
//         >
//           Click
//         </button> */}
//       </div>
//     </div>
//   );
// };

//   <div className="scroll-options">
//     <l1>HOME</l1>
//     <l1>ABOUT</l1>
//     <l1>WORK</l1>
//     <l1>CONTACT</l1>
//     <l1>FAQs</l1>
//   </div>;

// const TestPage = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="sec home">HOME</div>
//       <div className="sec about">ABOUT</div>
//       <div className="sec work">WORK</div>
//       <div className="sec contact">CONTACT</div>
//       <div className="sec faqs">FAQs</div>
//     </div>
//   );
// };

// export default TestPage;

// import React, { useEffect, useRef } from "react";
// // import "./TestPage1.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const TestPage = () => {
//   const [activeSection, setActiveSection] = React.useState(""); // State to store the active section name
//   const [sections, setSections] = React.useState([]); // State to store section names
//   const liCRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const sectionElements = document.querySelectorAll("section");
//     const sectionNames = Array.from(sectionElements).map(
//       (section) => section.dataset.name
//     );
//     setSections(sectionNames);

//     gsap.utils.toArray("section").forEach((section, index) => {
//       const sectionName = section.dataset.name;

//       ScrollTrigger.create({
//         trigger: section,
//         start: "top 80%",
//         onEnter: () => {
//           setActiveSection(sectionName); // Update active section name
//           animateList(index); // Call function to animate list to show the active section
//         },
//         onLeaveBack: () => {
//           setActiveSection(""); // Reset active section name when scrolling back up
//         },
//       });
//     });
//   }, []);

//   const animateList = (index) => {
//     gsap.to(liCRef.current, {
//       y: -index * 30, // Adjust vertical position based on the active section's index
//       duration: 0.5,
//       ease: "power3.out",
//     });
//   };

//   return (
//     <div className="nb-wrapper">
//       <div className="lg">
//         <h4>HARSH SHARMA</h4>
//         <div className="scroller">
//           <div ref={liCRef} className="li-c">
//             {sections.map((sectionName, index) => (
//               <div key={index} className="li">
//                 {sectionName}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {sections.map((sectionName, index) => (
//         <section key={index} data-name={sectionName} className="sec">
//           {sectionName}
//         </section>
//       ))}
//     </div>
//   );
// };

// export default TestPage;

import React, { useRef } from "react";
import "./TestPage.css";
import { gsap } from "gsap";

const TestPage = () => {
  const textRef = useRef(null);
  //   const startAnimation = () => {
  //     gsap.to([".name-hide, .title-hide"], {
  //       duration: 0.5,
  //       opacity: 0,
  //       y: 10,
  //     });
  //   };
  function animateText() {
    gsap.to("#firstName", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.to("#lastName", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power2.out",
      onComplete: () => {
        const sLetter = document.createElement("span");
        sLetter.textContent = "S";
        sLetter.style.position = "absolute";
        sLetter.style.top = "0";
        sLetter.style.left = "0";

        const firstName = document.getElementById("firstName");
        firstName.appendChild(sLetter);

        gsap.fromTo(
          sLetter,
          {
            opacity: 0,
            x: -30,
          },
          {
            duration: 1,
            opacity: 1,
            x: 0,
            ease: "power2.out",
          }
        );
      },
    });
  }
  return (
    <div className="wr">
      {/* <h1 ref={textRef} className="h">
        <span>H</span>
        <span className="name-hide">
          <span>A</span>
          <span>R</span>
          <span>S</span>
          <span>H</span>
          <span> </span>
        </span>

        <span>S</span>
        <span className="title-hide">
          <span>H</span>
          <span>A</span>
          <span>R</span>
          <span>M</span>
          <span>A</span>
        </span>
      </h1> */}
      {/* <button className="bn" onClick={startAnimation()}>
        Start Animation
      </button> */}
      <div>
        <h1 id="firstName">HARSH</h1>
        <h1 id="lastName">SHRMA</h1>
        <button className="bn" onclick={animateText()}>
          Animate
        </button>
      </div>
    </div>
  );
};

export default TestPage;

// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import "./TestPage.css";

// const TextAnimation = () => {
//   const textRef = useRef(null);
//   const inputRef = useRef(null);

//   const animateTextChange = () => {
//     const newText = inputRef.current.value;
//     const textElement = textRef.current;

//     if (textElement && newText.trim() !== "") {
//       gsap.to(textElement, {
//         duration: 0.5,
//         y: -20,
//         opacity: 0,
//         ease: "power3.in",
//         onComplete: () => {
//           textElement.innerText = newText;

//           gsap.fromTo(
//             textElement,
//             { y: 20, opacity: 0 },
//             {
//               duration: 0.5,
//               y: 0,
//               opacity: 1,
//               ease: "power3.inOut",
//             }
//           );
//         },
//       });
//     }
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} placeholder="Enter text" />
//       <button onClick={animateTextChange}>Animate Text</button>
//       <div className="s">
//         <h1 className="bold" ref={textRef}>
//           Your initial text hereSJKdb sldjkbf
//         </h1>
//       </div>
//     </div>
//   );
// };
