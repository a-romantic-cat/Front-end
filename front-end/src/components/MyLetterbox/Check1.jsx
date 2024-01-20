import React, {useState} from "react";
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

//님의 우편함
const Message = styled.div`
  color: black;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

//우편함 전체 모달창 감싸기
const WrapLetterContainer = styled.div`
  display: flex; //lettercontainer랑 xbutton가로배치
`;

//우편함 전체 모달창
const LetterContainer = styled.div`
  background-image: url("/images/bg_letter.svg");
  background-size: cover; //4x export한 이미지 1x처럼
  width: 1194px;
  height: 732px;
  margin-left: 363px;
  margin-top: 41px;
  display: flex; //left랑 right가로배치
  border-radius: 20px;
  position: relative; //x버튼과 겹치게
`;

const XButton = styled.div`
  position: absolute; //x버튼 겹치게
  left: 1532px;
  top: 226px;
  cursor: pointer;
`;

const LeftContainer = styled.div`
  width: 560px;
  height: 1080px;
  margin: 63px 0 0 0;
  display: inline-flex; //컨테이너랑 스크롤바 가로배치
`;

//핀들이랑 닉네임들 넓은 컨테이너
const PinsAndUsersContainer = styled.div`
  width: 444px;
  height: 1080px;
  margin: 0 88px 0 28px;
`;

//핀과 닉네임 한 줄 컨테이너
const PinAndUserContainer = styled.div`
  width: 444px;
  height: 50px;
  display: inline-flex; // 핀이랑 닉네임 가로배치
`;

//빨간핀
const RedPin = styled.div`
  background-image: url("/images/핀.svg");
  background-size: cover; //4x export한 이미지 1x처럼
  width: 30px;
  height: 30px;
  margin: 10px 0 0 0;
  cursor: pointer;
