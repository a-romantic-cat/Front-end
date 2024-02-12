import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import 다음버튼 from '../../assets/img/다음버튼.svg';
import PastLetterboxModal from './PastLetterboxModal';

//편지지 데이터
const dummyLetter = [
  {id: 1, Name: "내우편함1", Date: "2024.01.01~2024.02.02"},
  {id: 2, Name: "내우편함2", Date: "2024.01.01~2024.02.02"},
  {id: 3, Name: "내우편함3", Date: "2024.01.01~2024.02.02"},
  {id: 4, Name: "내우편함4", Date: "2024.01.01~2024.02.02"},
  {id: 5, Name: "내우편함5", Date: "2024.01.01~2024.02.02"},
  {id: 6, Name: "내우편함6", Date: "2024.01.01~2024.02.02"},
  {id: 7, Name: "내우편함7", Date: "2024.01.01~2024.02.02"},
  {id: 8, Name: "내우편함8", Date: "2024.01.01~2024.02.02"},
  {id: 9, Name: "내우편함9", Date: "2024.01.01~2024.02.02"},
  {id: 10, Name: "내우편함10", Date: "2024.01.01~2024.02.02"},
  {id: 11, Name: "내우편함11", Date: "2024.01.01~2024.02.02"},
  {id: 12, Name: "내우편함12", Date: "2024.01.01~2024.02.02"},
  {id: 13, Name: "내우편함13", Date: "2024.01.01~2024.02.02"},
  {id: 14, Name: "내우편함14", Date: "2024.01.01~2024.02.02"},
  {id: 15, Name: "내우편함15", Date: "2024.01.01~2024.02.02"},
  {id: 16, Name: "내우편함16", Date: "2024.01.01~2024.02.02"},

  {id: 17, Name: "내우편함17", Date: "2024.01.01~2024.02.02"},
  {id: 18, Name: "내우편함18", Date: "2024.01.01~2024.02.02"},
  {id: 19, Name: "내우편함19", Date: "2024.01.01~2024.02.02"},
  {id: 20, Name: "내우편함20", Date: "2024.01.01~2024.02.02"},
  {id: 21, Name: "내우편함21", Date: "2024.01.01~2024.02.02"},
  {id: 22, Name: "내우편함22", Date: "2024.01.01~2024.02.02"},
  {id: 23, Name: "내우편함23", Date: "2024.01.01~2024.02.02"},
  {id: 24, Name: "내우편함24", Date: "2024.01.01~2024.02.02"},
  {id: 25, Name: "내우편함25", Date: "2024.01.01~2024.02.02"},
  {id: 26, Name: "내우편함26", Date: "2024.01.01~2024.02.02"},
  {id: 27, Name: "내우편함27", Date: "2024.01.01~2024.02.02"},
  {id: 28, Name: "내우편함28", Date: "2024.01.01~2024.02.02"},
  {id: 29, Name: "내우편함29", Date: "2024.01.01~2024.02.02"},
  {id: 30, Name: "내우편함30", Date: "2024.01.01~2024.02.02"},
  {id: 31, Name: "내우편함31", Date: "2024.01.01~2024.02.02"},
  {id: 32, Name: "내우편함32", Date: "2024.01.01~2024.02.02"},

  {id: 33, Name: "내우편함33", Date: "2024.01.01~2024.02.02"},
  {id: 34, Name: "내우편함34", Date: "2024.01.01~2024.02.02"},
  {id: 35, Name: "내우편함35", Date: "2024.01.01~2024.02.02"},
  {id: 36, Name: "내우편함36", Date: "2024.01.01~2024.02.02"},
  {id: 37, Name: "내우편함37", Date: "2024.01.01~2024.02.02"},
  {id: 38, Name: "내우편함38", Date: "2024.01.01~2024.02.02"},
  {id: 39, Name: "내우편함39", Date: "2024.01.01~2024.02.02"},
  {id: 40, Name: "내우편함40", Date: "2024.01.01~2024.02.02"},
  {id: 41, Name: "내우편함41", Date: "2024.01.01~2024.02.02"},
  {id: 42, Name: "내우편함42", Date: "2024.01.01~2024.02.02"},
  {id: 43, Name: "내우편함43", Date: "2024.01.01~2024.02.02"},
  {id: 44, Name: "내우편함44", Date: "2024.01.01~2024.02.02"},
  {id: 45, Name: "내우편함45", Date: "2024.01.01~2024.02.02"},
  {id: 46, Name: "내우편함46", Date: "2024.01.01~2024.02.02"},
  {id: 47, Name: "내우편함47", Date: "2024.01.01~2024.02.02"},
  {id: 48, Name: "내우편함48", Date: "2024.01.01~2024.02.02"},

  {id: 49, Name: "내우편함49", Date: "2024.01.01~2024.02.02"},
  {id: 50, Name: "내우편함50", Date: "2024.01.01~2024.02.02"},
  {id: 51, Name: "내우편함51", Date: "2024.01.01~2024.02.02"},
  {id: 52, Name: "내우편함52", Date: "2024.01.01~2024.02.02"},
  {id: 53, Name: "내우편함53", Date: "2024.01.01~2024.02.02"},
  {id: 54, Name: "내우편함54", Date: "2024.01.01~2024.02.02"},
  {id: 55, Name: "내우편함55", Date: "2024.01.01~2024.02.02"},
  {id: 56, Name: "내우편함56", Date: "2024.01.01~2024.02.02"},
  {id: 57, Name: "내우편함57", Date: "2024.01.01~2024.02.02"},
  {id: 58, Name: "내우편함58", Date: "2024.01.01~2024.02.02"},
  {id: 59, Name: "내우편함59", Date: "2024.01.01~2024.02.02"},
  {id: 60, Name: "내우편함60", Date: "2024.01.01~2024.02.02"},
  {id: 61, Name: "내우편함61", Date: "2024.01.01~2024.02.02"},
  {id: 62, Name: "내우편함62", Date: "2024.01.01~2024.02.02"},
  {id: 63, Name: "내우편함63", Date: "2024.01.01~2024.02.02"},
  {id: 64, Name: "내우편함64", Date: "2024.01.01~2024.02.02"},

  {id: 65, Name: "내우편함65", Date: "2024.01.01~2024.02.02"},
];

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

