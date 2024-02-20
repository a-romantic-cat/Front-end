import styled from 'styled-components';
import React, {useState, useEffect}  from "react";
import axios from 'axios';
import Header from '../Header/Header';
import AddressInfo from './Address/Address';
import Friends from './Friends/Friends';
import PlusFriends from './PlusFriends/PlusFriends';

const Tap = styled.div`
  box-sizing: border-box;
  width: 1194px;
  display: flex;
  position: relative;
  left: 363px;
  top: 62px;
`;
const AddressOverLap = styled.div `
  position: absolute;
  left: -.5px;
  width: 183px; 
  height: 62px;
  clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%); 
  background-color: #79110E;
`
// 주소록 탭
const AddressOut = styled.div` 
  position: relative;
  box-sizing: border-box;
  width: 182px;
  height: 62px;
  clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%);
  display: flex;
  border: .5px solid #79110E;
  background-color: #D5C9BD;
  background-color: ${({ isActive }) => (isActive ? '#D2AF4E' : '#D5C9BD')};
  align-items: center;
  justify-content: center;
  transition: .5s;
  cursor: pointer;

  font-family: 'Pretendard';
  color: #79110E;
  font-weight: 500;
  font-size: 24px;
  user-select: none;
`;

const FriendsOverLap = styled.div`
  position: absolute;
  left: 181.5px;
  box-sizing: border-box;
  width: 183px; 
  height: 62px;
  clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%); 
  background-color: #79110E;
`
// 친한 친구 탭
const FriendsOut = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 182px;
  height: 62px;
  clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%);
  display: flex;
  border: .5px solid #79110E;
  background-color: #D5C9BD;
  background-color: ${({ isActive }) => (isActive ? '#D2AF4E' : '#D5C9BD')};
  align-items: center;
  justify-content: center;
  transition: .5s;
  cursor: pointer;
  font-family: 'Pretendard';
  color: #79110E;
  font-weight: 500;
  font-size: 24px;
  user-select: none;
`;

const PlusFriendsOverLap = styled.div`
  position: absolute;
  right: -.5px;
  box-sizing: border-box;
  width: 183px; 
  height: 62px;
  clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%); 
  background-color: #79110E;
`;
// 친구추가 탭
const PlusFriendsOut = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 182px;
  height: 62px;
  clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%);
  display: flex;
  border: .5px solid #79110E;
  background-color: #D5C9BD;
  background-color: ${({ isActive }) => (isActive ? '#D2AF4E' : '#D5C9BD')};
  align-items: center;
  justify-content: center;
  margin-left: auto;
  transition: .5s;
  cursor: pointer;
  font-family: 'Pretendard';
  color: #79110E;
  font-weight: 500;
  font-size: 24px;
  user-select: none;
`;
const Container = styled.div`
  position: relative;
  left: 363px;
  top: 62px;
  width: 1194px;
  height: 788px;
  background-color: #D5C9BD;
  display: flex;
  justify-content: center;
`;
const InnerContainer = styled.div`
  position: absolute;
  top: 35px;
  width: 1079px;
  height: 693px;
`;