`;

//닉네임 적힌 모달창 여는 버튼 컨테이너
const WrapUserNickname = styled.div`
  display: flex;
  width: 400px;
  height: 50px;
  margin: 0 0 0 14px;
  align-items: flex-start;
  gap: 12px;
  border-radius: 45px;
  background: var(--Background-Ivory, #FFFEF8);
  cursor: pointer;
`;

const Envelope = styled.div`
  width: 26px;
  height: 16px;
  margin: 16px 12px 16px 25px;
`;

const UserNickname = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 18px */
  margin: 16px 0 16px 0;
`;

const ScrollBar = styled.div` // 왜안뜨지
  overflow-y: scroll;

  &::-webkit-scrollbar { //스크롤바 전체 
    /*height: 611px;
    stroke-width: 8px;
    stroke: #B3B3B3;*/
    //display: none; //화살표 스크롤 안 보이게 하기
    height: 611px;
  }

  &::-webkit-scrollbar-track { //스크롤 막대가 움직일 길
    height: 611px;
    stroke-width: 8px;
    stroke: #B3B3B3;
  }

  &::-webkit-scrollbar-thumb { //스크롤막대
    background: #79110E;
    width: 8px;
    height: 84.592px;
  }
`;

const RightContainer = styled.div`
  width: 578px;
  height: 420px;
  margin: 149px 0 0 28px;
`;

//흰 편지지
const WhiteLetterContainer = styled.div`
  background-image: url("/images/흰편지지.svg");
  background-size: cover; //4x export한 이미지 1x처럼
  width: 578px;
  height: 346px;
  overflow: auto; //자식 마진 탑 오류 때문에 오토처리
`;

const ContentContainer = styled.div`
  width: 528px;
  height: 288px;
  margin: 30px 25px 28px 25px; // 탑 에러나서 부모에 오토처리
`;

//답장하기 버튼
const AnswerButton = styled.div`
  width: 174px;
  height: 42px;
  border-radius: 10px;
  background: var(--Red-Light, #C90000);
  margin: 32px 0 0 0;
  float: right; //오른쪽 정렬
  cursor: pointer;

  //버튼 안의 글자 정렬
  display: flex; 
  justify-content: center;
  align-items: center;
`;

const AnswerText = styled.div`
  color: #FFF;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ToContainer = styled.div`
  display: inline-flex; //수평 정렬
`;

const ToMyNickname = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  letter-spacing: 0.28px;
`;

const To = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  letter-spacing: 0.28px;
`;

const WrapStamp = styled.div`
  /*display: inline-flex;*/
  //float: right;
`;

const Content = styled.div`
  //background-color: #000;
  width: 528px;
  height: 196px;
  color: #000;
  margin-top: 24px;
  font-family: Gowun Dodum;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%; /* 28px */
  letter-spacing: -0.14px;
  word-break: break-all;
  //float: right;
`;

const Stamp = styled.div`
  //텍스트가 우표를 감싸게 하면 될 것 같음
  width: 84px;
  height: 112px;
  flex-direction: column;
  align-items: center;
  background: #C0C0C0;
  position: absolute; //우표가 내용위로 겹치게
  right: 53px;
  top: 179px;
`;

const FromContainer = styled.div`
  float: right; //오른쪽 정렬
  display: inline-flex; //수평 정렬
`;

const FromNickname = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  letter-spacing: 0.28px;
`;

const From = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  letter-spacing: 0.28px;
`;
 
const Check1 = () => {

  const navigate = useNavigate();

  const navigateToMyBoxMain = () => {
    navigate("/MyLetterbox");
  };

  const navigateToAnswer1 = () => {
    navigate("/Answer1");
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
            님의 우편함
          </Message>
        </TextInnerContainer>
      </TextContainer>

      <WrapLetterContainer>
        <LetterContainer >
          <LeftContainer>
            <PinsAndUsersContainer>
              <PinAndUserContainer>
                <RedPin>
                </RedPin>
                <WrapUserNickname>
                  <Envelope>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none">
                      <path d="M1 17V1H27V17H1Z" fill="white"/>
                      <path d="M1 1V17M1 1H27M1 1L14 9L27 1M1 17H27M1 17L12.3496 7.98437M27 17V1M27 17L15.6504 7.98437" stroke="black" stroke-linecap="round"/>
                    </svg>
                  </Envelope>
                  <UserNickname>
                    닉네임
                  </UserNickname>
                </WrapUserNickname>
              </PinAndUserContainer>
            </PinsAndUsersContainer>
            <ScrollBar>
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="611" viewBox="0 0 8 611" fill="none">
                <path d="M4 4.28516L3.99998 607" stroke="#B3B3B3" stroke-width="8" stroke-linecap="round"/>
              </svg>
            </ScrollBar>
          </LeftContainer>

          <RightContainer>
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
                
                <WrapStamp>
                  <Content>
                  편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명 으로 작성 돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼 요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익 명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요.편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요.
                  </Content>
                  <Stamp alt='우표'>
                  </Stamp>
                </WrapStamp>

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

            <AnswerButton onClick={navigateToAnswer1}>
              <AnswerText>
                답장하기
              </AnswerText>
            </AnswerButton>
          </RightContainer>
          
        </LetterContainer>

        <XButton onClick={navigateToMyBoxMain}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z" fill="#C90000"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25 47.5C37.4264 47.5 47.5 37.4264 47.5 25C47.5 12.5736 37.4264 2.5 25 2.5C12.5736 2.5 2.5 12.5736 2.5 25C2.5 37.4264 12.5736 47.5 25 47.5ZM25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#C90000"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2322 13.2322C14.2085 12.2559 15.7915 12.2559 16.7678 13.2322L25 21.4645L33.2322 13.2322C34.2085 12.2559 35.7915 12.2559 36.7678 13.2322C37.7441 14.2085 37.7441 15.7915 36.7678 16.7678L28.5355 25L36.7678 33.2322C37.7441 34.2085 37.7441 35.7915 36.7678 36.7678C35.7915 37.7441 34.2085 37.7441 33.2322 36.7678L25 28.5355L16.7678 36.7678C15.7915 37.7441 14.2085 37.7441 13.2322 36.7678C12.2559 35.7915 12.2559 34.2085 13.2322 33.2322L21.4645 25L13.2322 16.7678C12.2559 15.7915 12.2559 14.2085 13.2322 13.2322Z" fill="white"/>
          </svg>
        </XButton>
      </WrapLetterContainer>
      
    </div>
  );
    
};
 
export default Check1;