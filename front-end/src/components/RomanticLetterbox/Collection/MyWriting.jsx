import React, {useState,useEffect} from "react";
import styled from 'styled-components';
import Header from '../../Header/Header';
import twinkle from '../../../assets/img/반짝.svg';
import { useNavigate, useLocation } from "react-router-dom";
import IvoryLetter from '../../../assets/img/IvoryLetter.svg';
import PinkLetter from '../../../assets/img/PinkLetter.svg';
import Heart from '../../../assets/img/heart.svg';
import Good from '../../../assets/img/good.svg';
import Sad from '../../../assets/img/sad.svg';
import Clober from '../../../assets/img/clober.svg';
import Clap from '../../../assets/img/clap.svg';
import Star from '../../../assets/img/starEmoji.svg';

const Container = styled.div`
  box-sizing: border-box;
  width: 1920px; 
  height: 1300px;
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
    width:1050px;
    height:88px;
    left:460px;
    top:130px;
`
const ClickHeader=styled.span`
    color:red;
    position:relative;
    width:400px;
    height:60px;
    padding-bottom:12px;
    padding-left:160px;
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
    padding-left:210px;
    padding-right:172px;
    border-bottom:0.95px solid #CECECE;
    font-weight:200;
    font-family:Pretendard;
    font-size:25px;
    cursor:pointer;
`
const MainContainer=styled.div`
    position:absolute;
    left:460px;
    top:300px;
    width:1090px;
    height:657.7px;
`
const LetterImg=styled.img`
    position:relative;
    width:480px;
    height:566px;
    top:0px;
    left:0px;
`
const Letter=styled.div`
    position:relative;
    display:inline-block;
    width:480px;
    height:566px;
    top:0px;
    left:0px;
    margin-right:25px;
`
const LetterContent=styled.span`
    position:absolute;
    top:88px;
    left:40px;
    right:40px;
    font-weight:500;
    font-family:Gowun Dodum;
    font-size:20px;
`
const From=styled.span`
    position:absolute;
    bottom:40px;
    right:40px;
    font-weight:600;
    font-family:Pretendard;
    font-size:17px;
`
const To=styled.span`
    position:absolute;
    top:40px;
    left:40px;
    font-weight:600;
    font-family:Pretendard;
    font-size:17px;
`
const EmojiBox=styled.div`
    position:absolute;
    bottom:0px;
    right:102px; 
    width:247px;
    height:47.69px;
    border-radius:16px;
    background-color:#FFFFFF;
`
const Emoji=styled.img`
    top:10px;
    position:relative;
    left:15px;
    margin-right:13.8px;
    cursor:pointer;
`

export default function MyWriting() {

    const navigate=useNavigate();
    const location = useLocation();
    const opening=(location.state.openstate).toString();
    
    const [like, setLike]=useState(0); //공감수

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
                {console.log(opening)}
                <OverlapContainer>
                    <MainHeader>
                        <BasicHeader onClick={toCollectionMain}>낭만 모음집</BasicHeader>
                        <ClickHeader onClick={toMyCollection}>나의 낭만 모음집</ClickHeader>
                    </MainHeader>
                    <MainContainer>
                        <Letter>
                            <LetterImg src={PinkLetter} alt="pinkletter" />
                            <LetterContent>오늘은 정말로 힘들었어. 마치 어둠이 내 주위를 감싸고 있는 것 같아서 숨쉬기도 어려웠어. 무거운 어깨에는 고난과 역경의 짐이 실려있었고, 마음은 침체되어 있었어. 모든 것이 조용하고 어둡게 느껴졌어.</LetterContent>
                            <From>별이 좋은 곰돌이가</From>
                        </Letter>
                        <Letter>
                            <LetterImg src={IvoryLetter} alt="ivoryletter" />
                            <To>별이 좋은 곰돌이에게</To>
                            <LetterContent>편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명
                            으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼
                            요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요.편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. 편지는 익명으로 작성돼요. </LetterContent>
                            <From>케이크 만드는 고래가</From>
                        </Letter>
                        { opening === "true" ?
                            <EmojiBox>
                                <Emoji src={Heart} alt='heart' onClick={()=>setLike(like+1)}/>
                                <Emoji src={Good} alt='good'onClick={()=>setLike(like+1)}/>
                                <Emoji src={Sad} alt='sad'onClick={()=>setLike(like+1)}/>
                                <Emoji src={Clober} alt='clober'onClick={()=>setLike(like+1)}/>
                                <Emoji src={Clap} alt='clap'onClick={()=>setLike(like+1)}/>
                                <Emoji src={Star} alt='start'onClick={()=>setLike(like+1)}/>
                            </EmojiBox> : <></>
                        }
                    </MainContainer>  
                </OverlapContainer>
            </Container>
        </div>
    )
}