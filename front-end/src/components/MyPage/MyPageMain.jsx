import React, {useState} from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Logout from './Logout';

const Container = styled.div`
  margin-left: 465px;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 11px;
  display: inline-flex;
  margin-top: 65px;
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
  white-space: nowrap; //확대했을 때 줄바꿈 안 되게
`;

//님
const Message = styled.div`
  color: black;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

const AccountContainer = styled.div`
  width: 214px;
  height: 22px;
  margin: 15px 0 0 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const AccountLogo = styled.div`
  background-image: url("/images/googlelogo.svg");
  background-size: cover;
  width: 22px;
  height: 22px;
`;

// ~~ 계정으로 로그인
const AccountText = styled.div`
  width: 183px;
  color: #000;
  font-family: 'Pretendard';
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 22px */
`;

// 회색 줄
const GrayLine = styled.div`
  margin: 0 0 50px 0;
`;

// 내 정보, 개인정보 및 데이터
const BigText = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 24px */
  margin-bottom: 50px;
  white-space: nowrap; //확대했을 때 줄바꿈 안 되게
`;

// 닉네임, 이메일 컨테이너
const NickAndMailContainer = styled.div`
  width: 665px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px
`;

// 닉네임, 이메일
const NickAndMailText = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 18px */
`;

// 입력창이랑, 변경버튼
const ButtonContainer = styled.div`
  width: 665px;
  height: 45px;
  position: relative;
  display: flex;
  justify-content: space-between; //입력창이랑 변경버튼 가로배치
`;

// 흰 컨테이너
const InputContinaer = styled.div`
  width: 582px;
  height: 45px;
  border-radius: 12px;
  border: 1px solid #727272;
  background: #FFF;
`;

// 입력도는 부분
const Input = styled.textarea`
  width: 400px;
  height: 16px;
  margin-left: 25px;
  margin-top: 15px;
  border: none;
  background: #FFF;
  resize: none; // 사용자가 크기 조절 못하도록
  word-wrap: break-word;
  outline: none;

  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */

  &::placeholder{
    color: var(--Grey-Dark, #757575);
    font-family: 'Pretendard';
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 100%; /* 16px */
	}
`;

// (0/20)
const NumberCount = styled.div`
  color: var(--Grey-Dark, #757575);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  letter-spacing: -0.2px;
  position: absolute; //input이랑 겹치게
  top: 16px;
  right: 172px;
`;

// 중복확인버튼
const DoubleCheck = styled.div`
  display: flex;
  width: 62px;
  height: 22px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #000;
  background: #FFF;
  color: #000;
  font-family: 'Pretendard';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 12px */
  position: absolute; //input이랑 겹치게
  top: 12px;
  right: 98px;
  cursor: pointer;
`;

// 변경버튼
const ChangeButton = styled.div`
  display: flex;
  width: 65px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid var(--Grey-Dark, #757575);
  background: #FFF;
  color: var(--Grey-Dark, #757575);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 18px */
  cursor: pointer;
`;

// 우편 번호
const NumberText = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 18px */
  margin-bottom: 17px;
`;

// #3245
const Hashtag = styled.div`
  margin-bottom: 42px;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
`;

// 개인정보&이용약관, 자주묻는&낭만팀소개
const SmallTextContainer = styled.div`
  width: 154px;
  height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
`;

// 개인정보, 이용약관, 자주묻는, 낭만팀소개
const SmallText = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 18px */
  cursor: pointer;
`;

// 로그아웃
const LogoutButton = styled.div`
  width: 76px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #000;
  background: #FFF;
  color: #000;
  font-family: 'Pretendard';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  margin-bottom: 17px;
  cursor: pointer;
`;

// 회원 탈퇴
const Delete = styled.div`
  color: #6D6D6D;
  font-family: 'Pretendard';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 15px */
  text-decoration-line: underline;
  margin-bottom: 160px;
  white-space: nowrap; //확대했을 때 줄바꿈 안 되게
  cursor: pointer;
`;

