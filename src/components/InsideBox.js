// src/CurvedRectangle.js
import React from "react";
import styled from "styled-components";
import Circle from "../components/Circle";

const CurvedRectangleContainer = styled.div`
  background-color: #eff0f2;
  height: 290px;
  width: 1350px;
  margin: 30px auto auto 50px;
  border-radius: 15px;
  position: relative;
`;

const InnerRectangle = styled.div`
  background-color: transparent;
  border: 2px solid black;
  height: 115px;
  width: 530px;
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const CircleContainer = styled.div`
  position: absolute;
  left: 60px; /* Adjust the left position */
  top: 50%;
  transform: translateY(-50%);
`;

const CurvedRectangle = () => {
  return (
    <CurvedRectangleContainer>
      <InnerRectangle />
      <CircleContainer>
        <Circle />
      </CircleContainer>
    </CurvedRectangleContainer>
  );
};

export default CurvedRectangle;
