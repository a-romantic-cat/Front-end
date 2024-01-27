import React, { useState } from 'react';
import styled from 'styled-components';
import Spring from '../../../assets/img/스프링.svg';
import AddressList from './AddressList';
import Next from '../../../assets/img/NextButton.svg';
import Prev from '../../../assets/img/PrevButton.svg';
import SearchForm from '../SearchForm';

const PageContainer = styled.div`
  position: absolute;
  top: 89px;
  left: 0;
  display: inline-flex;
  box-sizing: border-box;
  width: 1078px;
  height: 604px;
`;

const LeftPage = styled.div`
  width: 524px;
  height: 604px;
  background-color: #F5F3E9;
  border-radius: 10px;
`;

const RightPage = styled.div`
  position: absolute;
  right: 0;
  width: 524px;
  height: 604px;
  background-color: #F5F3E9;
  border-radius: 10px;
`;

const SpringImg = styled.img`
  position: absolute;
  width: 104px;
  height: 438px;
  top: 80px;
  right: 487px;
  z-index: 1;
`;
// 우편함 이름, 우편번호 제목 흰박스
const PostInfo = styled.div`
  position: relative;
  display: flex;
  border-radius: 10px 10px 0 0;
  width: 524px;
  height: 58px;
  background-color: #FFF;
  justify-content: center;
  align-items: center;
`;
// 우편함 이름
const PostListName = styled.div`
  position: absolute;
  left: 88px;
  width: 92px;
  height: 24px;
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
  color: #757575;
`;
// 우편번호
const PostListNumber = styled.div`
  position: absolute;
  right: 73px;
  width: 70px;
  height: 24px;
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
  color: #757575;
`;
// 왼쪽 페이지 리스트
const PostListLeft = styled.div`
  box-sizing: border-box;
  width: 487px;
  height: 505px;
  padding: 28px 43px 0px 50px;
`;
// 오른쪽 페이지 리스트
const PostListRight = styled.div`
  margin-left: auto;
  box-sizing: border-box;
  width: 487px;
  height: 505px;
  padding: 28px 43px 0px 50px;
`;

const PageCon = styled.div`
  display: flex;
  position: relative;
  width: 524px;
  height: 41px;
  justify-content: center;
`;

const PageText = styled.div`
  color: #000;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 300;
`;

const NextButton = styled.img`
  position: absolute;
  right: 24px;
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

const PrevButton = styled.img`
  position: absolute;
  left: 24px;
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

const Address = ({ dummyAddress }) => {
  // 드롭 다운 useState
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('가나다순');
  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  // 페이지에 보여줄 리스트를 6개씩 끊어주고 검색 결과 보여주는 코드
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [NameOrPostNum, setNameOrPostNum] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showFindContent, setShowFindContent] = useState(false);

  const filterItems = (searchTerm) => {
    const filtered = dummyAddress.filter(
      (item) =>
        item.NickName.includes(searchTerm) ||
        item.PostNum.includes(searchTerm)
    );
    setSearchResults(filtered);
  };
  // 검색에서 돋보기를 누르던가 엔터 누를때 사용
  const handleSubmit = (e) => {
    e.preventDefault();
    if (NameOrPostNum !== "") {
      filterItems(NameOrPostNum);
      setNameOrPostNum("");
      setShowFindContent(true);
      setCurrentPage(1);
    } else {
      console.log('비었따?');
      setSearchResults([]);
      setShowFindContent(false);
    }
  };
  // 결과값 찾음.
  const handleFInd = (e) => {
    console.log('입력값:', e.target.value);
    setNameOrPostNum(e.target.value);
  };
  // 다음 페이지
  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 2 <= totalPages) ? prevPage + 2 : 1);
  };
  // 이전 페이지
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 2 >= 1) ? prevPage - 2 : totalPages);
  };
  // 전체 페이지를 구해서, 왼쪽 페이지와 오른쪽 페이지에 6개씩 나눠서 보여줌.
  const totalPages = Math.ceil((showFindContent ? searchResults.length : dummyAddress.length) / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const leftPageItems = (showFindContent ? searchResults : dummyAddress).slice(startIdx, endIdx);
  const rightPageItems = (showFindContent ? searchResults : dummyAddress).slice(endIdx, endIdx + itemsPerPage);

  return (
    <div>
      <SearchForm
      // 드롭다운
        isDropdownOpen={isDropdownOpen}
        handleDropdownToggle={handleDropdownToggle}
        selectedOption={selectedOption}
        handleOptionSelect={handleOptionSelect}
        // 검색
        handleFInd={handleFInd}
        NameOrPostNum={NameOrPostNum}
        handleSubmit={handleSubmit}
      />
      <PageContainer>
        <LeftPage>
          <PostInfo style={{ backgroundColor: currentPage === 1 ? '#FFF' : 'transparent' }}>
            <PostListName
              style={{ color: currentPage === 1 ? '#757575' : 'transparent' }}
            >
              우편함 이름
            </PostListName>
            <PostListNumber
              style={{ color: currentPage === 1 ? '#757575' : 'transparent' }}
            >
              우편번호
            </PostListNumber>
          </PostInfo>

          <PostListLeft>
            {console.log("leftPageItems:", leftPageItems)}

            {leftPageItems.map((postInfo) => (
              <AddressList key={`left${postInfo.id}`} postInfo={postInfo} />
            ))}
          </PostListLeft>

          <PageCon>
            <PageText>
              - {currentPage} -
            </PageText>
            {currentPage !== 1 && <PrevButton src={Prev} alt="prevBtn" onClick={handlePrevPage} />}
          </PageCon>
        </LeftPage>

        <SpringImg src={Spring} alt='Spring' />

        <RightPage>
          <PostInfo style={{ backgroundColor: "transparent" }}></PostInfo>
          <PostListRight>
            {console.log("rightPageItems:", rightPageItems)}

            {rightPageItems.map((postInfo) => (
              <AddressList key={`right${postInfo.id}`} postInfo={postInfo} />
            ))}
          </PostListRight>
          <PageCon>
            {rightPageItems.length > 0 && (
              <>
                <PageText>
                  - {currentPage + 1} -
                </PageText>
                {currentPage + 1 !== totalPages && <NextButton src={Next} alt="nextBtn" onClick={handleNextPage} />}
              </>
            )}
          </PageCon>
        </RightPage>
      </PageContainer>
    </div>
  );
};

export default Address;
