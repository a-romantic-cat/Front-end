import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import Header from '../../Header/Header';
import twinkle from '../../../assets/img/반짝.svg';
import LetterPaper from '../../../assets/img/편지지.svg';
import { useNavigate } from "react-router-dom";
import PrivateImg from '../../../assets/img/Unopen.svg';
import WritingImg from '../../../assets/img/내가쓴편지.svg';
import WritingImgWhite from '../../../assets/img/내가쓴편지2.svg';
import ReplyingImg from '../../../assets/img/내가답장한편지.svg';
import ReplyingImgRed from '../../../assets/img/내가답장한편지2.svg';

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
    width:1020px;
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
const HeaderLine=styled.div`
    position:absolute;
    margin-left:396px;
    top:118px;
    width:590px;
    margin-top:44px;
    border-top:0.5px solid #757575;
`
const Writing=styled.div`
    display:inline-block;
    color: ${props => props.color};
    position:relative;
    top:80px;
    border-top: 0.5px solid ${props => props.bordercolor};
    border-left: 0.5px solid ${props => props.bordercolor};
    border-bottom: 0.5px solid ${props => props.bordercolor};
    cursor:pointer;
    width:130px;
    padding-left:55px;
    padding-right:6px;
    height:35px;
    padding-top:15px;
    font-size:20px;
    font-family:Pretendard;
    font-weight:200;
`
const Replying=styled.div`
    display:inline-block;
    color: ${props => props.color};
    border-top: 0.5px solid ${props => props.bordercolor};
    border-right: 0.5px solid ${props => props.bordercolor};
    border-bottom: 0.5px solid ${props => props.bordercolor};
    border-left: 0.5px solid #FF1F1F;
    font-weight:200;
    position:relative;
    top:80px;
    width:175px;
    text-align:center;
    height:35px;
    padding-left:25px;
    padding-top:15px;
    cursor:pointer;
    font-size:20px;
    font-family:Pretendard;
`
const RedWritingImg=styled.img`
    position:absolute;
    left:26px;
    top: 18px;
    width:19.62px;
    height:19.57px;
`
const WhiteReplyingImg=styled.img`
    position:absolute;
    top:18px;
    left:18px;
    width:19.62px;
    height:19.57px;
`
const MainBox=styled.div`
    position:absolute;
    width:1200px;
    height:1404px;
    left:460px;
    top:320px;
`
const LetterBox=styled.div`
    cursor:pointer;
    position:relative;
    display:inline-block;
    margin-right:80px;
    margin-bottom:100px;
    width:276px;
    height:276px;
`
const LetterPad=styled.img`
    width:100%;
    height:100%;
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
  display: -webkit-inline-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`
