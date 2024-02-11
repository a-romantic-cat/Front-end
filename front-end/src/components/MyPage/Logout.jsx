import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

//모달창 열릴 때 백그라운드 블러 처리
const BackgroundBlur = styled.div`
    width: 1920px;
    height: 1509px;
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
    width: 525px;
    height: 297px;
    border-radius: 10px;
    background: var(--Background-Ivory, #FFFEF8);
    //overflow: visible;
    margin-bottom: 50px; // 모달창 조금 위로 가게
`;

//로그아웃 하시겠습니까?
const Text = styled.div`
    width: 231px;
    height: 24px;
    display: flex;
    justify-content: space-between;
    margin-top: 57px;
    margin-left: 147px;
`;

//로그아웃
const RedText = styled.div`
    color: #C90000;
    text-align: center;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 24px */
    letter-spacing: 0.48px;
`;

//하시겠습니까?
const BlackText = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0.48px;
`;

//취소, 로그아웃
const ButtonContainer = styled.div`
    width: 377px;
    height: 60px;
    margin-left: 74px;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
`;

//취소 버튼
const CloseButton = styled.div`
    display: flex;
    width: 174px;
    height: 60px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid var(--Grey-Dark, #757575);
    background: #FFF;
    color: var(--Grey-Dark, #757575);
    font-family: 'Pretendard';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
`;

//로그아웃 버튼
const RealLogoutButton = styled.div`
    display: flex;
    width: 174px;
    height: 60px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    border-radius: 10px;
    background: var(--Red-Light, #C90000);
    color: #FFF;
    font-family: 'Pretendard';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
`;



export default function Logout({ isOpen, onClose }) {

  const navigate = useNavigate();
  
  const navigateToHome = () => {
    navigate("/");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <BackgroundBlur>
      <ModalContainer>

        <Text>
            <RedText>
                로그아웃
            </RedText>

            <BlackText>
                하시겠습니까?
            </BlackText>
        </Text>

        <ButtonContainer>
            <CloseButton onClick={onClose}>
                취소
            </CloseButton>
            <RealLogoutButton onClick={navigateToHome}>
                로그아웃
            </RealLogoutButton>
        </ButtonContainer>

      </ModalContainer>
    </BackgroundBlur>
  );
}
