import React from "react";
import styled from 'styled-components';
import RequestReceiveFriend from '../../../assets/img/받은요청.svg';
import Reject from '../../../assets/img/Reject.svg';
import Accept from '../../../assets/img/Accept.svg';

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
  right: 44px;
  width: 22px;
  height: 22px;
  
`;
const OBox = styled.img`
  position: absolute;
  width: 22px;
  height: 22px;
  right: 14px;
`;
const ReceiveFriend = ({receive}) => {
  return (
    <div>
      <ListCon>
        <Request src={RequestReceiveFriend} alt = "받은 요청"/>
        <NickNamePostNumber>
          {console.log(receive.NickName+'+'+receive.PostNum)}
          {receive.NickName}{receive.PostNum}
        </NickNamePostNumber>
        <OBox src = {Accept} alt = "오" />
        <XBox src = {Reject} alt = "엑스" />
      </ListCon>

    </div>
  );
};
export default ReceiveFriend;