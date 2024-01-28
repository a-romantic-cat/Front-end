import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import 상점 from '../../assets/img/상점.svg';
import 발바닥 from '../../assets/img/발바닥.svg';
import Coin from '../../assets/img/코인.svg';
import CoinRed from '../../assets/img/CoinRed.svg';
import 다음버튼 from '../../assets/img/다음버튼.svg';
import Checkbox from '../../assets/img/Checkbox.svg';

//수집함 편지지 데이터
const dummyCollectionLetter = [
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
  {id: 1, NickName: "우표 이름"},
  {id: 2, NickName: "우표 이름"},
  {id: 3, NickName: "우표 이름"},
  {id: 4, NickName: "우표 이름"},
  {id: 5, NickName: "우표 이름"},
  {id: 6, NickName: "우표 이름"},
  {id: 7, NickName: "우표 이름"},
  {id: 8, NickName: "우표 이름"},
  {id: 9, NickName: "우표 이름"},
  {id: 10, NickName: "우표 이름"},
  {id: 11, NickName: "우표 이름"},
  {id: 12, NickName: "우표 이름"},
  {id: 13, NickName: "우표 이름"},

  {id: 14, NickName: "우표 이름"},
  {id: 15, NickName: "우표 이름"},
  {id: 16, NickName: "우표 이름"},
  {id: 17, NickName: "우표 이름"},
  {id: 18, NickName: "우표 이름"},
  {id: 19, NickName: "우표 이름"},
  {id: 20, NickName: "우표 이름"},
  {id: 21, NickName: "우표 이름"},
  {id: 22, NickName: "우표 이름"},
  {id: 23, NickName: "우표 이름"},
  {id: 24, NickName: "우표 이름"},

  {id: 25, NickName: "우표 이름"},
];

//수집함
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
  width: 104px;
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
  width: 285px; 
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
`;

//마이디자인만 보기
const MyDesignContainer = styled.div`
  width: 155px;
  height: 18px;
  position: relative;
  left: 1039px;
  top: 0;
  margin-bottom: 72px;
`;

const CheckboxImg = styled.img`
  width: 18px;
  height: 18px;
`;

const MyDesignText = styled.div`
  width: 129px;
  color: black;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 18px;
  word-wrap: break-word;
  left: 26px;
  top: 0;
  position: absolute;
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
  margin-bottom: 100px;
`;

const LetterInnerBox = styled.div`
  width: 378.20px;
  height: 294px;
  position: absolute;
`;

const LetterBackground = styled.div`
  width: 378px;
  height: 226.67px;
  left: 0.20px;
  top: 0;
  position: absolute;
  background: #CECECE;
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
  margin-bottom: 102px;
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
  background: #CECECE;
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
  const [currentTab, setCurrentTab] = useState('tab1');

  const itemsPerPage = 12; // 한 페이지에 표시할 아이템 개수
  const totalPages = Math.ceil(dummyCollectionLetter.length / itemsPerPage); // 전체 페이지 수

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
        <ItemDiv onClick={() => navigate('/Store')}>
            <CollectionBoxImg src={상점} alt='상점'/>
            <TextDiv>상점</TextDiv>
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
        <StoreTitleText>수집함</StoreTitleText>
        <TitleDetailText>편지지와 우표를 수집하고 직접 만들어보세요!</TitleDetailText>
      </StoreMainDiv>

      <TabContainer>
        <Tab isActive={currentTab === 'tab1'} onClick={() => setCurrentTab('tab1')}>
          <TabText style={{width: 63}} isActive={currentTab === 'tab1'}>편지지</TabText>
        </Tab>
        <Tab isActive={currentTab === 'tab2'} onClick={() => setCurrentTab('tab2')}>
          <TabText style={{width: 42}} isActive={currentTab === 'tab2'}>우표</TabText>
        </Tab>
        <Tab isActive={currentTab === 'tab3'} onClick={() => setCurrentTab('tab3')}>
          <TabText style={{width: 104}} isActive={currentTab === 'tab3'}>마이디자인</TabText>
        </Tab>
      </TabContainer>

      {currentTab === 'tab1' && (
        <div>
          <TabContentContainer>

            <MyDesignContainer>
              <CheckboxImg src={Checkbox} alt="Checkbox" />
              <MyDesignText>마이디자인만 보기</MyDesignText>
            </MyDesignContainer>

            <LetterContainer>
                {dummyCollectionLetter.slice(startIndex, endIndex).map((friend, index) => (
                  <LetterBox key={friend.id}>
                    <LetterInnerBox style={{ top: `${Math.floor(index / 3) * 394}px`, left: `${(index % 3) * 408}px` }}>
                      <LetterBackground />
                      <LetterTextWrapper>
                        <LetterText>{friend.NickName}</LetterText> {/* 편지지 이름 */}
                        <LetterCoinWrapper>
                          <RedCoinImg src={CoinRed} alt='CoinRed' />
                          <LetterCoinCount>{friend.Price}</LetterCoinCount> {/* Price */}
                        </LetterCoinWrapper>
                      </LetterTextWrapper>
                    </LetterInnerBox>
                  </LetterBox>
                ))}
            </LetterContainer>

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
          </TabContentContainer>
        </div>
      )}

      {currentTab === 'tab2' && (
        <div>
          <TabContentContainer>
          <MyDesignContainer>
              <CheckboxImg src={Checkbox} alt="Checkbox" />
              <MyDesignText>마이디자인만 보기</MyDesignText>
            </MyDesignContainer>

            <StampContainer>
                {dummyCollectionStamp.slice(startIndex, endIndex).map((friend, index) => (
                  <StampBox key={friend.id}>
                    <StampInnerBox style={{ top: `${Math.floor(index / 4) * 482}px`, left: `${(index % 4) * 306}px` }}>
                      <StampBackground />
                      <StampTextWrapper>
                        <StampText>{friend.NickName}</StampText> {/* 편지지 이름 */}
                      </StampTextWrapper>
                    </StampInnerBox>
                  </StampBox>
                ))}
            </StampContainer>

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
          </TabContentContainer>
        </div>
      )}

      {currentTab === 'tab3' && (
        <div>탭 3의 내용입니다.</div>
      )}
    </div>
  )
}
