import React, {useState} from "react";
import styled from 'styled-components';
import Header from '../../Header/Header';
import twinkle from '../../../assets/img/반짝.svg';
import letterString from '../../../assets/img/줄.svg';
import { useNavigate } from "react-router-dom";

// 기본 화면 및 배경 => 배경화면 나중에 뷰포트 기준으로 바꿀 예정?
const Container = styled.div`
  box-sizing: border-box;
  width: 1920px; 
  height: 1670px;
  position: relative;
  background-image: url(${twinkle}); 
  background-color: #081A2F;
`;
// 피그마랑 똑같이 구현하려면 배경을 한번 더 덧대야한다고 생각해서 함...
const OverlapContainer = styled.div`
  width: 100%;
  height: 1570px;
  background-color: rgba(8, 26, 47, 0.61);
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
`;
// 삼각형 지붕
const MainConRoof = styled.div`
width: 0;
height: 0;
border-left: 393px solid transparent;
border-right: 393px solid transparent;
border-bottom: 213px solid #FFFEF8;
clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
border-radius: 6px;
position: absolute;
top: 107px;
`;

const MainCon = styled.div`
  width: 786px;
  height: 1041px;
  background-color: #FFFEF8;
  position: absolute;
  top: 318px;
  border-radius: 5px;
`;
// 받은 편지
const ReceiveLetterPaper = styled.div`
  width: 642px;
  height: 401.18px;
  background-color: #FFECEC;
  position: absolute;
  right: 72px;
  top: 69px;
  border-radius: 7.57px;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.1);
`;
const ReceivedLetterContent = styled.div`
  background-color: #FFECEC;
  background-image: url(${letterString}); 
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
  width: 548px;
  height: 224px;
  position: absolute;
  right: 46px;
  top: 76px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  word-wrap: break-word;
  font-size: 16px;
  line-height: 2;
`;
const ReceiveFromContent = styled.div`
  font-family: 'NanumGothic';
  font-weight: 700;
  font-size: 16px;
  position: absolute;
  bottom: 42px;
  right: 47px;
`;
const ReceiveToContent = styled.div`
  font-family: 'NanumGothic';
  font-weight: 700;
  font-size: 16px;
  left: 47px;
  top: 42px;
  position: absolute;
`;

// 보낼 편지
const SendLetterPaper = styled.div`
  width: 642px;
  height: 401.18px;
  background-color: #FFF9EC;
  position: absolute;
  right: 72px;
  bottom: 138px;
  border-radius: 7.57px;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.1);
`;
const Letter = styled.textarea`
  background-color: #FFF9EC;
  background-image: url(${letterString}); 
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
  resize: none;
  border: none;
  outline: none;
  width: 548px;
  height: 224px;
  position: absolute;
  right: 46px;
  top: 76px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  word-wrap: break-word;
  font-size: 16px;
  line-height: 2;
`;
const LetterLength = styled.div`
  position: absolute;
  right: 48px;
  bottom: 101px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
  font-size: 14px;
  color: #757575;
`;
const ToCon = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 42px;
  right: 47px;
`;
const RandomChangeButton = styled.button`
  box-sizing: border-box;
  border: 1px solid #C90000;
  color: #C90000;
  padding: 5px 3px;
  width: 45px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 82px;
  background-color: transparent;
  cursor: pointer;
  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 10px;
  border-radius: 15px;
  outline: none;
  box-sizing: border-box;
`;
const SendToContent = styled.div`
  font-family: 'NanumGothic';
  font-weight: 700;
  font-size: 16px;
  left: 47px;
  top: 42px;
  position: absolute;
`;

const SendFromContent = styled.div`
  font-family: 'NanumGothic';
  font-weight: 700;
  font-size: 16px;

`;
// 발송하기 버튼
const SendButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #C90000;
  color: #FFF;
  border-radius: 10px;
  width: 172px;
  height: 42px;
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 18px;
  bottom: 60px;
  right: 70px;
`;
const ReplyingLetter = () => {
  const [letterContent, setLetterContent] = useState('');
  const handleLetterChange = (event) => {
    const content = event.target.value;
    // 300자까지만 입력 받음
    if (content.length <= 300) {
      setLetterContent(content);
    }
  };
  const navigate = useNavigate(); 
  const handleNavigateToCompletedLetterReplying = () => {
    navigate('/CompletedLetterReplying');  
  };
  return (
    <div>
      <Container>
        <Header/>
        <OverlapContainer>
          <MainConRoof/>
          <MainCon>
            <ReceiveLetterPaper>
              <ReceiveToContent>
                ~~한 ~~에게
              </ReceiveToContent>
              <ReceivedLetterContent>
                편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명 으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼 요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요.편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요.
              </ReceivedLetterContent>
              <ReceiveFromContent>
                ~~한 ~~가
              </ReceiveFromContent>
            </ReceiveLetterPaper>
            <SendLetterPaper>
              <SendToContent>
                ~~한 ~~에게
              </SendToContent>
              <Letter
                value={letterContent}
                onChange={handleLetterChange}
              />
              <LetterLength>
              ({letterContent.length}/300)
              </LetterLength>

              <ToCon>
              <RandomChangeButton>
                랜덤변경
              </RandomChangeButton>
              <SendFromContent>
                ~~한 ~~가
              </SendFromContent>
            </ToCon>
            </SendLetterPaper>

            <SendButton onClick={handleNavigateToCompletedLetterReplying}>
                발송하기
              </SendButton>

          </MainCon>
        </OverlapContainer>
      </Container>
    </div>
  );
};
 
export default ReplyingLetter;