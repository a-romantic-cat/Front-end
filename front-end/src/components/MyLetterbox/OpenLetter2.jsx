import React from "react";
import styled from 'styled-components';
import '../../index.css';

const BackgroundBlur = styled.div`
  width: 990px;
  height: 732px;
  position: absolute;
  left: 567px;
  top: 251px;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center; 
  align-items: flex-end;
  background: rgba(0, 0, 0, 0.50);
  border-radius: 20px;
  backdrop-filter: blur(8px);
  z-index: 1000;
`;

const MainContainer = styled.div`
  width: 578px;
  height: 346px;
  position: absolute;
  left: 206px;
  top: 193px;
  background: #FFFEF8;
  border-radius: 10px;
  overflow: hidden;
`;

const StampContainer = styled.div`
  width: 39px;
  height: 22px;
  padding: 43px 23px 47px 22px;
  left: 469px;
  top: 30px;
  position: absolute;
  background: #C0C0C0;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const FromContainer = styled.div`
  height: 12px;
  left: 503px;
  top: 304px;
  position: absolute;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ToContainer = styled.div`
  height: 12px;
  left: 25px;
  top: 30px;
  position: absolute;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const LineContainer = styled.div`
  width: 528px;
  height: 168px;
  left: 25px;
  top: 99px;
  position: absolute;
`;

const Text = styled.div`
  color: black;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 22px;
  word-wrap: break-word;
`;

const Text2 = styled.div`
  color: black;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0.28px;
  word-wrap: break-word;
`;

const Text3 = styled.div`
  width: 528px;
  left: 25px;
  top: 75px;
  position: absolute;
  color: black;
  font-size: 14px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
`;

const Line1 = styled.div`
  width: 427px;
  height: 0px;
  left: 0;
  position: absolute;
  border: 0.50px #C5C5C5 solid;
`;

const Line2 = styled.div`
  width: 528px;
  height: 0px;
  left: 0;
  position: absolute;
  border: 0.50px #C5C5C5 solid;
`;


export default function OpenLetter2({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <BackgroundBlur>
        <MainContainer>
          <StampContainer>
            <Text>우표</Text>
          </StampContainer>
          <FromContainer>
            <Text2>닉네임이</Text2>
          </FromContainer>
          <ToContainer>
            <Text2>닉네임에게</Text2>
          </ToContainer>
          <LineContainer>
            <Line1 style={{top: 0}} />
            <Line1 style={{top: 28}} />
            <Line1 style={{top: 56}} />
            <Line2 style={{top: 84}} />
            <Line2 style={{top: 112}} />
            <Line2 style={{top: 140}} />
            <Line2 style={{top: 168}} />
          </LineContainer>
          <Text3>편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요...</Text3>
        </MainContainer>
      </BackgroundBlur>
    </div>
  )
}
