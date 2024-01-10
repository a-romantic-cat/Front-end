import React from 'react';
import styled from 'styled-components';
import Mainpage from '../components/Home/Mainpage';

const HomeContainer = styled.div`
`

export default function Home() {
  return (
    <div>
      <HomeContainer>
        <Mainpage />
      </HomeContainer>
    </div>
  )
}