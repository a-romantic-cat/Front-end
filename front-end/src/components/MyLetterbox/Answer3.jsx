import React, {useState} from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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

//우표
const StampLetter = styled.div`
  color: #C90000;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

//를 골라주세요.
const Message = styled.div`
  color: black;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

//편지지 양쪽 컨테이너
const LetterConatiner = styled.div`
  background-image: url("/images/양쪽편지지.svg");
  background-size: cover;
  width: 1194px;
  height: 556px;
  margin: 70px 363px 0 363px;
  overflow: auto; // 자식 마진탑오류
  display: flex; //자식 가로배치
`;

//왼쪽 컨테이너
const WhiteLetterContainer = styled.div`
  background-image: url("/images/더흰편지지.svg");
  background-size: cover;
  width: 480px;
  height: 287.33566px;
  margin: 134px 0 0 38px;
  position: relative;
`;

const ContentContainer = styled.div`
  width: 438.01419px;
  height: 238.54566px;
  margin: 24.91px 20.99px 23.88px 20.99px; // 탑 에러나서 부모에 오토처리
`;

//닉네임에게
const ToContainer = styled.div`
  width: 50px;
  height: 11px;
  display: flex;
`;

//'닉네임'(나)
const ToMyNickname = styled.div`
  color: #000;
  font-family: 'NanumGothic';
  font-size: 11.348px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 11.348px */
  letter-spacing: 0.227px;
  white-space: nowrap; //줄바꿈 안 되게
`;

//에게
const To = styled.div`
  color: #000;
  font-family: 'NanumGothic';
  font-size: 11.348px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 11.348px */
  letter-spacing: 0.227px;
  white-space: nowrap;
`;



const Wrap = styled.div`
  width: 438.01419px;
  height: 200.77px;
  position: absolute; //흰편지지컨테이너랑 연결
  left: 23px;
  top: 28.77px;
`;

const Stamp = styled.div`
  background-image: url("/images/우표2.svg");
  background-size: cover;
  float: right;
  width: 78.03125px;
  height: 104.03989px;
  margin-left: 30px; //임시
`;

//내용
const Content = styled.div`
  color: #000;
  font-family: "Gowun Dodum";
  font-size: 11.348px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%; /* 22.695px */
  letter-spacing: -0.113px;
  word-break: break-all;
  margin-top: 33px; //임시
  position: relative; // (0/300)이랑 겹치게
`;

//닉네임이
const FromContainer = styled.div`
  width: 40px;
  height: 11px;
  margin: 215px 0 0 388.25px;
  display: flex;
`;

//'닉네임'(다른 사용자)
const FromNickname = styled.div`
  color: #000;
  font-family: 'NanumGothic';
  font-size: 11.348px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 11.348px */
  letter-spacing: 0.227px;
  white-space: nowrap;
`;

//이
const From = styled.div`
  color: #000;
  font-family: 'NanumGothic';
  font-size: 11.348px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 11.348px */
  letter-spacing: 0.227px;
  white-space: nowrap;
`;

const ScrollBoxContainer = styled.div`
  width: 607px;
  height: 464px;
  margin: 46px 0 0 38px;
  overflow-y: scroll;
  overflow-x: clip; //오버플로 잘리고 나머지 콘텐츠 표시x

  &::-webkit-scrollbar { //스크롤바 전체
    width: 8px;
    height: 456.132px;
  }

  &::-webkit-scrollbar-thumb { //스크롤 움직이는 작은 막대
    background: #79110E;
    //height: 64.019px;
    height: 10%;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track { //스크롤바 배경색
    background: #B3B3B3;
    border-radius: 10px;
  }
`;

//체크박스, 마이디자인 컨테이너
const CheckboxAndText = styled.div`
  width: 138px;
  height: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 52px;
`;

//체크 안 된 박스
const UnCheckbox = styled.div`
  background-image: url("/images/uncheckbox.svg");
  background-size: cover;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

//체크 된 박스
const Checkbox = styled.div`
  background-image: url("/images/checkbox.svg");
  background-size: cover;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