export default function MyPageMain() {

  const navigate = useNavigate();

  const navigateToDelete = () => {
      navigate("/Delete");
  };

  const navigateToPrivacy = () => {
      navigate("/Privacy");
  };

  const navigateToUse = () => {
      navigate("/Use");
  };

  const [NickContent, setNickContent] = useState('');
  const handleNickChange = (event) => {
    const content = event.target.value;
    // 20자까지만 입력 받음
    if (content.length <= 20) {
      setNickContent(content);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  return (
    <div>
        <Header />

        <Container>
          <TextContainer>
            <TextInnerContainer>
              <Nickname>
                닉네임
              </Nickname>
              <Message>
                님
              </Message>
            </TextInnerContainer>
          </TextContainer>

          <AccountContainer>
            <AccountLogo>
            </AccountLogo>
            <AccountText>
              구글 계정으로 로그인
            </AccountText>
          </AccountContainer>

          <GrayLine>
            <svg xmlns="http://www.w3.org/2000/svg" width="990" height="2" viewBox="0 0 990 2" fill="none">
              <path d="M0 1L990 1.00009" stroke="#CECECE"/>
            </svg>
          </GrayLine>

          <BigText>
            내 정보
          </BigText>

          <NickAndMailContainer>
            <NickAndMailText>
              닉네임
            </NickAndMailText>

            <ButtonContainer>
              <InputContinaer>
                <Input
                  value={NickContent}
                  onChange={handleNickChange} 
                  placeholder="한글, 영어, 숫자만 입력할 수 있어요."
                >
                </Input>
              </InputContinaer>

              <NumberCount>
                ({NickContent.length}/20)
              </NumberCount>

              <DoubleCheck>
                중복확인
              </DoubleCheck>

              <ChangeButton>
                변경
              </ChangeButton>
            </ButtonContainer>
          </NickAndMailContainer>
            
          <NickAndMailContainer>
            <NickAndMailText>
                이메일
            </NickAndMailText>

            <ButtonContainer>
              <InputContinaer>
                <Input
                  placeholder="등록된 이메일이 없어요."
                />
              </InputContinaer>
              

              <ChangeButton>
                변경
              </ChangeButton>
            </ButtonContainer>
          </NickAndMailContainer>

          <NumberText>
            우편번호
          </NumberText>

          <Hashtag>
            #3245
          </Hashtag>

          <GrayLine>
            <svg xmlns="http://www.w3.org/2000/svg" width="990" height="2" viewBox="0 0 990 2" fill="none">
              <path d="M0 1L990 1.00009" stroke="#CECECE"/>
            </svg>
          </GrayLine>

          <BigText>
            개인정보 및 데이터
          </BigText>

          <SmallTextContainer>
            <SmallText onClick={navigateToPrivacy}>
              개인정보처리방침
            </SmallText>

            <SmallText onClick={navigateToUse}>
              이용약관
            </SmallText>
          </SmallTextContainer>

          <GrayLine>
            <svg xmlns="http://www.w3.org/2000/svg" width="990" height="2" viewBox="0 0 990 2" fill="none">
              <path d="M0 1L990 1.00009" stroke="#CECECE"/>
            </svg>
          </GrayLine>

          <SmallTextContainer>
            <SmallText>
              자주 묻는 질문 / Q&A
            </SmallText>
            
            <SmallText>
              낭만고양이 팀 소개
            </SmallText>
          </SmallTextContainer>

          <GrayLine>
            <svg xmlns="http://www.w3.org/2000/svg" width="990" height="2" viewBox="0 0 990 2" fill="none">
              <path d="M0 1L990 1.00009" stroke="#CECECE"/>
            </svg>
          </GrayLine>

          <LogoutButton onClick={() => {setIsModalOpen(true)}}>
            로그아웃
          </LogoutButton>
          <Logout isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          <Delete onClick={navigateToDelete}>
            회원 탈퇴
          </Delete>

        </Container>

        <Footer />

    </div>
  )
}
