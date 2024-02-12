import React, {useState,useEffect} from "react";
import styled from 'styled-components';
import Header from '../../Header/Header';
import { useNavigate, useLocation } from "react-router-dom";
import twinkle from '../../../assets/img/반짝.svg';
import LetterPaper from '../../../assets/img/편지지.svg';
import Heart from '../../../assets/img/heart.svg';

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
    width:1010px;
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
    padding-left:210px;
    padding-right:172px;
    border-bottom:3.8px solid red;
    font-weight:600;
    font-family:Pretendard;
    font-size:25px;
    cursor:pointer;
`
const BasicHeader=styled.span`
    color: #CECECE;
    position:relative;
    width:450px;
    height:60px;
    padding-bottom:12px;
    padding-left:160px;
    padding-right:175px;
    border-bottom:0.95px solid #CECECE;
    font-weight:200;
    font-family:Pretendard;
    font-size:25px;
    cursor:pointer;
`
const SubText=styled.div`
    position:absolute;
    left:0px;
    top:45px;
    font-family:Pretendard;
    font-size:14px;
    color:white;
    padding-top:15px;
    font-weight:180;
`
const ArrayBtn=styled.span`
    color: #757575;
    position:relative;
    top:50px;
    width:52.58px;
    cursor:pointer;
    left:890px;
    background-color: #CECECE;
    margin-right:4px;
    padding:5.3px;
    font-size:14px;
    font-family:Pretendard;
    font-weight:400;
`
const ClickedBtn=styled.span`
    color: #C90000;
    font-weight:400;
    position:relative;
    width:52.58px;
    top:50px;
    cursor:pointer;
    left:890px;
    background-color: #FFF;
    margin-right:4px;
    padding:5.3px;
    font-size:14px;
    font-family:Pretendard;
`
const MainBox=styled.div`
    position:absolute;
    width:1200px;
    height:1404px;
    left:465px;
    top:260px;
`
const LetterBox=styled.div`
    position:relative;
    display:inline-block;
    margin-right:80px;
    margin-bottom:100px;
    width:275px;
    height:275px;
    cursor:pointer;
`
const ShowReply=styled.div`
    position:absolute;
    top:0px;
    background-color: #000000;
    opacity:75%;
    width:99%;
    height:99.5%;
    border: 1px solid white;
    border-radius:8px;
`
const Reply=styled.span`
    color:#FFF;
    top:40%;
    left:8%;
    right:8%;
    font-family: 'Gowun Dodum';
    font-weight:10;
    position: absolute;
    font-size: 16px;
    line-height: 165%;
    display: -webkit-inline-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-align:center;
`
const LikeCnt=styled.div`
    position: absolute;
    background-color:white;
    width:58px;
    height:20px;
    right:8%;
    bottom:8%;
    text-align:right;
    padding-top:1.0px;
    padding-bottom:2px;
    padding-right:7px;
    border-radius:10px;
    color:#000000;
    font-size:16px;
    font-family:Pretendard;
`
const LikeImg=styled.img`
    position: absolute;
    width:16px;
    height:16px;
    right:22.5%;
    bottom:9.3%;
`
const LetterPad=styled.img`
    width:275px;
    height:275px;
`
const LetterTxt = styled.div`
  font-family: 'Gowun Dodum';
  font-weight:400;
  position: absolute;
  font-size: 16px;
  color: #000000;
  line-height: 165%;
  top:15%;
  left:9%;
  right:9%;
  display: -webkit-inline-box ;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`
const Page=styled.div`
    position:absolute;
    width: 270px;
    left:800px;
    bottom:-900px;
`
const PageNumber=styled.span`
    position:relative;
    color: ${props => props.color};
    padding: 4.8px 13px 4.8px 13px;
    margin-left:20px;
    font-size:24px;
    font-family:Pretendard;
    font-weight:Medium;
    cursor:pointer;
`
const BeforeBtn=styled.span`
    position:absolute;
    color: white;
    top:-2px;
    left:-40px;  
    font-size:24px; 
    font-family:Pretendard;
    font-weight:Medium;
    cursor:pointer;
`
const AfterBtn=styled.span`
    font-size:24px;
    position:absolute;
    color: white;
    top:-2px;
    right:-80px;   
    font-family:Pretendard;
    font-weight:Medium;
    cursor:pointer;
