import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
//입력안할시 다음으로 안넘길 것인지

const Title=styled.div`
    position:absolute;
    width: 1500px;
    height: 54px;
    top: 105px;
    left: 363px;
`
const Text = styled.span`
    color: ${props => props.color};
    font-size: 45px;
    font-family: 'Pretendard';
    font-weight: 400;
    word-wrap: break-word;
`
const SubText=styled.div`
    color: #757575;
    font-family: 'Pretendard';
    font-size: 20px;
    margin-top:20px;
`
const RedLine=styled.div`
    width:796px;
    margin-top:40px;
    border-top:5px solid #C90000;
`
const BlackLine=styled.div`
    position:absolute;
    margin-left:796px;
    top:98.5px;
    width:398px;
    margin-top:40px;
    border-top:1px solid #000000;
`
const Backtxt=styled.div`
    position:absolute;
    font-family:'Pretendard';
    font-size:30px;
    width: 150px;
    height: 36px;
    top: 942px;
    left: 241px;
    cursor: pointer;
`
const Nexttxt=styled.div`
    position:absolute;
    font-family:'Pretendard';
    font-size:30px;
    width: 150px;
    height: 36px;
    top: 942px;
    left:1557px;
    cursor: pointer;
`
const NameBox=styled.div`
    width: 796px;
    height: 71px;
    left: 363px;
    top: 293px;
    position: absolute;
`
const Input=styled.input`
    width: 796px;
    height: 71px;
    left: 0px;
    top:0px;
    border-radius:20px;
    border:1px solid #000;
    position: absolute;

    &::placeholder{
        padding-left:25px;
        color:#7575725;
        weight:400;
        font-family:Pretendard;
        font-size:22px
    }
    &:focus {
        padding-left:25px;
        color:#000;
        weight:400;
        font-family:Pretendard;
        font-size:22px
    }
    &:valid {
        padding-left:25px;
        color:#000;
        weight:400;
        font-family:Pretendard;
        font-size:22px
    }
`
const Count=styled.span`
    position:absolute;
    color:#727272;
    weight:500;
    font-family:Pretendard;
    font-size:20px;
    right:29px;
    top:24px;
`
export default function BoxSetting1() {

    const [boxname,setBoxname]=useState("");
    const [length, setLength]=useState(0);
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    };

    const navigateNext = () => {
        navigate("/BoxSetting2");
    };

    const onInputHandler = (e) => {
        setLength(e.target.value.length);
    };

    return(
        <div>
            <Title>
                <Text color="#000000">내 우편함의 </Text>
                <Text color="#C90000">이름</Text>
                <Text color="#000000">을 적어주세요.</Text>
                <SubText>내 정보에서 언제든지 바꿀 수 있어요.</SubText>
                <BlackLine/>
                <RedLine/>
            </Title>
            <NameBox>
                <Input 
                    required
                    type="text"
                    placeholder="ex. 23번째 생일 편지함, 1주년 기념 편지"
                    value={boxname}
                    onChange={(event)=>{
                        setBoxname((event.target.value));
                        onInputHandler(event);
                    }}
                    minlength="1"
                    maxlength="32"
                />
                <Count>{`(`}{length}/32{`)`}</Count>
            </NameBox>
            <Backtxt onClick={navigateBack}>{`<`} 이전으로</Backtxt>
            <Nexttxt onClick={navigateNext}>다음으로 {`>`}</Nexttxt>
        </div>
    )
}