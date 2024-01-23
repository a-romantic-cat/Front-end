import React from 'react';
import styled from 'styled-components';
import { GiCircle } from 'react-icons/gi';
import { CiStar } from 'react-icons/ci';

const ItemContainer = styled.div`
  display: flex;
`;
const Item = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 396px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 56px;
`;
const Name = styled.div`
  font-size: 22px;
  font-family: 'Pretendard';
  color:#79110E;
  font-weight: 500;
`;
const Message = styled.div`
  font-size: 22px;
  font-family: 'Pretendard';
  color:#000;
  font-weight: 400;
`;
const Number = styled.div`
  position: absolute;
  right: 0;
  font-size: 22px;
  font-family: 'Pretendard';
  color:#000;
`;
const CircleImg = styled(GiCircle)`
  width: 26px;
  height: 26px;
  color: #081A2F;
  margin-right: 12.5px;
`;

const StarImg = styled(CiStar)`
  position: absolute;
  left: 5px;
  cursor: pointer;
`;

const FriendsList = ({ postInfo }) => {
  return (

    <div>
      <ItemContainer>
        <Item>
          <CircleImg />
          <StarImg />
          <Name>
            {postInfo.NickName}
          </Name>
          <Message>님의 우편함</Message>
          <Number>
            {postInfo.PostNum}
          </Number>
        </Item>
      </ItemContainer>
    </div>
  );
};

export default FriendsList;