import React from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';
import twinkle from '../../assets/img/반짝.svg';
const Container = styled.div`
  width: 1920px; 
  height: 980px;
  background-color: #081A2F;
  position: relative;
`;
const BackTwinkle = styled.img`
  width: 1920px; 
  height: 980px;

`;
const InnerCon = styled.div`
  position: absolute;
  top: 126px;
  right: 757px;
  width: 406px;
  height: 664px;
  text-align: center;

`;
const TextCon = styled.div``;
const MainText = styled.div`
  position: relative;

  font-size: 30px;
  font-family: 'Gowun Dodum';
  margin-bottom: 41px;
  &::before {
    content: '낭만을 주고받는, ';
    color: #FFF;
  }
  &::after {
    content: '낭만 우편함';
    color: #FFED4A;
  }
`;
export default function RomainticLetterboxMain() {
  return (
    <div>
        <Header />
        
        <Container>
          <BackTwinkle src={twinkle} alt ="반짝배경"/>
          <InnerCon>
            <TextCon>
              <MainText>
                
              </MainText>
              
            </TextCon>
          </InnerCon>
        </Container>
    </div>
  )
}