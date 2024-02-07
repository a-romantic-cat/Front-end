import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import 수집함 from '../../assets/img/수집함.svg';
import 발바닥 from '../../assets/img/발바닥.svg';
import Coin from '../../assets/img/코인.svg';
import Under from '../../assets/img/Under.svg';
import CoinRed from '../../assets/img/CoinRed.svg';
import 다음버튼 from '../../assets/img/다음버튼.svg';

//편지지 데이터
const dummyLetter = [
  {id: 1, NickName: "편지지 이름", Price: "30"},
  {id: 2, NickName: "편지지 이름", Price: "30"},
  {id: 3, NickName: "편지지 이름", Price: "30"},
  {id: 4, NickName: "편지지 이름", Price: "30"},
  {id: 5, NickName: "편지지 이름", Price: "30"},
  {id: 6, NickName: "편지지 이름", Price: "30"},
  {id: 7, NickName: "편지지 이름", Price: "30"},
  {id: 8, NickName: "편지지 이름", Price: "30"},
  {id: 9, NickName: "편지지 이름", Price: "30"},
  {id: 10, NickName: "편지지 이름", Price: "30"},
  {id: 11, NickName: "편지지 이름", Price: "30"},
  {id: 12, NickName: "편지지 이름", Price: "30"},

  {id: 13, NickName: "편지지 이름", Price: "30"},
  {id: 14, NickName: "편지지 이름", Price: "30"},
  {id: 15, NickName: "편지지 이름", Price: "30"},
  {id: 16, NickName: "편지지 이름", Price: "30"},
  {id: 17, NickName: "편지지 이름", Price: "30"},
  {id: 18, NickName: "편지지 이름", Price: "30"},
  {id: 19, NickName: "편지지 이름", Price: "30"},
  {id: 20, NickName: "편지지 이름", Price: "30"},
  {id: 21, NickName: "편지지 이름", Price: "30"},
  {id: 22, NickName: "편지지 이름", Price: "30"},
  {id: 23, NickName: "편지지 이름", Price: "30"},
  {id: 24, NickName: "편지지 이름", Price: "30"},

  {id: 25, NickName: "편지지 이름", Price: "30"},
];

const dummyCollectionStamp = [
  {id: 1, NickName: "우표 이름", Price: "30"},
  {id: 2, NickName: "우표 이름", Price: "30"},
  {id: 3, NickName: "우표 이름", Price: "30"},
  {id: 4, NickName: "우표 이름", Price: "30"},
  {id: 5, NickName: "우표 이름", Price: "30"},
  {id: 6, NickName: "우표 이름", Price: "30"},
  {id: 7, NickName: "우표 이름", Price: "30"},
  {id: 8, NickName: "우표 이름", Price: "30"},
  {id: 9, NickName: "우표 이름", Price: "30"},
  {id: 10, NickName: "우표 이름", Price: "30"},
  {id: 11, NickName: "우표 이름", Price: "30"},
  {id: 12, NickName: "우표 이름", Price: "30"},

  {id: 13, NickName: "우표 이름", Price: "30"},
  {id: 14, NickName: "우표 이름", Price: "30"},
  {id: 15, NickName: "우표 이름", Price: "30"},
  {id: 16, NickName: "우표 이름", Price: "30"},
  {id: 17, NickName: "우표 이름", Price: "30"},
  {id: 18, NickName: "우표 이름", Price: "30"},
  {id: 19, NickName: "우표 이름", Price: "30"},
  {id: 20, NickName: "우표 이름", Price: "30"},
  {id: 21, NickName: "우표 이름", Price: "30"},
  {id: 22, NickName: "우표 이름", Price: "30"},
  {id: 23, NickName: "우표 이름", Price: "30"},
  {id: 24, NickName: "우표 이름", Price: "30"},

  {id: 25, NickName: "우표 이름", Price: "30"},
];

//상점 
const StoreMainDiv = styled.div`
  width: 1194px;
  height: 68px;
  position: absolute;
  left: 363px;
  top: 162px;
`;

const StoreInnerDiv = styled.div`
  left: 862px;
  top: 30px;
  position: absolute;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 36px;
  display: inline-flex;
`;

const ItemDiv = styled.div`
  padding: 8px 10px;
  background: #D5C9BD;
  border-radius: 10px;
  justify-content:-start;
  align-items: flex-start;
  gap: 7px;
  display: flex;
  cursor: pointer;
`;

