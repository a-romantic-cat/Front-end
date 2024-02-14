import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import 상점 from '../../assets/img/상점.svg';
import 발바닥 from '../../assets/img/발바닥.svg';
import Coin from '../../assets/img/코인.svg';
import 다음버튼 from '../../assets/img/다음버튼.svg';
import Checkbox from '../../assets/img/Checkbox.svg';
import CheckedCheckbox from '../../assets/img/CheckedCheckbox.svg';
import FileTypeCheckbox from '../../assets/img/FileTypeCheckbox.svg';
import FileTypeCheckedCheckbox from '../../assets/img/FileTypeCheckedCheckbox.svg';
import UploadPlusButton from '../../assets/img/UploadPlusButton.svg';
import UploadPlusButtonHover from '../../assets/img/UploadPlusButtonHover.svg';
import axios from 'axios';

//수집함 데이터
const displayedItems = [
  {itemID: 1, itemName: "새로운 편지지", itemType: "Letter"},
  {itemID: 2, itemName: "동물 모양 우표", itemType: "Stamp"},
  {itemID: 3, itemName: "새로운 편지지", itemType: "Letter"},
  {itemID: 4, itemName: "새로운 편지지", itemType: "Letter"},
  {itemID: 5, itemName: "새로운 편지지", itemType: "Letter"},
  {itemID: 6, itemName: "새로운 편지지", itemType: "Letter"},
  {itemID: 7, itemName: "새로운 편지지", itemType: "Letter"},
  {itemID: 8, itemName: "새로운 편지지", itemType: "Letter"},
  {itemID: 9, itemName: "새로운 편지지", itemType: "Letter"},
  {itemID: 10, itemName: "새로운 편지지", itemType: "Letter"},
  {itemID: 11, itemName: "새로운 편지지", itemType: "Letter"},
  {itemID: 12, itemName: "새로운 편지지", itemType: "Letter"},

  {itemID: 13, itemName: "동물 모양 우표", itemType: "Stamp"},
  {itemID: 15, itemName: "동물 모양 우표", itemType: "Stamp"},
  {itemID: 16, itemName: "동물 모양 우표", itemType: "Stamp"},
  {itemID: 18, itemName: "동물 모양 우표", itemType: "Stamp"},
  {itemID: 19, itemName: "동물 모양 우표", itemType: "Stamp"},
  {itemID: 20, itemName: "동물 모양 우표", itemType: "Stamp"},
  {itemID: 21, itemName: "동물 모양 우표", itemType: "Stamp"},
  {itemID: 22, itemName: "동물 모양 우표", itemType: "Stamp"},
  {itemID: 23, itemName: "동물 모양 우표", itemType: "Stamp"},
  {itemID: 24, itemName: "동물 모양 우표", itemType: "Stamp"},

  {itemID: 25, itemName: "동물 모양 우표", itemType: "Stamp"},
];

//수집함 제목
const StoreMainDiv = styled.div`
  width: 1194px;
  height: 68px;
  position: absolute;
  left: 363px;
  top: 162px;
`;

const StoreInnerDiv = styled.div`
  left: 862px;
  top: 30px;
  position: absolute;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 36px;
  display: inline-flex;
`;

const ItemDiv = styled.div`
  padding: 8px 10px;
  background: #D5C9BD;
  border-radius: 10px;
  justify-content:-start;
  align-items: flex-start;
  gap: 7px;
  display: flex;
  cursor: pointer;
`;

const CollectionBoxImg = styled.img`
  width: 22px;
  height: 22px;
`;

const CatPadImg = styled.img`
  width: 22px;
  height: 22px;
`;

const CoinImg = styled.img`
  width: 26.07px;
  height: 24px;
`;

const TextDiv = styled.div`
  color: black;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 22px;
  word-wrap: break-word;
`;

const CoinDiv = styled.div`
  padding-top: 7px;
  padding-bottom: 7px;
  justify-content: flex-start;
  align-items: 'flex-start';
  gap: 8px;
  display: flex;
`;

const CoinCountDiv = styled.div`
  width: 30.80px;
  color: black;
  font-size: 24px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 24px;
  word-wrap: break-word;
`;

const StoreTitleText = styled.div`
  width: 104px;
  height: 40px;
  position: relative;
  left: 0;
  top: 0;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 40px;
`;

