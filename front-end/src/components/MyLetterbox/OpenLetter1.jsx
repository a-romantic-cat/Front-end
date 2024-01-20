import React from "react";
import styled from 'styled-components';
import Header from '../Header/Header';
 
const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 11px;
  display: inline-flex;
  margin-left: 363px;
  margin-top: 62px;
`;

const InnerContainer = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
`;

const Nickname = styled.div`
  color: #79110E;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Message = styled.div`
  color: black;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

export default function OpenLetter1() {
  return (
    <div>
      <Header />
      <Container>
        <InnerContainer>
          <Nickname>
            <div>닉네임</div>
          </Nickname>
          <Message>님의 우편함</Message>
        </InnerContainer>
      </Container>
    </div>
  )
}
