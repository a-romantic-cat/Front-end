import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import '../../index.css';
import Letterbox from '../../assets/img/우체통.png';
import Cat from '../../assets/img/고양이.png';
import i_button from '../../assets/img/i_button.png';
import share_button from '../../assets/img/share_Button.png';
import Info from './Info';

//닉네임님의 우편함이름
const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 11px;
  display: inline-flex;
  margin-left: 363px;
  margin-top: 62px;
`;

const InnerContainer = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
`;

const Nickname = styled.div`
  color: #79110E;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Message = styled.div`
  color: black;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

const MailboxName = styled.div`
  color: #79110E;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//편지가 도착했어요. 우편함을 확인해보세요
const Notice = styled.div`
  color: #757575;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 400;
  word-wrap: break-word;
  margin-left: 363px;
  margin-top: 11px;
`;

//남은 시간
const TimeContainer = styled.div`
  width: 234px;
  height: 46px;
  position: relative;
  background: linear-gradient(180deg, #F5F3E9 0%, #FFFEF8 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  overflow: hidden;
  margin-left: 363px;
  margin-top: 22px;
`;

const TimeInnerContainer = styled.div`
  left: 56px;
  top: 5px;
  position: absolute;
`;

const Colon = styled.div`
  position: absolute;
  text-align: center;
  color: black;
  font-size: 15px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 37px;
  word-wrap: break-word;
`;

const Numbers = styled.div`
  left: 19px;
  top: 16px;
  position: absolute;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 42px;
`;

const Number = styled.div`
  text-align: center;
  color: black;
  font-size: 15px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 15px;
  word-wrap: break-word;
`;

//우편함 이미지
const LetterboxImg = styled.img`
  width: 174px;
  height: 284px;
  margin-left: 873px;
  margin-top: 225px;
`

//고양이 이미지
const CatImg = styled.img`
  width: 80px;
  height: 96.5px;
  margin-left: 30px;
  margin-top: 188px;
`

//고양이 설명
const TextContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 690px;
    left: 1172px;
`;

const AbsoluteText = styled.div`
    position: absolute;
    color: black;
    font-size: 12px;
    font-family: 'Pretendard';
    font-weight: 400;
    word-wrap: break-word;
    bottom: 3px;
`;

const ColorText = styled.span`
    color: ${props => props.color};
    font-size: 12px;
    font-family: 'Pretendard';
    font-weight: 400;
    word-wrap: break-word;
`;

// 우체통 아래 버튼
const IButtonImg = styled.img`
  width: 37px;
  height: 37px;
  position: absolute;
  left: 836px;
  top: 855px;
`

const ShareButtonImg = styled.img`
  width: 39px;
  height: 37px;
  position: absolute;
  left: 1047px;
  top: 855px;
`

//우편함 확인하기
const BoxCheckContainer = styled.div`
    width: 114px;
    height: 21px;
    left: 884px;
    top: 855px; 
    position: absolute;
    padding: 8px 19.5px;
    background: black;
    border-radius: 6px;
    border: 1px black solid;
    justify-content: center;
    align-items: center;
    gap: 12.38px;
    display: inline-flex;
`;

const BoxCheckText = styled.div`
    color: white;
    font-size: 18px;
    font-family: 'Pretendard';
    font-weight: 400;
    word-wrap: break-word;
`;

export default function MyLetterboxMain() {

  const [numbers, setNumbers] = useState([32, 25, 11, 9]);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  return (
    <div>
      <Header />

      <Container>
        <InnerContainer>
          <Nickname>
            <div>닉네임</div>
          </Nickname>
          <Message>님의</Message>
        </InnerContainer>
        <MailboxName>우편함이름</MailboxName>
      </Container>

      <Notice>편지가 도착했어요. 우편함을 확인해보세요!</Notice>

      <TimeContainer>
        <TimeInnerContainer>
          <Colon>:</Colon>
          <Colon style={{ left: '58px' }}>:</Colon>
          <Colon style={{ left: '116px' }}>:</Colon>
        </TimeInnerContainer>
        <Numbers>
          {/* numbers 배열의 각 숫자를 반복하여 표시 */}
          {numbers.map((number, index) => (
            <Number key={index}>{number}</Number>
          ))}
        </Numbers>
      </TimeContainer>

      <LetterboxImg src={Letterbox} alt='letterbox' />
      <CatImg src={Cat} alt='cat' />
      <TextContainer>
        <AbsoluteText style={{ left: 0, top: 0 }}>저를 누르면 닉네임님이</AbsoluteText>
        <AbsoluteText style={{ left: 0, top: 17 }}>
            <ColorText color="#C90000">공개한 편지</ColorText>
            <ColorText color="black">를 볼 수 있어요!</ColorText>
        </AbsoluteText>
      </TextContainer>

      <IButtonImg src={i_button} alt='i_button' onClick={() => {setIsModalOpen(true)}} /> {/* 이미지 클릭 시 모달 열림 */}
        <Info isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ShareButtonImg src={share_button} alt='share_button' />
      <BoxCheckContainer>
        <BoxCheckText>우편함 확인하기</BoxCheckText>
      </BoxCheckContainer>
    </div>
  )
}
