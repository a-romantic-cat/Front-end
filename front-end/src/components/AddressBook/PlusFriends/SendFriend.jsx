import React, {useState} from "react";
import styled from 'styled-components';
import RequestSendFriend from '../../../assets/img/보낸요청.svg';
import Reject from '../../../assets/img/Reject.svg';
import axios from 'axios';

// 보낸 요청 리스트
const ListCon = styled.div`
  position: relative;
  margin-left: 30px;
  margin-bottom: 36px;
  width: 378px;
  height: 46px; 
  background-color: #FFF;
  border-radius: 10px;
  display: flex;
  align-items: center; 
`;
const Request =styled.img`
  margin-left: 16px;
  margin-right: 11px;
  width: 18px;
  height: 18px;
`;
const NickNamePostNumber = styled.div`
  font-size: 16px;
`;

const XBox = styled.img`
  position: absolute;
  right: 14px;
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const SendFriend = ({send}) => {
  const [isRemoved, setIsRemoved] = useState(false);


  const handleRejectClick = async () => {
    try {
      const apiUrl = `https://dev.nangmancat.shop:443/address-book/request/reject?friend_id=${send.PostNum}`;
      const response = await axios.post(apiUrl, null, {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g`
        }
      });
  
      if (response.data.isSuccess) {
        console.log("보낸 친구 삭제 성공:", response.data.message);
        console.log(response.data);
        setIsRemoved(true);
      } else {
        const errorCode = response.data.code;
        const errorMessage = response.data.message;
        console.error("에러 발생:", errorCode, errorMessage);
      }
    } catch (error) {
      console.error("에러 발생:", error.message);
    }
  };
  if (isRemoved) {
    // 만약 항목이 제거된 경우, 렌더링을 방지하기 위해 null을 반환합니다.
    return null;
  }
  return (
    <div>
      <ListCon>
        <Request src={RequestSendFriend} alt = "보낸 요청"/>
        <NickNamePostNumber>
          {console.log(send.NickName+'+'+send.PostNum)}
          {send.NickName}+#{send.PostNum}
        </NickNamePostNumber>
        <XBox src = {Reject} alt = "엑스" 
        onClick={handleRejectClick}/>
      </ListCon>
      
    </div>
  );
};
 
export default SendFriend;