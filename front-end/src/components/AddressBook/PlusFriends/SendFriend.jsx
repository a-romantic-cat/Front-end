import React from "react";
import styled from 'styled-components';
import RequestSendFriend from '../../../assets/img/보낸요청.svg';
import Reject from '../../../assets/img/Reject.svg';

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
  
`;
const SendFriend = ({send}) => {
  return (
    <div>
      <ListCon>
        <Request src={RequestSendFriend} alt = "보낸 요청"/>
        <NickNamePostNumber>
          {console.log(send.NickName+'+'+send.PostNum)}
          {send.NickName}{send.PostNum}
        </NickNamePostNumber>
        <XBox src = {Reject} alt = "엑스" />
      </ListCon>
      
    </div>
  );
};
 
export default SendFriend;