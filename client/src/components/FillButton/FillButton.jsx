import React from "react";
import "./FillButton.css";

const FillButton = ({ value }) => {
  return (
    <button class="button">
      <span class="button-text">{value}</span>
      <div class="fill-container"></div>
    </button>
  );
};

export default FillButton;
