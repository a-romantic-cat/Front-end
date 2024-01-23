import React, { useState } from 'react';
import styled from 'styled-components';
import letterbox from "../../assets/img/내우체통_Red.svg";
import { useLocation, useNavigate } from 'react-router-dom';

const Title=styled.div`
    position:absolute;
    width: 800px;
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
`;

const SubText=styled.div`
    color: #757575;
    font-family: 'Pretendard';
    font-size: 20px;
    margin-top:20px;
`
const RedLine=styled.div`
    width:398px;
    margin-top:40px;
    border-top:5px solid #C90000;
`
const BlackLine=styled.div`
    position:absolute;
    margin-left:398px;
    top:99px;
    width:796px;
    margin-top:40px;
    border-top:1px solid #000000;
`
const MainLetterbox=styled.div`
    position:absolute;
    width: 168.19px;
    height: 274.88px;
    top: 331px;
    left: 876px;
`
const Backtxt=styled.div`
    position:absolute;
    font-family:'Pretendard';
    font-size:30px;
    width: 200px;
    height: 36px;
    top: 942px;
    left: 241px;
    cursor: pointer;
`
export default function MakeLetterbox(){

    const location=useLocation();
    const name=location.state.name;

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    };

    return(
        <div>
            <Title>
                <Text color="#C90000">{name}</Text>
                <Text color="#000000">님의 </Text>
                <Text color="#C90000">우편함</Text>
                <Text color="#000000">을 만들어보세요.</Text>
                <SubText>이후에 변경할 수 없어요.</SubText>
                <BlackLine/>
                <RedLine/>
            </Title>
            <MainLetterbox><img src={letterbox} alt='letterbox'/></MainLetterbox> 
            
            <Backtxt onClick={navigateBack}>{`<`} 이전으로</Backtxt>
        </div>
    )
}