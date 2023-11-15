// src/OutlineRectangle.js
import React from "react";
import styled from "styled-components";

const RectangleContainer = styled.div`
  width: 70%; /* 80% of the parent container's width */
  max-width: 1350px; /* Set a maximum width for larger screens */
  height: 80vh; /* 50% of the viewport height */
  max-height: 1000px; /* Set a maximum height for larger screens */
  border: 2px solid black;
  position: absolute;
  top: 88%; /* Center the rectangle vertically */
  left: 38%;
  transform: translate(-50%, -50%);

  @media (max-width: 1200px) {
    /* Adjust styles for screens smaller than 1200px */
    width: 90%;
    max-width: none;
    height: 55vh;
    max-height: none;
  }

  @media (max-width: 768px) {
    /* Adjust styles for screens smaller than 768px */
    width: 95%;
    height: 60vh;
  }
`;

const OutlineRectangle = () => {
  return <RectangleContainer />;
};

export default OutlineRectangle;
