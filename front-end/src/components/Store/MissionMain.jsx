import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import 수집함 from '../../assets/img/수집함.svg';
import 상점 from '../../assets/img/상점.svg';
import Coin from '../../assets/img/코인.svg';
import 다음버튼 from '../../assets/img/다음버튼.svg';
import SingleStamp0 from '../../assets/img/SingleStamp0.svg';
import SingleStamp1 from '../../assets/img/SingleStamp1.svg';
import MultiStamp0 from '../../assets/img/MultiStamp0.svg';
import MultiStamp1 from '../../assets/img/MultiStamp1.svg';
import MultiStamp2 from '../../assets/img/MultiStamp2.svg';
import MultiStamp3 from '../../assets/img/MultiStamp3.svg';
import MultiStamp4 from '../../assets/img/MultiStamp4.svg';
import MultiStamp5 from '../../assets/img/MultiStamp5.svg';
import WhiteCoin from '../../assets/img/WhiteCoin.svg';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


//미션 데이터
const dummyMission = [
  {missionID: 1, missionName: "출석 체크", totalSteps: 1, isEveryday: true, description: "오늘의 로그인 코인을 획득하세요.", price: 5, completedSteps: 0, isCompleted: false},
  {missionID: 2, missionName: "기본은 인사부터!", totalSteps: 5, isEveryday: true, description: "친구의 우편함에 방문해 편지를 작성하세요.", price: 5, completedSteps: 1, isCompleted: false},
  {missionID: 3, missionName: "고민 해결!", totalSteps: 5, isEveryday: true, description: "낭만 우편함에서 답장을 적어주세요.", price: 5, completedSteps:2, isCompleted: false},
  {missionID: 4, missionName: "친구를 찾아보자", totalSteps: 1, isEveryday: false, description: "친구를 1명 이상 추가해보세요.", price: 5, completedSteps: 1, isCompleted: true},
  {missionID: 5, missionName: "행복한 순간을 기록하자", totalSteps: 5, isEveryday: false, description: "느린 우편함에서 나를 위한 편지를 적어보세요.", price: 5, completedSteps: 3, isCompleted: false},
  {missionID: 6, missionName: "상점 첫구매 이벤트!", totalSteps: 1, isEveryday: false, description: "상점에서 무엇이든 구매하세요.", price: 5, completedSteps: 0, isCompleted: false},
  {missionID: 7, missionName: "내가 만든 편지지", totalSteps: 5, isEveryday: false, description: "마이디자인에서 편지지를 등록해보세요.", price: 5, completedSteps: 4, isCompleted: false},
  {missionID: 8, missionName: "나만의 우표", totalSteps: 5, isEveryday: false, description: "마이디자인에서 우표를 등록해보세요.", price: 5, completedSteps: 5, isCompleted: true},
  {missionID: 9, missionName: "고민이 생겼다면?", totalSteps: 5, isEveryday: false, description: "낭만 우편함에서 편지를 작성하세요.", price: 5, completedSteps: 0, isCompleted: false},
  {missionID: 10, missionName: "도전! 친구찾기", totalSteps: 5, isEveryday: false, description: "친구를 찾아 주소록을 채워보세요.", price: 5, completedSteps: 0, isCompleted: false},
  {missionID: 11, missionName: "코인 쓰고 코인 받자", totalSteps: 5, isEveryday: false, description: "상점에서 무엇이든 구매하세요.", price: 5, completedSteps: 0, isCompleted: false},
  {missionID: 12, missionName: "내 우편함을 소개합니다", totalSteps: 1, isEveryday: false, description: "내 우편함 링크를 공유해보세요.", price: 5, completedSteps: 0, isCompleted: false},
];

//미션 제목
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

//탭 내용 컨테이너
const TabContentContainer = styled.div`
  width: 1194px;
  height: 1526px;
  position: absolute;
  left: 363px;
  top: 320px;
`;

//미션 내용
const MissionContainer = styled.div`
  width: 1194px;
  height: 1200px;
  position: relative;
`;

const MissionBox = styled.div`
  width: 1194px;
  height: 255px;
  position: absolute;
`;

const MissionInnerBox = styled.div`
  width: 378px;
  height: 255px;
  position: absolute;
`;

const MissionBackground = styled.div`
  width: 378px;
  height: 255px;
  left: 0;
  top: 0;
  position: absolute;
  background: #F6ECCF;
  cursor: pointer;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15); 
  border-radius: 10px;
  backface-visibility: hidden;
  cursor: pointer;
  z-index: 2;
`;

