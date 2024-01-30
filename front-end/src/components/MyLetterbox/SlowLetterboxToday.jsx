import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import '../../index.css';
import Slow1 from '../../assets/img/Slow1.svg';
import Slow2 from '../../assets/img/Slow2.svg';
import Footprint from '../../assets/img/발자국.svg';
import MaskingTape from '../../assets/img/MaskingTape.svg';
import DatePicker, { registerLocale } from 'react-datepicker'; //달력 기능 위해 react-datepicker 라이브러리 설치
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/locale'; // 한국어 변경 위해 설치
import { createGlobalStyle } from 'styled-components';
import { format } from 'date-fns';

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
  left: 106px;
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

const BlurBackground = styled.div`
  width: 389px;
  height: 389px;
  background: rgba(89, 83, 81, 0.90);
  backdrop-filter: blur(10px);
  left: 0;
  top: 0;
  position: absolute;
`;

//달력 관련 스타일
const GlobalStyles = createGlobalStyle`
  & .react-datepicker__current-month,
  & .react-datepicker-time__header,
  & .react-datepicker__time-pickr,
  & .react-datepicker__day,
  & .react-datepicker__time-name {
    font-family: 'Gowun Dodum' !important;
  }

  .react-datepicker {
    border: none !important;
    box-shadow: none !important;
    background-color: transparent !important;
  }

  .react-datepicker__header {
    background-color: transparent !important;
    width: 375px;
    height: 76px;
    border: none;
  }

  .react-datepicker__navigation-icon::before {
    position: absolute;
    top: 2px;
    border-color: black;
    border-width: 2px 2px 0 0;
  }

  .react-datepicker__current-month {
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    color: black;
    word-wrap: break-word;
    margin-bottom: 8px;
  }

  .react-datepicker__day-names {
    width: 335px; 
    height: 26px; 
    padding: 12px 20px;
    justify-content: space-between;
    align-items: flex-start;
    gap: 36px;
    display: inline-flex;
    margin: 0;
    border-bottom: 1px #9F9F9F solid;
  }

  .react-datepicker__day-name {
    font-family: 'Gowun Dodum' !important;
    color: #212121;
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    word-wrap: break-word;
    width: 16px;
    height: 26px;
    margin: 0;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .react-datepicker__month {
    width: 368px;
    height: 298px;
    margin: 15px 0 0 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 12px;
    display: inline-flex;
    position: absolute;
    left: 4px;
    top: 91px;
  }

  .react-datepicker__week {
    width: 368px;
    height: 50px;
    justify-content: flex-start;
    align-items: center;
    gap: 3px;
    display: inline-flex;
  }

  .react-datepicker__day {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #212121;
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    word-wrap: break-word;
    width: 50px;
    height: 50px;
  }

  .react-datepicker__day--selected {
    background-color: rgba(243, 231, 231, 0.70) !important;
    border-radius: 9999px;
  }

  .react-datepicker__day:hover {
    background-color: transparent !important;
  }
`;

// 기존의 한국어 로케일 설정을 복사해서 새로운 로케일 설정을 생성
const customKoLocale = {
  ...ko,
  formatLong: {
    ...ko.formatLong,
    date: ({ date, width }) => {
      const formatDate = width === 'abbreviated' ? 'MM월' : 'yyyy년 MM월';
      return format(date, formatDate);
    },
  },
};

registerLocale({ko}, customKoLocale);

//react-datepicker
const DatepickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <GlobalStyles />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          inline
          locale={ko}
        />
    </div>
  );
};

export default function SlowLetterboxToday() {
  const text = "오늘 하루 행복했나요?\n\n길을 걷다 내 취향인 카페를 발견한 것, \n눈물 날 만큼 재밌는 영화를 본 것, \n사랑하는 사람과 시간을 보낸 것,\n.\n.\n.\n당신의 행복한 순간을 기록해 주세요.\n낭만고양이가\n매일의 행복을 모아 올해의 마지막 주에 전달해 드릴게요.\n소소한 행복들이 쌓여 큰 행복으로 돌아올 거예요."
  const placeholderText = "오늘 하루 행복했던 순간을 적어보세요.";
  const [isEditMode, setIsEditMode] = useState(false); // 편집 모드 상태를 관리하는 상태값
  const [textBoxValue, setTextBoxValue] = useState(""); // TextBox의 값 상태값
  const [isOldWrapperVisible, setOldWrapperVisible] = React.useState(true);
  const [isNewWrapperVisible, setNewWrapperVisible] = React.useState(false);

  const today = new Date(); // 오늘의 날짜를 가져옴
  const year = today.getFullYear(); // 연도
  const month = today.getMonth() + 1; // 월 (0부터 시작하므로 1을 더해줌)
  const date = today.getDate(); // 날짜

  const handleTextBoxClick = () => {
    setIsEditMode(true); // 편집 모드 활성화
  };

  const handleRedBoxClick = () => {
    setIsEditMode(false); // 편집 모드 종료
    // 기존 Wrapper를 숨기고 새로운 Wrapper를 보이게 합니다.
    setOldWrapperVisible(false);
    setNewWrapperVisible(true);
  };

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value); // TextBox의 값 변경
  };

  return (
    <div>
      <Header />
      <DatepickerComponent />

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

      {isOldWrapperVisible && (
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
      )}
      {isNewWrapperVisible && (
        <Wrapper>
          <BlurBackground />
          <MaskingTapeImg src={MaskingTape} alt='MaskingTape' />
        </Wrapper>
      )}
    </div>
  )
}
