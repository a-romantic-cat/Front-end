import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Container = styled.div`
  width: 330px;
  height: 361.00085px;
  margin: 254px 0 363px 795px;
`;

const BlackCat = styled.div`
  background-image: url("/images/검정고양이.svg");
  width: 143px;
  height: 137px;
  margin: 0 0 0 94px;
`;

const Text = styled.div`
  width: 330px;
  height: 66px;
  margin: 40.82px 0 0 0;
  
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ReturnButton = styled.div`
  width: 330px;
  height: 42px;
  margin: 100px 0 0 0;
  display: flex; //center쓰려면 dislpayflex해야함
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: var(--Red-Light, #C90000);
  cursor: pointer;
`;

const ReturnText = styled.div`
  color: #FFF;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Answer4 = () => {
  const navigate = useNavigate();

  const navigateToMyBoxMain = () => {
    navigate("/MyLetterbox");
  };

  return (
    <div>
      <Header />
      
      <Container>
        <BlackCat>
        </BlackCat>
        <Text>
          편지가 성공적으로 발송되었습니다.<br />
          편지는 24시간 뒤에 도착해요!
        </Text>
        <ReturnButton onClick={navigateToMyBoxMain}>
            <ReturnText>
              내 우편함으로 돌아가기
            </ReturnText>
        </ReturnButton>
      </Container>
      
      <Footer />
    </div>
  );
};
 
export default Answer4;