import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {format} from 'date-fns';
import Calender from "./Calender";

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
    top:98.7px;
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
const Start=styled.div`
    left: 476px;
    top:347px;
    position:absolute;
    width:354px;
    height: 477px;
`
const ClickedDate=styled.div`
    position:absolute;
    height:26px;
    width:334px;
    left:0px;
    top:0px;
    border-radius: 10px;
    border: 2px solid var(--Red-Light, #C90000);
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
`
const Calenerbox=styled.div`
    position:absolute;
    top:110px;
    left:0px;
    height:367px;
    width:354px;
`
const Tild=styled.div`
    left: 921px;
    top:352px;
    position:absolute;
    width:24px;
    height:36px;
    font-size: 36px;
    font-weight: 600;
    color: #000;
    font-family: Pretendard;
`
const End=styled.div`
    left: 1036px;
    top:347px;
    position:absolute;
    width:354px;
    height: 477px;
`
const Content=styled.div`
    margin-left:107px;
    color: #000;
    font-family: Pretendard;
    font-size: 22px;
    font-weight: 500;
`
export default function BoxSetting2() {

    const navigate = useNavigate();

    const [startvalue, setStartvalue] = useState(null);
    const [endvalue, setEndvalue] = useState(null);

    const navigateBack = () => {
        navigate(-1);
    };

    const navigateNext = () => {
        navigate("/BoxSetting3");
    };

    return(
        <div>
            <Title>
                <Text color="#000000">내 우편함으로 </Text>
                <Text color="#C90000">편지를 받을 기간</Text>
                <Text color="#000000">을 설정하세요.</Text>
                <SubText>내 정보에서 언제든지 바꿀 수 있어요.</SubText>
                <BlackLine/>
                <RedLine/>
            </Title>
            <Start>
                <ClickedDate>
                    {startvalue!=null?<Content >
                        {format(startvalue,'yyyy')}{`. `}
                        {format(startvalue,'MM')}{`. `}
                        {format(startvalue,'dd')}
                    </Content>:<></>}
                </ClickedDate>
                <Calenerbox>
                    <Calender setValue={setStartvalue}/>
                </Calenerbox>
            </Start>
            <Tild>~</Tild>
            <End>
                <ClickedDate>
                    {endvalue!=null?<Content>
                        {format(endvalue,'yyyy')}{`. `}
                        {format(endvalue,'MM')}{`. `}
                        {format(endvalue,'dd')}
                    </Content>:<></>}
                </ClickedDate>
                <Calenerbox>
                    <Calender setValue={setEndvalue}/>
                </Calenerbox>
            </End>
            <Backtxt onClick={navigateBack}>{`<`} 이전으로</Backtxt>
            <Nexttxt onClick={navigateNext}>다음으로 {`>`}</Nexttxt>
        </div>
    )
}
//받는 날짜 더 앞일 시 경고? 선택 못하게?