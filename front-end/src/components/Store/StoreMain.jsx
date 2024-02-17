import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import 수집함 from '../../assets/img/수집함.svg';
import 발바닥 from '../../assets/img/발바닥.svg';
import Coin from '../../assets/img/코인.svg';
import Under from '../../assets/img/Under.svg';
import CoinRed from '../../assets/img/CoinRed.svg';
import 다음버튼 from '../../assets/img/다음버튼.svg';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from '../../redux/coinSlice';

//편지지 데이터
const dummyLetter = [
  {letterPaperId: 1, letterPaperName: "letter design 1", price: "30"},
  {letterPaperId: 2, letterPaperName: "letter design 2", price: "30"},
  {letterPaperId: 3, letterPaperName: "letter design 3", price: "30"},
  {letterPaperId: 4, letterPaperName: "letter design 4", price: "30"},
  {letterPaperId: 5, letterPaperName: "letter design 5", price: "30"},
  {letterPaperId: 6, letterPaperName: "letter design 6", price: "30"},
  {letterPaperId: 7, letterPaperName: "letter design 7", price: "30"},
  {letterPaperId: 8, letterPaperName: "letter design 8", price: "30"},
  {letterPaperId: 9, letterPaperName: "letter design 9", price: "30"},
  {letterPaperId: 10, letterPaperName: "letter design 10", price: "30"},
  {letterPaperId: 11, letterPaperName: "letter design 11", price: "30"},
  {letterPaperId: 12, letterPaperName: "letter design 12", price: "30"},

  {letterPaperId: 13, letterPaperName: "letter design 13", price: "30"},
  {letterPaperId: 14, letterPaperName: "letter design 14", price: "30"},
  {letterPaperId: 15, letterPaperName: "letter design 15", price: "30"},
  {letterPaperId: 16, letterPaperName: "letter design 16", price: "30"},
  {letterPaperId: 17, letterPaperName: "letter design 17", price: "30"},
  {letterPaperId: 18, letterPaperName: "letter design 18", price: "30"},
  {letterPaperId: 19, letterPaperName: "letter design 19", price: "30"},
  {letterPaperId: 20, letterPaperName: "letter design 20", price: "30"},
  {letterPaperId: 21, letterPaperName: "letter design 21", price: "30"},
  {letterPaperId: 22, letterPaperName: "letter design 22", price: "30"},
  {letterPaperId: 23, letterPaperName: "letter design 23", Price: "30"},
  {letterPaperId: 24, letterPaperName: "letter design 24", price: "30"},

  {letterPaperId: 25, letterPaperName: "letter design 25", price: "30"},
];

