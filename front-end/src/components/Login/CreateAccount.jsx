import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/SignCat.svg'
import Back from '../../assets/img/back.svg'
import Signin from './Signin';

const HeaderContainer = styled.div`
  width: 430px;
  height: 36px;
  left: 600px;
  top: 60px;
  position: absolute;
`;

const Backlogo = styled.div`
  width: 12px;
  height: 20px;
  left: 0px;
  top: 7px;
  position: absolute;
  cursor: pointer;
`;

const Logo = styled.div`
  width: 32.02px;
  height: 33.06px;
  right:110px;
  top: 0;
  position: absolute;
`;

const TextLogo = styled.div`
  right:-5px;
  top: 1px;
  position: absolute;
  color: black;
  font-size: 24px;
  font-family: Gowun Dodum;
  font-weight: 400;
`;



export default function CreateAccount() {

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate("/Login");
    };

    return(
        <div>
            <HeaderContainer>
                <Backlogo><img src={Back} alt='back' onClick={navigateBack}/></Backlogo>
                <Logo><img src={logo} alt='logo' /></Logo>
                <TextLogo>낭만고양이</TextLogo>
            </HeaderContainer>
            <Signin />
            
        </div>
    )
}   