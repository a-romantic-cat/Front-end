import React from "react";
import styled from 'styled-components';
import QuestionCat from '../../../assets/img/QuestionCat.svg';

// 친구추가에서 친구를 검색할 때, 친구가 없다면... 고양이
const CatCon = styled.div`
  position: relative;
`;
const Cat = styled.img`
  position: absolute;
  top: 156px;
  right: 201px;
  width: 194px;
  height: 138px;
`;
const CatText = styled.div`
  font-size: 22px;
  font-family: 'Pretendard';
  position: absolute;
  top: 318px;
  right: 201px;
`;
const NothingFriend = () => {
  return (
    <div>
      <CatCon>
      <Cat src={QuestionCat} alt = 'Nothing Friends Cat'/>
      <CatText>
        친구를 찾을 수 없어요.
      </CatText>
      </CatCon>
    </div>
  );
};
 
export default NothingFriend;