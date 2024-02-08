import React, {useState,useEffect} from "react";
import styled from 'styled-components';
import Header from '../../Header/Header';
import twinkle from '../../../assets/img/반짝.svg';
import { useNavigate } from "react-router-dom";
import IvoryLetter from '../../../assets/img/IvoryLetter.svg';
import PinkLetter from '../../../assets/img/PinkLetter.svg';

const Container = styled.div`
  box-sizing: border-box;
  width: 1920px; 
  height: 2160px;
  position: relative;
  background-image: url(${twinkle}); 
  background-repeat: no-repeat;
  background-color: #081A2F;
`;

const OverlapContainer = styled.div`
  width: 100%;
  height: 980px;
  background-color: rgba(8, 26, 47, 0.61);
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
`;

const MainHeader = styled.div`
    position:absolute;
    width:990px;
    height:88px;
    left:460px;
    top:130px;
`
const ClickHeader=styled.span`
    color:red;
    position:relative;
    width:450px;
    height:60px;
    padding-bottom:12px;
    padding-left:186px;
    padding-right:186px;
    border-bottom:3.8px solid red;
    font-weight:600;
    font-family:Pretendard;
    font-size:25px;
    cursor:pointer;
`
const BasicHeader=styled.span`
    color: #FFF;
    position:relative;
    width:450px;
    height:60px;
    padding-bottom:12px;
    padding-left:170px;
    padding-right:170px;
    border-bottom:0.95px solid #FFF;
    font-weight:180;
    font-family:Pretendard;
    font-size:25px;
    cursor:pointer;
`

export default function MyWriting() {

    const array=[
        { id:0, text:"0다른like:400 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:400, },
        { id:1,text:"1 // like:290 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:290, },
        { id:2,text:"2 // like:300 다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:300,},
        { id:3, text:"3// like:380다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:380,},
        { id:4, text:"4다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:20,},
        { id:5, text:"5다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:150,},
        { id:6, text:"6다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:180,},
        { id:7,text:"7다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:56,},
        { id:8,text:"8다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:175,},
        { id:9, text:"9다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:15, },
        { id:10, text:"10다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:200, },
        { id:11, text:"11다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:80, },
        { id:12,text:"12다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:1, },
        { id:13, text:"13다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:14, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:15, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:16, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:17, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:18, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:19, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:20, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:21, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:22, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:23, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:24, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:25, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:26, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:27, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:28, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:29, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:30, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:31,text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:32,text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:33, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:34, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:35, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:36, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:37, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:38, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:39, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
             like:99, },
        { id:40, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:41, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:42, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:43, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:44, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:45, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:46, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:47, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:48, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:49, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:50, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:51, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:52, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:53, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:54, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:66, },
        { id:55, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:56, text:"56다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:57, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:58, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:59, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:60, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:61, text:"61다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:62, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:63, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:64, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:65, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:66, text:"66다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:67, text:"67다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:68, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:69, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:70, text:"70다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:71, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:72, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
        { id:73, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, },
    ]

    const navigate=useNavigate();

    const toCollectionMain = () => {
        navigate("/CollectionMain");
    };
    const toMyCollection = () => {
        navigate("/MyCollection");
    };


    return(
        <div>
            <Container>
                <Header />
                <OverlapContainer>
                    <MainHeader>
                        <BasicHeader onClick={toCollectionMain}>낭만 모음집</BasicHeader>
                        <ClickHeader onClick={toMyCollection}>나의 낭만 모음집</ClickHeader>
                    </MainHeader>
                    
                </OverlapContainer>
            </Container>
        </div>
    )
}