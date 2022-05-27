import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/assets_header/img_logo.png';
import Notice from '../assets/assets_header/icn_notice.png';
import Menubar from '../assets/assets_header/icn_menu.png';
import Search from '../assets/assets_header/icn_search.png';
import Totalmenu from '../assets/assets_header/icn_totalmenu.png';
import Camera from '../assets/assets_header/icn_camera.png';
import Profile from '../assets/assets_header/profile.png';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.Set>
        <Button src={Menubar} />
        <StyledLogo src={Logo} />
      </Styled.Set>

      <Styled.Search>
        <Styled.Input type="text" placeholder="검색" />
        <Button src={Search} />
      </Styled.Search>

      <Styled.Set>
        <Button src={Camera} />
        <Button src={Totalmenu} />
        <Button src={Notice} />
        <Button src={Profile} />
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
    height: 56px;
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
    align-items: center;
  `,
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
  `,
};

const Button = styled.img`
  width: 24px;
  height: 24px;
`;

const StyledLogo = styled.img`
  width: 100px;
  height: 40px;
`;

export default Header;
