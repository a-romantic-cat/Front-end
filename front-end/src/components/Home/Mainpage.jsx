import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


//화면1
const Container1 = styled.div`
  //background-image: url("/images/홈1.svg");
  background: #FFFEF8;
  width: 1920px;
  height: 1754px;
`;

//화면2
const Container2 = styled.div`
  //background-image: url("/images/홈2.svg");
  background: #FFFEF8;
  width: 1920px;
  height: 1080px;
  overflow: auto; //마진탑에러 고침
  display: flex; //왼쪽 오른쪽 가로배치
`;

//화면3
const Container3 = styled.div`
  //background-image: url("/images/홈3.svg");
  background: #0D131B;
  width: 1920px;
  height: 1080px;
`;

//화면4
const Container4 = styled.div`
  //background-image: url("/images/홈4.svg");
  background: #FFFEF8;
  width: 1920px;
  height: 1080px;
  overflow: auto; //내 우편함 가기 버튼 margin-top오류
`;



/////////////// 화면1 요소들 ///////////////

const HeartAndLineAndLink = styled.div`
  width: 73px;
  height: 317.004px;
  display: inline-flex;
  flex-wrap: wrap;
  margin: 110px 0 0 369px;
`;

//하트편지
const Heart = styled.div`
  background-image: url("/images/하트편지.svg");
  background-size: cover;
  width: 73px;
  height: 50px;
`;

//선
const Line = styled.div`
  width: 2px;
  height: 48.094px;
  background: #807F7C;
  margin-left: 36.5px;
  margin-top: 34px;
`;

//링크들모음
const LinkContainer = styled.div`
  width: 78px;
  height: 151px;
  margin-top: 33.91px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

//내 우편함
const MyLetter = styled.div`
  color: #000;
  font-family: "Gowun Dodum";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  cursor: pointer;
`;

//주소록
const Address = styled.div`
  color: #000;
  font-family: "Gowun Dodum";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  cursor: pointer;
`;

//낭만 우편함
const Romantic = styled.div`
  color: #000;
  font-family: "Gowun Dodum";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  cursor: pointer;
`;

//상점
const Store = styled.div`
  width: 78px; // 상점하고 내정보 줄바꿈 되게
  color: #000;
  font-family: "Gowun Dodum";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  white-space: nowrap;
  cursor: pointer;
`;

//내 정보
const MyInfo = styled.div`
  color: #000;
  font-family: "Gowun Dodum";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  white-space: nowrap;
  cursor: pointer;
`;

//가운데 요소들 컨테이너
const Centercontainer = styled.div`
  width: 472px;
  height: 1215.03208px;
  margin: 0 0 0 724px;
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
`;

//낭만고양이 글씨
const Title = styled.div`
  background-image: url("/images/title.svg");
  width: 38px;
  height: 390px; //임시
  background-size: cover;
  margin-left: 217px;
`;

//낭만고양이 그림
const Cat = styled.div`
  background-image: url("/images/cat.svg");
  width: 143.31165px;
  height: 205.13022px;
  margin-top: 41px; //임시
  background-size: cover;
  margin-left: 164px;
`;

const LongLine = styled.div`
  width: 2px;
  height: 244px;
  background: #807F7C;
  margin-top: 83.87px;
  margin-left: 236px;
`;

const Explain = styled.div`
  margin-top: 70px;
  color: #000;
  text-align: center;
  font-family: "Gowun Dodum";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const TwoArrow = styled.div`
  background-image: url("/images/화살표2개.svg");
  width: 46px;
  height: 42.032px;
  margin-top: 120px;
  margin-left: 213px;
`;


/////////////// 화면2 요소들 ///////////////

const Left = styled.div`
  width: 684px;
  height: 770px;
  margin: 155px 0 0 363px;
  `;

const TextLeft = styled.div`
  width: 564px;
  height: 105px;
  margin-left: 60px;
  color: #000;
  text-align: center;
  font-family: "Gowun Dodum";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  margin-top: 57px;
`;

