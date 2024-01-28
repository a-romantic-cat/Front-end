import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import 수집함 from '../../assets/img/수집함.svg';
import 발바닥 from '../../assets/img/발바닥.svg';
import Coin from '../../assets/img/코인.svg';
import Under from '../../assets/img/Under.svg';
import CoinRed from '../../assets/img/CoinRed.svg';

//편지지 데이터
const dummyFriend = [
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

export default function StoreMain() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('tab1');

  const [isDropdownOpen, setDropdownOpen] = useState(false); // 드롭다운의 열림/닫힘 상태를 관리하는 상태 변수
  const [selectedOption, setSelectedOption] = useState('인기순'); // 선택한 옵션을 관리하는 상태 변수

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen); // 드롭다운의 열림/닫힘 상태를 토글
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option); // 선택한 옵션 업데이트
    setDropdownOpen(false); // 드롭다운 닫기
  };

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

      {currentTab === 'tab1' && (
        <div>
          <TabContentContainer>
            <SortingContainer>
              <div>
                <SelectedOptionContainer onClick={handleDropdownToggle}>
                  <Option style={{border: 'none', background: 'white'}}>
                    <OptionText>{selectedOption}</OptionText> {/* 선택한 옵션 표시 */}
                    <UnderImg src={Under} alt='Under' />
                  </Option>
                </SelectedOptionContainer>
                {isDropdownOpen && (
                  <OptionsContainer>
                    <Option style={{border: '1px black solid'}} onClick={() => handleOptionSelect('인기순')} selectedOption={selectedOption === '인기순'}>
                      <OptionText>
                        인기순
                      </OptionText>
                    </Option>
                    <Option onClick={() => handleOptionSelect('최신순')} selectedOption={selectedOption === '최신순'}>
                      <OptionText>
                        최신순
                      </OptionText>
                    </Option>
                    <Option onClick={() => handleOptionSelect('낮은 가격순')} selectedOption={selectedOption === '낮은 가격순'}>
                      <OptionText>
                        낮은 가격순
                      </OptionText>
                    </Option>
                    <Option onClick={() => handleOptionSelect('높은 가격순')} selectedOption={selectedOption === '높은 가격순'}>
                      <OptionText>
                        높은 가격순
                      </OptionText>
                    </Option>
                    <Option onClick={() => handleOptionSelect('가나다순')} selectedOption={selectedOption === '가나다순'}>
                      <OptionText>
                        가나다순
                      </OptionText>
                    </Option>
                  </OptionsContainer>
                )}
              </div>
            </SortingContainer>

            <LetterContainer>
              {dummyFriend.map((friend, index) => (
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
          </TabContentContainer>

        </div>
      )}

      {currentTab === 'tab2' && (
        <div>
          <TabContentContainer>

          </TabContentContainer>
        </div>
      )}
    </div>
  )
}
