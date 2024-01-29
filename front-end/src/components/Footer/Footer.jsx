import React from 'react';
import styled from 'styled-components';

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
`;


export default function Header() {
    return (
      <Container>
        <LinkContainer>
            <Inner1>
                <BoldText>
                    내 우편함
                </BoldText>
                <SmallText>
                    내 우편함
                </SmallText>
                <SmallText>
                    느린 우편함
                </SmallText>
                <SmallText>
                    지난 우편함
                </SmallText>
            </Inner1>

            <Inner2>
                <BoldText>
                    주소록
                </BoldText>
            </Inner2>

            <Inner3>
                <BoldText>
                    낭만 우편함
                </BoldText>
                <SmallText>
                    낭만 우편함
                </SmallText>
                <SmallText>
                    편지 쓰기
                </SmallText>
                <SmallText>
                    편지 답장하기
                </SmallText>
                <SmallText>
                    낭만 모음집
                </SmallText>
            </Inner3>

            <Inner4>
                <BoldText>
                    상점
                </BoldText>
                <SmallText>
                    상점
                </SmallText>
                <SmallText>
                    수집함
                </SmallText>
                <SmallText>
                    미션
                </SmallText>
            </Inner4>

            <Inner5>
                <BoldText>
                    내 정보
                </BoldText>
            </Inner5>
        </LinkContainer>
      </Container>
    );
  }