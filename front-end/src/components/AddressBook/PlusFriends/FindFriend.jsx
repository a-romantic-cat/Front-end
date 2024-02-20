import React, {useState} from "react";
import styled from 'styled-components';
import SoleOfCat from '../../../assets/img/Sole.svg';
import AddFriend from '../../../assets/img/친구추가.svg'; 
import CompleteFriend from '../../../assets/img/친구추가완료.svg';

const FindFriendCon = styled.div`
  width: 522px;
  height: 30px;
  positon: relative;
`;
// 고양이 발자국
const Sole = styled.img`
  width: 25px;
  height: 22px;
  position: absolute;
  left: 43px;
  top: 65px;
`;

const FriendPost = styled.div`
  position: absolute; 
  top: 65px;
  left : 75.5px;
  font-size: 22px;
  font-family: 'Pretendard';
`;
const Btn = styled.button`
  position: absolute;
  right: 30px;
  top: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #000;
  cursor: pointer;
  background-color: #FFF;
`
const Text = styled.div`
  font-size: 16px;
  font-family: 'Pretendard';
  
`;
const Add = styled.img`
  width: 19px;
  height: 19px;
  margin-right: 9px;
`;

const FindFriend = ({searchResult}) => {
  const [friendRequestSent, setFriendRequestSent] = useState(false);
  // 친구 요청 보내기 누르면 -> 친구 요청 완료로 변경 및 이미지 변경
  const handleBtnClick = () => {
    setFriendRequestSent(!friendRequestSent);
  };

  return (
    <div>
      <FindFriendCon>
        <Sole src={SoleOfCat} alt='고양이발바닥' />
        <FriendPost>
          {searchResult.NickName}{searchResult.PostNum}
        </FriendPost>
        <Btn onClick={handleBtnClick}>
          <Add src={friendRequestSent ? CompleteFriend : AddFriend} alt='친구 요청 보내기' />
          <Text>{friendRequestSent ? '친구 요청 완료' : '친구 요청 보내기'}</Text>
        </Btn>
      </FindFriendCon>


    </div>
  );
};
 
export default FindFriend;