import React from 'react';
import styled from 'styled-components';
import post from '../../assets/img/우체통.svg';
import Header from '../Header/Header';
import twinkle from '../../assets/img/반짝.svg';
import { useNavigate } from 'react-router-dom';

// 기본 화면 및 배경 => 배경화면 나중에 뷰포트 기준으로 바꿀 예정?
const Container = styled.div`
  box-sizing: border-box;
  width: 1920px; 
  height: 1080px;
  position: relative;
  background-image: url(${twinkle}); 
  background-repeat: no-repeat;
  background-color: #081A2F;
`;
// 피그마랑 똑같이 구현하려면 배경을 한번 더 덧대야한다고 생각해서 함...
const OverlapContainer = styled.div`
  width: 100%;
  height: 980px;
  background-color: rgba(8, 26, 47, 0.61);
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
`;

const MainCon = styled.div`
  width: 444px;
  height: 658px;
  position: absolute;
  top: 126px;
  text-align: center;
  font-family: 'NanumGothic';
  color: #FFF;
  font-size: 14px;
  font-weight: bold;
`;
const TextCon = styled.div``;
// 낭만을 주고받는, 낭만 우편함
const MainTextCon = styled.div`
  position: relative;
  font-size: 30px;
  font-weight: 400;
  font-family: 'Gowun Dodum';
  margin-bottom: 38px;
  display: flex;
  justify-content: center;
`;
const MainText1 = styled.div`
  -webkit-text-stroke: 0.3px #FFED4A;
  -webkit-text-fill-color: #FFF; 
  
  `;
const MainText2 = styled.div`
  color: #FFED4A;
`;
// 그 밑에 내용
const SubText = styled.div`
  margin-bottom: 18px;
  &:nth-child(n+4) {
    margin-bottom: 2px; 
  }
`;
// 우편함 이미지
const PostImg = styled.img`
  width: 124.21px;
  height: 203px;
  margin-top: 103px;
  filter: drop-shadow(21.15px -10.04px 52.86px rgba(255, 246, 41, 0.15)) drop-shadow(-21.15px -10.04px 52.86px rgba(255, 246, 41, 0.15));
`;
// 편지쓰기, 답장하기 버튼
const BtnCon = styled.div`
  display: flex;
  justify-content: center;
  gap : 12.38px;
  margin-top: 50px;
`;
const Button = styled.button`
  color: #C90000;
  cursor: pointer;
  width: 174px;
  height: 42px;
  border-radius: 10px;
  border: 1px solid #C90000;
  font-weight: 700;
  font-family: 'NanumGothic';
  font-size: 18px;
  
`;
// 낭만 모음집 둘러보기
const Collection = styled.div`
  margin-top: 38px;
  font-weight: 700;
  font-family: 'NanumGothic';
  font-size: 16px;
  display: flex;
  justify-content: center;
`;
const TextDeco = styled.div`
  cursor:pointer;
  width: 160px;
  height: 20px;
  border-bottom: 1px solid #FFF;
`;
export default function RomainticLetterboxMain() {
  const navigate = useNavigate(); 
  const handleNavigateToWritingLetter = () => {
    navigate('/WritingLetter');  
  };
  const handleNavigateToReplyingLetterMain = () => {
    navigate('/ReplyingLetterMain');  
  };
  const handleNavigateToCollectionMain = () => {
    navigate('/CollectionMain');  
  };

  return (
    <div>
      <Container>
          <Header />
          <OverlapContainer>
          <MainCon>
            <TextCon>
              <MainTextCon>
                <MainText1>
                  낭만을 주고받는,&nbsp; 
                </MainText1>
                <MainText2>
                  낭만 우편함
                </MainText2>
              </MainTextCon>
              <SubText>
                고민으로 지새운 밤, 조금은 울적한 하루의 끝.
              </SubText>
              <SubText>
                누군가에게 속마음을 털어놓는 것 자체만으로도 당신에게 위로가 될 거예요.
              </SubText>
              <SubText>
                낭만 우편함은 당신의 마음을 이어주는 곳이 되려합니다. 
              </SubText>
              <SubText>
              익명으로 진심을 적어주세요. 
              </SubText>
              <SubText>
                누군가의 답장으로 위로받는 하루가 되었으면 합니다.
              </SubText>
            </TextCon>

            <PostImg src={post} alt='우체통'/>
            <BtnCon>
              <Button onClick={handleNavigateToWritingLetter}>편지쓰기</Button>
              <Button onClick={handleNavigateToReplyingLetterMain}
              >답장하기</Button>
            </BtnCon>

            <Collection>
              <TextDeco onClick={handleNavigateToCollectionMain}>
                낭만 모음집 둘러보기
              </TextDeco>
              &nbsp;&gt;
            </Collection>

            </MainCon>

          </OverlapContainer>
        </Container>
      
          
    </div>
  )
}