const TitleDetailText = styled.div`
  width: 303px;
  height: 14px;
  position: absolute;
  left: 0;
  top: 54px;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 14px;
  color: #757575;
`;

//탭 메뉴
const TabContainer = styled.div`
  width: 285px; 
  height: 44px;
  position: absolute;
  left: 363px;
  top: 290px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 23px;
  display: inline-flex;
`;

const Tab = styled.div`
  padding: 10px 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: ${props => props.isActive ? '3px #C90000 solid' : 'none'};
  cursor: pointer;
`;

const TabText = styled.div`
  color: ${props => props.isActive ? '#C90000' : 'black'};
  font-size: 24px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
`;

//탭1 내용 컨테이너
const Tab1ContentContainer = styled.div`
  width: 1194px;
  height: 1760px;
  position: absolute;
  left: 363px;
  top: 334px;
`;

//탭2 내용 컨테이너
const Tab2ContentContainer = styled.div`
  width: 1194px;
  height: 1782px;
  position: absolute;
  left: 363px;
  top: 334px;
`;

//마이디자인만 보기
const MyDesignButtonContainer = styled.div`
  width: 155px;
  height: 18px;
  position: relative;
  left: 1039px;
  top: 0;
  cursor: pointer;
  margin-bottom: 72px;
`;

const CheckboxImg = styled.img`
  width: 18px;
  height: 18px;
`;

const MyDesignText = styled.div`
  width: 129px;
  color: black;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 18px;
  word-wrap: break-word;
  left: 26px;
  top: 0;
  position: absolute;
`;

//탭 속 편지지 내용
const LetterContainer = styled.div`
  width: 1194px;
  height: 1342px;
  position: relative;
`;

const LetterBox = styled.div`
  width: 1194px;
  height: 259px;
  position: absolute;
  margin-bottom: 102px;
`;

const LetterInnerBox = styled.div`
  width: 378px;
  height: 259px;
  position: absolute;
`;

const LetterBackground = styled.div`
  width: 378px;
  height: 227px;
  left: 0.20px;
  top: 0;
  position: absolute;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  z-index: 1;
`;

const LetterTextWrapper = styled.div`
  width: 378px;
  height: 22px;
  left: 0;
  top: 237px;
  position: absolute;
`;

const LetterText = styled.div`
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  color: black;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 22px;
  white-space: nowrap;
`;

//탭 속 우표 내용
const StampContainer = styled.div`
  width: 1194px;
  height: 1364px;
  position: relative;
`;

const StampBox = styled.div`
  width: 1194px;
  height: 400px;
  position: absolute;
`;

const StampInnerBox = styled.div`
  width: 276x;
  height: 400px;
  position: absolute;
`;

const StampBackground = styled.div`
  width: 276px;
  height: 368px;
  left: 0;
  top: 0;
  position: absolute;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  z-index: 1;
`;

const StampTextWrapper = styled.div`
  width: 276px;
  height: 22px;
  left: 0;
  top: 378px;
  position: absolute;
`;

const StampText = styled.div`
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  color: black;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 22px;
  white-space: nowrap;
`;

//탭 속 마이디자인 내용
const MyDesignContainer = styled.div`
  width: 1092px;
  height: 796px;
  position: relative;
  left: 363px;
  top: 324px;
`;

const UploadContainer = styled.div`
  width: 316px;
  height: 230px;
  left: 0;
  top: 0;
  position: absolute;
  border: 1px black dashed;
  padding-top: 226px;
  padding-bottom: 126px;
  padding-left: 133px;
  padding-right: 133px;
  justify-content: center;
  align-items: center; 
  display: inline-flex;
  flex-direction: column;
  gap: 76px;
`;

const UploadedContainer = styled.div`
  width: 582px;
  height: 582px;
  left: 0;
  top: 0;
  position: absolute;
  border: 1px black dotted;
  justify-content: center;
  align-items: center; 
  display: flex;
`;

const UploadPlusButtonImg = styled.img`
  width: 76px;
  height: 76px;
  cursor: pointer;
`;

// 선택된 컨테이너에 따라 비율을 조절합니다.
const PreviewImage = styled.img`
  width: ${({ container }) => container === 'letter' ? '378px' : '276px'};
  height: ${({ container }) => container === 'letter' ? '226px' : '368px'};
`;