//마이디자인만 보기
const MydesignText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  white-space: nowrap;
`;

//우표 6개 묶는 컨테이너
const SixStampContainer = styled.div`
  width: 481.303px;
  height: 372.33666px;
  margin-left: 70px;
  margin-top: 33px;
`;

//우표 3개 묶는 가로 컨테이너
const ThreeStampContainer = styled.div`
  width: 481.303px;
  height: 153.33333px;
  margin-bottom: 65.67px;
  display: flex;
  justify-content: space-between;
`;

//작고 많은 우표 하나 하나
const StampDesign = styled.div`
  background-image: url("/images/우표3.svg");
  background-size: cover;
  width: 115px;
  height: 153.33333px;
`;

//버튼 3개 컨테이너
const ButtonsContainer = styled.div`
  width: 846px;
  height: 52px;
  margin: 112px 537px 80px 537px;
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
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 18px */
`;

//상점 버튼
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
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

//다음 버튼
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
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 18px */
`;


const Answer3 = () => {
  const navigate = useNavigate();

  const navigateToStore = () => {
    navigate("/Store");
  };

  const navigateToAnswer2 = () => {
    navigate("/Answer2");
  };

  const navigateToAnswer4 = () => {
    navigate("/Answer4");
  };

  const [check, setCheck] = useState(false); //체크박스
  const handleCheck = () => { 
    setCheck(!check);
  }

  return (
    <div>
      <Header />
      
      <TextContainer>
        <TextInnerContainer>
          <StampLetter>
            우표
          </StampLetter>
          <Message>
            를 골라주세요.
          </Message>
        </TextInnerContainer>
      </TextContainer>

      <LetterConatiner>
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
            
            <Wrap>
              <Stamp>
              </Stamp>
              <Content>
                편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명 으로 작성 돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼 요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익 명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요.편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요.
              </Content>
            </Wrap>

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

        <ScrollBoxContainer>
          <CheckboxAndText>
            <UnCheckbox>
              <div onClick={handleCheck}> {/*체크박스 핸들*/}
                  {check ? (
                  <Checkbox />
                ) :
                (
                  <UnCheckbox />
                )}
              </div>
            </UnCheckbox>
            <MydesignText>
              마이디자인만 보기
            </MydesignText>
          </CheckboxAndText>

          <SixStampContainer>
            <ThreeStampContainer>
              <StampDesign>
              </StampDesign>
              <StampDesign>
              </StampDesign>
              <StampDesign>
              </StampDesign>
            </ThreeStampContainer>

            <ThreeStampContainer>
              <StampDesign>
              </StampDesign>
              <StampDesign>
              </StampDesign>
              <StampDesign>
              </StampDesign>
            </ThreeStampContainer>

            <ThreeStampContainer>
              <StampDesign>
              </StampDesign>
              <StampDesign>
              </StampDesign>
              <StampDesign>
              </StampDesign>
            </ThreeStampContainer>

            <ThreeStampContainer>
              <StampDesign>
              </StampDesign>
              <StampDesign>
              </StampDesign>
              <StampDesign>
              </StampDesign>
            </ThreeStampContainer>

            <ThreeStampContainer>
              <StampDesign>
              </StampDesign>
              <StampDesign>
              </StampDesign>
              <StampDesign>
              </StampDesign>
            </ThreeStampContainer>

            <ThreeStampContainer>
              <StampDesign>
              </StampDesign>
              <StampDesign>
              </StampDesign>
              <StampDesign>
              </StampDesign>
            </ThreeStampContainer>
          </SixStampContainer>
        </ScrollBoxContainer>
      </LetterConatiner>      

      <ButtonsContainer>
        <PrevButton onClick={navigateToAnswer2}>
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
        <NextButton onClick={navigateToAnswer4}>
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

      <Footer />
    </div>
  );
};
 
export default Answer3;