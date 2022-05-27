import React from "react";
import styled from "styled-components";

import Logo from "../assets/assets_header/Logo.svg";
import Notice from "../assets/assets_header/Notice.svg";
import Menubar from "../assets/assets_header/Menubar.svg";
import Search from "../assets/assets_header/Search.svg";
import Totalmenu from "../assets/assets_header/Totalmenu.svg";
import Camera from "../assets/assets_header/Camera.svg";
import Profile from "../assets/assets_header/Profile.svg";

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.Set>
        <Menubar />
        <Styled.Button src={Logo} />
      </Styled.Set>

      <Styled.Search>
        <Styled.Input type="text" placeholder="검색" />
        <Styled.Button src={Search} />
      </Styled.Search>

      <Styled.Set>
        <Camera />
        <Totalmenu />
        <Notice />
        <Styled.Button src={Profile} />
      </Styled.Set>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 97%;
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  height: 70px;
  z-index: 1;

  @media (max-width: 800px) {
    justify-content: space-around;
  }

  .icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  `,
  Set: styled.div`
  display: flex;
  gap: 25px;
  `,
  Button: styled.img``,
  Search: styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  margin: 0px 25px;
  .search-button {
    width: 24px;
    height: 24px;
    padding: 2px 20px;
    border: 1px solid #d3d3d3;
    background-color: #f8f8f8;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: none;
  }
  `,
  Input: styled.input`
    flex: 1;
    height: 27px;
    border: 1px solid lightgray;
    outline: none;
    padding: 0px 6px;
    ::placeholder {
      color: gray;
    }
  `
};

export default Header;