const UploadText = styled.div`
  color: #707070;
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
`;

const FileDetailContainer = styled.div`
  width: 378px;
  height: 428px;
  position: absolute;
  left: 714px;
  top: 0;
  gap: 110px;
`;

const FileTypeContainer = styled.div`
  width: 187px;
  height: 64px;
  position: absolute;
  left: 0;
  top: 0
`;

const TypeText = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  color: black;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
`;

const TypeChooseContainer = styled.div`
  width: 187px;
  height: 20px;
  position: absolute;
  left: 0;
  top: 44px;
`;

const ChooseLetterContainer = styled.div`
  width: 79px;
  height: 20px;
  left: 0;
  top: 0;
  position: absolute;
  gap: 7px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const ChooseStampContainer = styled.div`
  width: 62px;
  height: 20px;
  left: 125px;
  top: 0;
  position: absolute;
  gap: 7px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const FileTypeCheckboxImg = styled.img`
  width: 20px;
  height: 20px;
`;

const ChooseLetterText = styled.div`
  color: black;
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
`;

const FileNameContainer = styled.div`
  width: 378px;
  height: 83px;
  position: absolute;
  left: 0;
  top: 174px;
`;

const FileNameEdit = styled.input`
  width: 356px;
  height: 20px;
  padding: 10px 11px 9px 11px;
  position: absolute;
  left: 0;
  top: 44px;
  background: white;
  border: 1px solid black;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  color: #757575;   // 입력 필드의 기본 텍스트 색상을 지정합니다.
  font-size: 20px;  // 입력 필드의 기본 텍스트 크기를 지정합니다.
  font-family: Pretendard;  // 입력 필드의 기본 글꼴을 지정합니다.
  font-weight: 400; // 입력 필드의 기본 글꼴 두께를 지정합니다.
  line-height: 20px;  

  &::placeholder {
    color: #757575;
    font-size: 20px;
    font-family: Pretendard;
    font-weight: 400;
    line-height: 20px;
  }

  &:focus {
    outline: none;  // 입력 필드에 포커스가 갔을 때 테두리를 없앱니다.
  }
`;

const SaveButton = styled.div`
  width: 233px;
  height: 17.2px;
  padding: 12.38px;
  background: #C90000;
  border-radius: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12.38px;
  position: absolute;
  right: 60px;
  top: 540px;
  cursor: pointer;
`;

const SaveText = styled.div`
  color: white;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`;

//페이징
const PaginationContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

const PageNumberContainer = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 17px;
  display: flex;
`;

const PageButton = styled.div`
  width: 20px;
  height: 24px;
  padding: 10px;
  border: ${({ active }) => (active ? '1px #C90000 solid' : 'none')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  cursor: pointer;
`;

const PageNumberText = styled.div`
  color: ${({ active }) => (active ? '#C90000' : 'black')};
  font-size: 24px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
`;

const NextButtonImg = styled.img`
  width: 9px;
  height: 15px;
  position: relative;
  left: 54px;
  cursor: pointer;
`;

