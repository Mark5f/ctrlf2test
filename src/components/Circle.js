// src/Circle.js
import React from "react";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";

const CircleContainer = styled.div`
  width: 10vw; /* 10% of the viewport width */
  height: 10vw;
  background-color: white;
  border: 2px solid black;
  border-radius: 50%;
  position: relative;
  overflow: hidden; /* Ensure the icon is hidden if it exceeds the container */
`;

const Icon = styled(FaRegUserCircle)`
  width: 90%; /* Adjust the size of the icon as needed */
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Circle = ({ children }) => {
  return (
    <CircleContainer>
      {React.Children.count(children) === 0 && <Icon />}
      {children}
    </CircleContainer>
  );
};

export default Circle;
