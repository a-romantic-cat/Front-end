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
  left: 60px;
  top: 502.50px;
`;

const SlowText = styled.div`
  width: 38px;
  heigth: 438px;
  color: black;
  font-size: 40px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  word-wrap: break-word;
  position: absolute;
  left: 11px;
  top: 10px;
`;

const HappyText = styled.div`
  position: absolute;
  left: 567px;
  top: 252px;
  color: black;
  font-size: 20px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  word-wrap: break-word;
`;

const TextDiv = styled.div`
  position: absolute;
  left: 11px;
  top: 10px;
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




export default function SlowLetterboxToday() {
  return (
    <div>
      <Header />

      <SlowLetterboxContainer>
        <Slow1Img src={Slow1} alt='Slow1' />
        <Slow2Img src={Slow2} alt='Slow2' />
        <TextDiv>
          <Text40>느<br/>리<br/>ㅣ<br/>ㄴ<br/></Text40>
          <Text20><br/></Text20>
          <Text40>우<br/>편<br/></Text40>
          <Text40>함</Text40>
        </TextDiv>
      </SlowLetterboxContainer>

      <HappyText>
      오늘 하루 행복했나요?<br/><br/>길을 걷다 내 취향인 카페를 발견한 것, <br/>눈물 날 만큼 재밌는 영화를 본 것,<br/>사랑하는 사람과 시간을 보낸 것,<br/>.<br/>.<br/>.<br/>당신의 행복한 순간을 기록해 주세요.<br/>낭만고양이가<br/>매일의 행복을 모아 올해의 마지막 주에 전달해 드릴게요.<br/>소소한 행복들이 쌓여 큰 행복으로 돌아올 거예요.
      </HappyText>
    </div>
  )
}
