import React from 'react'
import styled from 'styled-components';
import InfoImage from '../../assets/img/info.png';
import Vector from '../../assets/img/Vector.png';
import Under from '../../assets/img/Under.png';
import ToggleButton from '../../assets/img/toggle_Button.png';
import X from '../../assets/img/X.png';

//모달창 열릴 때 백그라운드 블러 처리
const BackgroundBlur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center; 
  align-items: flex-end;
  background: rgba(0, 0, 0, 0.36); 
  backdrop-filter: blur(7.10px);
  z-index: 1000;
`

//전체 모달 컨테이너
const ModalContainer = styled.div`
  width: 463px; 
  height: 379px; 
  position: relative; 
  background: white; 
  border-top-left-radius: 70px; 
  border-top-right-radius: 70px; 
  overflow: hidden;
`;

// 검정 윗부분
const BlackBar = styled.div`
  width: 488px; 
  height: 82px; 
  left: 0; 
  top: 0; 
  position: absolute; 
  background: black;
`;

// 내 우편함 정보 
const InfoContainer = styled.div`
  width: 267.18px; 
  height: 25.73px; 
  left: 156px; 
  top: 32px; 
  position: absolute;
`;

const InfoTitle = styled.div`
  left: 29px; 
  top: 3px; 
  position: absolute; 
  color: white; 
  font-size: 20px; 
  font-family: 'Inter'; 
  font-weight: 400; 
  line-height: 20px; 
  word-wrap: break-word;
`;

const InfoImg = styled.img`
  width: 20px;
  height: 20px;
  left: 0;
  top: 3px;
  position: absolute; 
  background: white;
`

const CloseButtonImg = styled.img`
  width: 18px;
  height: 18px;
  left: 254.59px;
  top: 0;
  position: absolute;
`
//내용 중 '우편함 닫기'
const Container1 = styled.div`
  left: 44px;
  top: 294px;
  position: absolute;
`;

const Text1 = styled.div`
  width: 74px;
  height: 19px;
  left: 0;
  top: 3px;
  position: absolute;
  color: black;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`;

const BlackToggleImg = styled.img`
  width: 46px;
  height: 24px;
  left: 329px;
  top: 0;
  position: absolute;
`;

//내용 중 '편지 남길 수 있는 사람'
const Container2 = styled.div`
  left: 44px;
  top: 234px;
  position: absolute;
`;

const Text2 = styled.div`
  width: 141px;
  height: 19px;
  left: 0;
  top: 2px;
  position: absolute;
  color: black;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`;

const WhoeverContainer = styled.div`
  width: 122px;
  height: 15px;
  padding: 4px 6.14px 4px 6px;
  left: 241px;
  top: 0;
  position: absolute;
  background: white;
  border: 1px black solid;
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  gap: 69px;
`;

const WhoeverText = styled.div`
  position: absolute;
  width: 39px;
  height: 15px;
  left: 6px;
  color: black;
  font-size: 15px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 15px;
  word-wrap: break-word;
`;

const UnderImg = styled.img`
  position: absolute;
  width: 13.86px;
  height: 12px;
  background: black;
  top: 6px;
  right: 6.14px;
  bottom: 5px;
  left: 114px;
`

//내용 중 '기간'
const Container3 = styled.div`
  left: 44px;
  top: 178px;
  position: absolute;
`

const PeriodText = styled.div`
  width: 28px;
  height: 19px;
  left: 0;
  top: 0;
  position: absolute;
  color: black;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`

const DateRange = styled.div`
  width: 181px;
  height: 15px;
  left: 194px;
  top: 0;
  position: absolute;
  color: black;
  font-size: 15px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 15px;
  word-wrap: break-word;
`

//내용 중 '이름'
const Container4 = styled.div`
  left: 44px;
  top: 121px;
  position: absolute;
`

const NameText = styled.div`
  width: 28px;
  height: 19px;
  left: 0;
  top: 1px;
  position: absolute;
  color: black;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`
const NameContainer = styled.div`
  width: 138px;
  height: 16.24px;
  left: 237px;
  top: 0;
  position: absolute;
`

const RealNameText = styled.div`
  left: 21px;
  top: 1px;
  position: absolute;
  color: black;
  font-size: 15px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 15px;
  word-wrap: break-word;
`

const NameIconImg = styled.img`
  width: 14.23px;
  height: 16.24px;
  left: 0;
  top: 0;
  position: absolute;
  background: black;
`


export default function Info({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <BackgroundBlur>
      <ModalContainer>
        <BlackBar />
        <InfoContainer>
          <InfoTitle>내 우편함 정보</InfoTitle>
          <InfoImg src={InfoImage} alt='InfoImage' />
          <button onClick={onClose}><CloseButtonImg src={X} alt='X' /></button>
        </InfoContainer>

        <Container1>
          <Text1>우편함 닫기</Text1>
          <BlackToggleImg src={ToggleButton} alt='BlackToggleButton' />
        </Container1>

        <Container2>
          <Text2>편지 남길 수 있는 사람</Text2>
          <WhoeverContainer>
            <WhoeverText>누구나</WhoeverText>
            <UnderImg src={Under} alt='Under' />
          </WhoeverContainer>
        </Container2>

        <Container3>
          <PeriodText>기간</PeriodText>
          <DateRange>2024-01-04 ~ 2024-01-07</DateRange>
        </Container3>

        <Container4>
          <NameText>이름</NameText>
          <NameContainer>
            <RealNameText>23번째 생일 우편함</RealNameText>
            <NameIconImg src={Vector} alt='NameIcon'/>
          </NameContainer>
        </Container4>
      </ModalContainer>
    </BackgroundBlur>
  );
}