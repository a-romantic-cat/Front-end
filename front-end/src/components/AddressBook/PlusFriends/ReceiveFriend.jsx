import React, {useState} from "react";
import styled from 'styled-components';
import RequestReceiveFriend from '../../../assets/img/받은요청.svg';
import Reject from '../../../assets/img/Reject.svg';
import Accept from '../../../assets/img/Accept.svg';
import axios from 'axios';

// 받은 요청 리스트
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
const Request = styled.img`
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
  right: 44px;
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const OBox = styled.img`
  position: absolute;
  width: 22px;
  height: 22px;
  right: 14px;
  cursor: pointer;
`;

const ReceiveFriend = ({ receive }) => {
  const [isRemoved, setIsRemoved] = useState(false);
  const handleAcceptClick = async () => {
    try {
      const apiUrl = `https://dev.nangmancat.shop:443/address-book/request/approve?friend_id=${receive.PostNum}`;
      const response = await axios.post(apiUrl, null, {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g`
        }
      });

      if (response.data.isSuccess) {
        console.log("친구 추가 성공:", response.data.message);
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

  const handleRejectClick = async () => {
    try {
      const apiUrl = `https://dev.nangmancat.shop:443/address-book/request/reject?friend_id=${receive.PostNum}`;
      const response = await axios.post(apiUrl, null, {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g`
        }
      });

      if (response.data.isSuccess) {
        console.log("받은 친구 삭제 성공:", response.data.message);
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
        <Request src={RequestReceiveFriend} alt="받은 요청" />
        <NickNamePostNumber>
          {console.log(receive.NickName + '+' + receive.PostNum)}
          {receive.NickName}+#{receive.PostNum}
        </NickNamePostNumber>
        <OBox src={Accept} alt="오" onClick={handleAcceptClick} />
        <XBox src={Reject} alt="엑스" onClick={handleRejectClick}/>
      </ListCon>
    </div>
  );
};

export default ReceiveFriend;
