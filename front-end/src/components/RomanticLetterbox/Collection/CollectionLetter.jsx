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
    width:450px;
    height:60px;
    padding-bottom:12px;
    padding-left:225px;
    padding-right:150px;
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
    padding-left:172px;
    padding-right:170px;
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

export default function MyWriting() {

    const navigate=useNavigate();
    const [like, setLike]=useState(0); //공감수

    const location = useLocation();
    const lettertxt=(location.state.lettertext).toString();
    const letterrep=(location.state.letterreply).toString();
    const plusing=Number((location.state.likecounting).toString());

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
                        <ClickHeader onClick={toCollectionMain}>낭만 모음집</ClickHeader>
                        <BasicHeader onClick={toMyCollection}>나의 낭만 모음집</BasicHeader>
                        <SubText>다른 이들의 낭만 편지와 답장을 둘러보세요.</SubText>
                    </MainHeader>
                    <MainContainer>
                        <Letter>
                            <LetterImg src={PinkLetter} alt="pinkletter" />
                            <LetterContent>{lettertxt}</LetterContent>
                            <From>별이 좋은 곰돌이가</From>
                        </Letter>
                        <Letter>
                            <LetterImg src={IvoryLetter} alt="ivoryletter" />
                            <To>별이 좋은 곰돌이에게</To>
                            <LetterContent>{letterrep}</LetterContent>
                            <From>케이크 만드는 고래가</From>
                        </Letter>
                            <EmojiBox>
                                <Emoji src={Heart} alt='heart' onClick={()=>setLike(like+1)}/>
                                <Emoji src={Good} alt='good'onClick={()=>setLike(like+1)}/>
                                <Emoji src={Sad} alt='sad'onClick={()=>setLike(like+1)}/>
                                <Emoji src={Clober} alt='clober'onClick={()=>setLike(like+1)}/>
                                <Emoji src={Clap} alt='clap'onClick={()=>setLike(like+1)}/>
                                <Emoji src={Star} alt='start'onClick={()=>setLike(like+1)}/>
                            </EmojiBox> 
                    </MainContainer>  
                </OverlapContainer>
            </Container>
        </div>
    )
}

//증가된 좋아요 수 main페이지에 반영하기
//api연결