const PrivateTxt=styled.span`
    font-family:Pretendard;
    font-size: 12px;
    position: absolute;
    font-weight:500;
    left:14.3%;
    bottom:9%;
    color:#1E1E1E;
`
const PrivImg=styled.img`
    position:absolute;
    left:9%;
    width:11.04px;
    height:12px;
    bottom:9.5%;
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
    left:-40px;  
    top:-2px;
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

export default function MyCollection() {

    const WritingArray=[
        { id:0, text:"내가쓴거0다른like:400 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:400, open:true },
        { id:1,text:"1 // like:290 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:290, open:false},
        { id:2,text:"2 // like:300 다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:300, open:false},
        { id:3, text:"3// like:380다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:380, open:false},
        { id:4, text:"4다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:20, open:false},
        { id:5, text:"5다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:150,open:false},
        { id:6, text:"6다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:180, open:false},
        { id:7,text:"7다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:56, open:true},
        { id:8,text:"8다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:175, open:false},
        { id:9, text:"9다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:15, open:false},
        { id:10, text:"10다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:200, open:false},
    ]
    const ReplyingArray=[
        { id:0, text:"내가답장0다른like:400 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:400, open:true},
        { id:1,text:"1 // like:290 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:290, open:true},
        { id:2,text:"2 // like:300 다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:300, open:false},
        { id:3, text:"3// like:380다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:380, open:false},
        { id:4, text:"4다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:20, open:false},
        { id:5, text:"5다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:150, open:false},
        { id:6, text:"6다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:180, open:true},
        { id:7,text:"7다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:56, open:true},
        { id:8,text:"8다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:175, open:false},
        { id:9, text:"9다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:15, open:false},
        { id:10, text:"10다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.다른 이들의 낭만 편지와 답장을 둘러보세요.",
            like:200, open:true},
    ]

    const [writingbtn, setWritingbtn]=useState(true);
    const [Replyingbtn, setReplyingbtn]=useState(false);
    const [NowArray, setNowArray]=useState(WritingArray);

    const [nowPage, setNowPage]=useState(1);
    const [nowItem,setNowItem]=useState([...NowArray.slice(0,12)]);
    const MaxPage=Math.ceil(NowArray.length/12);
    const PageArray=[...Array(MaxPage)].map((v,i)=>i+1);

    useEffect(()=>{
        setNowItem([...NowArray.slice((nowPage-1)*12,(nowPage-1)*12+12)]);
    }, [nowPage, writingbtn]);

    const navigate=useNavigate();

    const toCollectionMain = () => {
        navigate("/CollectionMain");
    };

    return(
        <div>
            <Container>
                <Header />
                <OverlapContainer>
                    <MainHeader>
                        <BasicHeader onClick={toCollectionMain}>낭만 모음집</BasicHeader>
                        <ClickHeader >나의 낭만 모음집</ClickHeader>
                        {writingbtn === false ?
                            <Writing color={"#FFF"} bordercolor={"#757575"}
                                onClick={e => {setWritingbtn(true); setReplyingbtn(false); setNowArray(WritingArray);}}>
                                    <RedWritingImg src={WritingImgWhite} alt="redwritingimg"/>
                                    내가 쓴 편지</Writing>
                            : <Writing color={"#FF1F1F"} bordercolor={"#FF1F1F"}>
                                <RedWritingImg src={WritingImg} />
                                    내가 쓴 편지</Writing>}
                        {Replyingbtn === false ? 
                            <Replying color={"#FFF"} bordercolor={"#757575"}
                                onClick={e => {setWritingbtn(false); setReplyingbtn(true); setNowArray(ReplyingArray);}}>
                                    <WhiteReplyingImg src={ReplyingImg} alt="whitereplyingimg"/>
                                    내가 답장한 편지</Replying>
                            : <Replying color={"#FF1F1F"} bordercolor={"#FF1F1F"}>
                                <WhiteReplyingImg src={ReplyingImgRed} />
                                내가 답장한 편지</Replying>}
                        <HeaderLine />
                    </MainHeader>

                    <MainBox >
                        {nowItem.map(({text, id, open}) => (
                            <LetterBox key={id}> 
                                <LetterPad src={LetterPaper} alt='letterpaper' 
                                    onClick={e=>navigate("/MyWriting", { state: {openstate: `${open}`}})}/>
                                <LetterTxt >
                                    {text}
                                </LetterTxt>
                                {open === false ? <PrivateTxt>나만보기</PrivateTxt> : <></> }
                                {open === false ? <PrivImg src={PrivateImg} alt='나만보기'/> : <></>}
                            </LetterBox>
                        ))} 
                    </MainBox>
                    <Page>
                        {Math.ceil(nowPage/5)===1?<></>:
                            <BeforeBtn onClick={e=>setNowPage((e)=>e-1)}>{`<`}</BeforeBtn>}
                        {[PageArray.slice((Math.ceil(nowPage/5)-1)*5, (Math.ceil(nowPage/5)-1)*5+5)]
                            .map((item)=>(
                                item.map((i)=>(
                                    i===nowPage ? 
                                    <PageNumber key={i} color="red" style={{border:"0.3px solid red"}}>
                                        {i}
                                    </PageNumber>
                                    :
                                    <PageNumber key={i} color="white" onClick={e=>setNowPage(Number(e.target.textContent))}>
                                        {i}
                                    </PageNumber>
                                )) 
                        ))} 
                        {Math.ceil(nowPage/5)===Math.ceil(MaxPage/5)?<></>:
                            <AfterBtn onClick={e=>setNowPage((e)=>e+1)}>{`>`}</AfterBtn>}
                    </Page>
                </OverlapContainer>
            </Container>
        </div>
    )
}

//메인화면 흐리게 만드는 기법