const CollectionBoxImg = styled.img`
  width: 22px;
  height: 22px;
`;

const CatPadImg = styled.img`
  width: 22px;
  height: 22px;
`;

const CoinImg = styled.img`
  width: 26.07px;
  height: 24px;
`;

const TextDiv = styled.div`
  color: black;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 22px;
  word-wrap: break-word;
`;

const CoinDiv = styled.div`
  padding-top: 7px;
  padding-bottom: 7px;
  justify-content: flex-start;
  align-items: 'flex-start';
  gap: 8px;
  display: flex;
`;

const CoinCountDiv = styled.div`
  width: 30.80px;
  color: black;
  font-size: 24px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 24px;
  word-wrap: break-word;
`;

const StoreTitleText = styled.div`
  width: 70px;
  height: 40px;
  position: relative;
  left: 0;
  top: 0;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 40px;
`;

const TitleDetailText = styled.div`
  width: 303px;
  height: 14px;
  position: absolute;
  left: 0;
  top: 54px;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 14px;
  color: #757575;
`;

//탭 메뉴
const TabContainer = styled.div`
  width: 142px; 
  height: 44px;
  position: absolute;
  left: 363px;
  top: 290px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 23px;
  display: inline-flex;
`;

const Tab = styled.div`
  padding: 10px 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: ${props => props.isActive ? '3px #C90000 solid' : 'none'};
  cursor: pointer;
`;

const TabText = styled.div`
  color: ${props => props.isActive ? '#C90000' : 'black'};
  font-size: 24px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
`;

//탭1 내용 컨테이너
const TabContentContainer = styled.div`
  width: 1194px;
  height: 1535px;
  position: absolute;
  left: 363px;
  top: 334px;
`

//정렬 기준
const SortingContainer = styled.div`
  width: 156px;
  height: 33px;
  position: relative;
  left: 1038px;
  top: 0;
  padding: 57px;
  z-index: 1000;
`;

const SelectedOptionContainer = styled.div`
  width: 156px;
  height: 33px;
  left: 0;
  top: 0;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  display: inline-flex;
  align-items: flex-start;
  border: 1px black solid;
`;

const OptionsContainer = styled.div`
  width: 156px;
  height: 165px;
  left: 0;
  top: 33px;
  position: absolute;
  background: white;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
`;

const Option = styled.div`
  width: 156px;
  height: 33px;
  align-self: stretch;
  flex: 1 1 0;
  background: ${({ selectedOption }) => (selectedOption ? '#E5E5E5' : 'white')};
  border-left: 1px black solid;
  border-right: 1px black solid;
  border-bottom: 1px black solid;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
  cursor: pointer; 
`;

const OptionText = styled.div`
  color: black;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 14px;
  word-wrap: break-word;
  padding: 6.5px 13px;
`;

const UnderImg = styled.img`
  width: 14px;
  height: 12px;
  position: absolute;
  left: 130px;
  top: 11px;
`;

//탭 속 편지지 내용
const LetterContainer = styled.div`
  width: 1194px;
  height: 1476px;
  position: relative;
`;

const LetterBox = styled.div`
  width: 1194.20px;
  height: 294px;
  position: absolute;
`;

const LetterInnerBox = styled.div`
  width: 378.20px;
  height: 294px;
  position: relative;
`;

const LetterBackground = styled.div`
  width: 378px;
  height: 226.67px;
  left: 0.20px;
  top: 0;
  position: absolute;
  background: ${({ isActive }) => (isActive ? 'rgba(46.99, 40.54, 38.50, 0.80)' : '#CECECE')};
  cursor: pointer;
  z-index: 1;
`;

const LetterTextWrapper = styled.div`
  width: 378px;
  height: 57px;
  left: 0;
  top: 237px;
  position: absolute;
`;

const LetterText = styled.div`
  width: 378px;
  left: 0;
  top: 0;
  position: absolute;
  color: black;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 22px;
  word-wrap: break-word;
`;

const LetterCoinWrapper = styled.div`
  width: 62.31px;
  height: 24px;
  left: 0;
  top: 33px;
  position: absolute;
`;

const RedCoinImg = styled.img`
  width: 26.03px;
  height: 24px;
  left: 0;
  top: 0;
  position: absolute;
`;

