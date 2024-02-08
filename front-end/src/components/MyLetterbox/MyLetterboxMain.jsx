import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";
import '../../index.css';
import Letterbox from '../../assets/img/우체통.svg';
import Cat from '../../assets/img/고양이.svg';
import i_button from '../../assets/img/i_button.svg';
import share_button from '../../assets/img/share_Button.svg';
import 친구요청보내기버튼 from '../../assets/img/친구요청보내기버튼.svg';
import 친구요청완료버튼 from '../../assets/img/친구요청완료버튼.svg';
import 친구상태버튼 from '../../assets/img/친구상태버튼.svg';
import 우편함만들기버튼 from '../../assets/img/우편함만들기버튼.svg';
import Info from './Info';

//닉네임님의 우편함이름
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

const MailboxName = styled.div`
  color: #79110E;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//편지가 도착했어요. 우편함을 확인해보세요
const Notice = styled.div`
  color: #757575;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 400;
  word-wrap: break-word;
  margin-left: 363px;
  margin-top: 11px;
`;

//남은 시간 수정 버전
const Wrapper = styled.div`
  width: 224px;
  height: 54px;
  position: relative;
  margin-left: 363px;
  margin-top: 36px;
`;

const DaysContainer = styled.div`
  width: 58px;
  height: 54px;
  left: 0;
  top: 0;
  position: absolute;
`;

const DaysLabel = styled.div`
  left: 16px;
  top: 42px;
  position: absolute;
  text-align: center;
  color: #757575;
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 12px;
  word-wrap: break-word;
`;

const DaysValueContainer = styled.div`
  width: 58px;
  height: 36px;
  left: 0;
  top: 0;
  position: absolute;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
`;

const StyledValue = styled.div`
  width: 8px;
  height: 16px;
  padding: 9px;
  left: ${props => props.left}px;
  top: 0;
  position: absolute;
  background: white;
  border-radius: 5px;
  border: 1px #757575 solid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  text-align: center;
  color: #C90000;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;
`;

const HoursSeparator = styled.div`
  left: 69px;
  top: 10px;
  position: absolute;
  text-align: center;
  color: black;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
`;

const HoursContainer = styled.div`
  width: 58px;
  height: 54px;
  left: 83px;
  top: 0;
  position: absolute;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
`;

const HoursLabel = styled.div`
  left: 13px;
  top: 42px;
  position: absolute;
  text-align: center;
  color: #757575;
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 12px;
  word-wrap: break-word;
`;

const MinutesSeparator = styled.div`
  left: 152px;
  top: 10px;
  position: absolute;
  text-align: center;
  color: black;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
`;

const MinutesContainer = styled.div`
  width: 58px;
  height: 54px;
  left: 166px;
  top: 0;
  position: absolute;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
`;

const MinutesLabel = styled.div`
  left: 8px;
  top: 42px;
  position: absolute;
  text-align: center;
  color: #757575;
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 12px;
  word-wrap: break-word;
`;

const TimeValueContainer = styled.div`
  width: 58px;
  height: 36px;
  left: 0;
  top: 0;
  position: absolute;
`;

//우편함 이미지
const LetterboxImg = styled.img`
  width: 174px;
  height: 284px;
  position: relative;
  left: 873px;
  top: 203px;
`

//고양이 이미지
const CatImg = styled.img`
  width: 80px;
  height: 96.5px;
  position: absolute;
  left: 1077px;
  top: 721px;
  cursor: pointer;
`

//고양이 설명
const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 690px;
  left: 1172px;
`;

const AbsoluteText = styled.div`
  position: absolute;
  color: black;
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
  bottom: 3px;
`;

const ColorText = styled.span`
  color: ${props => props.color};
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
`;

// 우체통 아래 버튼
const IButtonImg = styled.img`
  width: 42px;
  height: 42px;
  position: absolute;
  left: 811px;
  top: 855px;
  cursor: pointer;
`

const ShareButtonImg = styled.img`
  width: 42px;
  height: 42px;
  position: absolute;
  left: 1067px;
  top: 855px;
  cursor: pointer;
`

//우편함 확인하기
const BoxCheckContainer = styled.div`
  width: 149px;
  height: 17.2px;
  left: 873px;
  top: 855px; 
  position: absolute;
  padding: 11.5px;
  background: black;
  border-radius: 6px;
  border: 1px black solid;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
`;

const BoxCheckText = styled.div`
  width: 114px;
  height: 21px;
  color: white;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
`;

