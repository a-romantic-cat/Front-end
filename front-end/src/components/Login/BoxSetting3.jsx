import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AfterCheck from '../../assets/img/SelectedCheckbox.svg';
import BeforeCheck from '../../assets/img/CircleCheckbox.svg';

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
    margin-top:7px;
`
const RedLine=styled.div`
    width:1194px;
    margin-top:33px;
    border-top:5px solid #C90000;
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
const Container=styled.div`
    position:absolute;
    left: 363px;
    width:399px;
    height:176px;
    top:250px;
`
const Check=styled.input`
    appearance:none;
    background-color:#FFF;
    border-radius:20px;
    border: 0.9px solid #000;
    cursor:pointer;
    position:relative;
    width:30px;
    height:30px;
    top:58px;
    left:0px;

&:checked {
    appearance:none;
    border:0px;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    top:58px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'%3E%3Crect x='0.5' y='0.5' width='31' height='31' rx='15.5' fill='white' stroke='black'/%3E%3Ccircle cx='16' cy='16' r='7' fill='%23C90000'/%3E%3C/svg%3E");
  }
`
const TxtContainer=styled.div`
    position:relative;
    display: inline-box;
    left: 52px;
    width: 348px;
    height: 71px;
    border-radius: 20px;
    background: #EAEAEA;
`
const Txt=styled.span`
    position:absolute;
    color: #000;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 400;
    margin-left:25px;
    margin-top:21px;
`
const Line=styled.div`
    width:597px;
    position:absolute;
    left: 363px;
    top:534px;
    height:1px; 
    background-color:#757575;
`
const SubContainer=styled.div`
    position:absolute;
    width: 342px;
    height:48px;
    left: 363px;
    top:549px;
    color: #757575;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 400;
    white-space: pre-wrap;
    line-height: 125%;
`

export default function BoxSetting3() {

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    };

    const navigateNext = () => {
        navigate("/SettingEnd");
    };

    const ChangeCheck=(e)=>{
        const checkboxes = document.getElementsByName('check')
        
        for (let i = 0; i < 2; i++) {
            if (checkboxes[i] !== e) {
              checkboxes[i].checked = false;
            }
        }
    }   

    return(
        <div>
            <Title>
                <Text color="#000000">내 우편함에 </Text>
                <Text color="#C90000">편지를 남길 수 있는 사람</Text>
                <Text color="#000000">을 설정하세요.</Text>
                <SubText>내 정보에서 언제든지 바꿀 수 있어요.</SubText>
                <RedLine/>
            </Title>
            <Container>
                <Check 
                    type="checkbox"
                    name="check"
                    onChange={(e)=>ChangeCheck(e.target)}
                ></Check>
                <TxtContainer>
                    <Txt>로그인 한 사람만</Txt>
                </TxtContainer>
                <Check 
                    type="checkbox"
                    name="check"
                    onChange={(e)=>ChangeCheck(e.target)}
                ></Check>
                <TxtContainer>
                    <Txt>누구나</Txt>
                </TxtContainer>
            </Container>
            <Line />
            <SubContainer>
            모든 편지는 나만 볼 수 있어요.{`\n`} 
            편지를 열어본 뒤에 공개 여부를 선택하세요.
            </SubContainer>
            <Backtxt onClick={navigateBack}>{`<`} 이전으로</Backtxt>
            <Nexttxt onClick={navigateNext}>다음으로 {`>`}</Nexttxt>
        </div>
    )
}
//만약 미선택 시 경고 메시지 방식