const MissionText = styled.div`
  width: 100%
  height: 100%;
  color: black;
  font-size: 30px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 30px; 
  position: relative;
  display: flex;
  justify-content: center;
  top: 30px;
`;

const SingleStampImg = styled.img`
  width: 120px;
  height: 120px;
  left: 129px;
  top: 105px;
  position: absolute;
`;

const MultiStampImg= styled.img`
  width: 275px;
  height: 142px;
  left: 52px;
  top: 83px;
  position: absolute;
`;

const EverydayContainer = styled.div`
  width: 34px;
  height: 14px;
  padding: 5px 7px; 
  background: #C3E0F5;
  border-radius: 10px;
  position: absolute;
  left: 320px;
  top: 10px;
`;

const EverydayText = styled.div`
  color: black;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 14px; 
  word-wrap: break-word;
`;

//미션 상세 페이지
const MissionFlipContainer = styled.div`
  width: 378px;
  height: 255px;
  position: absolute;
  display: flex;
  justify-content: center;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  cursor: pointer;
  z-index: 3;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const DetailBackground = styled.div`
  width: 316px;
  height: 195px;
  left: 0;
  top: 0;
  position: absolute;
  border-radius: 10px;
  padding: 30px 31px;
  background: #4F4A48;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  flex-direction: column;
  display: flex;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  z-index: 1;
`;

const MissionDetailText = styled.div`
  width: 100%;
  color: white;
  font-size: 30px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 42px;
  word-wrap: break-word;
`;

const DetailPriceContainer = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start; 
  gap: 8px;
  display: inline-flex;
  position: absolute;
  bottom: 30px;
  right: 31px;
`;

const WhiteCoinImg = styled.img`
  width: 26.24px;
  height: 24px;
`;

const DetailPriceText = styled.div`
  color: white;
  font-size: 24px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 24px;
  word-wrap: break-word;
`;

//미션 완료시 뜨는 background
const CompletedBackground = styled.div`
  width: 249px;
  height: 128px;
  left: 0;
  top: 0;
  position: absolute;
  border-radius: 10px;
  padding: 30px 31px;
  background: #4F4A48;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  flex-direction: column;
  z-index: 1;
  backface-visibility: hidden;
  padding-top: 64px; 
  padding-bottom: 63px; 
  padding-left: 65px; 
  padding-right: 64px;
  justify-content: flex-start;
  align-items: center; 
  gap: 30px;
  display: inline-flex
`;

const CompletedPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
`;

const CompletedText = styled.div`
  color: white;
  font-size: 30px; 
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 42px; 
  word-wrap: break-word;
