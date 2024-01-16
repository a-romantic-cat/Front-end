import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cat from '../assets/Cat.png';
import Loginstart from '../Loginstart';
import { useNavigate } from "react-router-dom";


const CatImg = styled.img`
    width:112.83px;
    height:125.65px;
    margin-top:210px;
    margin-left:800px;
`;  

export default function Login() {

    const navigate = useNavigate();

    return(
        <div>
            <CatImg src={Cat} alt='cat'/>
            <Loginstart />
        
        </div>
    )
}   