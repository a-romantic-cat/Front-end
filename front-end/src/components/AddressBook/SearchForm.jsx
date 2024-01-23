import React from "react";
import styled from 'styled-components';
import Under from '../../assets/img/Under.svg';
import { IoSearch } from 'react-icons/io5';

// 주소록과 친한친구 탭에서 사용할 검색
const FormContainer = styled.div`
  position: relative;
  top: 0;
  width: 1078px;
  height: 89px;
  display: inline-flex;
`;
const SearchInput = styled.input`
  position: absolute;
  border-radius: 30px;
  border: 1.5px solid #000;
  box-sizing: border-box;
  width: 378px;
  height: 54px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  outline:none;
  padding: 18px 25px;
  padding-right: 40px;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
  color: #000;
    ::placeholder {
      color: #757575;
    }
`;
const SearchButton = styled.button`
  position: absolute;
  top: 16px;
  left: 335px;
  font-size: 18px;
  color: #000;
  border: none;
  background: none;
  cursor: pointer;
`;
const SortContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 156px;
  height: 33px;
  background: #FFF;
  border: 1.5px black solid;
  cursor: pointer; 
  position: absolute;
  bottom: 35px;
  right: 0;
`;

const SortText = styled.div`
  position: absolute;
  left: 13px;
  top: 6.5px;
  color: black;
  font-size: 15px;
  font-family: Pretendard;
  font-weight: 400;
  word-wrap: break-word;
`;

const UnderImg = styled.img`
  position: absolute;
  top: 9px;
  right: 12px;
  width: 13.86px;
  height: 12px;
`

//드롭다운 내용
const OptionContainer = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: flex-start;
  display: inline-flex;
  top: 53px;
  right: 0;
  cursor: pointer; 
  width: 156px;
  height: 33px;
  z-index: 2;
`;

const Option1 = styled.div`
  align-self: stretch;
  flex: 1 1 0;
  padding: 6.5px 13px;
  background: ${({ selectedOption }) => (selectedOption ? '#E5E5E5' : 'white')};
  border: 1px solid black;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const Option2 = styled.div`
  align-self: stretch;
  flex: 1 1 0;
  padding: 6.5px 13px;
  background: ${({ selectedOption }) => (selectedOption ? '#E5E5E5' : 'white')};
  border: 1px black solid;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;
const Option3 = styled.div`
  align-self: stretch;
  flex: 1 1 0;
  padding: 6.5px 13px;
  background: ${({ selectedOption }) => (selectedOption ? '#E5E5E5' : 'white')};
  border: 1px black solid;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;
const Option4 = styled.div`
  align-self: stretch;
  flex: 1 1 0;
  padding: 6.5px 13px;
  background: ${({ selectedOption }) => (selectedOption ? '#E5E5E5' : 'white')};
  border: 1px black solid;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;
const Option5 = styled.div`
  align-self: stretch;
  flex: 1 1 0;
  padding: 6.5px 13px;
  background: ${({ selectedOption }) => (selectedOption ? '#E5E5E5' : 'white')};
  border: 1px black solid;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const OptionText = styled.div`
  color: black;
  font-size: 15px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 15px;
  word-wrap: break-word;
`;

const SearchForm = ({
  isDropdownOpen,
  handleDropdownToggle,
  selectedOption,
  handleOptionSelect,
  handleFInd,
  NameOrPostNum,
  handleSubmit}) => {
  return (
    <div>
      <FormContainer>
      <form onSubmit={handleSubmit}>
        <SearchInput
          value={NameOrPostNum}
          type="text"
          placeholder="닉네임 또는 #우편번호로 검색"
          onChange={handleFInd}
        />
        <SearchButton type='submit'>
            <IoSearch />
          </SearchButton>

        <SortContainer onClick={handleDropdownToggle}>
          <SortText>{selectedOption}</SortText>
          {/* 선택한 옵션 표시 */}
          <UnderImg src={Under} alt='Under' />
        </SortContainer>
        {isDropdownOpen && (
          <OptionContainer>
            <Option1 onClick={() => handleOptionSelect('가나다순')} selectedOption={selectedOption === '가나다순'}>
              <OptionText>
                가나다순
              </OptionText>
            </Option1>
            <Option2 onClick={() => handleOptionSelect('정렬기준')} selectedOption={selectedOption === '정렬기준'}>
              <OptionText>
                정렬기준
              </OptionText>
            </Option2>
            <Option3 onClick={() => handleOptionSelect('우편번호순')} selectedOption={selectedOption === '우편번호순'}>
              <OptionText>
                우편번호순
              </OptionText>
            </Option3>
            <Option4 onClick={() => handleOptionSelect('최근 친구순')} selectedOption={selectedOption === '최근 친구순'}>
              <OptionText>
                최근 친구순
              </OptionText>
            </Option4>
            <Option5 onClick={() => handleOptionSelect('오래된 친구순')} selectedOption={selectedOption === '오래된 친구순'}>
              <OptionText>
                오래된 친구순
              </OptionText>
            </Option5>
          </OptionContainer>
        )}
        </form>
      </FormContainer>
      
    </div>
  );
};
 
export default SearchForm;