import React from 'react'
import styled from 'styled-components';
import Header from '../Header/Header';
import '../../index.css';
import Slow1 from '../../assets/img/Slow1.svg';
import Slow2 from '../../assets/img/Slow2.svg';

const SlowLetterboxContainer = styled.div`
  width: 60px;
  height: 503px;
  position: absolute;
  left: 363px;
  top: 230px;
`;

const Slow1Img = styled.img`
  width: 11px;
  height: 21.50px;
  position: absolute;
  left: 0;
  top: 0;
`;

const Slow2Img = styled.img`
  width: 11px;
  height: 21.50px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const TextDiv = styled.div`
  position: absolute;
  width: 38px;
  height: 483px;
  margin: 10px 11px 9.5px 11px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text40 = styled.span`
  color: black;
  font-size: 40px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  word-wrap: break-word;
`;

const Text20 = styled.span`
  color: black;
  font-size: 20px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  word-wrap: break-word;
`;

const HappyTextContainer = styled.div`
  width: 466px;
  height: 423px;
  position: absolute;
  left: 567px;
  top: 252px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HappyText = styled.div`
  color: black;
  font-size: 20px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  word-wrap: break-word;
`;

function TextLines({ text }) {
  const lines = text.split('\n');  // 텍스트를 줄바꿈 문자를 기준으로 분리합니다.

  return (
    <HappyTextContainer>
      {lines.map((line, index) => (
        <HappyText key={index}>{line}</HappyText>
      ))}
    </HappyTextContainer>
  );
}

export default function SlowLetterboxToday() {
  const text = "오늘 하루 행복했나요?\n\n길을 걷다 내 취향인 카페를 발견한 것, \n눈물 날 만큼 재밌는 영화를 본 것, \n사랑하는 사람과 시간을 보낸 것,\n.\n.\n.\n당신의 행복한 순간을 기록해 주세요.\n낭만고양이가\n매일의 행복을 모아 올해의 마지막 주에 전달해 드릴게요.\n소소한 행복들이 쌓여 큰 행복으로 돌아올 거예요."

  return (
    <div>
      <Header />

      <SlowLetterboxContainer>
        <Slow1Img src={Slow1} alt='Slow1' />
        <Slow2Img src={Slow2} alt='Slow2' />
        <TextDiv>
          <Text40>느<br/>리<br/>ㅣ<br/>ㄴ<br/></Text40>
          <Text20><br/></Text20>
          <Text40>우<br/>편<br/>함</Text40>
        </TextDiv>
      </SlowLetterboxContainer>

      <TextLines text={text} />
    </div>
  )
}
