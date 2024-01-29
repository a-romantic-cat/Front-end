import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';


//화면1
const Container1 = styled.div`
  background-image: url("/images/홈1.svg");
  width: 1920px;
  height: 1754px;
`;

//화면2
const Container2 = styled.div`
  background-image: url("/images/홈2.svg");
  width: 1920px;
  height: 1080px;
`;

//화면3
const Container3 = styled.div`
  background-image: url("/images/홈3.svg");
  width: 1920px;
  height: 1080px;
`;

//화면4
const Container4 = styled.div`
  background-image: url("/images/홈4.svg");
  width: 1920px;
  height: 1080px;
`;

export default function Mainpage() {
  
    return (
      <div>
        <Header />

        <Container1>

        </Container1>

        <Container2>

        </Container2>

        <Container3>

        </Container3>

        <Container4>

        </Container4>
      </div>
    );
  }
