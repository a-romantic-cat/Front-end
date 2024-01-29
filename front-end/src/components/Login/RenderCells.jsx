import { startOfMonth, endOfMonth,startOfWeek, endOfWeek } from "date-fns";
import { format,isSameMonth, isSameDay,addDays,parse } from "date-fns";
import React, {useState} from 'react';
import styled from "styled-components";
import SelectedImg from "../../assets/img/SelectDate.svg"
import BasicImg from "../../assets/img/BasicDate.svg"

const Disabled=styled.span`
    margin:24px 24px 24px 24px;
    padding-left:2px;
`
const Selected=styled.div`
    position:relative;
    display:inline;
    cursor:pointer;
    width:49px;
    height:48px;
`
const Valid=styled.div`
    position:relative;
    display:inline;
    cursor:pointer;
    width:49px;
    height:48px;
`
const Img=styled.img`   
    position:relative;
    width:48px;
    height:48px;
    margin-right:3px;
`
const Txt=styled.span`
    width:48px;
    position:absolute;
    text-align:center;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    left:0%;
    top:-60%;
`
const Row=styled.div`
    height:48px;
    margin-bottom:12px;
`

export default function RenderCells({currentMonth, selectedDate, setSelectedDate}) {

    const monthStart=startOfMonth(currentMonth);
    //현재 달의 시작일일
    const monthEnd=endOfMonth(monthStart);
    //현재 달의 막날
    const startDate=startOfWeek(monthStart);
    //아예 첫날
    const endDate=endOfWeek(monthEnd);
    //아예 막날

    const rows=[];
    let days=[];
    let day=startDate;
    let formattedDate='';

    while(day<=endDate){
        for(let i=0; i<7; i++){
            formattedDate=format(day, 'd');
            const cloneDay=day;

            days.push(
                    !isSameMonth(day, monthStart)
                        ? <Disabled key={day}>
                        </Disabled> //다른 달들 날
                        :isSameDay(day, selectedDate)
                        ? <Selected
                            key={day} 
                            onClick={()=>setSelectedDate(cloneDay)}>
                                <Img src={SelectedImg} />
                                <Txt style={{color: "#FFF"}}>
                                    {formattedDate}</Txt>
                          </Selected> //선택한 날
                        : format(currentMonth,'M')!==format(day, 'M')
                        ? null
                        : <Valid
                            key={day} 
                            onClick={()=>setSelectedDate(cloneDay)}>
                                <Img src={BasicImg} />
                                <Txt style={{color: i==0||i==6? "#9F9F9F":"#212121"}}>
                                    {formattedDate}</Txt>
                          </Valid> //현재 달에 유효한것들  
            );
            day=addDays(day,1);
        }
        rows.push(
            <div key={day}>
                {days}
            </div>,
        );
        days=[];
    }
    return(
        <div>
            <Row>{rows}</Row>
        </div>
    )
}