import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Namebox=styled.div`
    width: 582px;
    height: 91px;
    left: 650px;
    top: 200px;
    position: absolute;
`
//네임박스 글자수 옵션 추가하기
//한글,영어,숫자로 제한시키기
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
    cursor:pointer;
    width:24px;
    height:24px;
    top:600px;
    left:650px;
    position: absolute;
`
const Alltxt=styled.div`
    width: 80px;
    height: 24px;
    left: 688px;
    top:600px;
    color: #000000;
    font-size: 20px;
    font-family: 'NanumGothic';
    font-weight: 700;
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
const Text = styled.span`
    color: ${props => props.color};
    font-size: 20px;
    font-family: 'Pretendard';
    font-weight: 500;
    word-wrap: break-word;
    height: 24px;
`; 

/*
appearance:none;
    background: ${props => props.checked ? 'black' : 'white'};
*/
const CheckOne=styled.input`
    cursor:pointer;
    width:24px;
    height:24px;
    top:0px;
    left:0px;
    margin-bottom:30px;
    border:1px solid #000000;
`

const SubTxt=styled.span`
    position:absolute;
    color:#727272;
    display:inline-block;
    width: 46px;
    height: 18px;
    margin-left: 10px;
    margin-top: 2.6px;
    padding-bottom: 2.5px;
    font-size: 15px;
    font-family: NanumGothic;
    font-weight: 700;
    letter-spacing:-0.2px;
    border-bottom:1px solid #727272;
    cursor:pointer;
`//자세히 누르고 돌아갔을때 초기화 안시키기
const Button=styled.button`
    cursor:pointer;
    position:absolute;
    width: 378px;
    height: 46px;
    top: 872px;
    left: 771px;
    padding: 10px;
    border-radius: 10px;
    gap: 10px;
    background-color:#000000;
`
const ButtonTxt=styled.div`
    color:white;
    font-size:22px;
    font-family:NanumGothic;
    position:absolute;
    top:8px;
    left:130px;
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

  const navigate = useNavigate();

    const navigateToTerms = () => {
        navigate("/Terms");
    };

    const navigateToMakeLetterbox = () => {
        navigate("/MakeLetterbox", {state:{name:`${name}`}});
    };

    const onSubmit=(e)=>{
        e.preventDefault();
        if(checkItems.length === data.length){
            navigateToMakeLetterbox(name);
        } else{
            return;
        }
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
            <Namebox>
                <InputLogo>닉네임</InputLogo>
                <Inputsub>{'('}내 정보에서 바꿀 수 있어요.{')'}</Inputsub>
                <Input 
                    required
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
                    <div key={key}>
                        <CheckOne type='checkbox' name={`select-${data.id}`}
                        onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                        checked={checkItems.includes(data.id) ? true : false} />
                        <Text color="#C90000">{`(`}필수{`)`}</Text>
                        {data.id === 0 ? <Text color="#000000"> 만 14세 이상이에요.</Text> 
                                : <Text color="#000000"> 이용약관 및 개인정보수집이용 동의</Text>}
                        {data.id === 1 ? <SubTxt onClick={navigateToTerms}>자세히</SubTxt> :<></>}
                    </div>
                ))}
            </SingleCheck>
            <Button><ButtonTxt>계정 만들기</ButtonTxt></Button>
            </form>
        </div>
    )
}