const PicLeft = styled.div`
  background-image: url("/images/left.svg");
  width: 684px;
  height: 457px;
  margin-top: 151px;
`;

const Right = styled.div`
  width: 429px;
  height: 575px;
  margin-left: 97px;
  margin-top: 155px;
`;

const PicRight = styled.div`
  background-image: url("/images/right.svg");
  width: 413px;
  height: 218px;
`;

const TextRight = styled.div`
  width: 429px;
  height: 67px;
  color: #000;
  text-align: center;
  font-family: "Gowun Dodum";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  margin-top: 290px;
`;

/////////////// 화면3 요소들 ///////////////

/////////////// 화면4 요소들 ///////////////

//내 우편함 가기 버튼
const Button = styled.div`
  display: flex;
  width: 234px;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 883px 0 0 837px;
  border-radius: 10px;
  background: var(--Red-Light, #C90000);
  cursor: pointer;
`;

const ArrowAndText = styled.div`
  width: 156px;
  height: 24px;
  display: flex; // 글씨랑 화살표 가로배치
  justify-content: space-between;
`;

//내 우편함 가기
const GotoMyLetter = styled.div`
  color: #FFF;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 24px */
`;

//화살표
const Arrow = styled.div`
  width: 10px;
  height: 20px;
`;

export default function Mainpage() {

  const navigate = useNavigate();

  const navigateToMyBoxMain = () => {
    navigate("/MyLetterbox");
  };

  const navigateToAddress = () => {
    navigate("/AddressBook");
  };

  const navigateToRomantic = () => {
    navigate("/RomanticLetterbox");
  };

  const navigateToStore = () => {
    navigate("/Store");
  };

  const navigateToMyInfo = () => {
    navigate("/MyPage");
  };
  
    return (
      <div>
        <Header />

        <Container1>
          <HeartAndLineAndLink>
            <Heart>
            </Heart>
            <Line>
            </Line>
            <LinkContainer>
              <MyLetter onClick={navigateToMyBoxMain}>
                내 우편함
              </MyLetter>
              <Address onClick={navigateToAddress}>
                주소록
              </Address>
              <Romantic onClick={navigateToRomantic}>
                낭만 우편함
              </Romantic>
              <Store onClick={navigateToStore}>
                상점
              </Store>
              <MyInfo onClick={navigateToMyInfo}>
                내 정보
              </MyInfo>
            </LinkContainer>
          </HeartAndLineAndLink>

          <Centercontainer>
            <Title>
            </Title>
            <Cat>
            </Cat>
            <LongLine>
            </LongLine>
            <Explain>
              낭만고양이는 마음을 전달하는 모바일 편지 서비스 입니다.
            </Explain>
            <TwoArrow>
            </TwoArrow>
          </Centercontainer>
          
        </Container1>

        <Container2>
          <Left>
            <TextLeft>
              아날로그와 디지털을 합쳐, 낭만있게 기다림을 필요로하는 아날로그의 매력과 디지털의 편리함을 합쳤어요. 더이상 우체국까지 갈 필요 없답니다.
            </TextLeft>
            <PicLeft>
            </PicLeft>
          </Left>
          <Right>
            <PicRight>
            </PicRight>
            <TextRight>
              낭만고양이에 손편지의 감성을 그대로 담았어요. 다양한 편지지와 우표로 개성있는 편지를 꾸며보세요.
            </TextRight>
          </Right>
          
        </Container2>

        <Container3>

        </Container3>

        <Container4>
          <Button onClick={navigateToMyBoxMain}>
            <ArrowAndText>
              <GotoMyLetter>
                내 우편함 가기
              </GotoMyLetter>
              <Arrow>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                  <path d="M1 1L11 10.5238L1 21" stroke="white" stroke-width="2.5"/>
                </svg>
              </Arrow>
            </ArrowAndText>
          </Button>
        </Container4>

        <Footer />
      </div>
    );
  }
