import React, {useState} from "react";
import styled from 'styled-components';
import Header from '../../Header/Header';
import twinkle from '../../../assets/img/반짝.svg';
import letterPaper from '../../../assets/img/편지.svg';
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
  width: 582px;
  height: 745px;
  position: absolute;
  top: 65px;
`;

// 답장할 편지를 골라주세요!
const TextCon = styled.div`
  text-align: center;
  font-family: 'Pretendard';
`;
const Text1 = styled.div`
  color: #FFF;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 20px;
`;
const Text2 = styled.div`
  color: #CECECE;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 10px;
`;

// 편지지
const ImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 37px; /* 이미지 간격 조절 */
  width: 582px;
  height: 582px;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
`;

const Image = styled.img`
  width: 174px;
  height: 160px;
`;

// 편지지 속 2줄만 보이는 텍스트
const LetterContent = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 45px;
  width: 110px;
  height: 30px;
  padding: 4px 15px 4px;
  font-family: 'Pretendard';
  font-weight: bold;
  font-size: 5px;
  color: #000;
  line-height: 12px;
`;

// 편지지 누르면 보이는 창
const Select = styled.div`
  width: 595px;
  height: 334px;
  background-color: #FFFEF8;
  border-radius: 10px;
  position: fixed;
  top: 394px;
  left: 669px;
  z-index: 3;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
`;
// 뒤에 블러처리해야해서 필요
const OverlaySelect = styled.div`
width: 100%; 
height: 980px;
background-color: rgba(8, 26, 47, 0.70);
display: ${(props) => (props.show ? "block" : "none")};
z-index: 3;
`;  
// 뒤에 블러처리해야해서 필요
const OverlaySelectBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1920px; 
  height: 980px;
  background-image: url(${twinkle}); 
  display: ${(props) => (props.show ? "block" : "none")};
`;
const SelectQuestion = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 69px;
  font-family: 'Pretendard';
`;
const SelectText1 = styled.div`
  font-size: 24px;
  color: #C90000;
  font-weight: 500px;
  margin-bottom: 18px;
`;
const SelectText2 = styled.div`
  font-size: 24px;
  color: #000;
  font-weight: 500;
`;
const CautionText = styled.div`
  font-family: 'Pretendard';
  color: #757575;
  font-size: 18px;
  font-weight: 400;
`;
const CloseButton = styled.button`
  cursor: pointer;
  margin-right: 28px;
  width: 174px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #757575;
  outline: none;
  background: #FFF;
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 500;
  color: #757575;
`;
const SelectButton = styled.button`
cursor: pointer;
width: 174px;
height: 60px;
border-radius: 10px;
border: none;
outline: none;
background: #C90000;
font-family: 'Pretendard';
font-size: 18px;
font-weight: 500;
color: #FFF;
`;
const Button = styled.div`
  position: absolute;
  bottom: 69px;
  width: 377px;
  height: 60px;
`;

const ReplyingLetterMain = () => {
  const navigate = useNavigate(); 
  const handleNavigateToWritingLetter = () => {
    navigate('/ReplyingLetter');  
  };

  const [selectShow, setSelectShow] = useState(false);

  const handleImageContainerClick = () => {
    setSelectShow(true);
  };

  const handleCloseSelect = () => {
    setSelectShow(false);
  };
  return (
    <div>
      <Container>
          <Header />
          <OverlapContainer>
          <OverlaySelect show={selectShow} onClick={handleCloseSelect}/>
          <OverlaySelectBack show={selectShow} onClick={handleCloseSelect}/>
          <MainCon>  
            <TextCon>
              <Text1>
              답장할 편지를 골라주세요!
              </Text1>
              <Text2>
              한 번 고르면 변경할 수 없으니 신중하게 선택해주세요.
              </Text2>
              <Text2>
              답장은 낭만모음집에 업로드 될 수 있습니다.
              </Text2>
            </TextCon>

            <ImageContainer 
              onClick={handleImageContainerClick}
            >
              {[...Array(9)].map((_, index) => (
                <ImageWrapper key={index}>
                <Image src={letterPaper} alt={`이미지 ${index + 1}`} />
                <LetterContent>
                안녕하세요 저는 낭만고양이 입니다 가나다라마바사 아자차카 타파하하하하하하
                </LetterContent>
              </ImageWrapper>

              ))}
              
            </ImageContainer>
            
          </MainCon>
          </OverlapContainer>
      </Container>

      <Select show={selectShow}>
        <div>
          <SelectQuestion>
          <SelectText1>
            답장할 편지 
          </SelectText1>
          <SelectText2>
            를&nbsp;
          </SelectText2>
          <SelectText1>
            선택
          </SelectText1>
          <SelectText2>
            하시겠어요?
          </SelectText2>
          </SelectQuestion>
          <CautionText>
          한 번 고르면 변경할 수 없으니 신중하게 선택해주세요.
          </CautionText>
          <Button>
          <CloseButton onClick={handleCloseSelect}>취소</CloseButton>
          <SelectButton
            onClick={handleNavigateToWritingLetter}
          >
                선택하기
          </SelectButton>     
          </Button>
        </div>

      </Select>
    </div>
  );
};
 
export default ReplyingLetterMain;