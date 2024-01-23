import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/img/낭만고양이로고.svg';
import feather from '../../assets/img/Feather.svg';
import featherRed from '../../assets/img/FeatherRed.svg';
import '../../index.css';

const Container = styled.div`
  width: 1486px;
  height: 100px;
  background: '#FFFEF8';
  justify-content: center;
  align-items: center;
  display: inline-flex;
  padding: 0 217px;
`;

const InnerContainer = styled.div`
  width: 1486px;
  height: 100px;
  position: relative;
`;

const LogoContainer = styled.div`
  width: 146px;
  height: 36px;
  left: 0;
  top: 32px;
  position: absolute;
`;

const LogoImg = styled.img`
  width: 32.02px;
  height: 35.66px;
  left: 0;
  top: 0;
  position: absolute;
`;

const TextLogo = styled.div`
  width: 109px;
  height: 35px;
  left: 37px;
  top: 1px;
  position: absolute;
  color: black;
  font-size: 24px;
  font-family: Gowun Dodum;
  font-weight: 400;
  word-wrap: break-word;
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  left: 961px;
  top: 0;
  position: absolute;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
  display: inline-flex;
`;

const MenuItem = styled.div`
  height: 100px;
  padding-top: 39px;
  padding-bottom: 39px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
`;

const Text = styled.div`
  color: black;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 400;
  word-wrap: break-word;

  .active & {
    color: #C90000;
    border-bottom: 2px #C90000 solid;
    padding-bottom: 39px;
  }
`;

const FeatherContainer = styled.div`
  width: 25px;
  height: 100px;
  left: 1461px;
  top: 0;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

//아이콘 클릭시 빨간색 아이콘 이미지로 변경
const Feather = ({ to, alt }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const src = isActive ? featherRed : feather;

  const FeatherIcon = styled.div`
  width: 25px;
  height: 25px;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  `;

  const FeatherImg = styled.img`
    width: 25px;
    height: 25px;

    .active & {
      color: #C90000;
      border-bottom: 2px #C90000 solid;
      padding-bottom: 39px;
    }
  `;

  return (
    <FeatherIcon>
      <FeatherImg src={src} alt={alt} />
    </FeatherIcon>
  );
};

export default function Header() {
  return (
    <Container>
      <InnerContainer>
        <StyledNavLink to="/">
        <LogoContainer>
          <LogoImg src={logo} alt='logo' />
          <TextLogo>낭만고양이</TextLogo>
        </LogoContainer>
        </StyledNavLink>
        <MenuContainer>
          <MenuItem>
            <StyledNavLink to="/MyLetterbox"><Text>내 우편함</Text></StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/AddressBook"><Text>주소록</Text></StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/RomanticLetterbox"><Text>낭만 우편함</Text></StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/Store"><Text>상점</Text></StyledNavLink>
          </MenuItem>
        </MenuContainer>
        <FeatherContainer>
          <StyledNavLink to="/MyPage">
            <Feather to="/MyPage" alt='feather' />
          </StyledNavLink>
        </FeatherContainer>
      </InnerContainer>
    </Container>
  );
}

