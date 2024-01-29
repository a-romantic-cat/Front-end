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
// 우편함 이름
const Name = styled.div`
font-size: 22px;
font-family: 'Pretendard';
color:#79110E;
font-weight: 500;
`;
// 님의 우편함
const Message = styled.div`
font-size: 22px;
font-family: 'Pretendard';
color:#000;
font-weight: 400;
`;
// 우편번호
const Number = styled.div`
  position: absolute;
  right: 0;
  font-size: 22px;
  font-family: 'Pretendard';
  color:#000;
`;
// 즐겨찾기 이미지
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
  color: #000;
  // color: ${({ isStarred }) => (isStarred ? '#FFD700' : '#000')};
  transition: color 0.3s ease; /* Optional: Add a smooth transition effect */
`;

const AddressList = ({ postInfo }) => {
  // 즐겨찾기?인데 추후 서버랑 연동되고 Boolean값을 넣어서 작동하는 것을 봐야 주소록에서 눌렀을 때, 친한친구 데이터로 빠지는 걸 볼 수 있을 것 같음
  // const [isStarred, setIsStarred] = useState(false);

  // const handleStarClick = () => {
  //   setIsStarred((prevIsStarred) => !prevIsStarred);
  // };

  return (

    <div>
      <ItemContainer>
        <Item>
          <CircleImg />
          {/* isStarred={isStarred} onClick={handleStarClick}  */}
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

export default AddressList;