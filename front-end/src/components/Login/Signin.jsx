import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Namebox=styled.div`
    width: 582px;
    height: 91px;
    left: 650px;
    top: 200px;
    position: absolute;
`

const Emailbox=styled.div`
    width: 582px;
    height: 91px;
    left: 650px;
    top: 350px;
    position: absolute;
`

const InputLogo = styled.div`
  left:0px;
  top: 0px;
  position: absolute;
  color: black;
  font-size: 22px;
  font-family: Pretendard;
  font-weight: 500;
`;
const Inputsub=styled.div`
    width: 170px;
    height: 17px;
    left: 67px;
    top:9px;
    color: #AEAEAE;
    font-size: 14px;
    font-family: Pretendard;
    font-weight: 300;
    position: absolute;
`
const Input=styled.input`
    width: 582px;
    height: 56px;
    left: 0px;
    top:35px;
    border-radius:12px;
    border:1px solid #727272;
    position: absolute;
`
const CheckAll=styled.input`
    width:24px;
    height:24px;
    top:600px;
    left:650px;
    position: absolute;
`
const Alltxt=styled.div`
    width: 80px;
    height: 24px;
    left: 685px;
    top:600px;
    color: #000000;
    font-size: 20px;
    font-family: NanumGothic;
    font-weight: 549.5;
    position: absolute;
    letter-spacing:-0.2px;
`
const SingleCheck=styled.div`
    position: absolute;
    width: 582px;
    left:650px;
    height:300px;
    top:650px;
    padding-top:50px;
    border-top:1px solid #727272;
`
const RequiredTxt=styled.div`
    width: 582px;
    height: 24px;
    left: 750px;
    top:650px;
    color: #000000;
    font-size: 20px;
    font-family: NanumGothic;
    font-weight: 549.5;
    letter-spacing:-0.2px;
`
const CheckOne=styled.input`
    appearance:none;
    background: ${props => props.checked ? 'black' : 'white'};
    width:24px;
    height:24px;
    top:0px;
    left:0px;
    margin-bottom:20px;
    border-radius:0px;
    border:1px solid #000000;
`

export default function Signin(){

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const data = [ {id: 0},{id: 1}];
    
    const [checkItems, setCheckItems] = useState([]);

    const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if(checked) {
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }
    else {
      setCheckItems([]);
    }
  }

    return(
        <div>
            <Namebox>
                <InputLogo>닉네임</InputLogo>
                <Inputsub>{'('}내 정보에서 바꿀 수 있어요.{')'}</Inputsub>
                <Input 
                    type="text"
                    placeholder=" 한글, 영어, 숫자만 사용할 수 있어요"
                    value={name}
                    onChange={(event)=>{
                        setName((event.target.value));
                    }}
                />
            </Namebox>
            <Emailbox>
                <InputLogo>이메일{'('}선택{')'}</InputLogo>
                <Input 
                    required
                    type="text"
                    placeholder=" xxxx@xxx.com"
                    value={email}
                    onChange={(event)=>{
                        setEmail((event.target.value));
                    }}
                />
            </Emailbox>
            <CheckAll type='checkbox' name='select-all'
              onChange={(e) => handleAllCheck(e.target.checked)}
              checked={checkItems.length === data.length ? true : false} />
            <Alltxt>전체동의</Alltxt>
            <SingleCheck>
                {data.map((data, key) => (
                    <tr key={key}>
                        <CheckOne type='checkbox' name={`select-${data.id}`}
                        onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                        checked={checkItems.includes(data.id) ? true : false} />
                        <div>{data.id === 0 ? <RequiredTxt>리액트입니다.</RequiredTxt> 
                                : <RequiredTxt>리액트가 아닙니다</RequiredTxt>}</div>
                    </tr>
                ))}
            </SingleCheck>
        </div>
    )
}