const LetterCoinCount = styled.div`
  left: 31.31px;
  top: 0;
  position: absolute;
  color: #C90000;
  font-size: 24px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 24px;
  word-wrap: break-word;
`;

//편지지 클릭시 구매 버튼 생성
const LetterPurchaseContainer = styled.div`
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  width: 228px;
  height: 113px;
  position: relative;
  left: 75px;
  top: 62px;
  z-index: 2;
`;

const LetterQuestionText = styled.div`
  width: 164px;
  height: 22px;
  left: 33px;
  top: 0;
  position: absolute;
  color: white;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 500; 
  line-height: 22px;
  word-wrap: break-word;
`;

const LetterButtonContainer = styled.div`
  width: 228px;
  height: 49px;
  position: absolute;
  left: 0;
  top: 64px;
`;

const LetterCancelButton = styled.button`
  width: 102px;
  height: 49px;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 14px;
  padding-bottom: 14px;
  background: white;
  left: 0;
  top: 0;
  position: absolute;
  border-radius: 10px;
  border: 1px #757575 solid;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  cursor: pointer;
`;

const LetterPurchaseButton = styled.button`
  width: 102px;
  height: 49px;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 14px;
  padding-bottom: 14px;
  background: #C90000;
  left: 126px;
  top: 0;
  position: absolute;
  border-radius: 10px;
  border: 1px #757575 solid;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  cursor: pointer;
`;

const LetterPurchaseText = styled.div`
  width: 32px;
  height: 21px;
  position: absolute;
  color: #757575;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

//탭 속 우표 내용
const StampContainer = styled.div`
  width: 1194px;
  height: 1344px;
  position: relative;
`;

const StampBox = styled.div`
  width: 1194px;
  height: 380px;
  position: absolute;
`;

const StampInnerBox = styled.div`
  width: 276x;
  height: 380px;
  position: absolute;
`;

const StampBackground = styled.div`
  width: 276px;
  height: 348px;
  left: 0;
  top: 0;
  position: absolute;
  background: ${({ isActive }) => (isActive ? 'rgba(46.99, 40.54, 38.50, 0.80)' : '#CECECE')};
  cursor: pointer;
  z-index: 1;
`;

const StampTextWrapper = styled.div`
  width: 82px;
  height: 22px;
  left: 0;
  top: 358px;
  position: absolute;
`;

const StampText = styled.div`
  width: 82px;
  left: 0;
  top: 0;
  position: absolute;
  color: black;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 22px;
  word-wrap: break-word;
`;

//우표 클릭시 구매 버튼 생성
const StampPurchaseContainer = styled.div`
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  width: 164px;
  height: 128px;
  position: relative;
  left: 55.8px;
  top: 120px;
  z-index: 2;
`;

const StampQuestionText = styled.div`
  width: 164px;
  height: 22px;
  left: 0;
  top: 0;
  position: absolute;
  color: white;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 500; 
  line-height: 22px;
  word-wrap: break-word;
`;

const StampButtonContainer = styled.div`
  width: 164px;
  height: 41px;
  position: absolute;
  left: 0;
  top: 87px;
`;

const StampCancelButton = styled.button`
  width: 72px;
  height: 41px;
  padding: 10px 20px;
  background: white;
  left: 0;
  top: 0;
  position: absolute;
  border-radius: 10px;
  border: 1px #757575 solid;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  cursor: pointer;
`;

const StampPurchaseButton = styled.button`
  width: 72px;
  height: 41px;
  padding: 10px 20px;
  background: #C90000;
  left: 92px;
  top: 0;
  position: absolute;
  border-radius: 10px;
  border: 1px #757575 solid;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  cursor: pointer;
`;

const StampPurchaseText = styled.div`
  width: 32px;
  height: 21px;
  position: absolute;
  color: #757575;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

//페이징
const PaginationContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

const PageNumberContainer = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 17px;
  display: flex;
