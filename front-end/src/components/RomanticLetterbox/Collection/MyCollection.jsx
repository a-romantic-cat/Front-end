import React, {useState,useEffect} from "react";
import styled from 'styled-components';
import Header from '../../Header/Header';
import twinkle from '../../../assets/img/반짝.svg';
import LetterPaper from '../../../assets/img/편지지.svg';
import { useNavigate } from "react-router-dom";

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
const ArrayBtn=styled.span`
    color: #757575;
    position:relative;
    top:50px;
    border: 0.5px solid #757575;
    cursor:pointer;
    font-size:20px;
    font-family:Pretendard;
    font-weight:200;
`
const ClickedBtn=styled.span`
    color: #FF1F1F;
    border: 0.5px solid #FF1F1F;
    font-weight:200;
    position:relative;
    top:50px;
    padding:5px 40px 5px 40px;
    cursor:pointer;
    font-size:20px;
    font-family:Pretendard;
`
const MainBox=styled.div`
    position:absolute;
    width:1200px;
    height:1404px;
    left:460px;
    top:260px;
`
const LetterBox=styled.div`
    position:relative;
    display:inline-block;
    margin-right:80px;
    margin-bottom:100px;
    width:276px;
    height:276px;
`
const LetterPad=styled.img`
    width:100%;
    cursor:pointer;
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
`;
const Page=styled.div`
    position:absolute;
    width: 270px;
    left:850px;
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
    font-size:24px; 
    font-family:Pretendard;
    font-weight:Medium;
    cursor:pointer;
`
const AfterBtn=styled.span`
    font-size:24px;
    position:absolute;
    color: white;
    top:1.2px;
    right:-80px;   
    font-family:Pretendard;
    font-weight:Medium;
    cursor:pointer;
`

export default function MyCollection() {

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
    ]

    const handletextlength=(props)=>{
        const preview=[...props];
        preview.length=55;

        preview[53]=".";
        preview[54]=".";
        preview[55]=".";

        return( preview )
    }

    const [order, setOrder] = useState("like");
    const [likebtn, setLikebtn]=useState(true);
    const [recentbtn, setRecentbtn]=useState(false);
    const [sortedArray, setSortedArray]=useState(array.sort((a, b) => b.like - a.like));
  
    useEffect(()=>{
        if(likebtn===true){
            setOrder("like");
            setSortedArray(array.sort((a, b) => b.like - a.like));
        }else{
            setOrder("id");
            setSortedArray(array.sort((a, b) => a.id - b.id));
        } 
    }, [recentbtn]); //sortedArray 비동기 오류

    const [nowPage, setNowPage]=useState(1);
    const [nowItem,setNowItem]=useState([...sortedArray.slice(0,12)]);
    const MaxPage=Math.ceil(array.length/12);  
    const PageArray= [...Array(MaxPage)].map((v,i)=>i+1);

    useEffect(()=>{
        setNowItem([...sortedArray.slice((nowPage-1)*12,(nowPage-1)*12+12)]);
    }, [nowPage, recentbtn]);

    const navigate=useNavigate();

    const toCollectionMain = () => {
        navigate("/CollectionMain");
    };
    const toMyWriting = () => {
        navigate("/MyWriting");
    };


    return(
        <div>
            <Container>
                <Header />
                <OverlapContainer>
                    <MainHeader>
                        <BasicHeader onClick={toCollectionMain}>낭만 모음집</BasicHeader>
                        <ClickHeader >나의 낭만 모음집</ClickHeader>
                        {likebtn==false?
                            <ArrayBtn onClick={e=> {setLikebtn(true); setRecentbtn(false);}}>내가 쓴 편지</ArrayBtn>
                            :<ClickedBtn>내가 쓴 편지</ClickedBtn>}
                        {recentbtn==false? 
                            <ArrayBtn onClick={e=>{setLikebtn(false); setRecentbtn(true);}}>내가 답장한 편지</ArrayBtn>
                            :<ClickedBtn>내가 답장한 편지</ClickedBtn>}
                    </MainHeader>

                    <MainBox >
                        {nowItem.map(({text, id}) => (
                            <LetterBox key={id} > 
                                <LetterPad src={LetterPaper} alt='letterpaper' onClick={toMyWriting}/>
                                <LetterTxt >
                                    {handletextlength(text)}
                                </LetterTxt>
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

//헤더-div 2개씩 각각 만들어서 이미지, span 넣기

/*//내가쓴거, 답장한거 별개의 array 생성
const Myarray=[
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
    ]
    const ReplyingArray=[
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
    ]
*/