export default function MissionMain() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('Letter'); // 초기 탭을 'Letter'로 설정

  // 아이템 타입에 따라 아이템을 분류합니다.
  const letters = displayedItems.filter(item => item.itemType === 'Letter');
  const stamps = displayedItems.filter(item => item.itemType === 'Stamp');

  // 현재 탭에 따라 표시할 아이템을 결정합니다.
  const items = currentTab === 'Letter' ? letters : stamps;

  const itemsPerPage = 12; // 한 페이지에 표시할 아이템 개수

  // 각 아이템 타입에 대한 총 페이지 수를 계산합니다.
  const totalPagesForLetters = Math.ceil(letters.length / itemsPerPage);
  const totalPagesForStamps = Math.ceil(stamps.length / itemsPerPage);

  // 현재 탭에 따라 총 페이지 수를 결정합니다.
  const totalPages = currentTab === 'Letter' ? totalPagesForLetters : totalPagesForStamps;

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  const handlePageChange = (page) => {
    setCurrentPage(page); // 페이지 변경
  };

  const handleNextPage = () => {
    const lastPage = totalPages; // 마지막 페이지 번호
    handlePageChange(lastPage); // 마지막 페이지로 이동
  };

  const startIndex = (currentPage - 1) * itemsPerPage; // 현재 페이지에서 첫 번째 아이템의 인덱스
  const endIndex = startIndex + itemsPerPage; // 현재 페이지에서 마지막 아이템의 인덱스

  // 각 탭별 체크박스 상태를 관리하는 상태를 추가합니다.
  const [isCheckedTab1, setIsCheckedTab1] = useState(false);
  const [isCheckedTab2, setIsCheckedTab2] = useState(false);

  // 클릭 이벤트 처리 함수를 각각 만듭니다.
  const handleCheckboxClickTab1 = () => {
    setIsCheckedTab1(!isCheckedTab1);
  };

  const handleCheckboxClickTab2 = () => {
    setIsCheckedTab2(!isCheckedTab2);
  };

  // 이미지 상태를 관리하는 state를 만듭니다.
  const [image, setImage] = useState(UploadPlusButton);
  const [preview, setPreview] = useState(null);  // 미리보기 이미지 상태를 추가합니다.
  const [checkedContainer, setCheckedContainer] = useState(null); // 체크 상태를 관리하는 상태 변수를 추가합니다.
  const [isDragActive, setIsDragActive] = useState(false); // 드래그앤드랍
  const fileInputRef = useRef(null);  // 파일 입력 창을 참조하는 ref를 생성합니다.
  const [isImageUploaded, setIsImageUploaded] = useState(false); // 이미지 업로드 상태를 관리하는 상태 변수를 추가합니다.
  const [fileName, setFileName] = useState('');  // 파일 이름을 관리하는 상태

  // 마우스가 올라갔을 때와 나갔을 때 이미지를 변경하는 이벤트 핸들러를 만듭니다.
  const handleMouseOver = () => setImage(UploadPlusButtonHover);
  const handleMouseOut = () => setImage(UploadPlusButton);

  // 클릭 이벤트 핸들러
  const handlePlusButtonClick = () => {
    // 파일 입력 창을 엽니다.
    fileInputRef.current.click();
  };

  // 파일 변경 이벤트 핸들러
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // 파일을 선택했다면 이곳에서 파일을 처리합니다.
    if (file) {
      setIsImageUploaded(true);  // 이미지 업로드 상태를 true로 설정합니다.
      const reader = new FileReader();
      reader.onloadend = () => {
        // 파일 읽기가 완료되면, 결과를 미리보기 이미지 상태에 저장합니다.
        setPreview(reader.result);
        // 파일 이름을 상태에 저장합니다.
        setFileName(file.name.slice(0, 20));  // 파일 이름이 길 경우 최대 20자까지만 저장합니다.
      };
      reader.readAsDataURL(file);
    }
  };

  // 컨테이너 클릭 이벤트 핸들러
  const handleContainerClick = (container) => {
    // 클릭한 컨테이너를 체크 상태로 설정합니다.
    setCheckedContainer(container);

    // 이미 체크된 컨테이너를 클릭하면 체크를 해제합니다.
    if (checkedContainer === container) {
      setCheckedContainer(null);
    } else {
      setCheckedContainer(container);
    }
  };

  // 드래그 앤 드롭 이벤트 핸들러
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange({
        target: {
          files: [...e.dataTransfer.files]
        }
      });
      e.dataTransfer.clearData();
    }
  };

  const handleSaveClick = async () => {
    const token = window.localStorage.getItem("token");
    
    try {
      let response;
  
      if (checkedContainer === 'letter') {
        // letter를 선택한 경우
        response = await axios.post('https://dev.nangmancat.shop/myDesign/letter-paper', {
          myDesignRequest: {
            name: fileName,
            member_id: 0,
          },
          img: preview,
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });
      } else {
        // stamp를 선택한 경우
        response = await axios.post('https://dev.nangmancat.shop/myDesign/stamp', {
          myDesignRequest: {
            name: fileName,
            member_id: 0,
          },
          img: preview,
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });
      }
  
      if (response.data.isSuccess) {
        alert('디자인이 성공적으로 등록되었습니다.');
      } else {
        alert('디자인 등록에 실패했습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [tabLetters, setTabLetters] = useState([]);

  useEffect(() => {
    const fetchStamps = async () => {
      const token = window.localStorage.getItem("token");
      const response = await axios.get('https://dev.nangmancat.shop/letter-paper', {
        params: {
          page: 0,
          pageSize: 12,
          onlyMyDesign: isCheckedTab1
        },
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      if (response.data.isSuccess) {
        setTabLetters(response.data.result);
      } else {
        console.error(response.data.message);
      }
    };

    fetchStamps();
  }, [isCheckedTab1]);

  const [tabStamps, setTabStamps] = useState([]);

  useEffect(() => {
    const fetchStamps = async () => {
      const token = window.localStorage.getItem("token");
      const response = await axios.get('https://dev.nangmancat.shop/stamps', {
        params: {
          page: 0,
          pageSize: 12,
          onlyMyDesign: isCheckedTab2
        },
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      if (response.data.isSuccess) {
        setTabStamps(response.data.result);
      } else {
        console.error(response.data.message);
      }
    };

    fetchStamps();
  }, [isCheckedTab2]);

  return (
    <div>
      <Header />
      <StoreMainDiv>
        <StoreInnerDiv>
        <ItemDiv onClick={() => navigate('/Store')}>
            <CollectionBoxImg src={상점} alt='상점'/>
            <TextDiv>상점</TextDiv>
          </ItemDiv>
          <ItemDiv onClick={() => navigate('/MissionMain')}>
            <CatPadImg src={발바닥} alt='발바닥' />
            <TextDiv>미션</TextDiv>
          </ItemDiv>
          <CoinDiv>
            <CoinImg src={Coin} alt='코인' />
            <CoinCountDiv>30</CoinCountDiv>
          </CoinDiv>
        </StoreInnerDiv>
        <StoreTitleText>수집함</StoreTitleText>
        <TitleDetailText>편지지와 우표를 수집하고 직접 만들어보세요!</TitleDetailText>
      </StoreMainDiv>

      <TabContainer>
        <Tab isActive={currentTab === 'Letter'} onClick={() => setCurrentTab('Letter')}>
          <TabText style={{width: 63}} isActive={currentTab === 'Letter'}>편지지</TabText>
        </Tab>
        <Tab isActive={currentTab === 'Stamp'} onClick={() => setCurrentTab('Stamp')}>
          <TabText style={{width: 42}} isActive={currentTab === 'Stamp'}>우표</TabText>
        </Tab>
        <Tab isActive={currentTab === 'MyDesign'} onClick={() => setCurrentTab('MyDesign')}>
          <TabText style={{width: 104}} isActive={currentTab === 'MyDesign'}>마이디자인</TabText>
        </Tab>
      </TabContainer>

      {currentTab === 'Letter' && (
        <div>
          <Tab1ContentContainer>

            <MyDesignButtonContainer onClick={handleCheckboxClickTab1}>
            {isCheckedTab1 ? (
              <CheckboxImg src={CheckedCheckbox} alt="Checked Checkbox" />
            ) : (
              <CheckboxImg src={Checkbox} alt="Unchecked Checkbox" />
            )}
              <MyDesignText>마이디자인만 보기</MyDesignText>
            </MyDesignButtonContainer>

            <LetterContainer>
              {tabLetters.filter(item => item.itemType === 'Letter').slice(startIndex, endIndex).map((letter, index) => (
                <LetterBox key={letter.letterPaperId}>
                  <LetterInnerBox style={{ top: `${Math.floor(index / 3) * 361}px`, left: `${(index % 3) * 408}px` }}>
                    <LetterBackground imageUrl={letter.letterPaperImageUrl} />
                    <LetterTextWrapper>
                      <LetterText>{letter.letterPaperName}</LetterText> {/* 편지지 이름 */}
                    </LetterTextWrapper>
                  </LetterInnerBox>
                </LetterBox>
              ))}
            </LetterContainer>

            {/* 페이징 네비게이션 */}
            <PaginationContainer>
              <PageNumberContainer>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <PageButton active={currentPage === index + 1} key={index + 1}>
                      <PageNumberText
                        active={currentPage === index + 1}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </PageNumberText>
                    </PageButton>
                  ))}
              </PageNumberContainer>
              <NextButtonImg src={다음버튼} alt="다음버튼" onClick={handleNextPage} />
            </PaginationContainer>
          </Tab1ContentContainer>
        </div>
      )}

      {currentTab === 'Stamp' && (
        <div>
          <Tab2ContentContainer>

            <MyDesignButtonContainer onClick={handleCheckboxClickTab2}>
              {isCheckedTab2 ? (
                <CheckboxImg src={CheckedCheckbox} alt="Checked Checkbox" />
              ) : (
                <CheckboxImg src={Checkbox} alt="Unchecked Checkbox" />
              )}
              <MyDesignText>마이디자인만 보기</MyDesignText>
            </MyDesignButtonContainer>

            <StampContainer>
              {tabStamps.filter(item => item.itemType === 'Stamp').slice(startIndex, endIndex).map((stamp, index) => (
                  <StampBox key={stamp.stampId}>
                    <StampInnerBox style={{ top: `${Math.floor(index / 4) * 482}px`, left: `${(index % 4) * 306}px` }}>
                      <StampBackground imageUrl={stamp.stampImageUrl} />
                      <StampTextWrapper>
                        <StampText>{stamp.stampName}</StampText> {/* 편지지 이름 */}
                      </StampTextWrapper>
                    </StampInnerBox>
                  </StampBox>
                ))}
            </StampContainer>

            {/* 페이징 네비게이션 */}
            <PaginationContainer>
              <PageNumberContainer>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <PageButton active={currentPage === index + 1} key={index + 1}>
                      <PageNumberText
                        active={currentPage === index + 1}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </PageNumberText>
                    </PageButton>
                  ))}
              </PageNumberContainer>
              <NextButtonImg src={다음버튼} alt="다음버튼" onClick={handleNextPage} />
            </PaginationContainer>
          </Tab2ContentContainer>
        </div>
      )}

      {currentTab === 'MyDesign' && (
        <div>
          <MyDesignContainer>
            {isImageUploaded ? (
              <UploadedContainer>
                <PreviewImage container={checkedContainer} src={preview} alt="Preview" />
              </UploadedContainer>
            ) : (
              <UploadContainer
                isDragActive={isDragActive}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <UploadPlusButtonImg
                  src={image}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={handlePlusButtonClick}
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}  // 파일 입력 창을 숨깁니다.
                  onChange={handleFileChange}
                />
                <UploadText>- jpg 형식만 등록할 수 있어요.<br/>- 편지지 5:3, 우표 3:4 비율로 등록돼요.<br/>- 파일을 마우스로 끌어올 수 있어요.</UploadText>
              </UploadContainer>
            )}

            <FileDetailContainer>

              <FileTypeContainer>
                <TypeText>종류</TypeText>
                <TypeChooseContainer>
                  <ChooseLetterContainer onClick={() => handleContainerClick('letter')}>
                    <FileTypeCheckboxImg style={{left: 0, top: 0}} src={checkedContainer === 'letter' ? FileTypeCheckedCheckbox : FileTypeCheckbox} alt="파일 종류 체크 박스" />
                    <ChooseLetterText>편지지</ChooseLetterText>
                  </ChooseLetterContainer>
                  <ChooseStampContainer onClick={() => handleContainerClick('stamp')}>
                    <FileTypeCheckboxImg style={{left: 0, top: 0}} src={checkedContainer === 'stamp' ? FileTypeCheckedCheckbox : FileTypeCheckbox} alt="파일 종류 체크 박스" />
                    <ChooseLetterText>우표</ChooseLetterText>
                  </ChooseStampContainer>

                  <FileNameContainer>
                    <TypeText>편지지/우표 이름</TypeText>
                    <FileNameEdit
                      value={fileName}
                      onChange={e => setFileName(e.target.value.slice(0, 20))}  // 입력값이 길 경우 최대 20자까지만 저장합니다.
                      placeholder={'이름을 적어주세요.'}
                    />
                  </FileNameContainer>
                </TypeChooseContainer>
              </FileTypeContainer>

              {isImageUploaded && (
                <SaveButton onClick={handleSaveClick}>
                  <SaveText>저장하기</SaveText>
                </SaveButton>
              )}

            </FileDetailContainer>
          </MyDesignContainer>
        </div>
      )}
    </div>
  )
}