`

export default function CollectionMain() {

    const array = [
        { id:0, like:400,text:"0다른like:400 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
             reply:"답장이다"},
        { id:1,text:"1 // like:290 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:290, reply:"답장이다"},
        { id:2,text:"2 // like:300 다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:300, reply:"답장이다"},
        { id:3, text:"3// like:380다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:380,  reply:""},
        { id:4, text:"4다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:20,  reply:"다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요."},
        { id:5, text:"5다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:150, reply:"다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요."},
        { id:6, text:"6다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:180, reply:"답장이다"},
        { id:7,text:"7다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:56, reply:"답장이다"},
        { id:8,text:"8다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:175, reply:"답장이다"},
        { id:9, text:"9다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:15, reply:"답장이다"},
        { id:10, text:"10다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:200, reply:"답장이다"},
        { id:11, text:"11다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:80, reply:"답장이다"},
        { id:12,text:"12다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:1, reply:"답장이다"},
        { id:13, text:"13다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:14, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:15, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:16, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:17, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:18, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:19, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:20, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:21, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:22, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:23, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:24, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:25, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:26, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:27, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:28, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:29, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:30, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:31,text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:32,text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:33, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:34, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:35, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:36, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:37, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:38, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:39, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
             like:99, reply:"답장이다"},
        { id:40, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:41, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:42, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:43, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:44, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:45, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:46, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:47, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:48, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:49, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:50, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:51, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:52, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:53, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:54, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:66, reply:"답장이다"},
        { id:55, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:56, text:"56다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:57, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:58, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:59, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:60, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:61, text:"61다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:62, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:63, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:64, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:65, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:66, text:"66다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:67, text:"67다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:68, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:69, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:70, text:"70다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:71, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:72, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
        { id:73, text:"14다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:99, reply:"답장이다"},
    ]

    const location=useLocation();
    const [toggle, setToggle]=useState(false);
    const [dummyList, setDummyList]=useState(array);
    
    useEffect(()=>{ //처음 랜더링 시
        const user=JSON.parse(localStorage.getItem("users")) || [];

        if(location.state&&location.state.change){
            if(user.length!=0){
                setDummyList(user);
            } else{
                setDummyList(array);
            }
        }
    },[]);
    
    useEffect(()=>{ 
        const user=JSON.parse(localStorage.getItem("users")) || [];
        if(user.length!=0){
            onchange();
        } else {
            setDummyList(array);
        }
    },[location.state]);

    const onchange=()=>{
        setToggle(true);
    };

    useEffect(()=>{
        setDummyList(JSON.parse(localStorage.getItem("users")) || []);
        console.log(dummyList);  
    }, [toggle]);

    const [likebtn, setLikebtn]=useState(true);
    const [recentbtn, setRecentbtn]=useState(false);
    const [sortedArray, setSortedArray]=useState(dummyList.sort((a, b) => b.like - a.like));

    const [nowPage, setNowPage]=useState(1);
    const [nowItem,setNowItem]=useState([...sortedArray.slice(0,12)]);
    const MaxPage=Math.ceil(array.length/12);  
    const PageArray= [...Array(MaxPage)].map((v,i)=>i+1);

    useEffect(()=>{
        setSortedArray(dummyList.sort((a, b) => b.like - a.like));
    }, [dummyList]);

    useEffect(()=>{
        setNowItem([...sortedArray.slice((nowPage-1)*12,(nowPage-1)*12+12)]);
    }, [nowPage, recentbtn,dummyList]);

    const navigate = useNavigate();

    const toMyCollection = () => {
        navigate("/MyCollection");
    };

    const [hoveredCart, setHoveredCart] = useState(-1);

    const showCartHandler = (i)=>{
        setHoveredCart(i);
    }

    const hideCartHandler=()=>{
       setHoveredCart(-1)
    }
    /*
    useEffect(() => {
        if (location.state && location.state.newList) {
            setDummyList(JSON.parse(localStorage.getItem("users")) || []);
        }
      });

    const onChange=()=>{
        setDummyList(JSON.parse(localStorage.getItem("users")) || []);
    };*/

    return(
        <div>
            <Container>
                <Header />
                <OverlapContainer>
                    <MainHeader>
                        <ClickHeader >낭만 모음집</ClickHeader>
                        <BasicHeader onClick={toMyCollection}>나의 낭만 모음집</BasicHeader>
                        <SubText>다른 이들의 낭만 편지와 답장을 둘러보세요.</SubText>
                        {likebtn==false?
                            <ArrayBtn onClick={e=> {setLikebtn(true); setRecentbtn(false);setSortedArray(dummyList.sort((a, b) => b.like - a.like));}}>추천순</ArrayBtn>
                            :<ClickedBtn>추천순</ClickedBtn>}
                        {recentbtn==false? 
                            <ArrayBtn onClick={e=>{setLikebtn(false); setRecentbtn(true);setSortedArray(array.sort((a, b) => a.id - b.id));}}>최신순</ArrayBtn>
                            :<ClickedBtn>최신순</ClickedBtn>}
                    </MainHeader>
                    <MainBox >
                        {nowItem.map((item) => (
                            <LetterBox key={item.id}
                            onMouseOver={()=>showCartHandler(item.id)}
                            onMouseOut={hideCartHandler}
                            onClick={()=>navigate("/CollectionLetter",{state: {propsList: JSON.stringify(dummyList), index: `${item.id}`}})}>
                                <LetterPad src={LetterPaper} alt='letterpaper'/>
                                <LetterTxt >
                                    {item.text}
                                </LetterTxt>
                                {item.id===hoveredCart?
                                    <ShowReply>
                                        {item.reply==""?
                                            <Reply>곧 답장이 도착할 거예요 :{`)`}</Reply>
                                        : <Reply>{item.reply}</Reply>}
                                        <LikeCnt>{item.like}</LikeCnt>
                                        <LikeImg src={Heart} alt='heart' />
                                    </ShowReply> :<></>}
                            </LetterBox>
                        ))}
                    </MainBox>
                    <Page>
                        {Math.ceil(nowPage/5)===1?<></>:
                            <BeforeBtn onClick={e=>setNowPage((e)=>e-1)}>{`<`}</BeforeBtn>}
                        {[PageArray.slice((Math.ceil(nowPage/5)-1)*5, (Math.ceil(nowPage/5)-1)*5+5)]
                            .map((item)=>(
                                item.map((i)=>(
                                    i==nowPage ? 
                                    <PageNumber key={i} color="red" style={{border:"0.3px solid red"}}>
                                        {i}
                                    </PageNumber>
                                    :
                                    <PageNumber key={i} color="white" onClick={e=>setNowPage(Number(e.target.textContent))}>
                                        {i}
                                    </PageNumber>
                                )) 
                        ))} 
                        {Math.ceil(nowPage/5)==Math.ceil(MaxPage/5)?<></>:
                            <AfterBtn onClick={e=>setNowPage((e)=>e+1)}>{`>`}</AfterBtn>}
                    </Page>
                </OverlapContainer>
            </Container>
        </div>
    )
}
//&& setPlus((location.state.likecnt).toString())}>
