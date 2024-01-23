import React  from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Back from '../../assets/img/back.svg';

const Backlogo = styled.div`
  width: 30px;
  height: 36px;
  left: 600px;
  top: 60px;
  position: absolute;
  cursor: pointer;
`;

const Container=styled.div`
    left:650px;
    top:110px;
    position: absolute;
    width:750px;
    height:700px;
`
const Title=styled.div`
    margin-top:30px;
    font-family: NanumGothic;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.20000000298023224px;
    text-align: left;

`
const Contents=styled.div`
    margin-top:30px;
    margin-bottom:260px;
    font-family: NanumGothic;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
    line-height:22px;
`

export default function Terms(){

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    };


    return(
        <div>
            <Backlogo><img src={Back} alt='back' onClick={navigateBack}/></Backlogo>
            <Container>
                <Title>이용약관</Title>
                <Contents>
                네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 추후 작성 예정
                </Contents>
                <Title>개인정보수집이용 동의</Title>
                <Contents>
                개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다. 추후 작성 예정
                </Contents>
            </Container>
        </div>
    )
}