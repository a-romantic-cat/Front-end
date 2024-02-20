import React, { useState } from 'react';
import styled from 'styled-components';
import { GiCircle } from 'react-icons/gi';
import ShiningImage from '../../../assets/img/SS.svg';
import UnshiningImage from '../../../assets/img/S.svg';
import axios from 'axios';

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
  color: #79110E;
  font-weight: 500;
`;

const Message = styled.div`
  font-size: 22px;
  font-family: 'Pretendard';
  color: #000;
  font-weight: 400;
`;

const Number = styled.div`
  position: absolute;
  right: 0;
  font-size: 22px;
  font-family: 'Pretendard';
  color: #000;
`;

const CircleImg = styled(GiCircle)`
  width: 26px;
  height: 26px;
  color: #081A2F;
  margin-right: 12.5px;
  cursor: pointer;
`;

const StarImage = styled.img`
  position: absolute;
  width: 16.34px;
  height: 16.34px;
  left: 5px;
  cursor: pointer;
`;

const AddressList = ({ postInfo }) => {
  // const [isStarred, setIsStarred] = useState(false);
  const [isStarred, setIsStarred] = useState(postInfo.Status === "CLOSE_FRIEND");
  
  const handleStarClick = async () => {
    try {
      const apiUrl = `https://dev.nangmancat.shop/address-book/close-friend/register?friend_id=${postInfo.PostNum}`

      const response = await axios.post(apiUrl, null, {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g`
        }
      });


      if (response.data.isSuccess) {
        console.log("즐겨찾기 추가 업데이트 성공:", response.data.message);
        console.log(response.data);
        setIsStarred((prevIsStarred) => !prevIsStarred);
        
      } else {
        const errorCode = response.data.code;
        const errorMessage = response.data.message;

        // 에러 처리 로직 추가
        console.error("에러 발생:", errorCode, errorMessage);
      }
    } catch (error) {
      console.error("에러 발생:", error.message);
    }
  };

  const handleStarUnClick = async () => {
    try {
      const apiUrl = `https://dev.nangmancat.shop/address-book/close-friend/delete?friend_id=${postInfo.PostNum}`

      const response = await axios.post(apiUrl, null, {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g`
        }
      });


      if (response.data.isSuccess) {
        console.log("즐겨찾기 삭제 업데이트 성공:", response.data.message);
        console.log(response.data);
        setIsStarred((prevIsStarred) => !prevIsStarred);
        
      } else {
        const errorCode = response.data.code;
        const errorMessage = response.data.message;

        // 에러 처리 로직 추가
        console.error("에러 발생:", errorCode, errorMessage);
      }
    } catch (error) {
      console.error("에러 발생:", error.message);
    }
  };

  return (
    <ItemContainer>
      <Item>
      <CircleImg/>
        <StarImage
          src={isStarred ? ShiningImage : UnshiningImage}
          alt={isStarred ? "빛나는 별" : "별"}
          onClick={isStarred ? handleStarUnClick : handleStarClick}
        />
        <Name>{postInfo.NickName}</Name>
        <Message>님의 우편함</Message>
        <Number>#{postInfo.PostNum}</Number>
      </Item>
    </ItemContainer>
  );
};

export default AddressList;
