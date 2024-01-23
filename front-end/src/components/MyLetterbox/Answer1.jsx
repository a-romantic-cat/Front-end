import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 11px;
  display: inline-flex;
  margin-left: 363px;
  margin-top: 62px;
`;

const TextInnerContainer = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
`;

//닉네임
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

//님에게 편지를 작성해주세요
const Message = styled.div`
  color: black;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

//흰 편지지 컨테이너
const WhiteLetterContainer = styled.div`
  background-image: url("/images/더흰편지지.svg");
  background-size: cover;
  //background-size: contain;
  width: 846px;
  height: 506.42908px;
  margin: 70px 537px 0 537px;
  overflow: auto; //자식 마진 탑 오류 때문에 오토처리
  position: relative; //우표랑 겹치게
`;

const ContentContainer = styled.div`
  width: 772px;
  height: 421.04908px;
  margin: 43.91px 37px 41.47px 37px; // 탑 에러나서 부모에 오토처리
`;

//닉네임에게
const ToContainer = styled.div`
  width: 88px;
  height: 20px;
  display: flex;
`;

//'닉네임'(나)
const ToMyNickname = styled.div`
  color: #000;
  font-family: 'NanumGothic';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: 0.4px;
  white-space: nowrap; //줄바꿈 안 되게
`;

//에게
const To = styled.div`
  color: #000;
  font-family: 'NanumGothic';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: 0.4px;
  white-space: nowrap;
`;

const Content = styled.div`
  color: #000;
  font-family: "Gowun Dodum";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%; /* 40px */
  letter-spacing: -0.2px;
  margin-top: 50.08px;
`;

const Stamp = styled.div`
  background-image: url("/images/우표2.svg");
  background-size: cover;
  float: right;
  width: 137.40875px;
  height: 183.21165px;

  position: absolute; //우표가 내용위로 겹치게
  right: 37px;
  top: 43.91px;
`;

//닉네임이
const FromContainer = styled.div`
  width: 71px;
  height: 20px;
  margin: 50.96px 0 0 688.41px;
  display: flex;
`;

//'닉네임'(다른 사용자)
const FromNickname = styled.div`
  color: #000;
  font-family: 'NanumGothic';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: 0.4px;
  white-space: nowrap;
`;

//이
const From = styled.div`
  color: #000;
  font-family: 'NanumGothic';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: 0.4px;
  white-space: nowrap;
`;

//주의사항 설명 글
const ExplanationText = styled.div`
  width: 407px;
  height: 64px;
  margin: 13.57px 0 0 537px;

  color: var(--Grey-Dark, #757575);
  font-family: 'Pretendard';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 15.6px */
  letter-spacing: -0.2px;
  white-space: pre-line
`;

//버튼 3개 컨테이너
const ButtonsContainer = styled.div`
  width: 846px;
  height: 52px;
  margin: 84px 537px 0 537px;
  display: flex; // 버튼들 가로배치
  justify-content: space-between; //양옆끝으로 떨어트리기
`;

//이전 버튼
const PrevButton = styled.div`
  display: flex;
  width: 174px;
  height: 52px;
  justify-content: center;
  align-items: center;
  gap: 12.379px;
  border-radius: 10px;
  background: var(--Red-Light, #C90000);
  cursor: pointer;
`;

const ArrowAndText = styled.div`
  width: 53.38px;
  height: 18px;
  display: flex; // 화살표랑 글씨 가로배치
  justify-content: space-between;
`;

//왼쪽 화살표
const Arrow1 = styled.div`
  width: 9px;
  height: 15px;
`;

const Prev = styled.div`
  color: #FFF;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 18px */
`;

// 상점 버튼
const StoreButton = styled.div`
  display: flex;
  width: 378px;
  height: 52px;
  justify-content: center;
  align-items: center;
  gap: 12.379px;
  border-radius: 10px;
  border: 1px solid var(--Red-Light, #C90000);
  background: var(--Ivory, #FFFEF8);
  cursor: pointer;

  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  `;

// 다음 버튼
const NextButton = styled.div`
  display: flex;
  width: 174px;
  height: 52px;
  justify-content: center;
  align-items: center;
  gap: 12.379px;
  border-radius: 10px;
  background: var(--Red-Light, #C90000);
  cursor: pointer;
`;

//오른쪽 화살표
const Arrow2 = styled.div`
  width: 9px;
  height: 15px;
`;

const Next = styled.div`
  color: #FFF;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 18px */
`;


const Answer1 = () => {
  const navigate = useNavigate();

  const navigateToStore = () => {
    navigate("/Store");
  };

  const navigateToCheck1 = () => {
    navigate("/Check1");
  };

  const navigateToAnswer2 = () => {
    navigate("/Answer2");
  };

  return (
    <div>
      <Header />
      
      <TextContainer>
        <TextInnerContainer>
          <Nickname>
            닉네임
          </Nickname>
          <Message>
            님에게 편지를 작성해주세요.
          </Message>
        </TextInnerContainer>
      </TextContainer>

      <WhiteLetterContainer>
        <ContentContainer>
          <ToContainer>
              <ToMyNickname>
              닉네임
              </ToMyNickname>
              <To>
              에게
              </To>
          </ToContainer>
          
          <Content>
            편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명 으로 작 성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼 요. 편지는 익명 으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지 는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요.
          </Content>
          <Stamp>
          </Stamp>

          <FromContainer>
            <FromNickname>
              닉네임
            </FromNickname>
            <From>
              이
            </From>
          </FromContainer>
        
        </ContentContainer>
      </WhiteLetterContainer>

      <ExplanationText>
        {/*figure space공백문자씀*/}
         • 편지는 발송한 시간부터 24시간 후에 우편함 주인이 읽을 수 있어요.<br />
         • 모든 편지는 우편함 주인만 볼 수 있고, 후에 공개될 수 있어요.<br />
         • 모든 편지는 익명이 보장되지만, 욕설/모욕/성희롱 등 부적절한 내용으로 인해<br />
          수사 협조 요청이 발생할 경우, 낭만고양이는 수사에 필요한 정보를 제공할 수 있습니다.
      </ExplanationText>

      <ButtonsContainer>
        <PrevButton onClick={navigateToCheck1}>
          <ArrowAndText>
            <Arrow1>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
                <path d="M10.3105 1.5L2.21678 8.53806C1.74529 8.94805 1.76106 9.68519 2.24964 10.0746L10.3105 16.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </Arrow1>
            <Prev>
              이전
            </Prev>
          </ArrowAndText>
        </PrevButton>
        <StoreButton onClick={navigateToStore}>
          상점
        </StoreButton>
        <NextButton onClick={navigateToAnswer2}>
          <ArrowAndText>
            <Next>
              다음
            </Next>
            <Arrow2>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
                <path d="M1.68945 1.5L9.78322 8.53806C10.2547 8.94805 10.2389 9.68519 9.75036 10.0746L1.68945 16.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </Arrow2>
          </ArrowAndText>
        </NextButton>
      </ButtonsContainer>
    </div>
  );
};
 
export default Answer1;