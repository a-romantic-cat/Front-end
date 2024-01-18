import React, { useState } from 'react'
import styled from 'styled-components';
import InfoImage from '../../assets/img/Info.svg';
import Vector from '../../assets/img/Vector.svg';
import Under from '../../assets/img/Under.svg';
import X from '../../assets/img/X.svg';

//모달창 열릴 때 백그라운드 블러 처리
const BackgroundBlur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center; 
  align-items: flex-end;
  background: rgba(0, 0, 0, 0.36); 
  backdrop-filter: blur(7.10px);
  z-index: 1000;
`

//전체 모달 컨테이너
const ModalContainer = styled.div`
  width: 463px; 
  height: 379px; 
  position: relative; 
  background: white; 
  border-top-left-radius: 70px; 
  border-top-right-radius: 70px; 
  overflow: visible;
`;

// 검정 윗부분
const BlackBar = styled.div`
  width: 463px; 
  height: 82px; 
  left: 0; 
  top: 0; 
  position: absolute; 
  background: black;
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
`;

// 내 우편함 정보 
const InfoContainer = styled.div`
  width: 267.18px; 
  height: 25.73px; 
  left: 156px; 
  top: 32px; 
  position: absolute;
`;

const InfoTitle = styled.div`
  left: 29px; 
  top: 3px; 
  position: absolute; 
  color: white; 
  font-size: 20px; 
  font-family: 'Inter'; 
  font-weight: 400; 
  line-height: 20px; 
  word-wrap: break-word;
`;

const InfoImg = styled.img`
  width: 20px;
  height: 20px;
  left: 0;
  top: 3px;
  position: absolute;
`

const CloseButtonImg = styled.img`
  width: 18px;
  height: 18px;
  left: 254.59px;
  top: 0;
  position: absolute;
`
//내용 중 '우편함 닫기'
const Container1 = styled.div`
  left: 44px;
  top: 294px;
  position: absolute;
`;

const Text1 = styled.div`
  width: 74px;
  height: 19px;
  left: 0;
  top: 3px;
  position: absolute;
  color: black;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`;

const Toggle = styled.div`
  width: 46px;
  height: 24px;
  left: 329px;
  top: 0;
  position: absolute;
  background-color: ${({ isActive }) => (isActive ? '#C90000' : 'black')};
  border-radius: 20px;
`

// isActive 상태에 따라 원의 위치가 변경
const ToggleCircle = styled.div`
  width: 18px;
  height: 18px;
  left: ${({ isActive }) => (isActive ? '24px' : '4px')}; 
  top: 3px;
  position: absolute;
  background: white;
  border-radius: 9999px;
`

// Tooltip 컴포넌트 생성
const Tooltip = styled.div`
  width: 197px;
  height: 33px;
  left: 329px;
  top: 33px;
  position: relative;
  display: ${({ isActive }) => (isActive ? 'visible' : 'none')};
`;

const Placeholder = styled.div`
  width: 197px; 
  height: 24px;
  left: 0;
  top: 0;
  position: relative;
  background: black;
  border-radius: 50px;
`
const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 4.3px solid transparent;  // 가로 길이의 절반
  border-right: 4.3px solid transparent;  // 가로 길이의 절반
  border-bottom: 10px solid black;  // 세로 길이
  position: relative;
  left: 19.91px;
`

const TooltipText = styled.div`
  width: 185px;
  height: 14px;
  position: absolute;
  left: 6px;
  top: 14px;
  color: white;
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
`;

//내용 중 '편지 남길 수 있는 사람'
const Container2 = styled.div`
  left: 44px;
  top: 234px;
  position: absolute;
`;

const Text2 = styled.div`
  width: 141px;
  height: 19px;
  left: 0;
  top: 2px;
  position: absolute;
  color: black;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`;

const WhoeverContainer = styled.div`
  width: 122px;
  height: 15px;
  padding: 4px 6.14px 4px 6px;
  left: 241px;
  top: 0;
  position: absolute;
  background: white;
  border: 1px black solid;
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  gap: 69px;
  cursor: pointer; /* 추가: 마우스 커서를 포인터로 변경 */
`;

const WhoeverText = styled.div`
  position: absolute;
  width: 95px;
  height: 15px;
  left: 6px;
  color: black;
  font-size: 15px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 15px;
  word-wrap: break-word;
`;

const UnderImg = styled.img`
  position: absolute;
  width: 13.86px;
  height: 12px;
  top: 6px;
  right: 6.14px;
  bottom: 5px;
  left: 114px;
`

//드롭다운 내용
const OptionContainer = styled.div`
  width: 136.13px;
  height: 46px;
  left: 241px;
  top: 22px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
  cursor: pointer; /* 추가: 마우스 커서를 포인터로 변경 */
`;

