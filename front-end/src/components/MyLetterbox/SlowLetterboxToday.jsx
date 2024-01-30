import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import '../../index.css';
import Slow1 from '../../assets/img/Slow1.svg';
import Slow2 from '../../assets/img/Slow2.svg';
import Footprint from '../../assets/img/발자국.svg';
import LeftTitle from '../../assets/img/달력제목왼쪽.svg';
import RightTitle from '../../assets/img/달력제목오른쪽.svg';
import MaskingTape from '../../assets/img/MaskingTape.svg';

const SlowLetterboxContainer = styled.div`
  width: 60px;
  height: 503px;
  position: absolute;
  left: 363px;
  top: 230px;
`;

const Slow1Img = styled.img`
  width: 11px;
  height: 21.50px;
  position: absolute;
  left: 0;
  top: 0;
`;

const Slow2Img = styled.img`
  width: 11px;
  height: 21.50px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const TextDiv = styled.div`
  position: absolute;
  width: 38px;
  height: 483px;
  margin: 10px 11px 9.5px 11px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text40 = styled.span`
  color: black;
  font-size: 40px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  word-wrap: break-word;
`;

const Text20 = styled.span`
  color: black;
  font-size: 20px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  word-wrap: break-word;
`;

const HappyTextContainer = styled.div`
  width: 466px;
  height: 423px;
  position: absolute;
  left: 567px;
  top: 252px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HappyText = styled.div`
  color: black;
  font-size: 20px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  word-wrap: break-word;
`;

const FootprintImg = styled.img`
  width: 220.5px;
  height: 394px;
  position: absolute;
  left: 1267px;
  top: 474.97px;
`;

//달력
const StyledContainer = styled.div`
  width: 375px;
  height: 389px;
  position: absolute;
  left: 465px;
  top: 1080px;
`;

const StyledTitle = styled.div`
  width: 133px;
  height: 18px;
  left: 119px;
  top: 0;
  position: absolute;
`;

const LeftTitleImg = styled.img`
  width: 8px;
  height: 14px; 
  position: absolute;
  left: 0px;
  top: 2px;
`;

const RightTitleImg = styled.img`
  width: 8px;
  height: 14px; 
  position: absolute;
  right: 0px;
  top: 2px;
`;

const StyledTitleText = styled.div`
  left: 24px;
  top: 0;
  position: absolute;
  color: black;
  font-size: 18px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  line-height: 18px;
  word-wrap: break-word;
`;

const StyledContent = styled.div`
  width: 368px;
  height: 298px;
  left: 4px;
  top: 91px;
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 12px;
`;

const StyledRow = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3px;
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

const StyledCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 9999px;
  position: relative;
`;

const StyledText = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 15px;
  left: 15px;
  text-align: center;
  color: ${props => props.isGray ? '#9F9F9F' : '#212121'};
  font-size: 18px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  line-height: 18px;
  word-wrap: break-word;
`;

const StyledForLastLine = styled.div`
  flex-direction: column;
  justify-content: flex-start
  align-items: flex-start;
  gap: 12px;
  display: flex;
`;

const StyledBorder = styled.div`
  width: 369px;
  height: 0;
  left: 4px;
  top: 73px;
  position: absolute;
  border: 1px #9F9F9F solid;
`;

const StyledWeekdays = styled.div`
  width: 335px;
  height: 26px;
  padding: 12px 20px;
  left: 0;
  top: 26px;
  position: absolute;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 36px;
`;

const Weekday = styled.div`
  color: black;
  font-size: 18px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  word-wrap: break-word;
`;

function TextLines({ text }) {
  const lines = text.split('\n');  // 텍스트를 줄바꿈 문자를 기준으로 분리합니다.

  return (
    <HappyTextContainer>
      {lines.map((line, index) => (
        <HappyText key={index}>{line}</HappyText>
      ))}
    </HappyTextContainer>
  );
}

//달력 오른쪽 작성란
const Wrapper = styled.div`
  width: 389px;
  height: 487px;
  position: relative;
  left: 1066px;
  top: 980px;
`;

const RedBox = styled.div`
  width: 389px;
  height: 42px;
  left: 0;
  top: 421px;
  position: absolute;
  background: #C90000;
  border-radius: 10px;
  cursor: pointer;
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

const RedBoxText = styled.div`
  width: 63px;
  height: 21px;
  position: absolute;
  margin: 10.5px 163px;
  padding: 12.4px;
  color: white;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

const Description = styled.div`
  width: 163px;
  height: 17px;
  position: absolute;
  left: 0;
  bottom: 0;
  position: absolute;
  color: #757575;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
`;

const GrayBox = styled.div`
  width: 310px;
  height: 121px;
  padding-bottom: 268px;
  padding-left: 40px;
  padding-right: 39px;
  left: 0;
  top: 0;
  position: absolute;
  background: #E7E7E7;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
`;

const MaskingTapeImg = styled.img`
  width: 177px;
  height: 53px;
  position: absolute;
  top: -27px;
`;

const TextBoxWrapper = styled.div`
  width: 310px;
  height: 70px;
  position: relative;
  left: 0;
  top: 50px;
`;

const TextBox = styled.input`
  width: 310px;
  left: 0;
  top: 43px;
  position: absolute;
  color: #757575;
  font-size: 19px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  line-height: 26.60px;
  word-wrap: break-word;
  border: none; 
  outline: none;
  background-color: transparent; /* 배경색 제거 */
  cursor: pointer; /* 클릭 가능한 커서 스타일 */
`;

const DateText = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  text-align: center;
  color: black;
  font-size: 20px;
  font-family: 'Gowun Dodum';
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
`;


