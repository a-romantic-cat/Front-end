import React, {useState} from "react";
import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from "react-router-dom";
import PastLetterbox3 from './PastLetterbox3';

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 11px;
  display: inline-flex;
  margin-left: 363px;
  margin-top: 62px;
`;

const TextInnerContainer = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
`;

//닉네임
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

//님의 우편함
const Message = styled.div`
  color: black;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

//우편함 전체 모달창 감싸기
const WrapLetterContainer = styled.div`
  display: flex; //lettercontainer랑 xbutton가로배치
`;

//우편함 전체 모달창
const LetterContainer = styled.div`
  background-image: url("/images/red_letter.svg");
  background-size: cover;
  width: 1194px;
  height: 732px;
  margin-left: 363px;
  margin-top: 41px;
  margin-bottom: 97px; //Footer랑 간격
  display: flex; //left랑 right가로배치
  border-radius: 20px;
  position: relative; //x버튼과 겹치게
`;

const XButton = styled.div`
  position: absolute; //x버튼 겹치게
  left: 1532px;
  top: 226px;
  cursor: pointer;
`;

//스크롤 하는 영역
const ScrollContainer = styled.div`
  width: 528px;
  height: 669px;
  //height: 1080px;
  //height: 1500px;
  margin: 63px 0 0 0;
  overflow-y: scroll;
  overflow-x: clip; //오버플로 잘리고 나머지 콘텐츠 표시x

  &::-webkit-scrollbar { //스크롤바 전체
    width: 8px;
    height: 608px;
  }

  &::-webkit-scrollbar-thumb { //스크롤 움직이는 작은 막대
    background: #DCBC64;
    //height: 84.592px;
    height: 10%;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track { //스크롤바 배경색
    background: #B3B3B3;
    border-radius: 10px;
  }
`;

//핀들이랑 닉네임들 넓은 컨테이너
const PinsAndUsersContainer = styled.div`
  width: 444px;
  height: 1080px;
  margin: 0 88px 0 28px;
`;

//핀과 닉네임 한 줄 컨테이너
const PinAndUserContainer = styled.div`
  width: 444px;
  height: 50px;
  display: inline-flex; // 핀이랑 닉네임 가로배치
  margin-bottom: 40px;
`;

//노란 고정 핀
const YellowPin = styled.div`
  background-image: url("/images/옐로핀.svg");
  background-size: cover;
  width: 30px;
  height: 30px;
  margin: 10px 0 0 0;
  cursor: pointer;
`;

//투명 핀 (흰테두리)
const Pin = styled.div`
  background-image: url("/images/흰테두리핀.svg");
  background-size: cover;
  width: 30px;
  height: 30px;
  margin: 10px 0 0 0;
  cursor: pointer;
`;

//닉네임 적힌 모달창 여는 버튼 컨테이너
const WrapUserNickname = styled.div`
  display: flex;
  width: 400px;
  height: 50px;
  margin: 0 0 0 14px;
  align-items: flex-start;
  gap: 12px;
  border-radius: 45px;
  background: var(--Background-Ivory, #FFFEF8);
  cursor: pointer;
`;

const Envelope = styled.div`
  background-image: url("/images/envelope.svg");
  background-size: cover;
  width: 26px;
  height: 16px;
  margin: 16px 12px 16px 25px;
`;

const UserNickname = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 18px */
  margin: 16px 0 16px 0;
`;
 
const PastLetterbox2 = () => {

const navigate = useNavigate();

  const navigateToPastLetterbox1 = () => {
    navigate("/PastLetterbox1");
  };

  const [pin, setPin] = useState(false); //고정핀
  const handlePin = () => { 
    setPin(!pin);
  }

  const [pin2, setPin2] = useState(false); //고정핀
  const handlePin2 = () => { 
    setPin2(!pin2);
  }

  const [pin3, setPin3] = useState(false); //고정핀
  const handlePin3 = () => { 
    setPin3(!pin3);
  }

  const [pin4, setPin4] = useState(false); //고정핀
  const handlePin4 = () => { 
    setPin4(!pin4);
  }

  const [pin5, setPin5] = useState(false); //고정핀
  const handlePin5 = () => { 
    setPin5(!pin5);
  }

  const [pin6, setPin6] = useState(false); //고정핀
  const handlePin6 = () => { 
    setPin6(!pin6);
  }

  const [pin7, setPin7] = useState(false); //고정핀
  const handlePin7 = () => { 
    setPin7(!pin7);
  }

  const [pin8, setPin8] = useState(false); //고정핀
  const handlePin8 = () => { 
    setPin8(!pin8);
  }

  const [pin9, setPin9] = useState(false); //고정핀
  const handlePin9 = () => { 
    setPin9(!pin9);
  }

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  return (
    <div>
      <Header />

      <TextContainer>
        <TextInnerContainer>
          <Nickname>
            닉네임
          </Nickname>
          <Message>
            님의 우편함
          </Message>
        </TextInnerContainer>
      </TextContainer>

      <WrapLetterContainer>
        <LetterContainer>
          <ScrollContainer>
            <PinsAndUsersContainer>
              {/*1번째 */}
              <PinAndUserContainer>
                <div onClick={handlePin}> {/*고정핀 핸들*/}
                    {pin ? (
                    <YellowPin />
                  ) :
                  (
                    <Pin />
                  )}
                </div>
                <WrapUserNickname onClick={() => {setIsModalOpen(true)}}>
                  <Envelope>
                  </Envelope>
                  <UserNickname>
                    닉네임
                  </UserNickname>
                </WrapUserNickname>
              </PinAndUserContainer>
              
              {/*2번째 */}
              <PinAndUserContainer>
                <div onClick={handlePin2}>
                    {pin2 ? (
                    <YellowPin />
                  ) :
                  (
                    <Pin />
                  )}
                </div>
                <WrapUserNickname onClick={() => {setIsModalOpen(true)}}>
                  <Envelope>
                  </Envelope>
                  <UserNickname>
                    닉네임
                  </UserNickname>
                </WrapUserNickname>
              </PinAndUserContainer>

              {/*3번째 */}
              <PinAndUserContainer>
                <div onClick={handlePin3}>
                    {pin3 ? (
                    <YellowPin />
                  ) :
                  (
                    <Pin />
                  )}
                </div>
                <WrapUserNickname onClick={() => {setIsModalOpen(true)}}>
                  <Envelope>
                  </Envelope>
                  <UserNickname>
                    닉네임
                  </UserNickname>
                </WrapUserNickname>
              </PinAndUserContainer>

              {/*4번째 */}
              <PinAndUserContainer>
                <div onClick={handlePin4}>
                    {pin4 ? (
                    <YellowPin />
                  ) :
                  (
                    <Pin />
                  )}
                </div>
                <WrapUserNickname onClick={() => {setIsModalOpen(true)}}>
                  <Envelope>
                  </Envelope>
                  <UserNickname>
                    닉네임
                  </UserNickname>
                </WrapUserNickname>
              </PinAndUserContainer>

              {/*5번째 */}
              <PinAndUserContainer>
                <div onClick={handlePin5}>
                    {pin5 ? (
                    <YellowPin />
                  ) :
                  (
                    <Pin />
                  )}
                </div>
                <WrapUserNickname onClick={() => {setIsModalOpen(true)}}>
                  <Envelope>
                  </Envelope>
                  <UserNickname>
                    닉네임
                  </UserNickname>
                </WrapUserNickname>
              </PinAndUserContainer>

              {/*6번째 */}
              <PinAndUserContainer>
                <div onClick={handlePin6}>
                    {pin6 ? (
                    <YellowPin />
                  ) :
                  (
                    <Pin />
                  )}
                </div>
                <WrapUserNickname onClick={() => {setIsModalOpen(true)}}>
                  <Envelope>
                  </Envelope>
                  <UserNickname>
                    닉네임
                  </UserNickname>
                </WrapUserNickname>
              </PinAndUserContainer>

              {/*7번째 */}
              <PinAndUserContainer>
                <div onClick={handlePin7}>
                    {pin7 ? (
                    <YellowPin />
                  ) :
                  (
                    <Pin />
                  )}
                </div>
                <WrapUserNickname onClick={() => {setIsModalOpen(true)}}>
                  <Envelope>
                  </Envelope>
                  <UserNickname>
                    닉네임
                  </UserNickname>
                </WrapUserNickname>
              </PinAndUserContainer>

              {/*8번째 */}
              <PinAndUserContainer>
                <div onClick={handlePin8}>
                    {pin8 ? (
                    <YellowPin />
                  ) :
                  (
                    <Pin />
                  )}
                </div>
                <WrapUserNickname onClick={() => {setIsModalOpen(true)}}>
                  <Envelope>
                  </Envelope>
                  <UserNickname>
                    닉네임
                  </UserNickname>
                </WrapUserNickname>
              </PinAndUserContainer>

              {/*9번째 */}
              <PinAndUserContainer>
                <div onClick={handlePin9}>
                    {pin9 ? (
                    <YellowPin />
                  ) :
                  (
                    <Pin />
                  )}
                </div>
                <WrapUserNickname onClick={() => {setIsModalOpen(true)}}>
                  <Envelope>
                  </Envelope>
                  <UserNickname>
                    닉네임
                  </UserNickname>
                </WrapUserNickname>
              </PinAndUserContainer>

            </PinsAndUsersContainer>
          </ScrollContainer>

          <PastLetterbox3 isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </LetterContainer>

        <XButton onClick={navigateToPastLetterbox1}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z" fill="#C90000"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25 47.5C37.4264 47.5 47.5 37.4264 47.5 25C47.5 12.5736 37.4264 2.5 25 2.5C12.5736 2.5 2.5 12.5736 2.5 25C2.5 37.4264 12.5736 47.5 25 47.5ZM25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#C90000"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2322 13.2322C14.2085 12.2559 15.7915 12.2559 16.7678 13.2322L25 21.4645L33.2322 13.2322C34.2085 12.2559 35.7915 12.2559 36.7678 13.2322C37.7441 14.2085 37.7441 15.7915 36.7678 16.7678L28.5355 25L36.7678 33.2322C37.7441 34.2085 37.7441 35.7915 36.7678 36.7678C35.7915 37.7441 34.2085 37.7441 33.2322 36.7678L25 28.5355L16.7678 36.7678C15.7915 37.7441 14.2085 37.7441 13.2322 36.7678C12.2559 35.7915 12.2559 34.2085 13.2322 33.2322L21.4645 25L13.2322 16.7678C12.2559 15.7915 12.2559 14.2085 13.2322 13.2322Z" fill="white"/>
          </svg>
        </XButton>
      </WrapLetterContainer>
      
      <Footer />
    </div>
  );
    
};
 
export default PastLetterbox2;