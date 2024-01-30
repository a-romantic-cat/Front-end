import React, { useState,useCallback } from 'react';
import styled from 'styled-components';
import Prev from "../../assets/img/PrevIcon.svg";
import Next from "../../assets/img/NextIcon.svg";
import {format, subMonths, addMonths, parse} from 'date-fns';
import RenderCells from "./RenderCells";

const Header=styled.div`
    position:absolute;
    width: 135px;
    height: 16px;
    top:0px;
    left:110px;
`
const Days=styled.div`
    width: 354px;
    height:19px;
    position:absolute;
    left:0px;
    top: 20px;
    padding: 12px 2px 12px 2px;
`
const Body=styled.div`
    position:absolute;
    width: 358px;
    height:288px;
    top:70px;
    left:0px;
`
const PrevButton=styled.span`
    position:absolute;
    cursor:pointer;
    width: 8px;
    height: 14px;
    left:0px;
    margin-right:14px;
`
const Current=styled.span`
    position:absolute;
    width: 95px;
    height: 16px;
    color: #00000;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
    left:22px;
`
const NextButton=styled.span`
    position:absolute;
    cursor:pointer;
    width:8px;
    height:14px;
    left:124px;
`
const Day=styled.span`
    width:14px;
    height:19px;
    margin-right:18px;
    margin-left:18px;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
`

export default function Calender({setValue}) {

    const [currentMonth, setCurrentMonth]=useState(new Date());
    const [selectedDate, setSelectedDate]=useState();

    {setValue(selectedDate);}

    const date=['일', '월', '화', '수', '목', '금', '토'];

    return(
        <div>
            <Header>
                <PrevButton 
                    onClick={()=>{setCurrentMonth(subMonths(currentMonth,1))}}
                    ><img src={Prev} alt='prev'/>
                </PrevButton>
                <Current>
                    {format(currentMonth,'yyyy')}년{` `}
                    {format(currentMonth, 'MM')}월
                </Current>
                <NextButton
                    onClick={()=>{setCurrentMonth(addMonths(currentMonth,1))}}
                    ><img src={Next} alt='next'/></NextButton>
            </Header>
            <Days>
                {date.map((date, index)=>(
                    <Day key={index}>{date}</Day>
                ))}
            </Days>
            <Body>
                <RenderCells
                    currentMonth={currentMonth}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                /> 
            </Body>
        </div>
    )
}