export default function MyLetterboxMain() {
  const navigate = useNavigate();

  const navigateToCheck1 = () => {
    navigate("/Check1");
  };

  const navigateToOpenLetter1 = () => {
    navigate("/OpenLetter1");
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  {/* API로부터 닉네임과 우편함 이름을 받아오는 경우, 일반적으로 비동기 작업을 처리, fetch 함수를 사용하여 API에서 데이터를 받아오는 간단한 예시
  function MyComponent() {
    const [nickname, setNickname] = useState('');
    const [mailboxName, setMailboxName] = useState('');

    useEffect(() => {
      fetch('API_URL') // 실제 API URL로 교체하세요.
        .then(response => response.json())
        .then(data => {
          setNickname(data.nickname);
          setMailboxName(data.mailboxName);
        });
    }, []);

    return (
      <Container>
        <InnerContainer>
          <Nickname>
            <div>{nickname}</div>
          </Nickname>
          <Message>님의</Message>
        </InnerContainer>
        <MailboxName>{mailboxName}</MailboxName>
      </Container>
    );
  }
  */}
  
  const RemainingTime = () => {
    const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0 });
    const targetTime = new Date('2024-05-04T15:00:00Z'); // 'YYYY-MM-DDTHH:mm:ssZ' 형식으로 날짜 입력

    useEffect(() => {
      const intervalId = setInterval(() => {
        const currentTime = new Date();
        const remainingTime = targetTime - currentTime;

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

        setTime({ days, hours, minutes });
      }, 1000);

      return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 인터벌을 정리
    }, [targetTime]);

    const formattedDays = String(time.days).padStart(2, '0');
    const formattedHours = String(time.hours).padStart(2, '0');
    const formattedMinutes = String(time.minutes).padStart(2, '0');
  
    return (
      <Wrapper>
        <DaysContainer>
          <DaysLabel>Days</DaysLabel>
          <DaysValueContainer>
            <StyledValue left={0}>{formattedDays[0]}</StyledValue>
            <StyledValue left={31}>{formattedDays[1]}</StyledValue>
          </DaysValueContainer>
        </DaysContainer>
        <HoursSeparator>:</HoursSeparator>
        <HoursContainer>
          <HoursLabel>Hours</HoursLabel>
          <TimeValueContainer>
            <StyledValue left={0}>{formattedHours[0]}</StyledValue>
            <StyledValue left={31}>{formattedHours[1]}</StyledValue>
          </TimeValueContainer>
        </HoursContainer>
        <MinutesSeparator>:</MinutesSeparator>
        <MinutesContainer>
          <MinutesLabel>Minutes</MinutesLabel>
          <TimeValueContainer>
            <StyledValue left={0}>{formattedMinutes[0]}</StyledValue>
            <StyledValue left={30}>{formattedMinutes[1]}</StyledValue>
          </TimeValueContainer>
        </MinutesContainer>
      </Wrapper>
    );
  };
  
  const shareUrl = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Awesome App',
        text: 'Check out this website:',
        url: window.location.href, // 현재 페이지의 URL
      })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error sharing:', error));
    } else {
      // 웹 공유 API를 지원하지 않는 브라우저에서는 다른 방식으로 공유 기능을 구현합니다.
      // 예를 들어, 클립보드에 URL을 복사하는 기능을 제공할 수 있습니다.
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          console.log('URL copied to clipboard');
        })
        .catch(err => {
          console.log('Could not copy text: ', err);
        });
    }
  };
  
  return (
    <div>
      <Header />

      <Container>
        <InnerContainer>
          <Nickname>
            <div>닉네임</div>
          </Nickname>
          <Message>님의</Message>
        </InnerContainer>
        <MailboxName>우편함이름</MailboxName>
      </Container>

      <Notice>편지가 도착했어요. 우편함을 확인해보세요!</Notice>

      <RemainingTime />

      <LetterboxImg src={Letterbox} alt='letterbox' />
      <CatImg src={Cat} alt='cat' onClick={navigateToOpenLetter1} />
      <TextContainer>
        <AbsoluteText style={{ left: 0, top: 0 }}>저를 누르면 닉네임님이</AbsoluteText>
        <AbsoluteText style={{ left: 0, top: 17 }}>
            <ColorText color="#C90000">공개한 편지</ColorText>
            <ColorText color="black">를 볼 수 있어요!</ColorText>
        </AbsoluteText>
      </TextContainer>

      <IButtonImg src={i_button} alt='i_button' onClick={() => {setIsModalOpen(true)}} /> {/* 이미지 클릭 시 모달 열림 */}
        <Info isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ShareButtonImg src={share_button} alt='share_button' onClick={shareUrl} />

        <BoxCheckContainer onClick={navigateToCheck1}>
          <BoxCheckText>우편함 확인하기</BoxCheckText>
        </BoxCheckContainer>

    </div>
  )
}