export default function AddressBookMain() {

  // 친구추가, 검색 더미데이터
  const dummyPlusFriend = [
    {id: 999, NickName: "지승도", PostNum: "#999"},
    {id: 990, NickName: "최재민", PostNum: "#990"}
  ];


  const [activeTab, setActiveTab] = useState('Address'); // 기본

  const handleTabClick = (tab) => {
      setActiveTab(tab);
  };
  const [Address, setAddress] = useState([]);
  const [Receive, setReceive] = useState([]);
  const [Request, setRequest] = useState([]);
  const [Friendss, setFriends] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const BaseURL = "https://dev.nangmancat.shop";
  // const token = window.localStorage.getItem("token");
  // 주소록 친구 목록 
  useEffect(() => {
    const getAddress = async () => {
      try {
        const response = await axios.get(BaseURL + `/address-book/?page=${currentPage}`, {
          headers: {
            // Authorization: `Bearer ${token}`
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g`
          }
        });
    
        console.log(response.data.result);
    
        if (response.data.isSuccess) {
          // 통신 성공 시 새로운 응답 구조로 데이터를 설정합니다.
          setAddress(response.data.result.map(item => ({
            NickName: item.friendName,
            PostNum: item.friendId,
            Status: item.friendStatus
          })));
        } else {
          // 통신 실패 시 에러 처리
          const errorCode = response.data.code;
          const errorMessage = response.data.message;
    
          if (errorCode === "401") {
            console.error("Unauthorized 에러:", errorMessage);
          } else if (errorCode === "403") {
            console.error("Forbidden 에러:", errorMessage);
          } else if (errorCode === "404") {
            console.error("Not Found 에러:", errorMessage);
          } else {
            console.error("기타 에러:", errorMessage);
          }
        }
      } catch (error) {
        console.error("에러 발생:", error.message);
      }
    };    
  
    getAddress();
  }, [currentPage]);
  
  // 친한 친구 목록
  useEffect(() => {
    const getFriends = async () => {
      try {
        const response = await axios.get(BaseURL + `/address-book/close-friends?page=${currentPage}`, {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g`
          }
        });
    
        console.log(response.data.result);
    
        if (response.data.isSuccess) {
          // 통신 성공 시 새로운 응답 구조로 데이터를 설정합니다.
          setFriends(response.data.result.map(item => ({
            NickName: item.friendName,
            PostNum: item.friendId,
            Status: item.friendStatus
          })));
        } else {
          // 통신 실패 시 에러 처리
          const errorCode = response.data.code;
          const errorMessage = response.data.message;
    
          if (errorCode === "401") {
            console.error("Unauthorized 에러:", errorMessage);
          } else if (errorCode === "403") {
            console.error("Forbidden 에러:", errorMessage);
          } else if (errorCode === "404") {
            console.error("Not Found 에러:", errorMessage);
          } else {
            console.error("기타 에러:", errorMessage);
          }
        }
      } catch (error) {
        console.error("에러 발생:", error.message);
      }
    };    
  
    getFriends();
  }, [currentPage]);

  // 받은 요청
  useEffect(() => {
    const getReceive = async () => {
      try {
        const response = await axios.get(BaseURL + `/address-book/recieved`, {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g`
          }
        });
    
        console.log(response.data.result);
    
        if (response.data.isSuccess) {
          // 통신 성공 시 새로운 응답 구조로 데이터를 설정합니다.
          setReceive(response.data.result.map(item => ({
            NickName: item.friendName,
            PostNum: item.friendId
          })));
        } else {
          // 통신 실패 시 에러 처리
          const errorCode = response.data.code;
          const errorMessage = response.data.message;
    
          if (errorCode === "401") {
            console.error("Unauthorized 에러:", errorMessage);
          } else if (errorCode === "403") {
            console.error("Forbidden 에러:", errorMessage);
          } else if (errorCode === "404") {
            console.error("Not Found 에러:", errorMessage);
          } else {
            console.error("기타 에러:", errorMessage);
          }
        }
      } catch (error) {
        console.error("에러 발생:", error.message);
      }
    };    
  
    getReceive();
  }, []);

  // 보낸 요청
useEffect(() => {
  const getRequest = async () => {
    try {
      const response = await axios.get(BaseURL + `/address-book/requested`, {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g`
        }
      });
  
      console.log(response.data.result);
  
      if (response.data.isSuccess) {
        // 통신 성공 시 새로운 응답 구조로 데이터를 설정합니다.
        setRequest(response.data.result.map(item => ({
          NickName: item.friendName,
          PostNum: item.friendId
        })));
      } else {
        // 통신 실패 시 에러 처리
        const errorCode = response.data.code;
        const errorMessage = response.data.message;
  
        if (errorCode === "401") {
          console.error("Unauthorized 에러:", errorMessage);
        } else if (errorCode === "403") {
          console.error("Forbidden 에러:", errorMessage);
        } else if (errorCode === "404") {
          console.error("Not Found 에러:", errorMessage);
        } else {
          console.error("기타 에러:", errorMessage);
        }
      }
    } catch (error) {
      console.error("에러 발생:", error.message);
    }
  };    

  getRequest();
}, []);

 // 친구추가에서 사용자 아이디(우편번호)를 통한 사용자 검색 API


  return (
    <div>
        <Header/>
        <Tap>
          <AddressOverLap/>
          <AddressOut
          isActive={activeTab === 'Address'}
          onClick={() => {
            handleTabClick('Address');
            setCurrentPage(0); // 탭누르면 다시 초기화
          }}
        >
          주소록
        </AddressOut>

          <FriendsOverLap/>
          <FriendsOut isActive={activeTab === 'Friends'} onClick={() => {handleTabClick('Friends')
          setCurrentPage(0);
        }}>
              친한친구
          </FriendsOut>
          <PlusFriendsOverLap/>
          <PlusFriendsOut isActive={activeTab === 'PlusFriends'} onClick={() => handleTabClick('PlusFriends')}>
              친구추가
          </PlusFriendsOut>
        </Tap>

        <Container>
          <InnerContainer>
          {activeTab === 'Address' && (
            <AddressInfo
            Address = {Address}
            crp = {currentPage}
            />
          )}
          {activeTab === 'Friends' && (
            <Friends 
            Friendss = {Friendss}
            />
          )}
          {activeTab === 'PlusFriends' && (
            <PlusFriends
            Request = {Request}
            receive = {Receive}
            dummyPlusFriend = {dummyPlusFriend}
            />
          )}
          </InnerContainer>
        </Container>
         
        
    </div>
  )
}
