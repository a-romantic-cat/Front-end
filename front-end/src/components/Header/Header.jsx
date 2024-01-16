import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/낭만고양이.png';
import feather from '../../assets/img/Feather.png';
import '../../index.css';

const Container = styled.div`
  width: 1486px;
  height: 100px;
  background: '#FFFEF8';
  justify-content: center;
  align-items: center;
  display: inline-flex;
  padding-left: 217px;
  padding-right: 217px;
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
  height: 33.06px;
  left: 0;
  top: 0;
  position: absolute;
`;

const TextLogo = styled.div`
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

const Feather = styled.div`
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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function Header() {
  return (
    <Container>
      <InnerContainer>
        <StyledLink to="/">
        <LogoContainer>
          <LogoImg src={logo} alt='logo' />
          <TextLogo>낭만고양이</TextLogo>
        </LogoContainer>
        </StyledLink>
        <MenuContainer>
          <MenuItem>
            <StyledLink to="/MyLetterbox"><Text>내 우편함</Text></StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/AddressBook"><Text>주소록</Text></StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/RomanticLetterbox"><Text>낭만 우편함</Text></StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/Store"><Text>상점</Text></StyledLink>
          </MenuItem>
        </MenuContainer>
        <FeatherContainer>
          <Feather>
            <StyledLink to="/MyPage"><FeatherImg src={feather} alt='feather' /></StyledLink>
          </Feather>
        </FeatherContainer>
      </InnerContainer>
    </Container>
  );
}

