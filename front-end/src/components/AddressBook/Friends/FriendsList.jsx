import React, {useState} from 'react';
import styled from 'styled-components';
import { GiCircle } from 'react-icons/gi';
import ShiningImage from '../../../assets/img/SS.svg';
import UnshiningImage from '../../../assets/img/S.svg';

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

const StarImage = styled.img`
  position: absolute;
  width: 16.34px;
  height: 16.34px;
  left: 5px;
  cursor: pointer;
`;
const FriendsList = ({ postInfo }) => {
  const [isStarred, setIsStarred] = useState(false);

  const handleStarClick = () => {
    setIsStarred((prevIsStarred) => !prevIsStarred);
    
  };
  return (

    <div>
      <ItemContainer>
        <Item>
          <CircleImg />
          {isStarred ? (
            <StarImage src={UnshiningImage} alt="빛나는 별" onClick={handleStarClick} />
          ) : (
            <StarImage src={ShiningImage} alt="별" onClick={handleStarClick} />
          )}
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