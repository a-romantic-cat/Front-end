import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Kakao from '../../assets/kakao.png'
import Naver from '../../assets/naver.png'
import Google from '../../assets/google.png'
import {useGoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import axios from "axios";

const KakaoImg = styled.img`
    width:600px;
    height:78px;
    margin-top:170px;
    margin-left:800px;
    cursor: pointer;
`;

const NaverImg= styled.img`
    width:600px;
    height:78px;
    margin-top:35px;
    margin-left:800px;
    margin-bottom:0px;
    cursor: pointer;
`;

const GoogleImg = styled.img`
    width:600px;
    height:78px;
    margin-top:35px;
    margin-left:800px;
    margin-bottom: 200px;
    cursor: pointer;
`;

export default function Loginstart() {

    const Kakaohandle=()=>{
        const Rest_api_key='f79c5ea8cc5c0dcb00b961c6e5e797cc' //REST API KEY
        const redirect_uri = 'http://localhost:3000/CreateAccount' //Redirect URI
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
        const handleLogin = ()=>{
            window.location.href = kakaoURL
        }
        return(
            <KakaoImg src={Kakao} onClick={handleLogin}/>
        )
    }

    const Naverhandle=()=>{
        const naver_client_id='b57dd3KbzMp32o_rFf1B' 
        const redirect_uri = 'http://localhost:3000/CreateAccount' //Redirect URI
        const state="false"
        const NaverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naver_client_id}&state=${state}&redirect_uri=${redirect_uri}`
        const handleLogin = ()=>{
          window.location.href = NaverURL;
        }
        return(
            <NaverImg src={Naver} onClick={handleLogin}/>
        )
    }
    
    const Googlehandle = () => {
        const googleSocialLogin = useGoogleLogin({
          scope: "email profile",
          onSuccess: async ({ code }) => {
            axios
              .post('http://localhost:3000/CreateAccount', { code })
              .then(({ data }) => {
                console.log(data);
              });
          },
          onError: (errorResponse) => {
            console.error(errorResponse);
          },
          
          flow: "implicit",
        });
    
        return (
          <div>
            <GoogleImg src={Google} onClick={googleSocialLogin}/>
          </div>
        );
      
    }
    
    return(
        <div>
            <Kakaohandle/>
            <Naverhandle/>
            <GoogleOAuthProvider clientId="743660424403-m90u60mbrhlgc3hrphv0r65o1df56ffs.apps.googleusercontent.com">
                <Googlehandle/>;
            </GoogleOAuthProvider>
        </div>
    )
}