import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/img/낭만고양이로고.svg';
import feather from '../../assets/img/Feather.svg';
import featherRed from '../../assets/img/FeatherRed.svg';
import '../../index.css';


const Container = styled.div`
  width: 1486px;
  height: 100px;
  background : #FFFEF8;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  padding: 0 217px;
  // 낭만 우편함 배치때문에 추가한 코드
  position: relative;
  z-index: 3;
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
  height: 21px;
  padding-top: 39px;
  padding-bottom: 39px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
  border-bottom: ${props => props.active ? '2px #C90000 solid' : 'none'};
`;

const Text = styled.div`
  color: black;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 400;
  word-wrap: break-word;
  color: ${props => props.active ? '#C90000' : 'black'};
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

//로그인 버튼 
const LoginButton = styled.div`
  width: 47px; 
  height: 21px;
  padding: 10.50px 20px;
  background: #C90000;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
`;

const LoginText = styled.div`
  color: white; 
  font-size: 18px;
  font-family: 'Pretendard'; 
  font-weight: 400;
  word-wrap: break-word;
`;

//마우스 오버시 나타나는 메뉴
const DetailMenuContainer = styled.div`
  width: 1920px;
  height: 200px;
  position: absolute;
  left: 0;
  top: 100px;
  background: #FFFEF8;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
`;

const ColumnContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  display: inline-flex;
`;

const DetailMenuItem = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
  cursor: pointer;
`;

const DetailMenuText = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 400;
  word-wrap: break-word;

  .active & {
    color: #C90000;
    font-weight: 500;
  }
`;

//아이콘 클릭시 빨간색 아이콘 이미지로 변경
const Feather = ({ to, alt }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const src = isActive ? featherRed : feather;

  return (
    <FeatherIcon>
      <FeatherImg src={src} alt={alt} />
    </FeatherIcon>
  );
};

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const showMenu = () => {
    setMenuVisible(true);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const location = useLocation();

  useEffect(() => {
    switch(location.pathname) {
      case '/MyLetterbox':
      case '/SlowLetterboxToday':
      case '/PastLetterbox1':
        setActiveIndex(0);
        break;
      case '/AddressBook':
        setActiveIndex(1);
        break;
      case '/RomanticLetterbox':
      case '/WritingLetter':
      case '/ReplyingLetter':
      case '/CollectionMain':
        setActiveIndex(2);
        break;
      case '/Store':
      case '/CollectionBoxMain':
      case '/MissionMain':
        setActiveIndex(3);
        break;
      default:
        setActiveIndex(null);
        break;
    }
  }, [location]);


  return (
    <Container>
      <InnerContainer>
        <StyledNavLink to="/">
        <LogoContainer>
          <LogoImg src={logo} alt='logo' />
          <TextLogo>낭만고양이</TextLogo>
        </LogoContainer>
        </StyledNavLink>
        <MenuContainer onMouseEnter={showMenu} onMouseLeave={hideMenu}>
          <MenuItem active={activeIndex === 0}>
            <StyledNavLink to="/MyLetterbox">
              <Text>내 우편함</Text>
            </StyledNavLink>
          </MenuItem>
          <MenuItem active={activeIndex === 1}>
            <StyledNavLink to="/AddressBook">
              <Text>주소록</Text>
            </StyledNavLink>
          </MenuItem>
          <MenuItem active={activeIndex === 2}>
            <StyledNavLink to="/RomanticLetterbox">
              <Text>낭만 우편함</Text>
            </StyledNavLink>
          </MenuItem>
          <MenuItem active={activeIndex === 3}>
            <StyledNavLink to="/Store">
              <Text>상점</Text>
            </StyledNavLink>
          </MenuItem>
        </MenuContainer>
        <FeatherContainer>
          <StyledNavLink to="/MyPage">
            <Feather to="/MyPage" alt='feather' />
          </StyledNavLink>
        </FeatherContainer>
      </InnerContainer>

      {menuVisible && (
        <DetailMenuContainer onMouseEnter={showMenu} onMouseLeave={hideMenu}>
          <ColumnContainer style={{left: 1179, top: 22, position: 'absolute'}}>
            <DetailMenuItem>
              <StyledNavLink to="/MyLetterbox">
                <DetailMenuText active={activeIndex === 0} onClick={() => handleClick(0)}>
                  내 우편함
                </DetailMenuText>
              </StyledNavLink>
            </DetailMenuItem>
            <DetailMenuItem>
              <StyledNavLink to="/SlowLetterboxToday">
                <DetailMenuText active={activeIndex === 1} onClick={() => handleClick(1)}>
                  느린 우편함
                </DetailMenuText>
              </StyledNavLink>
            </DetailMenuItem>
            <DetailMenuItem>
              <StyledNavLink to="/PastLetterbox1">
                <DetailMenuText active={activeIndex === 2} onClick={() => handleClick(2)}>
                  지난 우편함
                </DetailMenuText>
              </StyledNavLink>
            </DetailMenuItem>
          </ColumnContainer>
          <ColumnContainer style={{left: 1395, top: 22, position: 'absolute'}}>
            <DetailMenuItem>
              <StyledNavLink to="/RomanticLetterbox">
                <DetailMenuText active={activeIndex === 3} onClick={() => handleClick(3)}>
                  낭만 우편함
                </DetailMenuText>
              </StyledNavLink>
            </DetailMenuItem>
            <DetailMenuItem>
              <StyledNavLink to="/WritingLetter">
                <DetailMenuText active={activeIndex === 4} onClick={() => handleClick(4)}>
                  편지 쓰기
                </DetailMenuText>
              </StyledNavLink>
            </DetailMenuItem>
            <DetailMenuItem>
              <StyledNavLink to="/ReplyingLetter">
                <DetailMenuText active={activeIndex === 5} onClick={() => handleClick(5)}>
                  편지 답장하기
                </DetailMenuText>
              </StyledNavLink>
            </DetailMenuItem>
            <DetailMenuItem>
              <StyledNavLink to="/CollectionMain">
                <DetailMenuText active={activeIndex === 6} onClick={() => handleClick(6)}>
                  낭만 모음집
                </DetailMenuText>
              </StyledNavLink>
            </DetailMenuItem>
          </ColumnContainer>
          <ColumnContainer style={{left: 1522, top: 22, position: 'absolute'}}>
            <DetailMenuItem>
              <StyledNavLink to="/Store">
                <DetailMenuText active={activeIndex === 7} onClick={() => handleClick(7)}>
                  상점
                </DetailMenuText>
              </StyledNavLink>
            </DetailMenuItem>
            <DetailMenuItem>
              <StyledNavLink to="/CollectionBoxMain">
                <DetailMenuText active={activeIndex === 8} onClick={() => handleClick(8)}>
                  수집함
                </DetailMenuText>
              </StyledNavLink>
            </DetailMenuItem>
            <DetailMenuItem>
            <StyledNavLink to="/MissionMain">
              <DetailMenuText active={activeIndex === 9} onClick={() => handleClick(9)}>
                미션
              </DetailMenuText>
            </StyledNavLink>
            </DetailMenuItem>
          </ColumnContainer>
        </DetailMenuContainer>
      )}
    </Container>
  );
}