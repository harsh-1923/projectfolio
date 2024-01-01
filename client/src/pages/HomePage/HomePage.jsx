import React from "react";
import "./HomePage.css";
import InfiniteScroller from "../../components/InfiniteScroller/InfiniteScroller";
import AnimatedDivider from "../../components/AnimatedDivider/AnimatedDivider";

const HomePage = () => {
  return (
    <div className="hero-wrapper">
      <InfiniteScroller content={"HARSH SHARMA "} />
      <AnimatedDivider />
    </div>
  );
};

export default HomePage;
