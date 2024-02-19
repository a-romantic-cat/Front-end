import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Kakao from '../../assets/img/Kakao.svg'
import Naver from '../../assets/img/Naver.svg'
import Google from '../../assets/img/Google.svg'
import {useGoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import axios from "axios";


const KakaoImg = styled.img`
    width:600px;
    margin-top:170px;
    margin-left:600px;
    cursor: pointer;
`;

const NaverImg= styled.img`
    width:600px;
    margin-top:35px;
    margin-left:600px;
    margin-bottom:0px;
    cursor: pointer;
`;

const GoogleImg = styled.img`
    width:600px;
    margin-top:35px;
    margin-left:600px;
    margin-bottom: 200px;
    cursor: pointer;
`;

export default function Loginstart() {

    //const Rest_api_key = 'f79c5ea8cc5c0dcb00b961c6e5e797cc'; // Kakao REST API KEY
    const Rest_api_key='9a5be400ad290154ad8d52df97ed0a3c';
    const naver_client_id = 'b57dd3KbzMp32o_rFf1B'; // Naver Client ID
    const google_client_id="959567592586-7croeo7s1ddfq361oklc4dqucksmrvge.apps.googleusercontent.com"
    //const redirect_uri = process.env.REACT_APP_REDIRECT_URI || "https://dev.nangmancat.shop/login/oauth2/code/google"; //Redirect URI
    const kredirect_uri="https://dev.nangmancat.shop/login/oauth2/code/kakao"; 
    const gredirect_uri="https://dev.nangmancat.shop/login/oauth2/code/google";

    const Kakaohandle = () => {
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${kredirect_uri}&response_type=code`;
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios
                    .get("http://localhost:3000");
                    console.log("응답 확인", response);
                    const token = response.headers.authorization;
                    localStorage.setItem("token", token);
                    console.log(token);
                } catch (e) {
                    console.error(e);
                }
            };
            fetchData();
        }, []);
        
        return (
            <KakaoImg src={Kakao} onClick={() => window.location.href = kakaoURL} />
        );
    }

    const Googlehandle = () => {
        const googleURL= `https://accounts.google.com/o/oauth2/v2/auth?client_id=${google_client_id}&redirect_uri=${gredirect_uri}&response_type=code&scope=email`;
        //const code = new URL(window.location.href).searchParams.get("code"); //인가코드 받아오기
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000");
                console.log("응답 확인", response);
                const token = response.headers.authorization;
                localStorage.setItem("token", token);
                console.log(token);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);

    return (
        <GoogleImg src={Google} onClick={() => window.location.href = googleURL} />
        );
    
    }
    return (
        <div> 
            <Kakaohandle />
            <Googlehandle />
        </div>
    );
}

/*
                .then((response)=>{
                    console.log("응답 확인", response);
                    const token = response.headers.authorization;
                    localStorage.setItem("token", token);
                });
                console.log(res);*/

/*
const Kakaohandle = () => {
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

    useEffect(() => {
        const fetchData = async (nickname, email) => {
            try {
                const data = {
                    nickname:nickname
                };
                const response = await axios.post(`https://dev.nangmancat.shop?email=${email}`, data);
                console.log("응답 확인", response);
                const token = response.headers.authorization;
                localStorage.setItem("token", token);
                console.log(token);
            } catch (e) {
                console.error(e);
            }
        };
    
        fetchData("사용자닉네임", "사용자이메일@example.com");
    }, []);
    
    return (
        <KakaoImg src={Kakao} onClick={() => window.location.href = kakaoURL} />
    );
}

const Naverhandle = () => {
    const NaverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naver_client_id}&state=false&redirect_uri=${redirect_uri}`;

    useEffect(() => {
        const fetchData = async (nickname, email) => {
            try {
                const data = {
                    nickname:nickname
                };
                const response = await axios.post(`https://dev.nangmancat.shop?email=${email}`, data);
                console.log("응답 확인", response);
                const token = response.headers.authorization;
                localStorage.setItem("token", token);
                console.log(token);
            } catch (e) {
                console.error(e);
            }
        };
    
        fetchData("사용자닉네임", "사용자이메일@example.com");
    }, []);
    
    return (
        <NaverImg src={Naver} onClick={() => window.location.href = NaverURL} />
    );
}
*/