export default function SlowLetterboxToday() {
  const text = "오늘 하루 행복했나요?\n\n길을 걷다 내 취향인 카페를 발견한 것, \n눈물 날 만큼 재밌는 영화를 본 것, \n사랑하는 사람과 시간을 보낸 것,\n.\n.\n.\n당신의 행복한 순간을 기록해 주세요.\n낭만고양이가\n매일의 행복을 모아 올해의 마지막 주에 전달해 드릴게요.\n소소한 행복들이 쌓여 큰 행복으로 돌아올 거예요."
  const placeholderText = "오늘 하루 행복했던 순간을 적어보세요.";
  const [isEditMode, setIsEditMode] = useState(false); // 편집 모드 상태를 관리하는 상태값
  const [textBoxValue, setTextBoxValue] = useState(""); // TextBox의 값 상태값

  const today = new Date(); // 오늘의 날짜를 가져옴
  const year = today.getFullYear(); // 연도
  const month = today.getMonth() + 1; // 월 (0부터 시작하므로 1을 더해줌)
  const date = today.getDate(); // 날짜

  const handleTextBoxClick = () => {
    setIsEditMode(true); // 편집 모드 활성화
  };

  const handleRedBoxClick = () => {
    setIsEditMode(false); // 편집 모드 종료
  };

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value); // TextBox의 값 변경
  };

  return (
    <div>
      <Header />

      <SlowLetterboxContainer>
        <Slow1Img src={Slow1} alt='Slow1' />
        <Slow2Img src={Slow2} alt='Slow2' />
        <TextDiv>
          <Text40>느<br/>리<br/>ㅣ<br/>ㄴ<br/></Text40>
          <Text20><br/></Text20>
          <Text40>우<br/>편<br/>함</Text40>
        </TextDiv>
      </SlowLetterboxContainer>

      <TextLines text={text} />

      <FootprintImg src={Footprint} alt='발자국' />

      <StyledContainer>

        <StyledTitle>
          <LeftTitleImg src={LeftTitle} alt='왼쪽제목' />
          <StyledTitleText>2024년 1월</StyledTitleText>
          <RightTitleImg src={RightTitle} alt='오른쪽제목' />
        </StyledTitle>

        <StyledContent>
          <StyledRow>
            <StyledItem>
              <StyledCircle>
                <StyledText>1</StyledText>
              </StyledCircle>
            </StyledItem>
            <StyledItem>
              <StyledCircle>
                <StyledText>2</StyledText>
              </StyledCircle>
            </StyledItem>
            <StyledItem>
              <StyledCircle>
                <StyledText>3</StyledText>
              </StyledCircle>
            </StyledItem>
            <StyledItem>
              <StyledCircle>
                <StyledText>4</StyledText>
              </StyledCircle>
            </StyledItem>
            <StyledItem>
              <StyledCircle>
                <StyledText>5</StyledText>
              </StyledCircle>
            </StyledItem>
            <StyledItem>
              <StyledCircle>
                <StyledText isGray={true}>6</StyledText>
              </StyledCircle>
            </StyledItem>
          </StyledRow>

          <StyledForLastLine>
            <StyledRow>
              <StyledItem>
                <StyledCircle>
                  <StyledText isGray={true}>7</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>8</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>9</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>10</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>11</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>12</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText isGray={true}>13</StyledText>
                </StyledCircle>
              </StyledItem>
            </StyledRow>

            <StyledRow>
              <StyledItem>
                <StyledCircle>
                  <StyledText isGray={true}>14</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>15</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>16</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>17</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>18</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>19</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText isGray={true}>20</StyledText>
                </StyledCircle>
              </StyledItem>
            </StyledRow>

            <StyledRow>
              <StyledItem>
                <StyledCircle>
                  <StyledText isGray={true}>21</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle style={{background: 'rgba(243, 231, 231, 0.70)'}}>
                  <StyledText>22</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>23</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>24</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>25</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>26</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText isGray={true}>27</StyledText>
                </StyledCircle>
              </StyledItem>
            </StyledRow>

            <StyledRow>
              <StyledItem>
                <StyledCircle>
                  <StyledText isGray={true}>28</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>29</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>30</StyledText>
                </StyledCircle>
              </StyledItem>
              <StyledItem>
                <StyledCircle>
                  <StyledText>31</StyledText>
                </StyledCircle>
              </StyledItem>
            </StyledRow>
          </StyledForLastLine>
        </StyledContent>

        <StyledBorder />

        <StyledWeekdays>
          <Weekday>일</Weekday>
          <Weekday>월</Weekday>
          <Weekday>화</Weekday>
          <Weekday>수</Weekday>
          <Weekday>목</Weekday>
          <Weekday>금</Weekday>
          <Weekday>토</Weekday>
        </StyledWeekdays>
      </StyledContainer>

      <Wrapper>
        <RedBox onClick={handleRedBoxClick}>
          <RedBoxText>등록하기</RedBoxText>
        </RedBox>
        <Description>등록 후에는 수정할 수 없어요.</Description>
        <GrayBox>
          <MaskingTapeImg src={MaskingTape} alt='MaskingTape' />
          <TextBoxWrapper>
            {isEditMode ? (
              <TextBox
                type="text"
                placeholder={placeholderText}
                value={textBoxValue}
                onClick={handleTextBoxClick}
                onChange={handleTextBoxChange}
              />
            ) : (
              <TextBox
                type="text"
                placeholder={placeholderText}
                value={textBoxValue || placeholderText}
                onClick={handleTextBoxClick}
                readOnly
              />
            )}
            <DateText>{`${year}년 ${month}월 ${date}일`}</DateText>
          </TextBoxWrapper>
        </GrayBox>
      </Wrapper>
    </div>
  )
}