//닉네임
const Nickname = styled.div`
  color: #79110E;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

//님의 지난 우편함
const Message = styled.div`
  color: black;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

const Container = styled.div`
  width: 990px;
  height: 1067.7px;
  margin: 100px 0 120.83px 465px;
  display: grid; /* 그리드 레이아웃을 사용하여 요소들을 적절하게 배치 */
  grid-template-columns: repeat(4, 1fr); /* 4개의 열로 구성 */
  gap: 98px; /* 요소들 간의 간격 설정 */
`;

const LetterBox = styled.div`
  width: 100%;
  height: 176.54px;
`;

const LetterInnerBox = styled.div`
  width: 174px;
  height: 118px;
  position: relative;
`;

const LetterBackground = styled.div`
  background-image: url("/images/지난우표.svg");
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
`;

const LetterTextWrapper = styled.div`
  width: 378px;
  height: 57px;
  left: 0;
  top: 126px;
  position: absolute;
`;

const LetterText = styled.div`
  width: 378px;
  left: 0;
  top: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  word-wrap: break-word;
`;

const LetterDate = styled.div`
  left: 31.31px;
  top: 0;
  word-wrap: break-word;
  color: #000;
  font-family: 'Pretendard';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5.54px;
`;

//페이징
const PaginationContainer = styled.div`
  width: 331px;
  height: 44px;
  margin-left: 826px;
  margin-bottom: 130px;
  display: flex;
`;

//숫자들
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
  top: 14.5px;
  cursor: pointer;
`;


export default function PastLetterbox1() {
  const itemsPerPage = 16; // 한 페이지에 표시할 아이템 개수
  const totalPages = Math.ceil(dummyLetter.length / itemsPerPage); // 전체 페이지 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const startIndex = (currentPage - 1) * itemsPerPage; // 현재 페이지에서 첫 번째 아이템의 인덱스
  const endIndex = startIndex + itemsPerPage; // 현재 페이지에서 마지막 아이템의 인덱스
  const [selectedLetterIndex, setSelectedLetterIndex] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page); // 페이지 변경
    setSelectedLetterIndex(null); // 페이지 변경 시 selectedLetterIndex 초기화
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

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const navigate = useNavigate();
  const timeoutRef = useRef(null); // timeout 참조

  const timeout = () => {
      timeoutRef.current = setTimeout(() => {
          navigate('/PastLetterbox2');
      }, 2000);
  };

  useEffect(() => {
      if (isModalOpen) {
          timeout();
      } else {
          clearTimeout(timeoutRef.current); // 모달이 닫힐 때 타임아웃 제거
      }

      return () => {
          clearTimeout(timeoutRef.current); // 컴포넌트 언마운트 시 타임아웃 제거
      };
  }, [isModalOpen, navigate]);

  return (
    <div>
      <Header />

      <TextContainer>
        <TextInnerContainer>
          <Nickname>
            닉네임
          </Nickname>
          <Message>
            님의 지난 우편함
          </Message>
        </TextInnerContainer>
      </TextContainer>

        <Container>
          {dummyLetter.slice(startIndex, endIndex).map((letter, index) => (
            <LetterBox key={letter.id}>
              <LetterInnerBox onClick={() => {setIsModalOpen(true)}}>
                <LetterBackground
                  onClick={() => {
                    handleLetterBackgroundClick(index);
                  }}
                  isActive={index === selectedLetterIndex}
                />
                  
                <LetterTextWrapper>
                  <LetterText>{letter.Name}</LetterText>
                  <LetterDate>{letter.Date}</LetterDate>
                </LetterTextWrapper>
              </LetterInnerBox>
            </LetterBox>
          ))}
        </Container>

      <PaginationContainer>
        <PageNumberContainer>
          {Array.from({ length: totalPages }, (_, index) => (
            <PageButton active={currentPage === index + 1} key={index + 1}
            onClick={() => handlePageChange(index + 1)}>
              <PageNumberText
                active={currentPage === index + 1}
              >
                {index + 1}
              </PageNumberText>
            </PageButton>
          ))}
        </PageNumberContainer>
        <NextButtonImg src={다음버튼} alt="다음버튼" onClick={handleNextPage} />
      </PaginationContainer>

      <PastLetterboxModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <Footer />
    </div>
  )
}