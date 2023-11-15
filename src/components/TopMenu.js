// src/TopMenu.js
import React from "react";
import styled from "styled-components";

const TopMenuContainer = styled.div`
  background-color: #0464c8;
  height: 102px;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  padding: 0 20px; /* Add padding for smaller screens */
`;

const SearchBar = styled.input`
  width: 100%;
  height: 50px;
  background-color: #0151a8;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  direction: rtl;
  padding: 10px;
`;

const SearchButton = styled.button`
  width: 160px;
  height: 70px;
  background-color: #50a0f7;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  position: absolute;
  right: 0;
  top: 0;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.span`
  margin-left: 10px;
`;

const TopMenu = () => {
  return (
    <TopMenuContainer>
      <SearchBarContainer>
        <SearchBar type="text" placeholder="הכנס כתובת IP" />
        <SearchButton>
          <ButtonText>התחבר</ButtonText>
        </SearchButton>
      </SearchBarContainer>
    </TopMenuContainer>
  );
};

export default TopMenu;
