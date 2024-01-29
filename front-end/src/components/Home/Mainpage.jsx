import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';


//화면1
const Container1 = styled.div`
  background-image: url("/images/홈1.svg");
  width: 1920px;
  height: 1754px;
`;

//화면2
const Container2 = styled.div`
  background-image: url("/images/홈2.svg");
  width: 1920px;
  height: 1080px;
`;

//화면3
const Container3 = styled.div`
  background-image: url("/images/홈3.svg");
  width: 1920px;
  height: 1080px;
`;

//화면4
const Container4 = styled.div`
  background-image: url("/images/홈4.svg");
  width: 1920px;
  height: 1080px;
  overflow: auto; //내 우편함 가기 버튼 margin-top오류
`;

const LinkContainer = styled.div`
  width: 78px;
  height: 151px;
  margin: 276px 0 0 369px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

//내 우편함
const MyLetter = styled.div`
  color: #000;
  font-family: "Gowun Dodum";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  cursor: pointer;
`;

//주소록
const Address = styled.div`
  color: #000;
  font-family: "Gowun Dodum";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  cursor: pointer;
`;

//낭만 우편함
const Romantic = styled.div`
  color: #000;
  font-family: "Gowun Dodum";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  cursor: pointer;
`;

//상점
const Store = styled.div`
  width: 78px; // 상점하고 내정보 줄바꿈 되게
  color: #000;
  font-family: "Gowun Dodum";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  white-space: nowrap;
  cursor: pointer;
`;

//내 정보
const MyInfo = styled.div`
  color: #000;
  font-family: "Gowun Dodum";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  white-space: nowrap;
  cursor: pointer;
`;

//내 우편함 가기 버튼
const Button = styled.div`
  display: flex;
  width: 234px;
  height: 60px;
  //padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 883px 0 0 837px;  
  //margin: 0 0 0 837px;
  border-radius: 10px;
  background: var(--Red-Light, #C90000);
  cursor: pointer;
`;

const ArrowAndText = styled.div`
  width: 156px;
  height: 24px;
  display: flex; // 글씨랑 화살표 가로배치
  justify-content: space-between;
`;

//내 우편함 가기
const GotoMyLetter = styled.div`
  color: #FFF;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 24px */
`;

//화살표
const Arrow = styled.div`
  width: 10px;
  height: 20px;
`;

export default function Mainpage() {

  const navigate = useNavigate();

  const navigateToMyBoxMain = () => {
    navigate("/MyLetterbox");
  };

  const navigateToAddress = () => {
    navigate("/AddressBook");
  };

  const navigateToRomantic = () => {
    navigate("/RomanticLetterbox");
  };

  const navigateToStore = () => {
    navigate("/Store");
  };

  const navigateToMyInfo = () => {
    navigate("/MyPage");
  };
  
    return (
      <div>
        <Header />

        <Container1>
          <LinkContainer>
            <MyLetter onClick={navigateToMyBoxMain}>
              내 우편함
            </MyLetter>
            <Address onClick={navigateToAddress}>
              주소록
            </Address>
            <Romantic onClick={navigateToRomantic}>
              낭만 우편함
            </Romantic>
            <Store onClick={navigateToStore}>
              상점
            </Store>
            <MyInfo onClick={navigateToMyInfo}>
              내 정보
            </MyInfo>
          </LinkContainer>
        </Container1>

        <Container2>

        </Container2>

        <Container3>

        </Container3>

        <Container4>
          <Button onClick={navigateToMyBoxMain}>
            <ArrowAndText>
              <GotoMyLetter>
                내 우편함 가기
              </GotoMyLetter>
              <Arrow>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                  <path d="M1 1L11 10.5238L1 21" stroke="white" stroke-width="2.5"/>
                </svg>
              </Arrow>
            </ArrowAndText>
          </Button>
        </Container4>
      </div>
    );
  }
