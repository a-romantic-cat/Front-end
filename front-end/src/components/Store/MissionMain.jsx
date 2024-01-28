import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import 수집함 from '../../assets/img/수집함.svg';
import 상점 from '../../assets/img/상점.svg';
import Coin from '../../assets/img/코인.svg';
import 다음버튼 from '../../assets/img/다음버튼.svg';

//미션 데이터
const dummyMission = [
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

//미션 
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

const StoreImg = styled.img`
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

export default function MissionMain() {
  const navigate = useNavigate();

  const itemsPerPage = 9; // 한 페이지에 표시할 아이템 개수
  const totalPages = Math.ceil(dummyMission.length / itemsPerPage); // 전체 페이지 수

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  const handlePageChange = (page) => {
    setCurrentPage(page); // 페이지 변경
  };

  const handleNextPage = () => {
    const lastPage = totalPages; // 마지막 페이지 번호
    handlePageChange(lastPage); // 마지막 페이지로 이동
  };

  const startIndex = (currentPage - 1) * itemsPerPage; // 현재 페이지에서 첫 번째 아이템의 인덱스
  const endIndex = startIndex + itemsPerPage; // 현재 페이지에서 마지막 아이템의 인덱스

  return (
    <div>
        <Header />
        <StoreMainDiv>
        <StoreInnerDiv>
          <ItemDiv onClick={() => navigate('/CollectionBoxMain')}>
            <CollectionBoxImg src={수집함} alt='수집함' />
            <TextDiv>수집함</TextDiv>
          </ItemDiv>
          <ItemDiv>
            <StoreImg src={상점} alt='상점' />
            <TextDiv>상점</TextDiv>
          </ItemDiv>
          <CoinDiv>
            <CoinImg src={Coin} alt='코인' />
            <CoinCountDiv>30</CoinCountDiv>
          </CoinDiv>
        </StoreInnerDiv>
        <StoreTitleText>미션</StoreTitleText>
        <TitleDetailText>미션을 통해 코인을 얻을 수 있어요!</TitleDetailText>
      </StoreMainDiv>


      {/* 페이징 네비게이션 */}
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
    </div>
  )
}