`;

const CompletedPriceText = styled.div`
  color: white;
  font-size: 40px; 
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 56px; 
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
  const itemsPerPage = 12; // 한 페이지에 표시할 아이템 개수
  const totalPages = Math.ceil(dummyMission.length / itemsPerPage); // 전체 페이지 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const startIndex = (currentPage - 1) * itemsPerPage; // 현재 페이지에서 첫 번째 아이템의 인덱스
  const endIndex = startIndex + itemsPerPage; // 현재 페이지에서 마지막 아이템의 인덱스
  const [clickedMissions, setClickedMissions] = useState({}); // 각 미션에 대한 개별적 클릭 관리
  const [missions, setMissions] = useState([]);
  const [missionDetail, setMissionDetail] = useState({});

  const handlePageChange = (page) => {
    setCurrentPage(page); // 페이지 변경
  };

  const handleNextPage = () => {
    const lastPage = totalPages; // 마지막 페이지 번호
    handlePageChange(lastPage); // 마지막 페이지로 이동
  };

  const handleFlipClick = (id) => {
    const mission = dummyMission.find(mission => mission.missionID === id);
    const isCompleted = (mission.totalSteps === 1 && mission.completedSteps === 1) || (mission.totalSteps === 5 && mission.completedSteps === 5);
    
    if (!isCompleted) return;
  
    setClickedMissions({
      ...clickedMissions,
      [id]: true
    });
  };

  const fetchMissions = async () => {
    const token = window.localStorage.getItem("token");

    try {
      const response = await axios.get(`https://dev.nangmancat.shop/missions/`, {
        headers: {
          //Authorization: `Bearer ${token}`
          Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g'
        },
        params: {
          page: currentPage - 1,
          pageSize: itemsPerPage,
          sort: 'latest'
        },
      });
  
      // API 응답에서 미션 목록을 가져와 상태에 저장합니다.
      setMissions(response.data.result);
    } catch (error) {
      console.error('Failed to fetch missions', error);
    }
  };

  useEffect(() => {
    fetchMissions();
  }, []);
  
  const fetchMissionDetail = async (missionId) => {
    const token = window.localStorage.getItem("token");

    try {
      const response = await axios.get(`https://dev.nangmancat.shop/missions/${missionId}`, {
        headers: {
          //Authorization: `Bearer ${token}`
          Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g'
        },
      });
  
      // API 응답에서 미션 상세 정보를 가져와서 상태에 저장합니다.
      setMissionDetail(response.data.result);
    } catch (error) {
      console.error('Failed to fetch mission detail', error);
    }
  };

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
        <Header />
        <StoreMainDiv>
        <StoreInnerDiv>
          <ItemDiv onClick={() => navigate('/CollectionBoxMain')}>
            <CollectionBoxImg src={수집함} alt='수집함' />
            <TextDiv>수집함</TextDiv>
          </ItemDiv>
          <ItemDiv onClick={() => navigate('/Store')}>
            <StoreImg src={상점} alt='상점' />
            <TextDiv>상점</TextDiv>
          </ItemDiv>
          <CoinDiv>
            <CoinImg src={Coin} alt='코인' />
            <CoinCountDiv>{coin}</CoinCountDiv>
          </CoinDiv>
        </StoreInnerDiv>
        <StoreTitleText>미션</StoreTitleText>
        <TitleDetailText>미션을 통해 코인을 얻을 수 있어요!</TitleDetailText>
      </StoreMainDiv>

      <TabContentContainer>
        <MissionContainer>
        {missions && missions.slice(startIndex, endIndex).map((mission, index) => {
          let StampComponent, stampImgSrc, stampImgAlt;
          const isCompleted = (mission.steps === 1 && mission.stepsCompleted === 1) || (mission.steps === 5 && mission.stepsCompleted === 5);
          const isClicked = clickedMissions[mission.missionID];

          if (mission.steps === 1) {
            StampComponent = SingleStampImg; // 도장이 하나만 찍히는 이미지 컴포넌트
            stampImgSrc = mission.stepsCompleted === 0 ? SingleStamp0 : SingleStamp1;
            stampImgAlt = "하나의 도장";
          } else if (mission.steps === 5) {
            StampComponent = MultiStampImg; // 도장이 최대 5개까지 찍히는 이미지 컴포넌트
            switch (mission.stepsCompleted) {
              case 0:
                stampImgSrc = MultiStamp0;
                break;
              case 1:
                stampImgSrc = MultiStamp1;
                break;
              case 2:
                stampImgSrc = MultiStamp2;
                break;
              case 3:
                stampImgSrc = MultiStamp3;
                break;
              case 4:
                stampImgSrc = MultiStamp4;
                break;
              case 5:
                stampImgSrc = MultiStamp5;
                break;
              default:
                stampImgSrc = MultiStamp0;
            }
            stampImgAlt = "최대 5개의 도장";
          }

            return (
              <MissionBox key={mission.missionId}>
                <MissionInnerBox style={{ top: `${Math.floor(index / 3) * 314}px`, left: `${(index % 3) * 408}px` }}>
                  {isCompleted && isClicked ? (
                    <CompletedBackground>
                      <CompletedText>코인을 획득했습니다!</CompletedText>
                      <CompletedPriceContainer>
                        <CompletedPriceText>+5</CompletedPriceText>
                        <WhiteCoinImg style={{width: 34.16, height: 31.5}}src={WhiteCoin} alt="WhiteCoin" />
                      </CompletedPriceContainer>
                    </CompletedBackground>
                  ) : (
                  <MissionFlipContainer 
                    onClick={() => handleFlipClick(mission.missionId)}
                    onMouseOver={() => fetchMissionDetail(mission.missionId)}
                  >
                    <MissionBackground>
                      <MissionText>
                        {mission.name}
                      </MissionText>
                      {mission.isEveryday && 
                        <EverydayContainer>
                          <EverydayText>매일+</EverydayText>
                        </EverydayContainer>
                      }
                      <StampComponent src={stampImgSrc} alt={stampImgAlt} />
                    </MissionBackground>
                    <DetailBackground>
                      <MissionDetailText>{missionDetail.content}</MissionDetailText>
                      <DetailPriceContainer>
                        <WhiteCoinImg src={WhiteCoin} alt='미션 상세정보에서의 코인이미지' />
                        <DetailPriceText>{missionDetail.coin}</DetailPriceText>
                      </DetailPriceContainer>
                    </DetailBackground>
                  </MissionFlipContainer>
                  )}
                </MissionInnerBox>
              </MissionBox>
            );
          })}
        </MissionContainer>
        
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
  )
}


