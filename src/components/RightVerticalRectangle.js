// src/VerticalRectangle.js
import React from "react";
import styled from "styled-components";

const VerticalContainer = styled.div`
  background-color: #eff0f2;
  height: 100vh; /* 100% of the viewport height */
  width: 20vw; /* 20% of the viewport width */
  position: fixed;
  top: 102px; /* Height of the TopMenu */
  right: 0;
`;

const VerticalRectangle = () => {
  return (
    <VerticalContainer>
      {/* Your VerticalRectangle content goes here */}
    </VerticalContainer>
  );
};

export default VerticalRectangle;
