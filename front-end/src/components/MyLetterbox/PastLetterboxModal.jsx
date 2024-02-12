import React from 'react';
import styled from 'styled-components';

//모달창 열릴 때 백그라운드 블러 처리
const BackgroundBlur = styled.div`
    width: 1920px;
    height: 1675px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.40);
`;

//전체 모달 컨테이너
const ModalContainer = styled.div`
    background-image: url("/images/열린우편들.svg");
    background-size: cover;
    width: 460px;
    height: 399px;
    //overflow: visible;
    margin-bottom: 789px; // 모달창 조금 위로 가게
    margin-right: 922px; //모달창 조금 왼쪽으로 가게
`;
 
export default function PastLetterboxModal({ isOpen, onClose, position }) {

	if (!isOpen) {
    return null;
  }

  return (
    <div>
        <BackgroundBlur>
            <ModalContainer>
            </ModalContainer>
        </BackgroundBlur>
      
    </div>
  );
    
}