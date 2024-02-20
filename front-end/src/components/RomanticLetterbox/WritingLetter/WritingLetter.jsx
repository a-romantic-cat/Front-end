import React, {useState} from "react";
import styled from 'styled-components';
import Header from '../../Header/Header';
import twinkle from '../../../assets/img/반짝.svg';
import letterString from '../../../assets/img/줄.svg';
import { useNavigate } from 'react-router-dom';

// 기본 화면 및 배경 => 배경화면 나중에 뷰포트 기준으로 바꿀 예정?
const Container = styled.div`
  box-sizing: border-box;
  width: 1920px; 
  height: 1432px;
  position: relative;
  background-image: url(${twinkle}); 
  background-color: #081A2F;
`;
// 피그마랑 똑같이 구현하려면 배경을 한번 더 덧대야한다고 생각해서 함...
const OverlapContainer = styled.div`
  width: 100%;
  height: 1332px;
  background-color: rgba(8, 26, 47, 0.61);
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
`;
// 집 모양을 네모에서 깎지 않고, 그냥 삼각형을 위에 얹음.
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
  height: 807px;
  background-color: #FFFEF8;
  
  position: absolute;
  top: 318px;
  border-radius: 5px;
`;
// 편지 설명
const TextCon = styled.div`
  width: 399px;
  height: 116px;
  position: absolute;
  right: 193px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #4A4A4A;
`;
const Text = styled.div`
  position: absolute;
  color: #4A4A4A;
  width: 300px;
  height: 77px; 
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;
const Text1 = styled.div`
  margin-bottom: 10px;
  
`;
const Text2 = styled.div`
  margin-bottom: 10px;
`;
const Text3 = styled.div``;
// 동의 설명란
const AgreeCon = styled.div`
  width: 399px;
  height: 77px;
  position: absolute;
  left: 194px;
  top: 116px;
  box-sizing: border-box;
  padding-top: 17px;
  text-align: center; 
font-family: 'Pretendard';
font-weight: 400;
word-wrap: break-word;
`;
const AgreeQuestion1 = styled.div`
font-size: 14px;
margin-bottom: 3px;
color: #4A4A4A;
`;
const AgreeQuestion2 = styled.div`
font-size: 13px;
color: #757575;
`;

// 동의 비동의 체크 박스
const CheckBoxContainer = styled.div`
  display: flex;
  margin-top: 15.5px;
  justify-content: center; 
  
`;
const Checkbox = styled.input`
  margin-right: 7px;
  width: 14px;
  height: 14px;
`;
const AgreeCheckbox = styled.div`
  display: flex;
  align-items: center;
  color: #4A4A4A;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
  font-size: 14px;

`;
const DisagreeCheckbox = styled.div`
  margin-left: 26px;
  display: flex;
  align-items: center;
  color: #4A4A4A;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
  font-size: 14px;

`;
const Label = styled.label`
  cursor: pointer;
  user-select: none;
`;

// 편지 입력란
const LetterPaper = styled.div`
  width: 642px;
  height: 401.18px;
  background-color: #FFF9EC;
  position: absolute;
  right: 72px;
  top: 273px;
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
// 편지 글자 수
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
// 랜덤변경 Button인줄...? 요구사항명세서에 없어서 우선 그냥 색만 변경하게 뒀음!
const RandomChangeButton = styled.button`
  box-sizing: border-box;
  border: 1px solid #000;
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
// ~~한 ~~가
const FromContent = styled.div`
  font-family: 'Pretendard';
  font-weight: 400;
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
const WritingLetter = () => {
  const navigate = useNavigate(); 
  const handleNavigateToCompletedLetterWriting = () => {
    navigate('/CompletedLetterWriting');  
  };
  // 동의 비동의 체크박스를 하나만 선택하기 위함
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [disagreeChecked, setDisagreeChecked] = useState(false);
  // 300자만 받기 위함
  const [letterContent, setLetterContent] = useState('');

  // 동의 체크박스를 선택해야만 편지 및 발송하기 가능
  const handleAgreeChange = () => {
    setAgreeChecked(!agreeChecked);
    if (disagreeChecked) {
      setDisagreeChecked(false);
    }
  };
  const handleDisagreeChange = () => {
    setDisagreeChecked(!disagreeChecked);
    if (agreeChecked) {
      setAgreeChecked(false);
    }
  };
  
  const handleLetterChange = (event) => {
    const content = event.target.value;
    // 300자까지만 입력 받음
    if (content.length <= 300) {
      setLetterContent(content);
    }
  };
  return (
    <div>
      <Container>
        <Header/>
        <OverlapContainer>
          <MainConRoof></MainConRoof>
          <MainCon>
            <TextCon>
              <Text>
              <Text1>① 편지는 익명으로 작성돼요.</Text1>
              <Text2>② 답장이 올 때까지 기다려주세요.</Text2>
              <Text3>③ 답장을 받더라도 재답장은 불가합니다.</Text3>
              </Text>
            </TextCon>
            <AgreeCon>
              <AgreeQuestion1>
              익명으로 작성하신 편지를 공개하는 것에 동의하시나요?
              </AgreeQuestion1>
              <AgreeQuestion2>
              동의하시면 낭만 모음집에 업로드 될 수 있습니다.
              </AgreeQuestion2>

              {/* 체크박스*/}
              <CheckBoxContainer>
              <Label htmlFor="agreeCheckbox">
                  <AgreeCheckbox
                    onClick={handleAgreeChange}
                  >
                    <Checkbox
                  type="checkbox"
                  checked={agreeChecked}
                  onChange={() => {}}
                    />동의

                  </AgreeCheckbox>
                </Label>
                <Label htmlFor="disagreeCheckbox">
                  <DisagreeCheckbox onClick={handleDisagreeChange}>
                    <Checkbox
                      type="checkbox"
                      checked={disagreeChecked}
                      onChange={() => {}}
                    />비동의
                  </DisagreeCheckbox>
                </Label>
              </CheckBoxContainer>
            </AgreeCon>

            <LetterPaper>
              <Letter
                value={letterContent}
                onChange={handleLetterChange}
                /* 동의 눌렀을때만 활성화 */
                disabled={!agreeChecked} 
              />
              <LetterLength>
              ({letterContent.length}/300)
              </LetterLength>

              <ToCon>
              <RandomChangeButton
                style={{
                  borderColor: agreeChecked ? '#C90000' : '#000', 
                  color: agreeChecked ? '#C90000' : '#000'
                }}
              >
                랜덤변경
              </RandomChangeButton>
              <FromContent>
                ~~한 ~~가
              </FromContent>
            </ToCon>
            </LetterPaper>

            <SendButton onClick={handleNavigateToCompletedLetterWriting}
            disabled={!agreeChecked}
            >
                발송하기
              </SendButton>

          </MainCon>
        </OverlapContainer>
      </Container>
    </div>
  );
};
 
export default WritingLetter;