import React from "react";
import styled from 'styled-components';
import Header from '../../Header/Header';
import twinkle from '../../../assets/img/반짝.svg';
import ellipse from '../../../assets/img/Ellipse.svg';
import cat from '../../../assets/img/고양이.svg';
import { useNavigate } from 'react-router-dom';

// 기본 화면 및 배경 => 배경화면 나중에 뷰포트 기준으로 바꿀 예정?
const Container = styled.div`
  box-sizing: border-box;
  width: 1920px; 
  height: 1080px;
  position: relative;
  background-image: url(${twinkle}); 
  background-repeat: no-repeat;
  background-color: #081A2F;
`;
// 피그마랑 똑같이 구현하려면 배경을 한번 더 덧대야한다고 생각해서 함...
const OverlapContainer = styled.div`
  width: 100%;
  height: 980px;
  background-color: rgba(8, 26, 47, 0.61);
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
`;
// 이 부분 다시 수정할 예정..!?
// 고양이 뒤에 빛
const Ellipse = styled.img`
  top: 90px;
  position: absolute;
`;
// 고양이
const Cat = styled.img`
  width: 93px;
  height: 112.18px;
  position: absolute;
  top: 232px;
`;

const MainCon = styled.div`
  width: 360px;
  height: 332px;
  position: absolute;
  top: 403px;
  text-align: center;
`;
// 고양이 밑에 텍스트
const Text = styled.div`
  font-weight: bold;
  font-family: 'NanumGothic';
  font-size: 24px;
  color: #FFF;
  margin-bottom: 8px;
  &:last-of-type {
    margin-bottom: 110px;
  }
`;
const Button = styled.button`
  cursor: pointer;
  width: 330px;
  height: 42px;
  border-radius: 10px;
  border: 1px solid #FFFEF8;
  background-color: #001D40;
  color: #FFF;
  margin-bottom: 20px;
  font-weight: bold;
  font-family: 'NanumGothic';
  font-size: 18px;

  ${({ isFirst }) =>
    isFirst &&
    `
    background-color: #FFF;
    color: #000;
  `}
`;
const CompletedLetterReplying = () => {
  const navigate = useNavigate(); 
  const handleNavigateToRomainticLetterboxMain = () => {
    navigate('/RomanticLetterbox');  
  };
  const handleNavigateToCollectionMain = () => {
    navigate('/CollectionMain');  
  };
  return (
    <div>
      <Container>
          <Header />
          <OverlapContainer>
          <Ellipse src={ellipse} alt="번쩍"/>
          <Cat src={cat} alt="고양이"/>
          <MainCon>
            <Text>
            편지가 성공적으로 발송되었습니다. 
            </Text>
            <Text>
            답장해주셔서 감사합니다.
            </Text>

            <Button isFirst
            onClick={handleNavigateToRomainticLetterboxMain}>
            낭만우편함으로돌아가기
            </Button>
            <Button onClick={handleNavigateToCollectionMain}>
            낭만모음집바로가기
            </Button>
          </MainCon>
          </OverlapContainer>
      </Container>
    </div>
  );
};
 
export default CompletedLetterReplying;