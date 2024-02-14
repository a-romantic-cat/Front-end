import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


//화면1
const Container1 = styled.div`
  background: #FFFEF8;
  width: 1920px;
  height: 1754px;
`;

//화면2
const Container2 = styled.div`
  background: #FFFEF8;
  width: 1920px;
  height: 1080px;
  overflow: auto; //마진탑에러 고침
  display: flex; //왼쪽 오른쪽 가로배치
`;

//화면3
const Container3 = styled.div`
  background: #0D131B;
  width: 1920px;
  height: 1080px;
  display: flex; //글씨 그림 가로배치
`;

//화면4
const Container4 = styled.div`
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

// /낭만 /익명 /응원
const Slash = styled.div`
  width: 223px;
  height: 219px;
  margin: 160px 0 0 363px;
  display: flex;
  flex-direction: column;
`;

// /낭만_우편함
const Slash1 = styled.div`
  width: 223px;
  height: 119.333333px;
  color: #FFF;
  font-family: 'Pretendard';
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// 익명응원컨테이너
const Slash2 = styled.div`
  width: 223px;
  height: 99.666667px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// 익명응원 각각
const Slash3 = styled.div`
  width: 223px;
  height: 40px;
  color: #FFF;
  font-family: 'Pretendard';
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// 사진이랑 글자들 컨테이너
const PicAndText = styled.div`
  width: 786px;
  height: 614px;
  margin: 269px 0 0 185px;
`;

// 밤하늘 사진
const DarkSky = styled.div`
  background-image: url("/images/밤하늘.svg");
  width: 786px;
  height: 315px;
`;

// -잠 -머 -나 컨테이너
const Text1 = styled.div`
  width: 205px;
  height: 72px;
  margin: 140px 0 0 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// -다 -힘 -그 컨테이너
const Text2 = styled.div`
  width: 307px;
  height: 72px;
  margin: 51px 0 0 407px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// 글씨 한 줄
const Text3 = styled.div`
  height: 18px;
  color: #FFF;
  font-family: "Gowun Dodum";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 18px */
  letter-spacing: -0.2px;
`;

/////////////// 화면4 요소들 ///////////////

//행복한 순간을 글로 잇 - 다
const TextCoatainer = styled.div`
  width: 738px;
  height: 97px;
  display: flex;
  margin: 136px 0 0 591px;
`;

//행복한 순간을 글로 잇
const HappyMoment = styled.div`
  width: 382px;
  height: 97px;

  color: #000;
  font-family: Pretendard;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 45px */
`;

// -
const RedLine = styled.div`
  background: #C90000;
  width: 244px;
  height: 3px;
  margin-left: 30px;
  //margin-top: 27px; //임시
  margin-top: 19.5px; //임시
`;

// 다.
const Da = styled.div`
  width: 52px;
  height: 45px;
  margin-left: 30px;
  margin-top: 52px;

  color: #000;
  font-family: Pretendard;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 45px */
`;

// 천천히 온 것은 ~
const SmallTextContainer = styled.div`
  width: 782px;
  height: 337px;
  margin: 140px 0 0 569px;

  color: #000;
  font-family: "Gowun Dodum";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 18px */
  letter-spacing: -0.2px;
  line-height: 29px; //11(간격) + 18(폰트 크기)
`;

//내 우편함 가기 버튼
const Button = styled.div`
  display: flex;
  width: 234px;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 173px 0 0 837px;
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
          <Slash>
            <Slash1>
              /낭만_우편함
            </Slash1>
            <Slash2>
              <Slash3>
                /익명의누군가
              </Slash3>
              <Slash3>
                /응원위로공감
              </Slash3>
            </Slash2>
          </Slash>

          <PicAndText>
            <DarkSky>
            </DarkSky>

            <Text1>
              <Text3>
                - 잠이 오지 않아.
              </Text3>
              <Text3>
                - 머릿속이 걱정으로 가득해.
              </Text3>
              <Text3>
                - 나 정말 괜찮은 걸까?
              </Text3>
            </Text1>

            <Text2>
              <Text3>
                - 다 괜찮아.
              </Text3>
              <Text3>
                - 힘들었던 일 다 잊고 평안한 밤을 보내길.
              </Text3>
              <Text3>
                - 그럼, 안녕히!
              </Text3>
            </Text2>
          </PicAndText>
        </Container3>

        <Container4>
          <TextCoatainer>
            <HappyMoment>
              행복한 순간을 글로 잇
            </HappyMoment>

            <RedLine>
            </RedLine>

            <Da>
              다.
            </Da>
          </TextCoatainer>

          <SmallTextContainer>
            천천히 온 것은 마음에 더 오래 남습니다.<br />
            느린 우편함에 매일 나를 위한 편지를 적어보세요.<br />
            모든 편지는 올해의 마지막 주에 확인할 수 있어요.<br />
            일 년 동안 다양한 감정을 느끼고 발견하며, 어린 나로부터 무한한 응원, 위로와 공감을 얻을 수 있을 거예요.<br />
            ﾠ<br />
            "하나의 세계와 그 안에서 개인이 한 역할을 이렇듯 직접적이고, 이렇듯 강렬하고, 이렇듯 솔직하게 그리고<br />
            이렇듯 매력적으로 되살릴 방법이 달리 무엇일까? 오직 편지만이 할 수 있는 일이다."<br />
            - Simon Garfield<br />
            ﾠ<br />
            ﾠ<br />
            ﾠ<br />
            자 이제, 편지를 쓰러 가볼까요?
          </SmallTextContainer>

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
