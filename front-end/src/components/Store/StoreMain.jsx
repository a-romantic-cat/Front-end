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
import { useDispatch } from 'react-redux';
import { completeMission } from '../../redux/completeMission';
import Footer from '../Footer/Footer';

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
  width: 100%;
  padding: 8px 10px;
  background: #D5C9BD;
  border-radius: 10px;
  justify-content: flex-start;
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
  width: 100%;
  color: black;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 22px;
  white-space: nowrap;
`;

const CoinDiv = styled.div`
  padding-top: 7px;
  padding-bottom: 7px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: flex;
`;

const CoinCountDiv = styled.div`
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
  ${({ isActive }) => isActive && `
    background: rgba(46.99, 40.54, 38.50, 0.80);
    backdrop-filter: blur(4px);
  `}
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
  ${({ isActive }) => isActive && `
    background: rgba(46.99, 40.54, 38.50, 0.80);
    backdrop-filter: blur(4px);
  `}
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
  const [selectedOption, setSelectedOption] = useState('최신순'); // 선택한 옵션을 관리하는 상태 변수
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [selectedLetterIndex, setSelectedLetterIndex] = useState(null);
  const [letters, setLetters] = useState([]); // API로 가져온 편지 데이터를 저장할 상태
  const dispatch = useDispatch();
  const [sort, setSort] = useState('latest'); // 정렬 방식을 관리하는 상태 변수

  // 컴포넌트가 마운트될 때 API를 호출하여 편지지 데이터를 가져옴
  // 함수를 useEffect 외부에서 정의합니다.
  const fetchLetters = async (page) => {
    const token = window.localStorage.getItem("token");
    
    try {
      const response = await axios.get('https://dev.nangmancat.shop/store/letter-papers', {
        headers: {
          //Authorization: `Bearer ${token}`
          Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g'
        },
        params: {
          page: page,
          pageSize: 12,
          sort: sort
        },
      });
    
      if (Array.isArray(response.data.result.content)) {
        setLetters(response.data.result.content);
        setTotalPages(response.data.result.totalPages);
        setShowCoinWrapper(Array(response.data.result.content.length).fill(true)); // letters 업데이트와 함께 showCoinWrapper도 업데이트
      } else {
        console.error('response.data.result.content is not an array');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 컴포넌트가 마운트될 때 API를 호출하여 편지지 데이터를 가져옴
  useEffect(() => {
    fetchLetters(currentPage - 1);
    console.log(`Current page is now ${currentPage}`);
  }, [sort, currentPage]); // sort 상태가 변경될 때마다 요청을 보냅니다.

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    let sortParam;
  
    switch (option) {
      case '인기순':
        sortParam = 'popular';
        break;
      case '최신순':
        sortParam = 'latest';
        break;
      case '낮은 가격순':
        sortParam = 'low_price';
        break;
      case '높은 가격순':
        sortParam = 'high_price';
        break;
      case '가나다순':
        sortParam = 'alphabetical';
        break;
      default:
        sortParam = 'latest';
    }
  
    setSort(sortParam); // 선택된 정렬 방식을 상태에 저장합니다.
  };

  const [showCoinWrapper, setShowCoinWrapper] = useState(Array(letters.length).fill(true));

  const handlePageChange = (page) => {
    console.log(`Changing to page ${page}`);
    setCurrentPage(page); // 페이지 변경
    setSelectedLetterIndex(null); // 페이지 변경 시 selectedLetterIndex 초기화
    setShowCoinWrapper(Array(letters.length).fill(true)); // 페이지 이동 시 showCoinWrapper 초기화
    fetchLetters(page - 1); // 페이지 번호를 0부터 시작하도록 -1을 해줍니다.
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
    const token = window.localStorage.getItem("token"); // 사용자의 토큰을 가져옵니다.

    try {
      const response = await axios.post(`https://dev.nangmancat.shop/store/letter-papers/${letterPaperId}`, {}, {
        headers: {
          //Authorization: `Bearer ${token}`
          Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g'
        },
      });

      if (response.data.isSuccess) {
        alert('편지지 구매에 성공했습니다.');
        setShowCoinWrapper((prev) => {
          const updatedShowCoinWrapper = [...prev];
          updatedShowCoinWrapper[index] = false;
          return updatedShowCoinWrapper;
        });
        setSelectedLetterIndex(null); // 선택된 편지지 인덱스 초기화로 구매 버튼 후 창 닫기
      } else {
        alert('편지지 구매에 실패했습니다: ' + response.data.message);
      }
    } catch (error) {
      console.error('Failed to purchase stamp', error);
    }
  };

  useEffect(() => {
    setSelectedLetterIndex(null);
    setShowCoinWrapper(Array(letters.length).fill(true)); // 페이지 이동 시 showCoinWrapper 초기화
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
              <Option style={{border: '1px black solid'}} onClick={() => handleOptionSelect('최신순')} selectedOption={sort === 'latest'}>
                <OptionText>최신순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('인기순')} selectedOption={sort === 'popular'}>
                <OptionText>인기순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('낮은 가격순')} selectedOption={sort === 'low_price'}>
                <OptionText>낮은 가격순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('높은 가격순')} selectedOption={sort === 'high_price'}>
                <OptionText>높은 가격순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('가나다순')} selectedOption={sort === 'alphabetical'}>
                <OptionText>가나다순</OptionText>
              </Option>
            </OptionsContainer>
          )}
        </div>
      </SortingContainer>

      <LetterContainer>
        {letters && letters.map((letter, index) => (
          <LetterBox key={letter.letterPaperId}>
            <LetterInnerBox
              style={{
                top: `${Math.floor(index / 3) * 394}px`,
                left: `${(index % 3) * 408}px`,
              }}
            >
              <LetterBackground
                imageUrl={letter.letterPaperImageUrl}
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
  const [selectedOption, setSelectedOption] = useState('최신순');
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStampIndex, setSelectedStampIndex] = useState(null); // 선택된 우표의 인덱스를 저장할 상태
  const [stamps, setStamps] = useState([]); // API로 가져온 우표 데이터를 저장할 상태
  const [sort, setSort] = useState('latest'); // 정렬 방식을 관리하는 상태 변수

  // 컴포넌트가 마운트될 때 API를 호출하여 우표 데이터를 가져옴
  useEffect(() => {
    const fetchStamps = async () => {
      const token = window.localStorage.getItem("token");
      
      try {
        const response = await axios.get('https://dev.nangmancat.shop/store/stamps', {
          headers: {
            //Authorization: `Bearer ${token}`
            Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g'
          },
          params: {
            page: 0, // 페이지 번호
            pageSize: 12, // 페이지 크기
            sort: sort, // 정렬 방식
          }
        });
        if (Array.isArray(response.data.result.content)) {
          setStamps(response.data.result.content);
          setTotalPages(response.data.result.totalPages);
          setShowCoinWrapper(Array(response.data.result.content.length).fill(true)); // Stmaps 업데이트와 함께 showCoinWrapper도 업데이트
        } else {
          console.error('response.data.result.content is not an array');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchStamps();
  }, [sort]); // sort 상태가 변경될 때마다 요청을 보냅니다.

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    let sortParam;
  
    switch (option) {
      case '인기순':
        sortParam = 'popular';
        break;
      case '최신순':
        sortParam = 'latest';
        break;
      case '낮은 가격순':
        sortParam = 'low_price';
        break;
      case '높은 가격순':
        sortParam = 'high_price';
        break;
      case '가나다순':
        sortParam = 'alphabetical';
        break;
      default:
        sortParam = 'latest';
    }
  
    setSort(sortParam); // 선택된 정렬 방식을 상태에 저장합니다.
  };

  const [showCoinWrapper, setShowCoinWrapper] = useState(Array(stamps.length).fill(true));

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedStampIndex(null); // 페이지 이동 시 selectedStampIndex 초기화
    setShowCoinWrapper(Array(stamps.length).fill(true)); // 페이지 이동 시 showCoinWrapper 초기화
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
    const token = window.localStorage.getItem("token"); // 사용자의 토큰을 가져옵니다.

    try {
      const response = await axios.post(`https://dev.nangmancat.shop/store/stamps/${stampId}`, {}, {
        headers: {
          //Authorization: `Bearer ${token}`
          Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g'
        },
      });

      if (response.data.isSuccess) {
        alert('우표 구매에 성공했습니다.');
        setShowCoinWrapper((prev) => {
          const updatedShowCoinWrapper = [...prev];
          updatedShowCoinWrapper[index] = false;
          return updatedShowCoinWrapper;
        });
        setSelectedStampIndex(null);
      } else {
        alert('우표 구매에 실패했습니다: ' + response.data.message);
      }
    } catch (error) {
      console.error('Failed to purchase stamp', error);
    }
  };

  useEffect(() => {
    setSelectedStampIndex(null);
    setShowCoinWrapper(Array(stamps.length).fill(true)); // 페이지 이동 시 showCoinWrapper 초기화
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
              <Option style={{border: '1px black solid'}} onClick={() => handleOptionSelect('최신순')} selectedOption={sort === 'latest'}>
                <OptionText>최신순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('인기순')} selectedOption={sort === 'popular'}>
                <OptionText>인기순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('낮은 가격순')} selectedOption={sort === 'low_price'}>
                <OptionText>낮은 가격순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('높은 가격순')} selectedOption={sort === 'high_price'}>
                <OptionText>높은 가격순</OptionText>
              </Option>
              <Option onClick={() => handleOptionSelect('가나다순')} selectedOption={sort === 'alphabetical'}>
                <OptionText>가나다순</OptionText>
              </Option>
            </OptionsContainer>
          )}
        </div>
      </SortingContainer>

      <StampContainer>
        {stamps && stamps.map((stamp, index) => (
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
  const [coin, setCoin] = useState(0); // 코인의 값을 저장할 상태를 생성합니다.

  const fetchUserCoin = async () => {
    const token = window.localStorage.getItem('token'); // 로컬 스토리지에서 토큰을 가져옵니다.
  
    try {
      const response = await axios.get('https://dev.nangmancat.shop/store/user-coin', {
        headers: {
          //Authorization: `Bearer ${token}` // 토큰을 Authorization 헤더에 추가합니다.
          Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g'
        },
      });
  
      return response.data.result; // API 응답 결과에서 코인의 값만 반환합니다.
    } catch (error) {
      console.error('Failed to fetch user coin', error);
      return null; // 에러가 발생하면 null을 반환합니다.
    }
  };

  const CoinDisplay = () => {
  
    useEffect(() => {
      const fetchAndSetCoin = async () => {
        const fetchedCoin = await fetchUserCoin(); // 코인을 조회합니다.
        setCoin(fetchedCoin); // 조회한 코인의 값을 상태에 저장합니다.
      };
  
      fetchAndSetCoin();
    }, []);
  };

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
            <CoinCountDiv>{coin}</CoinCountDiv>
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
};