`;

const PageButton = styled.div`
  width: 20px;
  height: 24px;
  padding: 10px;
  border: ${({ active }) => (active ? '1px #C90000 solid' : 'none')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  cursor: pointer;
`;

const PageNumberText = styled.div`
  color: ${({ active }) => (active ? '#C90000' : 'black')};
  font-size: 24px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
`;

const NextButtonImg = styled.img`
  width: 9px;
  height: 15px;
  position: relative;
  left: 54px;
  cursor: pointer;
`;


function LetterPage() {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // 드롭다운의 열림/닫힘 상태를 관리하는 상태 변수
  const [selectedOption, setSelectedOption] = useState('인기순'); // 선택한 옵션을 관리하는 상태 변수
  const itemsPerPage = 12; // 한 페이지에 표시할 아이템 개수
  const totalPages = Math.ceil(dummyLetter.length / itemsPerPage); // 전체 페이지 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const startIndex = (currentPage - 1) * itemsPerPage; // 현재 페이지에서 첫 번째 아이템의 인덱스
  const endIndex = startIndex + itemsPerPage; // 현재 페이지에서 마지막 아이템의 인덱스
  const [selectedLetterIndex, setSelectedLetterIndex] = useState(null);
  const [showCoinWrapper, setShowCoinWrapper] = useState(Array(dummyLetter.length).fill(true));

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen); // 드롭다운의 열림/닫힘 상태를 토글
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option); // 선택한 옵션 업데이트
    setDropdownOpen(false); // 드롭다운 닫기
  };

  const handlePageChange = (page) => {
    setCurrentPage(page); // 페이지 변경
    setSelectedLetterIndex(null); // 페이지 변경 시 selectedLetterIndex 초기화
    setShowCoinWrapper(Array(dummyCollectionStamp.length).fill(true)); // 페이지 이동 시 showCoinWrapper 초기화
  };

  const handleNextPage = () => {
    const lastPage = totalPages; // 마지막 페이지 번호
    handlePageChange(lastPage); // 마지막 페이지로 이동
    setSelectedLetterIndex(null); // 페이지 변경 시 selectedLetterIndex 초기화
  };

  const handleLetterInnerBoxClick = (index) => {
    setSelectedLetterIndex(index === selectedLetterIndex ? null : index); // 페이징 기능 함수
    // 클릭된 편지지의 인덱스를 설정하기 위해 setSelectedLetterIndex를 호출합니다.
    // index는 클릭된 편지지의 인덱스입니다.
  };

  const handleLetterBackgroundClick = (index) => {
    setSelectedLetterIndex(index); // LetterBackground를 클릭했을 때 호출되는 함수
    //해당 편지지의 인덱스를 selectedLetterIndex로 설정하고 선택된 편지지에 구매 관련 컴포넌트가 나타납니다.
  };

  const handleCancelButtonClick = () => {
    setSelectedLetterIndex(null); // 선택된 편지지 인덱스 초기화
  };

  const handlePurchaseButtonClick = (index) => {
    setSelectedLetterIndex(index); // 선택된 편지지 인덱스 
    setShowCoinWrapper((prev) => {
      const updatedShowCoinWrapper = [...prev];
      updatedShowCoinWrapper[index] = false;
      return updatedShowCoinWrapper;
    });
    setSelectedLetterIndex(null); // 선택된 편지지 인덱스 초기화로 구매 버튼 후 창 닫기
  };

  useEffect(() => {
    setSelectedLetterIndex(null);
    setShowCoinWrapper(Array(dummyCollectionStamp.length).fill(true)); // 페이지 이동 시 showCoinWrapper 초기화
  }, [currentPage]);

  return (
    <div>
      <TabContentContainer>
      <SortingContainer>
        <div>
          <SelectedOptionContainer onClick={handleDropdownToggle}>
            <Option style={{border: 'none', background: 'white'}}>
              <OptionText>{selectedOption}</OptionText>
              <UnderImg src={Under} alt='Under' />
            </Option>
          </SelectedOptionContainer>
          {isDropdownOpen && (
            <OptionsContainer>
              <Option style={{border: '1px black solid'}} onClick={() => handleOptionSelect('인기순')} selectedOption={selectedOption === '인기순'}>
                <OptionText>인기순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('최신순')} selectedOption={selectedOption === '최신순'}>
                <OptionText>최신순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('낮은 가격순')} selectedOption={selectedOption === '낮은 가격순'}>
                <OptionText>낮은 가격순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('높은 가격순')} selectedOption={selectedOption === '높은 가격순'}>
                <OptionText>높은 가격순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('가나다순')} selectedOption={selectedOption === '가나다순'}>
                <OptionText>가나다순</OptionText>
              </Option>
            </OptionsContainer>
          )}
        </div>
      </SortingContainer>

      <LetterContainer>
        {dummyLetter.slice(startIndex, endIndex).map((letter, index) => (
          <LetterBox key={letter.id}>
            <LetterInnerBox
              style={{
                top: `${Math.floor(index / 3) * 394}px`,
                left: `${(index % 3) * 408}px`,
              }}
            >
              <LetterBackground
                onClick={() => handleLetterBackgroundClick(index)}
                isActive={index === selectedLetterIndex}
              />
              {index === selectedLetterIndex && (
                <LetterPurchaseContainer isActive={true}>
                  <LetterQuestionText>구매하시겠습니까?</LetterQuestionText>
                  <LetterButtonContainer>
                    <LetterCancelButton onClick={handleCancelButtonClick}>
                      <LetterPurchaseText style={{ color: '#757575' }}>취소</LetterPurchaseText>
                    </LetterCancelButton>
                    <LetterPurchaseButton onClick={() => handlePurchaseButtonClick(index)}>
                      <LetterPurchaseText style={{ color: 'white' }}>구매</LetterPurchaseText>
                    </LetterPurchaseButton>
                  </LetterButtonContainer>
                </LetterPurchaseContainer>
              )}
              <LetterTextWrapper>
                <LetterText>{letter.NickName}</LetterText>
                {showCoinWrapper[index] && (
                  <LetterCoinWrapper>
                    <RedCoinImg src={CoinRed} alt="CoinRed" />
                    <LetterCoinCount>{letter.Price}</LetterCoinCount>
                  </LetterCoinWrapper>
                )}
              </LetterTextWrapper>
            </LetterInnerBox>
          </LetterBox>
        ))}
      </LetterContainer>

      <PaginationContainer>
        <PageNumberContainer>
          {Array.from({ length: totalPages }, (_, index) => (
            <PageButton active={currentPage === index + 1} key={index + 1}>
              <PageNumberText
                active={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PageNumberText>
            </PageButton>
          ))}
        </PageNumberContainer>
        <NextButtonImg src={다음버튼} alt="다음버튼" onClick={handleNextPage} />
      </PaginationContainer>
      </TabContentContainer>
    </div>
  );
}

function StampPage() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('인기순');
  const itemsPerPage = 12;
  const totalPages = Math.ceil(dummyCollectionStamp.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage; // 현재 페이지에서 첫 번째 아이템의 인덱스
  const endIndex = startIndex + itemsPerPage; // 현재 페이지에서 마지막 아이템의 인덱스
  const [selectedStampIndex, setSelectedStampIndex] = useState(null);
  const [showCoinWrapper, setShowCoinWrapper] = useState(Array(dummyCollectionStamp.length).fill(true));

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedStampIndex(null); // 페이지 이동 시 selectedStampIndex 초기화
    setShowCoinWrapper(Array(dummyCollectionStamp.length).fill(true)); // 페이지 이동 시 showCoinWrapper 초기화
  };

  const handleNextPage = () => {
    const lastPage = totalPages;
    handlePageChange(lastPage);
    setSelectedStampIndex(null); // 페이지 이동 시 selectedStampIndex 초기화
  };

  const handleStampInnerBoxClick = (index) => {
    setSelectedStampIndex(index === selectedStampIndex ? null : index);
  };

  const handleStampBackgroundClick = (index) => {
    setSelectedStampIndex(index);
  };

  const handleCancelButtonClick = () => {
    setSelectedStampIndex(null);
  };

  const handlePurchaseButtonClick = (index) => {
    setSelectedStampIndex(index);
    setShowCoinWrapper((prev) => {
      const updatedShowCoinWrapper = [...prev];
      updatedShowCoinWrapper[index] = false;
      return updatedShowCoinWrapper;
    });
    setSelectedStampIndex(null);
  };

  useEffect(() => {
    setSelectedStampIndex(null);
    setShowCoinWrapper(Array(dummyCollectionStamp.length).fill(true)); // 페이지 이동 시 showCoinWrapper 초기화
  }, [currentPage]);

  return (
    <div>
      <TabContentContainer>
      <SortingContainer>
        <div>
          <SelectedOptionContainer onClick={handleDropdownToggle}>
            <Option style={{border: 'none', background: 'white'}}>
              <OptionText>{selectedOption}</OptionText>
              <UnderImg src={Under} alt='Under' />
            </Option>
          </SelectedOptionContainer>
          {isDropdownOpen && (
            <OptionsContainer>
              <Option style={{border: '1px black solid'}} onClick={() => handleOptionSelect('인기순')} selectedOption={selectedOption === '인기순'}>
                <OptionText>인기순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('최신순')} selectedOption={selectedOption === '최신순'}>
                <OptionText>최신순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('낮은 가격순')} selectedOption={selectedOption === '낮은 가격순'}>
                <OptionText>낮은 가격순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('높은 가격순')} selectedOption={selectedOption === '높은 가격순'}>
                <OptionText>높은 가격순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('가나다순')} selectedOption={selectedOption === '가나다순'}>
                <OptionText>가나다순</OptionText>
              </Option>
            </OptionsContainer>
          )}
        </div>
      </SortingContainer>

      <StampContainer>
        {dummyCollectionStamp.slice(startIndex, endIndex).map((stamp, index) => (
          <StampBox key={stamp.id}>
            <StampInnerBox style={{ top: `${Math.floor(index / 4) * 482}px`, left: `${(index % 4) * 306}px` }}>
              <StampBackground 
                onClick={() => handleStampBackgroundClick(index)}
                isActive={index === selectedStampIndex}
              />
              {index === selectedStampIndex && (
                <StampPurchaseContainer isActive={true}>
                  <StampQuestionText>구매하시겠습니까?</StampQuestionText>
                  <StampButtonContainer>
                    <StampCancelButton onClick={handleCancelButtonClick}>
                      <StampPurchaseText style={{ color: '#757575' }}>취소</StampPurchaseText>
                    </StampCancelButton>
                    <StampPurchaseButton onClick={() => handlePurchaseButtonClick(index)}>
                      <StampPurchaseText style={{ color: 'white' }}>구매</StampPurchaseText>
                    </StampPurchaseButton>
                  </StampButtonContainer>
                </StampPurchaseContainer>
              )}
              <StampTextWrapper>
                <StampText>{stamp.NickName}</StampText>
                {showCoinWrapper[index] && (
                  <LetterCoinWrapper>
                    <RedCoinImg src={CoinRed} alt="CoinRed" />
                    <LetterCoinCount>{stamp.Price}</LetterCoinCount>
                  </LetterCoinWrapper>
                )}
              </StampTextWrapper>
            </StampInnerBox>
          </StampBox>
        ))}
      </StampContainer>

      <PaginationContainer>
        <PageNumberContainer>
          {Array.from({ length: totalPages }, (_, index) => (
            <PageButton active={currentPage === index + 1} key={index + 1}>
              <PageNumberText
                active={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PageNumberText>
            </PageButton>
          ))}
        </PageNumberContainer>
        <NextButtonImg src={다음버튼} alt="다음버튼" onClick={handleNextPage} />
      </PaginationContainer>
      </TabContentContainer>
    </div>
  );
}

export default function StoreMain() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('tab1');

  return (
    <div>
      <Header />
      <StoreMainDiv>
        <StoreInnerDiv>
          <ItemDiv onClick={() => navigate('/CollectionBoxMain')}>
            <CollectionBoxImg src={수집함} alt='수집함'/>
            <TextDiv>수집함</TextDiv>
          </ItemDiv>
          <ItemDiv onClick={() => navigate('/MissionMain')}>
            <CatPadImg src={발바닥} alt='발바닥' />
            <TextDiv>미션</TextDiv>
          </ItemDiv>
          <CoinDiv>
            <CoinImg src={Coin} alt='코인' />
            <CoinCountDiv>30</CoinCountDiv>
          </CoinDiv>
        </StoreInnerDiv>
        <StoreTitleText>상점</StoreTitleText>
        <TitleDetailText>미션으로 코인을 획득해 편지지와 우표를 구입해 보세요!</TitleDetailText>
      </StoreMainDiv>

      <TabContainer>
        <Tab isActive={currentTab === 'tab1'} onClick={() => setCurrentTab('tab1')}>
          <TabText style={{width: 63}} isActive={currentTab === 'tab1'}>편지지</TabText>
        </Tab>
        <Tab isActive={currentTab === 'tab2'} onClick={() => setCurrentTab('tab2')}>
          <TabText style={{width: 42}} isActive={currentTab === 'tab2'}>우표</TabText>
        </Tab>
      </TabContainer>

      {currentTab === 'tab1' && <LetterPage />}
      {currentTab === 'tab2' && <StampPage />}
    </div>
  )
}
