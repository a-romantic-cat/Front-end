import React, {useState} from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Container = styled.div`
  margin-left: 465px;
`;

//회원탈퇴
const RedText = styled.div`
    color: var(--Red-Dark, #79110E);
    font-family: 'Pretendard';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: -85px;
    white-space: nowrap; //확대했을 때 줄바꿈 안 되게
`;

const BlackText = styled.div`
    color: #000;
    font-family: 'Pretendard';
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 22px */
    margin-top: 100px;
    margin-bottom: 15px;
    white-space: nowrap; //확대했을 때 줄바꿈 안 되게
`;

// 회색 줄
const GrayLine = styled.div`
  margin: 35px 0 -49px 0;
`;


const Container2 = styled.div`
    position: absolute; //이걸로해야 드롭다운 열었을 때 다른 요소들 그대로 있음
`;

const DropDownContainer = styled.div`
  width: 220px;
  height: 33px;
  position: absolute;
  background: white;
  border: 1px black solid;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SelectedText = styled.div`
    position: absolute;
    left: 12px;
    color: #000;
    font-family: 'Pretendard';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 14px */
`;

const DownImg = styled.div`
  background-image: url("/images/down.svg");
  position: absolute;
  width: 14px;
  height: 12px;
  top: 11px;
  right: 6.14px;
`;

//드롭다운 내용
const OptionContainer = styled.div`
  width: 222px;
  height: 33px;
  position: relative;
  top: 38.3px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer; /* 추가: 마우스 커서를 포인터로 변경 */
`;

const Option = styled.div`
  align-self: stretch;
  background: ${({ selectedOption }) => (selectedOption ? '#E5E5E5' : 'white')};
  border: 1px solid black;
  border-bottom-width: 1px; /* 아래쪽 테두리 설정 */
  border-top-width: 0px; /* 위쪽 테두리 설정 */
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const OptionText = styled.div`
    margin: 10px 0 9px 12px;
    color: #000;
    font-family: 'Pretendard';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 14px */
`;

// 더나은 서비스 제공을 위해~
const BlackText2 = styled.div`
    color: #000;
    font-family: 'Pretendard';
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 22px */
    margin-top: 161px;
    margin-bottom: 15px;
    white-space: nowrap; //확대했을 때 줄바꿈 안 되게
`;

// 흰색 입력 박스
const Input = styled.textarea`
    width: 990px;
    height: 143px;
    border: 1px solid #000;
    background: #FFF;
    resize: none; // 사용자가 크기 조절 못하도록
    word-wrap: break-word;
    outline: none;
    margin-bottom: 100px;

    color: #000;
    font-family: 'Pretendard';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 18px */
`;

//체크박스랑 텍스트 컨테이너
const AgreeContainer = styled.div`
    width: 467px;
    height: 22px;
    display: flex;
    justify-content: space-between;
`;

//체크 안 된 박스 컨테이너
const UnCheckbox = styled.div`
  background-image: url("/images/uncheckbox.svg");
  background-size: cover;
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

//체크된 박스 컨테이너
const Checkbox = styled.div`
  background-image: url("/images/checkbox.svg");
  background-size: cover;
  width: 22px;
  height: 22px;
  cursor: pointer;
`;


//모든 데이터를~
const AgreeText = styled.div`
    color: #000;
    font-family: 'Pretendard';
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 22px */
`;

//취소, 로그아웃
const ButtonContainer = styled.div`
    width: 525px;
    height: 60px;
    margin: 100px 0 97px 233px;
    display: flex;
    justify-content: space-between;
