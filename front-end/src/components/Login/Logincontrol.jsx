import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cat from '../../assets/img/낭만고양이.svg';
import Loginstart from './Loginstart';


const CatImg = styled.img`
    width:112.83px;
    height:125.65px;
    margin-top:260px;
    margin-left:845px;
`;  

export default function Login() {

    return(
        <div>
            <CatImg src={Cat} alt='cat'/>
            <Loginstart />
        </div>
    )
}   