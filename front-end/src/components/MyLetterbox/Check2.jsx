import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
//import Header from '../Header/Header';


const RightContainer = styled.div`
  width: 578px;
  height: 420px;
  margin: 149px 0 0 60px;
`;

//흰 편지지
const WhiteLetterContainer = styled.div`
  background-image: url("/images/흰편지지.svg");
  background-size: cover;
  width: 578px;
  height: 346px;
  overflow: auto; //자식 마진 탑 오류 때문에 오토처리
  position: relative; // wrap랑 연결
`;

const ContentContainer = styled.div`
  width: 528px;
  height: 288px;
  margin: 30px 25px 28px 25px; // 탑 에러나서 부모에 오토처리
`;

//닉네임에게
const ToContainer = styled.div`
  width: 62px;
  height: 14px;
  display: flex;
`;

//'닉네임'(나)
const ToMyNickname = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  letter-spacing: 0.28px;
`;

//에게
const To = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  letter-spacing: 0.28px;
`;

const Wrap = styled.div`
  width: 528px;
  height: 241px;
  position: absolute; //흰편지지컨테이너랑 연결
  left: 25px;
  top: 31px;
`;

const Stamp = styled.div`
  background-image: url("/images/우표.svg");
  background-size: cover;
  float: right;
  width: 84px;
  height: 112px;
  margin-left: 20px;//임시
`;

const Content = styled.div`
  color: #000;
  font-family: 'Gowun Dodum';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%; /* 28px */
  letter-spacing: -0.14px;
  word-break: break-all;
  margin-top: 40px; //임시
`;

//닉네임이
const FromContainer = styled.div`
  width: 50px;
  height: 14px;
  margin: 250px 0 0 472px; //임시
  display: flex;
`;

//'닉네임'(다른 사용자)
const FromNickname = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  letter-spacing: 0.28px;
`;

//이
const From = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  letter-spacing: 0.28px;
`;

//우편함 방문하기 버튼
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
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
 
export default function Check2({ isOpen, onClose }) {

  const navigate = useNavigate();

  const navigateToAnswer1 = () => {
    navigate("/Answer1");
  };

	if (!isOpen) {
    return null;
  }

  return (
    <div>

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

        <AnswerButton onClick={navigateToAnswer1}>
            <AnswerText>
              우편함 방문하기
            </AnswerText>
        </AnswerButton>
      </RightContainer>
      
    </div>
  );
    
}