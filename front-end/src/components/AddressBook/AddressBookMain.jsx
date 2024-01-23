import styled from 'styled-components';
import React, {useState}  from "react";
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
// 탭이 사다리꼴이라서, 좌우 border가 안들어가는 것같아서, 덮어씌워서 처리함...ㅠ
// 중복 코드라서 Common으로 빼려고 했지만, 위치값때문에 그냥 다 때려박았음.. 나중에 리팩토링할때 전체 코드 중복 따로 뺄게게유..
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
  // 주소록 더미 데이터
  const dummyAddress = [
    {id: 1, NickName: "지우", PostNum: "#1234"},
    {id: 2, NickName: "지지우", PostNum: "#4321"},
    {id: 3, NickName: "지지지우", PostNum: "#5678"},
    {id: 4, NickName: "지지지지지우", PostNum: "#9101"},
    {id: 5, NickName: "지우우우우우우우우", PostNum: "#5678"},
    {id: 6, NickName: "지우우", PostNum: "#1010"},

    {id: 7, NickName: "우지", PostNum: "#1234"},
    {id: 8, NickName: "우우지", PostNum: "#4321"},
    {id: 9, NickName: "우우우지", PostNum: "#5678"},
    {id: 10, NickName: "우우우웅지", PostNum: "#9101"},
    {id: 11, NickName: "재민재민", PostNum: "#5678"},
    {id: 12, NickName: "재재민", PostNum: "#1010"},

    {id: 13, NickName: "재미미미", PostNum: "#1"},
    {id: 14, NickName: "지지우", PostNum: "#2"},
    {id: 15, NickName: "지지지우", PostNum: "#3"},
    {id: 16, NickName: "지지지지지우", PostNum: "#4"},
    {id: 17, NickName: "지우우우우우우우우", PostNum: "#5"},
    {id: 18, NickName: "지우우", PostNum: "#6"},
    
    {id: 19, NickName: "재미미미", PostNum: "#7"},
    {id: 20, NickName: "지지우", PostNum: "#8"},
    {id: 21, NickName: "지지지우", PostNum: "#9"}
  ];
  // 친한친구 더미데이터
  const dummyFriend = [
    {id: 1, NickName: "지우", PostNum: "#1234"},
    {id: 2, NickName: "지지우", PostNum: "#4321"},
    {id: 3, NickName: "지지지우", PostNum: "#5678"},
    {id: 4, NickName: "지지지지지우", PostNum: "#9101"},
    {id: 5, NickName: "지우우우우우우우우", PostNum: "#5678"},
    {id: 6, NickName: "지우우", PostNum: "#1010"},

    {id: 7, NickName: "우지", PostNum: "#1234"},
    {id: 8, NickName: "우우지", PostNum: "#4321"},
    {id: 9, NickName: "우우우지", PostNum: "#5678"},
  ];
  // 친구추가, 보낸 요청 및 받은 요청 더미데이터
  const dummyRequestFriend = [
    {id: 1, NickName: "지우", PostNum: "#1234"},
    {id: 2, NickName: "지지우", PostNum: "#4321"},
    {id: 3, NickName: "지지지우", PostNum: "#5678"},
    {id: 4, NickName: "지지지지지우", PostNum: "#9101"},
    {id: 5, NickName: "지우우우우우우우우", PostNum: "#5678"},
    {id: 6, NickName: "지우우", PostNum: "#1010"},

    {id: 7, NickName: "우지", PostNum: "#1234"},
    {id: 8, NickName: "우우지", PostNum: "#4321"},
    {id: 9, NickName: "우우우지", PostNum: "#5678"},
    {id: 10, NickName: "우우우웅지", PostNum: "#9101"},
    {id: 11, NickName: "재민재민", PostNum: "#5678"},
    {id: 12, NickName: "재재민", PostNum: "#1010"},

    {id: 13, NickName: "재미미미", PostNum: "#1"},
    {id: 14, NickName: "지지우", PostNum: "#2"},
    {id: 15, NickName: "지지지우", PostNum: "#3"},
    {id: 16, NickName: "지지지지지우", PostNum: "#4"},
    {id: 17, NickName: "지우우우우우우우우", PostNum: "#5"},
    {id: 18, NickName: "지우우", PostNum: "#6"},
    
    {id: 19, NickName: "재미미미", PostNum: "#7"},
    {id: 20, NickName: "지지우", PostNum: "#8"},
    {id: 21, NickName: "지지지우", PostNum: "#9"}, 
    {id: 22, NickName: "우지", PostNum: "#1234"},
    {id: 23, NickName: "우우지", PostNum: "#4321"},
    {id: 24, NickName: "우우우지", PostNum: "#5678"},
    {id: 25, NickName: "우우우웅지", PostNum: "#9101"},
    {id: 26, NickName: "재민재민", PostNum: "#5678"},
    {id: 27, NickName: "재재민", PostNum: "#1010"},

    {id: 28, NickName: "재미미미", PostNum: "#1"},
    {id: 29, NickName: "지지우", PostNum: "#2"},
    {id: 30, NickName: "지지지우", PostNum: "#3"},
    {id: 31, NickName: "지지지지지우", PostNum: "#4"},
    {id: 32, NickName: "지우우우우우우우우", PostNum: "#5"},
    {id: 33, NickName: "지우우", PostNum: "#6"},
    
    {id: 34, NickName: "재미미미", PostNum: "#7"},
    {id: 36, NickName: "지지우", PostNum: "#8"},
    {id: 35, NickName: "지지지우", PostNum: "#9"}
  ];
  // 친구추가, 검색 더미데이터
  const dummyPlusFriend = [
    {id: 999, NickName: "지승도", PostNum: "#999"},
    {id: 990, NickName: "최재민", PostNum: "#990"}
  ];
  const [activeTab, setActiveTab] = useState('Address'); // 기본

  const handleTabClick = (tab) => {
    // if (activeTab === tab) {
    //   // 만약 현재 탭이 이미 활성화된 탭이면 페이지를 새로고침할 뻔
    //   window.location.reload(); 
    // } else {
      setActiveTab(tab);
    
  };

  return (
    <div>
        <Header/>
        <Tap>
          <AddressOverLap/>
          <AddressOut isActive={activeTab === 'Address'} onClick={() => handleTabClick('Address')}>
             주소록
          </AddressOut>
          <FriendsOverLap/>
          <FriendsOut isActive={activeTab === 'Friends'} onClick={() => handleTabClick('Friends')}>
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
            dummyAddress = {dummyAddress}
            />
          )}
          {activeTab === 'Friends' && (
            <Friends 
            dummyFriend = {dummyFriend}
            />
          )}
          {activeTab === 'PlusFriends' && (
            <PlusFriends
            dummyRequestFriend = {dummyRequestFriend}
            dummyPlusFriend = {dummyPlusFriend}
            />
          )}
          </InnerContainer>
        </Container>
    </div>
  )
}
