import React, { useState } from 'react';
import styled from 'styled-components';
import letterboxRed from "../../assets/img/내우체통_Red.svg";
import letterboxPink from "../../assets/img/내우체통_Pink.svg";
import letterboxGreen from "../../assets/img/내우체통_Green.svg";
import letterboxBlue from "../../assets/img/내우체통_Blue.svg";
import letterboxPurple from "../../assets/img/내우체통_Purple.svg";
import { useLocation, useNavigate } from 'react-router-dom';

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
const SubLetterbox=styled.div`
    position:absolute;
    left: 448px;
    margin-top:200px;
    top: 502px;
    width: 1000px;
    height: 203px;
`
const MainLetterbox=styled.div`
    position:absolute;
    width: 168.19px;
    height: 274.88px;
    top: 331px;
    left: 882.7px;
`
const MainImg=styled.img`
    width: 168.187px;
    height: 274.881px;
    flex-shrink: 0;
`
const Smallbox=styled.span`
    position:relative;
    display:inline-block;
    margin-right:0px;
    margin-left:33px;
    width: 166.3px;
    height: 211px;
    background-image: url("data:image/svg+xml,%3Csvg width='168' height='211' viewBox='0 0 168 211' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d_2368_6862)'%3E%3Crect x='4' width='160' height='203' rx='20' fill='%23FDFDDC'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d_2368_6862' x='0' y='0' width='168' height='211' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='4'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2368_6862'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_2368_6862' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E");
`
const Img=styled.img`
    cursor:pointer;
    width: 97.5px;
    height: 159.36px;
    margin-left:36px;
    margin-top:24px;
`
export default function MakeLetterbox(){

    const colorList = {
        img1 : letterboxRed,
        img2 : letterboxPink,
        img3 : letterboxGreen,
        img4 : letterboxBlue,
        img5 : letterboxPurple
    }

    const [mainImg, setMainImg]=useState(colorList.img1);

    const location=useLocation();
    const name=location.state.name;

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    };

    const navigateNext = () => {
        navigate("/BoxSetting1");
    };

    const ChangeColor=(props)=>{
        setMainImg(props);
    }

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
            <MainLetterbox><MainImg src={mainImg} alt='mainbox'/></MainLetterbox> 
            <SubLetterbox>
                <Smallbox><Img src={colorList.img1} alt='letterbox' onClick={()=>{ChangeColor(colorList.img1)}}/></Smallbox>
                <Smallbox><Img src={colorList.img2} alt='letterbox' onClick={()=>{ChangeColor(colorList.img2)}}/></Smallbox>
                <Smallbox><Img src={colorList.img3} alt='letterbox' onClick={()=>{ChangeColor(colorList.img3)}}/></Smallbox>
                <Smallbox><Img src={colorList.img4} alt='letterbox' onClick={()=>{ChangeColor(colorList.img4)}}/></Smallbox>
                <Smallbox><Img src={colorList.img5} alt='letterbox' onClick={()=>{ChangeColor(colorList.img5)}}/></Smallbox>
            </SubLetterbox>
            <Backtxt onClick={navigateBack}>{`<`} 이전으로</Backtxt>
            <Nexttxt onClick={navigateNext}>다음으로 {`>`}</Nexttxt>
        </div>
    )
}