`;

//취소 버튼
const CloseButton = styled.div`
    display: flex;
    width: 248px;
    height: 60px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid var(--Grey-Dark, #757575);
    background: #FFF;
    color: var(--Grey-Dark, #757575);
    font-family: 'Pretendard';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
`;

//탈퇴하기 버튼
const DeleteButton = styled.div`
    display: flex;
    width: 248px;
    height: 60px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    border-radius: 10px;
    background: var(--Red-Light, #C90000);
    color: #FFF;
    font-family: 'Pretendard';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
`;

export default function Delete() {

    const navigate = useNavigate();
  
    const navigateToMyPage = () => {
        navigate("/MyPage");
    };

    const navigateToHome = () => {
        navigate("/");
    };

    const [check, setCheck] = useState(false); //체크박스
    const handleCheck = () => { 
        setCheck(!check);
    }

    const [isDropdownOpen, setDropdownOpen] = useState(false); // 드롭다운의 열림/닫힘 상태를 관리하는 상태 변수
    const [selectedOption, setSelectedOption] = useState(''); // 선택한 옵션을 관리하는 상태 변수

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen); // 드롭다운의 열림/닫힘 상태를 토글
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option); // 선택한 옵션 업데이트
        setDropdownOpen(false); // 드롭다운 닫기
    };

  return (
    <div>
        <Header />

        <Container>
            <RedText>
                회원탈퇴
            </RedText>
            <BlackText>
                회원 탈퇴 후에는 우편함과 편지가 삭제되며 절대 되돌릴 수 없어요.
            </BlackText>

            <GrayLine>
                <svg xmlns="http://www.w3.org/2000/svg" width="990" height="2" viewBox="0 0 990 2" fill="none">
                <path d="M0 1L990 1.00009" stroke="#CECECE"/>
                </svg>
            </GrayLine>

            <BlackText>
                떠나시는 이유를 선택해주세요.    
            </BlackText>

            <Container2>
                <div>
                    <DropDownContainer onClick={handleDropdownToggle}>
                        <SelectedText>{selectedOption}</SelectedText> {/* 선택한 옵션 표시 */}
                        <DownImg/>
                    </DropDownContainer>
                    {isDropdownOpen && (
                    <OptionContainer>
                        <Option onClick={() => handleOptionSelect('개인정보 삭제')} selectedOption={selectedOption === '개인정보 삭제'}>
                            <OptionText>
                                개인정보 삭제
                            </OptionText>
                        </Option>

                        <Option onClick={() => handleOptionSelect('서비스 이용 불편')} selectedOption={selectedOption === '서비스 이용 불편'}>
                            <OptionText>
                                서비스 이용 불편
                            </OptionText>
                        </Option>

                        <Option onClick={() => handleOptionSelect('탈퇴 후 재가입')} selectedOption={selectedOption === '탈퇴 후 재가입'}>
                            <OptionText>
                                탈퇴 후 재가입
                            </OptionText>
                        </Option>
                        
                        <Option onClick={() => handleOptionSelect('더 이상 이용하지 않음')} selectedOption={selectedOption === '더 이상 이용하지 않음'}>
                            <OptionText>
                                더 이상 이용하지 않음
                            </OptionText>
                        </Option>

                        <Option onClick={() => handleOptionSelect('기타')} selectedOption={selectedOption === '기타'}>
                            <OptionText>
                                기타
                            </OptionText>
                        </Option>
                    </OptionContainer>
                    )}
                </div>
            </Container2>

            <BlackText2>
                더 나은 서비스 제공을 위해 의견을 보내주세요. (선택) 
            </BlackText2>

            <Input />

            <AgreeContainer>
                <UnCheckbox>
                    <div onClick={handleCheck}> {/*고정핀 핸들*/}
                        {check ? (
                        <Checkbox />
                    ) :
                    (
                        <UnCheckbox />
                    )}
                    </div>
                </UnCheckbox>

                <AgreeText>
                    모든 데이터를 삭제하고 탈퇴하는 것에 동의합니다.
                </AgreeText>
            </AgreeContainer>

            <ButtonContainer>
                <CloseButton onClick={navigateToMyPage}>
                    취소
                </CloseButton>
                <DeleteButton onClick={navigateToHome}>
                    탈퇴하기
                </DeleteButton>
        </ButtonContainer>

        </Container>

        <Footer />

    </div>
  )
}
