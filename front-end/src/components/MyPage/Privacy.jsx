import React from "react";
import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Container = styled.div`
    margin-left: 465px;
`;

const TitleContainer = styled.div`
    width: 494px;
    height: 48.34375px;
    margin-top: 65px;
    display: flex;
    align-items: flex-end;
`;

const Cat = styled.div`
    background-image: url("/images/logocat.svg");
    background-size: cover;
    width: 43.26746px;
    height: 48.19801px;
    margin-right: 6.73px;
`;

const Nangman = styled.div`
    color: #000;
    font-family: "Gowun Dodum";
    font-size: 32.429px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.27px;
    white-space: nowrap;
    margin-right: 20px;
    width: 147px; //고양이 그림이랑 자꾸 겹쳐지길래 가로길이 설정해둠
`;

const RedText = styled.div`
    width: 277px;
    white-space: nowrap;
    color: var(--Red-Dark, #79110E);
    font-family: 'Pretendard';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const Version = styled.div`
    color: var(--Grey-Dark, #757575);
    font-family: 'Pretendard';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
    margin-left: 896px;
    margin-top: 26px;
`;

const GrayLine = styled.div`
    width: 990px;
    height: 2px;
    stroke-width: 1px;
    stroke: var(--Grey-Light, #CECECE);
    margin-top: 8px;
    margin-bottom: 63px;
`;

const Explain = styled.div`
    width: 990px;
    height: 196px;
    color: #000;
    font-family: 'Pretendard';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 28px */
    white-space: nowrap;
    margin-bottom: 557px;
`;

export default function Privacy() {
  return (
    <div>
        <Header />

        <Container>
            <TitleContainer>
                <Cat />
                <Nangman>
                    낭만 고양이
                </Nangman>
                <RedText>
                    개인정보처리방침
                </RedText>
            </TitleContainer>

            <Version>
                2024.01.05 ver
            </Version>

            <GrayLine>
                <svg xmlns="http://www.w3.org/2000/svg" width="990" height="2" viewBox="0 0 990 2" fill="none">
                <path d="M0 1L990 1.00009" stroke="#CECECE"/>
                </svg>
            </GrayLine>

            <Explain>
                낭만고양이는<br />
                서비스의 제공에 있어 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 개인정보보호 규정을 철저히 준<br />
                수하며, 관련법령에 따라 본 개인정보 처리방침을 정하여 이용자의 권익 보호에 최선을 다하고 있습니다.<br />
                 <br />
                1. 개인정보 수집 및 이용 현황<br />
                회원가입 시점에 산타파이브가 이용자로부터 수집하는 개인정보는 아래와 같습니다.<br />
                추후 작성
            </Explain>
        </Container>

        <Footer />

    </div>
  )
}
