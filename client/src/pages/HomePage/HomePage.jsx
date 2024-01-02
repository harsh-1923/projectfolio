import React from "react";
import "./HomePage.css";
import InfiniteScroller from "../../components/InfiniteScroller/InfiniteScroller";
import AnimatedDivider from "../../components/AnimatedDivider/AnimatedDivider";
import OutlinedBox from "../../components/OutlinedBox/OutlinedBox";
import FillButton from "../../components/FillButton/FillButton";

const HomePage = () => {
  return (
    <div className="hero-wrapper">
      <AnimatedDivider />
      <div className="hp-s1-wrapper">
        <div className="hp-s1-p2-wrapper g">
          <OutlinedBox>
            <div className="align-left">
              <p className="tag-text">Software Developer</p>
              <br />
              <p className="tag-text">UI/UX Enthusiast</p>
            </div>
          </OutlinedBox>
        </div>
      </div>
      <div className="hp-s2-wrapper">
        <InfiniteScroller content={"HARSH SHARMA"} />
      </div>

      <div className="test">
        <AnimatedDivider />
      </div>

      <OutlinedBox>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          error molestiae a qui assumenda? Totam assumenda enim sapiente quis,
          corrupti, suscipit repellat ipsum ullam accusamus nulla rerum
          recusandae delectus itaque id ad officia ipsa fugit sed optio qui
          error ducimus. In, minus. Neque qui debitis quidem eaque aut tempora
          maiores?
        </div>
      </OutlinedBox>
      <div className="test"></div>
      <div className="test"></div>
      <div className="test"></div>
      <div className="test"></div>
      <div className="test"></div>
      <FillButton value={"Hover"} />
    </div>
  );
};

export default HomePage;
