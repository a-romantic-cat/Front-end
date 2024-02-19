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
import { useDispatch } from 'react-redux';
import { completeMission } from '../../redux/completeMission';

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
  width: 100%;
  padding: 8px 10px;
  background: #D5C9BD;
  border-radius: 10px;
  justify-content: flex-start;
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
  width: 100%;
  color: black;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 22px;
  white-space: nowrap;
`;

const CoinDiv = styled.div`
  padding-top: 7px;
  padding-bottom: 7px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: flex;
`;

const CoinCountDiv = styled.div`
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
  border: 1px black dashed;
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
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState('Letter'); // 초기 탭을 'Letter'로 설정
  const [totalPagesForLetters, setTotalPagesForLetters] = useState([]);
  const [totalPagesForStamps, setTotalPagesForStamps] = useState([]);
  const totalPages = currentTab === 'Letter' ? totalPagesForLetters : totalPagesForStamps; // 현재 탭에 따라 총 페이지 수를 결정합니다.
  const [currentPageForLetters, setCurrentPageForLetters] = useState(1); // 현재 페이지
  const [currentPageForStamps, setCurrentPageForStamps] = useState(1); // 현재 페이지
  const [isCheckedTab1, setIsCheckedTab1] = useState(false); // 각 탭별 체크박스 상태를 관리하는 상태를 추가합니다.
  const [isCheckedTab2, setIsCheckedTab2] = useState(false);

  const handlePageChange1 = (page) => {
    console.log(`Changing to page ${page}`);
    setCurrentPageForLetters(page); // 페이지 변경
  };

  const handleNextPage1 = () => {
    const lastPage = totalPagesForLetters; // 마지막 페이지 번호
    handlePageChange1(lastPage); // 마지막 페이지로 이동
  };

  const handlePageChange2 = (page) => {
    console.log(`Changing to page ${page}`);
    setCurrentPageForStamps(page); // 페이지 변경
  };

  const handleNextPage2 = () => {
    const lastPage = totalPagesForStamps; // 마지막 페이지 번호
    handlePageChange2(lastPage); // 마지막 페이지로 이동
  };

  // 클릭 이벤트 처리 함수를 각각 만듭니다.
  const handleCheckboxClickTab1 = async () => {
    setIsCheckedTab1(!isCheckedTab1);
  
    // 체크박스가 선택된 경우에만 API를 호출합니다.
    if (!isCheckedTab1) {
      const memberId = 25;  // 여기에 실제 회원 ID를 설정해야 합니다.
      const token = window.localStorage.getItem("token");  // 토큰을 가져옵니다.
      const url = `https://dev.nangmancat.shop/myDesign/letter-paper/${memberId}`;
  
      try {
        const response = await axios.get(url, {
          headers: {
            //Authorization: `Bearer ${token}`  // 토큰을 Authorization 헤더에 추가합니다.
            Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g'
          }
        });
  
        if (response.data.isSuccess) {
          console.log(response.data.result);  // result 배열에는 마이디자인 편지지 정보가 담겨 있습니다.
        } else {
          console.error('마이디자인 편지지 조회에 실패했습니다.');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  const handleCheckboxClickTab2 = async () => {
    setIsCheckedTab2(!isCheckedTab2);
  
    // 체크박스가 선택된 경우에만 API를 호출합니다.
    if (!isCheckedTab2) {
      const memberId = 25;  // 여기에 실제 회원 ID를 설정해야 합니다.
      const token = window.localStorage.getItem("token");  // 토큰을 가져옵니다.
      const url = `https://dev.nangmancat.shop/myDesign/stamp/${memberId}`;
  
      try {
        const response = await axios.get(url, {
          headers: {
            //Authorization: `Bearer ${token}`  // 토큰을 Authorization 헤더에 추가합니다.
            Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g'
          }
        });
  
        if (response.data.isSuccess) {
          console.log(response.data.result);  // result 배열에는 마이디자인 우표 정보가 담겨 있습니다.
        } else {
          console.error('마이디자인 우표 조회에 실패했습니다.');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  // 마이디자인 이미지 상태를 관리하는 state를 만듭니다.
  const [image, setImage] = useState(UploadPlusButton);
  const [preview, setPreview] = useState(null);  // 미리보기 이미지 상태를 추가합니다.
  const [checkedContainer, setCheckedContainer] = useState(null); // 체크 상태를 관리하는 상태 변수를 추가합니다.
  const [isDragActive, setIsDragActive] = useState(false); // 드래그앤드랍
  const fileInputRef = useRef(null);  // 파일 입력 창을 참조하는 ref를 생성합니다.
  const [isImageUploaded, setIsImageUploaded] = useState(false); // 이미지 업로드 상태를 관리하는 상태 변수를 추가합니다.
  const [fileName, setFileName] = useState('');  // 파일 이름을 관리하는 상태
  const handleMouseOver = () => setImage(UploadPlusButtonHover); // 마우스가 올라갔을 때와 나갔을 때 이미지를 변경하는 이벤트 핸들러를 만듭니다.
  const handleMouseOut = () => setImage(UploadPlusButton);

  // 클릭 이벤트 핸들러
  const handlePlusButtonClick = () => {
    // 파일 입력 창을 엽니다.
    fileInputRef.current.click();
  };

const [file, setFile] = useState(null); // File 객체를 저장하는 상태를 추가합니다.

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

    // File 객체를 상태에 저장합니다.
    setFile(file);
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

  const [tabLetters, setTabLetters] = useState([]);

  const fetchLetters = async () => {
    const token = window.localStorage.getItem("token");
    const response = await axios.get('https://dev.nangmancat.shop/my-collection/letter-paper', {
      params: {
        page: currentPageForLetters - 1,
        pageSize: 12,
        onlyMyDesign: isCheckedTab1
      },
      headers: {
        Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g'
      },
    });
  
    if (response.data.isSuccess) {
      console.log(response.data.result); // 응답 데이터를 콘솔에 출력합니다.
      setTabLetters(response.data.result.content);
      setTotalPagesForLetters(response.data.result.totalPages);
    } else {
      console.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchLetters();
    console.log(`Current page is now ${currentPageForLetters}`);
  }, [currentPageForLetters, isCheckedTab1]);

  const [tabStamps, setTabStamps] = useState([]);

  const fetchStamps = async () => {
    const token = window.localStorage.getItem("token");
    const response = await axios.get('https://dev.nangmancat.shop/my-collection/stamp', {
      params: {
        page: currentPageForStamps - 1,
        pageSize: 12,
        onlyMyDesign: isCheckedTab2
      },
      headers: {
        //Authorization: `Bearer ${token}`
        Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g'
      },
    });
  
    if (response.data.isSuccess) {
      console.log(response.data.result); // 응답 데이터를 콘솔에 출력합니다.
      setTabStamps(response.data.result.content);
      setTotalPagesForStamps(response.data.result.totalPages);
    } else {
      console.error(response.data.message);
    }
  };
  
  useEffect(() => {
    fetchStamps();
    console.log(`Current page is now ${currentPageForStamps}`);
  }, [currentPageForStamps, isCheckedTab2]);
  

  const handleSaveClick = async () => {
    const token = window.localStorage.getItem("token");
  
    let formData = new FormData();
    formData.append('img', file); 
  
    // Blob 객체를 생성하여 myDesignRequest를 추가합니다.
    const myDesignRequest = new Blob([JSON.stringify({ name: fileName, member_id: 25 })], {
      type: 'application/json'
    });
    formData.append('myDesignRequest', myDesignRequest);
  
    try {
      const url = checkedContainer === 'letter' ? 'https://dev.nangmancat.shop/myDesign/letter-paper' : 'https://dev.nangmancat.shop/myDesign/stamp';
      const response = await axios.post(url, formData, {
        headers: {
          Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g',
          'Content-Type': 'multipart/form-data'
        },
      });
  
      if (response.data.isSuccess) {
        alert('디자인이 성공적으로 등록되었습니다.');
        fetchLetters();  // 편지지 저장 후 목록을 다시 불러옵니다.
        fetchStamps();
        dispatch(completeMission(6)); // 미션 ID가 1인 미션을 완료하였음을 서버에 알립니다.
      } else {
        alert('디자인 등록에 실패했습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  };


  const [coin, setCoin] = useState(0); // 코인의 값을 저장할 상태를 생성합니다.

  const fetchUserCoin = async () => {
    const token = window.localStorage.getItem('token'); // 로컬 스토리지에서 토큰을 가져옵니다.
  
    try {
      const response = await axios.get('https://dev.nangmancat.shop/store/user-coin', {
        headers: {
          //Authorization: `Bearer ${token}` // 토큰을 Authorization 헤더에 추가합니다.
          Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g'
        },
      });
  
      return response.data.result; // API 응답 결과에서 코인의 값만 반환합니다.
    } catch (error) {
      console.error('Failed to fetch user coin', error);
      return null; // 에러가 발생하면 null을 반환합니다.
    }
  };

  const CoinDisplay = () => {
  
    useEffect(() => {
      const fetchAndSetCoin = async () => {
        const fetchedCoin = await fetchUserCoin(); // 코인을 조회합니다.
        setCoin(fetchedCoin); // 조회한 코인의 값을 상태에 저장합니다.
      };
  
      fetchAndSetCoin();
    }, []);
  };

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
            <CoinCountDiv>{coin}</CoinCountDiv>
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
              {tabLetters && tabLetters.map((letter, index) => (
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
                  {Array.from({ length: totalPagesForLetters }, (_, index) => (
                    <PageButton active={currentPageForLetters === index + 1} key={index + 1}>
                      <PageNumberText
                        active={currentPageForLetters === index + 1}
                        onClick={() => handlePageChange1(index + 1)}
                      >
                        {index + 1}
                      </PageNumberText>
                    </PageButton>
                  ))}
              </PageNumberContainer>
              <NextButtonImg src={다음버튼} alt="다음버튼" onClick={handleNextPage1} />
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
              {tabStamps && tabStamps.map((stamp, index) => (
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
                  {Array.from({ length: totalPagesForStamps }, (_, index) => (
                    <PageButton active={currentPageForStamps === index + 1} key={index + 1}>
                      <PageNumberText
                        active={currentPageForStamps === index + 1}
                        onClick={() => handlePageChange2(index + 1)}
                      >
                        {index + 1}
                      </PageNumberText>
                    </PageButton>
                  ))}
              </PageNumberContainer>
              <NextButtonImg src={다음버튼} alt="다음버튼" onClick={handleNextPage2} />
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
