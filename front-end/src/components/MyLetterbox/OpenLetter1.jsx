import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import Pin from '../../assets/img/Pin.svg';
import XButton from '../../assets/img/X_Button.svg';
import Cat from '../../assets/img/고양이.svg';
import DropButton from '../../assets/img/Drop_Button.svg';
import DotStyle from '../../assets/img/DotStyle.svg';
import OpenLetter2 from './OpenLetter2';

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
  cursor: pointer;
`;

const StampCollectionInnerContainer = styled.div`
  width: 957px;
  height: 614px;
  position: absolute;
  left: 0;
  top: 59px;
  background: #DCBC64;
  overflow-y: scroll; // 세로 방향으로 스크롤 허용
  overflow-x: hidden; // 가로 방향으로 스크롤 제거

  // 스크롤바의 영역
  &::-webkit-scrollbar {
    width: 8px;
    height: 558px;
    position: absolute;
    top: 28px;
  }

  // 스크롤바의 배경색 지정
  &::-webkit-scrollbar-track {
    background: #B3B3B3;
    border-radius: 10px;
  }

  // 스크롤바의 실제 움직이는 부분(Thumb)의 스타일 지정 
  &::-webkit-scrollbar-thumb {
    height: 77px;
    background: #79110E;
    border-radius: 10px;
    position: absolute;
  }

  &::webkit-scrollbar-button {
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
  cursor: pointer;
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
  const subContainerPositions = [28, 307, 586]; // 각 SubContainer의 top 위치를 저장
  const stampContainerPositions = [0, 227, 454, 681]; // 각 StampContainer의 left 위치를 저장
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

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
          {
            // subContainerPositions 배열을 순회하면서 SubContainer 컴포넌트를 생성합니다.
            subContainerPositions.map((top) => (
              <SubContainer style={{ top }}>
                {
                  // stampContainerPositions 배열을 순회하면서 StampContainer 컴포넌트를 생성합니다.
                  stampContainerPositions.map((left) => (
                    <div>
                      <StampContainer style={{ left }} onClick={() => setIsModalOpen(true)}>
                        <DropButtonImg src={DropButton} alt='DropButton' />
                        <StampText>우표</StampText>
                      </StampContainer>
                    </div>
                  ))
                }
              </SubContainer>
            ))
          }
        </StampCollectionInnerContainer>
        <DotStyleImg src={DotStyle} alt='DotStyle' style={{top: 20}} />
        <DotStyleImg src={DotStyle} alt='DotStyle' style={{top: 712}} />
        <PinImg src={Pin} alt='핀' />
      </StampCollectionContainer>

      {/* OpenLetter2 모달 */}
      <OpenLetter2 isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