const dummyCollectionStamp = [
  {stampId: 1, stampName: "stamp design 1", price: "30"},
  {stampId: 2, stampName: "stamp design 2", price: "30"},
  {stampId: 3, stampName: "stamp design 3", price: "30"},
  {stampId: 4, stampName: "stamp design 4", price: "30"},
  {stampId: 5, stampName: "stamp design 5", price: "30"},
  {stampId: 6, stampName: "stamp design 6", price: "30"},
  {stampId: 7, stampName: "stamp design 7", price: "30"},
  {stampId: 8, stampName: "stamp design 8", price: "30"},
  {stampId: 9, stampName: "stamp design 9", price: "30"},
  {stampId: 10, stampName: "stamp design 10", price: "30"},
  {stampId: 11, stampName: "stamp design 11", price: "30"},
  {stampId: 12, stampName: "stamp design 12", price: "30"},

  {stampId: 13, stampName: "stamp design 13", price: "30"},
  {stampId: 14, stampName: "stamp design 14", price: "30"},
  {stampId: 15, stampName: "stamp design 15", price: "30"},
  {stampId: 16, stampName: "stamp design 16", price: "30"},
  {stampId: 17, stampName: "stamp design 17", price: "30"},
  {stampId: 18, stampName: "stamp design 18", price: "30"},
  {stampId: 19, stampName: "stamp design 19", price: "30"},
  {stampId: 20, stampName: "stamp design 20", price: "30"},
  {stampId: 21, stampName: "stamp design 21", price: "30"},
  {stampId: 22, stampName: "stamp design 22", price: "30"},
  {stampId: 23, stampName: "stamp design 23", price: "30"},
  {stampId: 24, stampName: "stamp design 24", price: "30"},

  {stampId: 25, stampName: "stamp design 25", price: "30"},
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
const Tab1ContentContainer = styled.div`
  width: 1194px;
  height: 1892px;
  position: absolute;
  left: 363px;
  top: 334px;
`;

//탭2 내용 컨테이너
const Tab2ContentContainer = styled.div`
  width: 1194px;
  height: 1921px;
  position: absolute;
  left: 363px;
  top: 334px;
`;

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
  width: 1194px;
  height: 294px;
  position: absolute;
`;

const LetterInnerBox = styled.div`
  width: 378px;
  height: 294px;
  position: absolute;
`;

const LetterBackground = styled.div`
  width: 378px;
  height: 227px;
  left: 0.20px;
  top: 0;
  position: absolute;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  filter: ${({ isClicked }) => (isClicked ? 'blur(5px)' : 'none')};
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
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  color: black;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 22px;
  white-space: nowrap;
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
  height: 1505px;
  position: relative;
`;

const StampBox = styled.div`
  width: 1194px;
  height: 435px;
  position: absolute;
`;

const StampInnerBox = styled.div`
  width: 276x;
  height: 435px;
  position: absolute;
`;

const StampBackground = styled.div`
  width: 276px;
  height: 368px;
  left: 0;
  top: 0;
  position: absolute;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  filter: ${({ isClicked }) => (isClicked ? 'blur(5px)' : 'none')};
  cursor: pointer;
  z-index: 1;
`;

const StampTextWrapper = styled.div`
  width: 82.2px;
  height: 57px;
  left: 0;
  top: 378px;
  position: absolute;
`;

const StampText = styled.div`
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  color: black;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 22px;
  white-space: nowrap;
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
  const [letters, setLetters] = useState([]); // API로 가져온 편지 데이터를 저장할 상태
  const dispatch = useDispatch();
  const coinCount = useSelector((state) => state.coin.coinCount); // 현재 코인 개수를 가져옵니다.

  // 컴포넌트가 마운트될 때 API를 호출하여 편지지 데이터를 가져옴
  useEffect(() => {
    const fetchStamps = async () => {
      const token = window.localStorage.getItem("token");
      
      try {
        const response = await axios.get('https://dev.nangmancat.shop/store/letter-papers', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            page: 0, // 페이지 번호
            pageSize: 15 // 페이지 크기
          }
        });
        setLetters(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStamps();
  }, []);

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

  const handleLetterBackgroundClick = (index) => {
    setSelectedLetterIndex(index); // LetterBackground를 클릭했을 때 호출되는 함수
    //해당 편지지의 인덱스를 selectedLetterIndex로 설정하고 선택된 편지지에 구매 관련 컴포넌트가 나타납니다.
  };

  const handleCancelButtonClick = () => {
    setSelectedLetterIndex(null); // 선택된 편지지 인덱스 초기화
  };

  const handlePurchaseButtonClick = async (index) => {
    const letterPaperId = letters[index].letterPaperId; // 클릭된 편지지의 ID를 가져옵니다.
    const price = letters[index].price; // 클릭된 편지지의 가격을 가져옵니다.
    const token = window.localStorage.getItem("token"); // 사용자의 토큰을 가져옵니다.

    try {
      const response = await axios.post(`https://dev.nangmancat.shop/store/letter-papers/${letterPaperId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      if (response.data.isSuccess) {
        alert('편지지 구매에 성공했습니다.');
        dispatch(decrement(price)); // 코인 개수를 차감하는 액션을 디스패치합니다.
      } else {
        alert('편지지 구매에 실패했습니다: ' + response.data.message);
      }
    } catch (error) {
      console.error('Failed to purchase stamp', error);
    }

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
      <Tab1ContentContainer>
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
        {letters.slice(startIndex, endIndex).map((letter, index) => (
          <LetterBox key={letter.letterPaperId}>
            <LetterInnerBox
              style={{
                top: `${Math.floor(index / 3) * 394}px`,
                left: `${(index % 3) * 408}px`,
              }}
            >
              <LetterBackground
                imageUrl={letter.letterImageUrl}
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
                <LetterText>{letter.letterPaperName}</LetterText>
                {showCoinWrapper[index] && (
                  <LetterCoinWrapper>
                    <RedCoinImg src={CoinRed} alt="CoinRed" />
                    <LetterCoinCount>{letter.price}</LetterCoinCount>
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
      </Tab1ContentContainer>
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
  const [selectedStampIndex, setSelectedStampIndex] = useState(null); // 선택된 우표의 인덱스를 저장할 상태
  const [showCoinWrapper, setShowCoinWrapper] = useState(Array(dummyCollectionStamp.length).fill(true));
  const [stamps, setStamps] = useState([]); // API로 가져온 우표 데이터를 저장할 상태
  const dispatch = useDispatch();
  const coinCount = useSelector((state) => state.coin.coinCount); // 현재 코인 개수를 가져옵니다.

  // 컴포넌트가 마운트될 때 API를 호출하여 우표 데이터를 가져옴
  useEffect(() => {
    const fetchStamps = async () => {
      const token = window.localStorage.getItem("token");

      try {
        const response = await axios.get('https://dev.nangmancat.shop/store/stamps', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            page: 0, // 페이지 번호
            pageSize: 15 // 페이지 크기
          }
        });
        setStamps(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStamps();
  }, []);

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

  const handleStampBackgroundClick = (index) => {
    setSelectedStampIndex(index);
  };

  const handleCancelButtonClick = () => {
    setSelectedStampIndex(null);
  };

  const handlePurchaseButtonClick = async (index) => {
    const stampId = stamps[index].stampId; // 클릭된 우표의 ID를 가져옵니다.
    const price = stamps[index].price; // 클릭된 우표의 가격을 가져옵니다.
    const token = window.localStorage.getItem("token"); // 사용자의 토큰을 가져옵니다.

    try {
      const response = await axios.post(`https://dev.nangmancat.shop/store/stamps/${stampId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      if (response.data.isSuccess) {
        alert('우표 구매에 성공했습니다.');
        dispatch(decrement(price)); // 코인 개수를 차감하는 액션을 디스패치합니다.
      } else {
        alert('우표 구매에 실패했습니다: ' + response.data.message);
      }
    } catch (error) {
      console.error('Failed to purchase stamp', error);
    }

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
      <Tab2ContentContainer>
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
        {stamps.slice(startIndex, endIndex).map((stamp, index) => (
          <StampBox key={stamp.stampId}>
            <StampInnerBox style={{ top: `${Math.floor(index / 4) * 535}px`, left: `${(index % 4) * 306}px` }}>
              <StampBackground 
                imageUrl={stamp.stampImageUrl}
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
                <StampText>{stamp.stampName}</StampText>
                {showCoinWrapper[index] && (
                  <LetterCoinWrapper>
                    <RedCoinImg src={CoinRed} alt="CoinRed" />
                    <LetterCoinCount>{stamp.price}</LetterCoinCount>
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
      </Tab2ContentContainer>
    </div>
  );
}

export default function StoreMain() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('tab1');
  const coinCount = useSelector((state) => state.coin.coinCount); // 현재 코인 개수를 가져옵니다.

  return (
    <div>
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
            <CoinCountDiv>{coinCount}</CoinCountDiv>
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
