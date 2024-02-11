import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Namebox=styled.div`
    width: 582px;
    height: 91px;
    left: 650px;
    top: 200px;
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

    &::placeholder{
        padding-left:12px;
        color:#AEAEAE;
        weight:400;
        font-family:Pretendard;
        font-size:16px;
        letter-spacing: -0.2px;
    }
    &:focus {
        padding-left:12px;
        color:#000;
        weight:400;
        font-family:Pretendard;
        font-size:18px;
        letter-spacing: -0.2px;
    }
    &:valid {
        padding-left:12px;
        color:#000;
        weight:400;
        font-family:Pretendard;
        font-size:18px;
        letter-spacing: -0.2px;
    }
`
const Count=styled.span`
    position:relative;
    color:#727272;
    weight:400;
    font-family:Pretendard;
    font-size:18px;
    margin-left:528px;
    top:55px;
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
const CheckAll=styled.input`
    appearance:none;
    background-color:#FFFFFF;
    border-radius:0px;
    border: 1px solid #000000;
    cursor:pointer;
    width:24px;
    height:24px;
    top:450px;
    left:650px;
    position: absolute;

    &:checked {
        border:0px;
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='23' height='23' fill='black' stroke='black'/%3E%3Cpath d='M7 12.5L10.5 15.5L17.5 9' stroke='white' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
      }
`
const Alltxt=styled.div`
    width: 80px;
    height: 24px;
    left: 687px;
    top:453px;
    color: #000000;
    font-size: 20px;
    font-family: Pretendard;
    font-weight: 400;
    position: absolute;
    letter-spacing:-0.2px;
`
const SingleCheck=styled.div`
    position: absolute;
    width: 582px;
    left:650px;
    height:300px;
    top:510px;
    padding-top:12px;
    border-top:1px solid #727272;
`
const Text = styled.span`
    color: ${props => props.color};
    font-size: 20px;
    font-family: 'Pretendard';
    font-weight: 400;
    word-wrap: break-word;
`
const CheckOne=styled.input`
    appearance:none;
    background-color:#FFFFFF;
    border-radius:0px;
    border: 1px solid #000000;
    cursor:pointer;
    position:relative;
    width:24px;
    height:24px;
    top:35px;
    left:0px;
    margin-bottom:30px;

    &:checked {
        border:0px;
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='23' height='23' fill='black' stroke='black'/%3E%3Cpath d='M7 12.5L10.5 15.5L17.5 9' stroke='white' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
      }
`
const SubTxt=styled.span`
    position:absolute;
    color:#727272;
    display:inline-block;
    width: 39px;
    height: 18px;
    margin-left: 6px;
    margin-top: 42px;
    padding-bottom: 0px;
    font-size: 15px;
    font-family: Pretendard;
    font-weight: 300;
    border-bottom:0.8px solid #727272;
    cursor:pointer;
`
//자세히 누르고 돌아갔을때 초기화 안시키기
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
    color:#FFFFFF;
    font-size:22px;
    font-family:Pretendard;
    position:absolute;
    top:8px;
    left:135px;
    weight:500;
`

export default function Signin(){

    const [name, setName]=useState("");
    const [length, setLength]=useState(0); 
    const data = [ {id: 0},{id: 1}];
    //const authorInput=useRef();
    
    useEffect(()=>{
        const storedName=localStorage.getItem('Name');
        if(storedName){
            setName(storedName);
        }
        localStorage.setItem("Name", name);
    },[]);


    const onInputHandler = (e) => {
        setLength(e.target.value.length);
      };
    
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
        localStorage.setItem("Name",name);
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
                    placeholder="한글, 영어, 숫자만 사용할 수 있어요."
                    type="text"
                    value={name}
                    onChange={(event)=>{
                        setName((event.target.value));
                        onInputHandler(event);
                    }}
                    pattern="^[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{1,20}$"
                    minlength="1"
                    maxlength="20"
                />
                <Count>{`(`}{length}/20{`)`}</Count>
            </Namebox>
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
                        <Text color="#C90000">{` (`}필수{`)`}</Text>
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