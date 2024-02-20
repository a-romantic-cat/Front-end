import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import NothingFriend from "./NothingFriend";
import FindFriend from './FindFriend';
import SendFriend from "./SendFriend";
import ReceiveFriend from "./ReceiveFriend";
import axios from 'axios';

const Container = styled.div`
  width: 1078px;
  height: 668px;
  display: flex;
`;

const SearchCon = styled.div`
  position: relative;
  width: 595px;
  height: 668px;
  background-color: #F5F3E9;
  border-radius: 10px 0 0 10px;
`;

const SearchInput = styled.input`
  position: absolute;
  left: 44px;
  top: 34px;
  border-radius: 30px;
  border: 1.5px solid #000;
  box-sizing: border-box;
  width: 378px;
  height: 54px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  outline: none;
  padding: 18px 25px;
  padding-right: 40px;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
  color: #000;
  ::placeholder {
    color: #757575;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 52px;
  right: 198px;
  font-size: 18px;
  color: #000;
  border: none;
  background: none;
  cursor: pointer;
`;

const FormCon = styled.div``;

const ListCon = styled.div`
  position: absolute;
  top: 87px;
  width: 595px;
  height: 580px;
`;

const RequestCon = styled.div`
  position: relative;
  width: 483px;
  height: 668px;
  background-color: #D5C9BD;
  border-radius: 0 10px 10px 0;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25), 2px -3px 4px rgba(0, 0, 0, 0.15);
  font-size: 18px;
  font-family: 'Pretendard';
`;

const RequestCheck = styled.div`
  display: flex;
  position: absolute;
  top: 59px;
  left: 30px;
  position: absolute;
  width: 364px;
  height: 29px;
  border-bottom: 1.5px solid #000;
`;

const Send = styled.div``;

const SendCon = styled.div`
  box-sizing: border-box;
  margin-right: 32px;
  height: 31px;
  width: 70px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? '#79110E' : '#000')};
  border-bottom: ${({ isActive }) => (isActive ? '3px solid #79110E' : 'none')};
  font-weight: ${({ isActive }) => (isActive ? '500' : '400')};
`;

const Receive = styled.div``;

const ReceiveCon = styled.div`
  box-sizing: border-box;
  margin-right: 32px;
  height: 31px;
  width: 70px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? '#79110E' : '#000')};
  border-bottom: ${({ isActive }) => (isActive ? '3px solid #79110E' : 'none')};
  font-weight: ${({ isActive }) => (isActive ? '500' : '400')};
`;

const RequestList = styled.div`
  position: absolute;
  top: 133px;
  width: 443px;
  height: 535px;
  box-sizing: border-box;
  overflow: auto;

  scrollbar-color: #79110E #B3B3B3;
  scrollbar-width: 8px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #79110E;
    border-radius: 45px;
  }

  &::-webkit-scrollbar-track {
    background-color: #B3B3B3;
    border-radius: 45px;
    margin-bottom: 75px;
  }
}`;

const PlusFriends = ({ Request, receive, dummyPlusFriend }) => {
  const [activeRequest, setActiveRequest] = useState('보낸 요청');
 
  const [NameOrPostNum, setNameOrPostNum] = useState("");
  const [showFindContent, setShowFindContent] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
 const BaseURL = "https://dev.nangmancat.shop";

 const handleSubmit = (e) => {
  // preventDefault로 검색했을 때, 새로고침 방지
  e.preventDefault();
  if (NameOrPostNum !== "") {
    const result = dummyPlusFriend.find(item =>
      item.NickName === NameOrPostNum || item.PostNum === NameOrPostNum
    );
    setSearchResult(result);
    setShowFindContent(!!result);
  } else {
    // 검색을 아무것도 안 했을 때, 안 보여줘도 됨.
    setShowFindContent(null);
    setSearchResult(null);
  }
};

  const handleFInd = (e) => {
    setNameOrPostNum(String(e.target.value));
  };

  return (
    <div>
      <Container>
        <SearchCon>
          <FormCon>
            <form onSubmit={handleSubmit}>
              <SearchInput
                value={NameOrPostNum}
                type="text"
                placeholder="닉네임 또는 #우편번호로 검색"
                onChange={handleFInd}
              />
              <SearchButton type='submit'>
                <IoSearch />
              </SearchButton>
            </form>
            <ListCon>
              {showFindContent === true ? (
                <FindFriend searchResult={searchResult} />
              ) : showFindContent === false ? (
                <NothingFriend />
              ) : null}
            </ListCon>
          </FormCon>
        </SearchCon>
        <RequestCon>
          <RequestCheck>
            <SendCon isActive={activeRequest === '보낸 요청'} onClick={() => setActiveRequest('보낸 요청')}>
              <Send>
                보낸 요청
              </Send>
            </SendCon>

            <ReceiveCon isActive={activeRequest === '받은 요청'} onClick={() => setActiveRequest('받은 요청')}>
              <Receive>
                받은 요청
              </Receive>
            </ReceiveCon>
          </RequestCheck>
          <RequestList>
            {activeRequest === '보낸 요청' && (
              Request.map((send) => (
                <SendFriend
                  key={send.PostNum}
                  send={send} />
              ))
            )}
            {activeRequest === '받은 요청' && (
              receive.map((receive) => (
                <ReceiveFriend
                  key={receive.PostNum}
                  receive={receive} />
              ))
            )}
          </RequestList>
        </RequestCon>
      </Container>
    </div>
  );
};

export default PlusFriends;
