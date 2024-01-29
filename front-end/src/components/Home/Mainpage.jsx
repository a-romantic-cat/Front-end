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

        </Container4>
      </div>
    );
  }