const Option1 = styled.div`
  align-self: stretch;
  flex: 1 1 0;
  padding: 4px 6px;
  background: ${({ selectedOption }) => (selectedOption ? '#E5E5E5' : 'white')};
  border: 1px solid black;
  border-bottom-width: 0px; /* 아래쪽 테두리 설정 */
  border-top-width: 1px; /* 위쪽 테두리 설정 */
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const OptionText = styled.div`
  color: black;
  font-size: 15px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 15px;
  word-wrap: break-word;
`;

const Option2 = styled.div`
  align-self: stretch;
  flex: 1 1 0;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 6px;
  padding-right: 33px;
  background: ${({ selectedOption }) => (selectedOption ? '#E5E5E5' : 'white')};
  border: 1px black solid;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

//내용 중 '기간'
const Container3 = styled.div`
  left: 44px;
  top: 178px;
  position: absolute;
`

const PeriodText = styled.div`
  width: 28px;
  height: 19px;
  left: 0;
  top: 0;
  position: absolute;
  color: black;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`

const DateRange = styled.div`
  width: 181px;
  height: 15px;
  left: 194px;
  top: 0;
  position: absolute;
  color: black;
  font-size: 15px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 15px;
  word-wrap: break-word;
`

//내용 중 '이름'
const Container4 = styled.div`
  left: 44px;
  top: 121px;
  position: absolute;
`

const NameText = styled.div`
  width: 28px;
  height: 19px;
  left: 0;
  top: 1px;
  position: absolute;
  color: black;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`
const NameContainer = styled.div`
  width: 138px;
  height: 16.24px;
  left: 237px;
  top: 0;
  position: absolute;
`

const RealNameText = styled.div`
  left: 21px;
  top: 1px;
  position: absolute;
  color: black;
  font-size: 15px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 15px;
  word-wrap: break-word;
`

const NameIconImg = styled.img`
  width: 14.23px;
  height: 16.24px;
  left: 0;
  top: 0;
  position: absolute;
`


export default function Info({ isOpen, onClose }) {

  const [isDropdownOpen, setDropdownOpen] = useState(false); // 드롭다운의 열림/닫힘 상태를 관리하는 변수
  const [selectedOption, setSelectedOption] = useState('누구나'); // 선택한 옵션을 관리하는 변수
  const [isActive, setIsActive] = useState(false); // 토글 버튼의 활성 상태를 관리하는 상태 변수

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen); // 드롭다운의 열림/닫힘 상태를 토글
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option); // 선택한 옵션 업데이트
    setDropdownOpen(false); // 드롭다운 닫기
  };

  const handleToggle = () => {
    setIsActive(!isActive); // 토글 버튼 클릭 시 isActive 상태를 변환하는 핸들러 함수
  };

  if (!isOpen) {
    return null;
  }

  return (
    <BackgroundBlur>
      <ModalContainer>
        <BlackBar />
        <InfoContainer>
          <InfoTitle>내 우편함 정보</InfoTitle>
          <InfoImg src={InfoImage} alt='InfoImage' />
          <CloseButtonImg src={X} alt='X' onClick={onClose} />
        </InfoContainer>

        <Container1>
          <Text1>우편함 닫기</Text1>
            <Toggle isActive={isActive} onClick={handleToggle}>
              <ToggleCircle isActive={isActive} />
            </Toggle>

            <Tooltip isActive={isActive}>
              <Triangle />
              <Placeholder />
              <TooltipText>우편함을 닫으면 편지를 받을 수 없어요.</TooltipText>
            </Tooltip>
        </Container1>

        <Container2>
          <Text2>편지 남길 수 있는 사람</Text2>
          <div>
            <WhoeverContainer onClick={handleDropdownToggle}>
              <WhoeverText>{selectedOption}</WhoeverText> {/* 선택한 옵션 표시 */}
              <UnderImg src={Under} alt='Under' />
            </WhoeverContainer>
            {isDropdownOpen && (
              <OptionContainer>
                <Option1 onClick={() => handleOptionSelect('누구나')} selectedOption={selectedOption === '누구나'}>
                  <OptionText>
                    누구나
                  </OptionText>
                </Option1>
                <Option2 onClick={() => handleOptionSelect('로그인한 사람만')} selectedOption={selectedOption === '로그인한 사람만'}>
                  <OptionText>
                    로그인한 사람만
                  </OptionText>
                </Option2>
              </OptionContainer>
            )}
          </div>
        </Container2>

        <Container3>
          <PeriodText>기간</PeriodText>
          <DateRange>2024-01-04 ~ 2024-01-07</DateRange>
        </Container3>

        <Container4>
          <NameText>이름</NameText>
          <NameContainer>
            <RealNameText>23번째 생일 우편함</RealNameText>
            <NameIconImg src={Vector} alt='NameIcon'/>
          </NameContainer>
        </Container4>
      </ModalContainer>
    </BackgroundBlur>
  );
}
