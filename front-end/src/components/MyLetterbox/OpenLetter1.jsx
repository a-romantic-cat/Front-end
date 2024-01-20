import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import Pin from '../../assets/img/Pin.svg';
import XButton from '../../assets/img/X_Button.svg';
import Cat from '../../assets/img/고양이.svg';
import DropButton from '../../assets/img/Drop_Button.svg';
import DotStyle from '../../assets/img/DotStyle.svg';
import '../../index.css';

//닉네임님의 우편함
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

//고양이
const CatImg = styled.img`
  width: 129.04px;
  height: 155.65px;
  position: absolute;
  left: 394px;
  top: 807px;
`;

//공개한 편지의 우표모음
const StampCollectionContainer = styled.div`
  width: 990px;
  height: 732px;
  position: absolute;
  left: 567px;
  top: 251px;
  background: #DCBC64;
  border-radius: 20px;
`;

const XButtonImg = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 965px;
  top: -25px;
`;

const StampCollectionInnerContainer = styled.div`
  width: 990px;
  height: 614px;
  position: absolute;
  left: 0;
  top: 59px;
  background: #DCBC64;
  overflow-y: scroll; // 세로 방향으로 스크롤 허용
  overflow-x: hidden; // 가로 방향으로 스크롤 제거

  //스크롤바의 영역
::-webkit-scrollbar {
  width: 4px;
  height: 558px;
  position: absolute;
  left: 953px;
  top: 28px;
}

/* 스크롤바의 배경색 지정 */
::-webkit-scrollbar-track {
  background: #B3B3B3;
}

/* 스크롤바의 실제 움직이는 부분(Thumb)의 스타일 지정 */
::-webkit-scrollbar-thumb {
  background: #79110E;
  border-radius: 10px;
  width: 77.64px;
  height: 0;
  position: absolute;
  left: 4px;
  top: ${props => props.top}px; // 라인의 top 위치는 props로 받아와서 설정
  transform: rotate(90deg);
  transform-origin: 0 0;
  border: 8px solid;
}

::webkit-scrollbar-button {
  display: none;
}
`;

const SubContainer = styled.div`
  width: 847px;
  height: 221px;
  position: absolute;
  left: 71px;
`;

const StampContainer = styled.div`
  width: 166px;
  height: 221px;
  position: absolute;
  background: white;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const DropButtonImg = styled.img`
  width: 16px; 
  height: 10px;
  left: 138px;
  top: 13px;
  position: absolute;
`;

const StampText = styled.div`
  color: black;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 22px;
  word-wrap: break-word;
  left: 61px;
  top: 98px;
  position: absolute;
`;

{/*
const BorderLine = styled.div`
  width: 4px;
  height: 558px;
  position: absolute;
  left: 953px;
  top: 28px;
`;

const Line = styled.div`
  height: 0;
  position: absolute;
  left: 4px;
  top: ${props => props.top}px; // 라인의 top 위치는 props로 받아와서 설정
  transform: rotate(90deg);
  transform-origin: 0 0;
  border: 8px solid;
  border-radius: 10px;
`;
*/}

const DotStyleImg = styled.img`
  width: 925px;
  position: absolute;
  left: 33px;
`;

const PinImg = styled.img`
  width: 57px;
  height: 57px;
  position: absolute;
  left: 467px;
  top: -29px;
`;

export default function OpenLetter1() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate(); 

  const navigateToMyLetterbox = () => {
    navigate('/MyLetterbox');  
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />

      <Container>
        <InnerContainer>
          <Nickname>
            <div>닉네임</div>
          </Nickname>
          <Message>님의 우편함</Message>
        </InnerContainer>
      </Container>

      <CatImg src={Cat} alt='cat' />

      <StampCollectionContainer>
        <XButtonImg src={XButton} alt='XButton' onClick={navigateToMyLetterbox}/>
        <StampCollectionInnerContainer>
          <SubContainer style={{top: 28}}>
            <StampContainer style={{left: 0}}>
              <DropButtonImg src={DropButton} alt='DropButton' />
              <StampText>우표</StampText>
            </StampContainer>
            <StampContainer style={{left: 227}}>
              <DropButtonImg src={DropButton} alt='DropButton' />
              <StampText>우표</StampText>
            </StampContainer>
            <StampContainer style={{left: 454}}>
              <DropButtonImg src={DropButton} alt='DropButton' />
              <StampText>우표</StampText>
            </StampContainer>
            <StampContainer style={{left: 681}}>
              <DropButtonImg src={DropButton} alt='DropButton' />
              <StampText>우표</StampText>
            </StampContainer>
          </SubContainer>
          <SubContainer style={{top: 307}}>
            <StampContainer style={{left: 0}}>
              <DropButtonImg src={DropButton} alt='DropButton' />
              <StampText>우표</StampText>
            </StampContainer>
            <StampContainer style={{left: 227}}>
              <DropButtonImg src={DropButton} alt='DropButton' />
              <StampText>우표</StampText>
            </StampContainer>
            <StampContainer style={{left: 454}}>
              <DropButtonImg src={DropButton} alt='DropButton' />
              <StampText>우표</StampText>
            </StampContainer>
            <StampContainer style={{left: 681}}>
              <DropButtonImg src={DropButton} alt='DropButton' />
              <StampText>우표</StampText>
            </StampContainer>
          </SubContainer>
          <SubContainer style={{top: 586}}>
            <StampContainer style={{left: 0}}>
              <DropButtonImg src={DropButton} alt='DropButton' />
              <StampText>우표</StampText>
            </StampContainer>
            <StampContainer style={{left: 227}}>
              <DropButtonImg src={DropButton} alt='DropButton' />
              <StampText>우표</StampText>
            </StampContainer>
            <StampContainer style={{left: 454}}>
              <DropButtonImg src={DropButton} alt='DropButton' />
              <StampText>우표</StampText>
            </StampContainer>
            <StampContainer style={{left: 681}}>
              <DropButtonImg src={DropButton} alt='DropButton' />
              <StampText>우표</StampText>
            </StampContainer>
          </SubContainer>
          {/*
          <BorderLine>
            <Line style={{borderColor: '#B3B3B3', width: '553.15px'}} />
            <Line style={{borderColor: '#79110E', width: '77.64px', top: scrollPosition}} />
          </BorderLine>
          */}
        </StampCollectionInnerContainer>
        <DotStyleImg src={DotStyle} alt='DotStyle' style={{top: 20}} />
        <DotStyleImg src={DotStyle} alt='DotStyle' style={{top: 712}} />
        <PinImg src={Pin} alt='핀' />
      </StampCollectionContainer>
    </div>
  )
}
