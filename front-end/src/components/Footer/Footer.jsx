import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    background-image: url("/images/푸터.svg");
    width: 1920px;
    height: 449px;
    overflow: auto; //margin-top 에러 막음
`;

const LinkContainer = styled.div`
    width: 629px;
    height: 229px;
    margin: 40px 0 0 928px;
    display: flex;
    justify-content: space-between;
`;

const Inner1 = styled.div`
    width: 88px;
    height: 182px;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Inner2 = styled.div`
    width: 68px;
    height: 41px;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Inner3 = styled.div`
    width: 104px;
    height: 229px;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Inner4 = styled.div`
    width: 57px;
    height: 182px;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Inner5 = styled.div`
    width: 72px;
    height: 41px;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const BoldText = styled.div`
    width: 88px;
    height: 42px;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.2px;
    cursor: pointer;
`;

const SmallText = styled.div`
    width: 85px;
    height: 37px;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`;

const PrivacyAndUse = styled.div`
    width: 198px;
    height: 17px;
    margin: 112px 0 0 363px;
    display: flex;
    justify-content: space-between;
`;

const Privacy = styled.div`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`;
const Use = styled.div`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`;

export default function Header() {

  const navigate = useNavigate();

  const navigateToMyBoxMain = () => {
    navigate("/MyLetterbox");
  };

  const navigateToSlowLetterboxToday = () => {
    navigate("/SlowLetterboxToday");
  };

  const navigateToPastLetterbox1 = () => {
    navigate("/PastLetterbox1");
  };

  const navigateToAddress = () => {
    navigate("/AddressBook");
  };

  const navigateToRomantic = () => {
    navigate("/RomanticLetterbox");
  };

  const navigateToWritingLetter = () => {
    navigate("/WritingLetter");
  };

  const navigateToReplyingLetter = () => {
    navigate("/ReplyingLetter");
  };

  const navigateToCollectionMain = () => {
    navigate("/CollectionMain");
  };

  const navigateToStore = () => {
    navigate("/Store");
  };

  const navigateToCollectionBoxMain = () => {
    navigate("/CollectionBoxMain");
  };

  const navigateToMissionMain = () => {
    navigate("/MissionMain");
  };

  const navigateToMyPage = () => {
    navigate("/MyPage");
  };

  const navigateToPrivacy = () => {
    navigate("/Privacy");
  };

  const navigateToUse = () => {
    navigate("/Use");
  };

    return (
      <Container>
        <LinkContainer>
            <Inner1>
                <BoldText onClick={navigateToMyBoxMain}>
                    내 우편함
                </BoldText>
                <SmallText onClick={navigateToMyBoxMain}>
                    내 우편함
                </SmallText>
                <SmallText onClick={navigateToSlowLetterboxToday}>
                    느린 우편함
                </SmallText>
                <SmallText onClick={navigateToPastLetterbox1}>
                    지난 우편함
                </SmallText>
            </Inner1>

            <Inner2>
                <BoldText onClick={navigateToAddress}>
                    주소록
                </BoldText>
            </Inner2>

            <Inner3>
                <BoldText onClick={navigateToRomantic}>
                    낭만 우편함
                </BoldText>
                <SmallText onClick={navigateToRomantic}>
                    낭만 우편함
                </SmallText>
                <SmallText onClick={navigateToWritingLetter}>
                    편지 쓰기
                </SmallText>
                <SmallText onClick={navigateToReplyingLetter}>
                    편지 답장하기
                </SmallText>
                <SmallText onClick={navigateToCollectionMain}>
                    낭만 모음집
                </SmallText>
            </Inner3>

            <Inner4>
                <BoldText onClick={navigateToStore}>
                    상점
                </BoldText>
                <SmallText onClick={navigateToStore}>
                    상점
                </SmallText>
                <SmallText onClick={navigateToCollectionBoxMain}>
                    수집함
                </SmallText>
                <SmallText onClick={navigateToMissionMain}>
                    미션
                </SmallText>
            </Inner4>

            <Inner5>
                <BoldText onClick={navigateToMyPage}>
                    내 정보
                </BoldText>
            </Inner5>
        </LinkContainer>

        <PrivacyAndUse>
            <Privacy onClick={navigateToPrivacy}>
                개인정보처리방침
            </Privacy>
            <Use onClick={navigateToUse}>
                이용약관
            </Use>
        </PrivacyAndUse>
      </Container>
    );
  }