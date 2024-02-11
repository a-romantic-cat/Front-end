import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Kakao from '../../assets/img/Kakao.svg'
import Naver from '../../assets/img/Naver.svg'
import Google from '../../assets/img/Google.svg'
import {useGoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

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

    const Kakaohandle=()=>{
        const navigate=useNavigate();

        const Rest_api_key='f79c5ea8cc5c0dcb00b961c6e5e797cc' //REST API KEY
        const redirect_uri = 'http://localhost:3000/CreateAccount' //Redirect URI
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
        const code = new URL(window.location.href).searchParams.get("code"); //인가코드 받아오기
        //백엔드에 인가코드 넘기고 jwt 토큰 받는 코드
        useEffect(() => {
          //백엔드로부터 인가코드 넘기고 jwt 토큰 받기
          (async () => {
            try {
              const res = await axios
                // 백엔드 주소 뒤에 인가코드 붙여서 GET 설정
                // 백엔드는 이 주소를 통해 뒤에 붙여져있는 인가코드를 전달 받게 된다.
                .get(
                  `http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/oauth/token?code=${code}`
                )
                // 백엔드 쪽에서 보내준 응답 확인
                .then((response) => {
                  console.log("응답 확인", response);
                  // 이때, 백엔드로부터 받아온 헤더값에 저장되어있는 authorization 을 접근해 token 이라는 변수에 저장
                  const token = response.headers.authorization;
                  // 이 토큰은 프론트엔드, 즉 현재 내 서버에 저장시킨다.
                  window.localStorage.setItem("token", token);
                });
              console.log(res);
            } catch (e) {
              // 에러 발생 시, 에러 응답 출력
              console.error(e);
            }
      
            // 위에서 setItem 을 사용하여 내부에 저장시킨 토크을 다시 불러온다.
            // 이때, 내부 저장소에서 가져온 토큰을 다시 token 이라는 변수에 담는다.
            const token = window.localStorage.getItem("token");
            //백엔드로 토큰 다시 넘기기
            try {
              const res = await axios
                // 이때, post가 아닌 get으로 접근한다.
                // 접근 주소는 백엔드에서 설정한 주소로 한다.
                .get(
                  "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/user/mypage",
                  {
                    // 헤더값에는 받아온 토큰을 Authorization과 request 에 담아서 보낸다/
                    headers: {
                      Authorization: token,
                      request: token,
                    },
                  }
                )
                // 위에서 백엔드가 토큰을 잘받고 처리해서 유저정보를 다시 넘겨준다면, 그 응답을 처리한다.
                // data 라는 변수에 유저 정보를 저장하고, setItem을 사용해 로컬에 다시 저장한다.
                .then((data) => {
                  window.localStorage.setItem("profile", data);
                  console.log(data);
                  // 만약, 유저정보를 잘 불러왔다면 navigate를 사용해 프론트엔드에서 설정한 마이페이지 경로를 설정해서 이동시킨다.
                  if (data) {
                    navigate("/CreateAccount");
                  }
                });
            } catch (e) {
              // 에러 발생 시, 에러 응답 출력
              console.error(e);
            }
          })();
        }, []);

        return(
            <KakaoImg src={Kakao} onClick={()=>window.location.href = kakaoURL}/>
        )
    }

    const Naverhandle=()=>{
      const navigate=useNavigate();

        const naver_client_id='b57dd3KbzMp32o_rFf1B' 
        const redirect_uri = 'http://localhost:3000/CreateAccount' //Redirect URI
        const state="false"
        const NaverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naver_client_id}&state=${state}&redirect_uri=${redirect_uri}`
        const code = new URL(window.location.href).searchParams.get("code"); //인가코드 받아오기

      useEffect(()=>{
        (async ()=> {
          try {
            const res = await axios 
              .get(
                `http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/oauth/token?code=${code}`
              )
              .then((response)=>{
                console.log("응답 확인", response);
                const token = response.headers.authorization;
                window.localStorage.setItem("token", token);
              })
              console.log(res);
          } catch(e) {
            console.error(e);
          }
          const token = window.localStorage.getItem("token");
          try {
            const res= await axios
              .get(
              "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/user/mypage",
              {
                headers: {
                  Authorization: token,
                  request: token,
                },
              }
            )
            .then((data) => {
              window.localStorage.setItem("profile", data);
              console.log(data);
              if (data) {
                navigate("/CreateAccount");
              }
            });
        } catch (e) {
            console.error(e);
          }
        })();
      },[]);

        return(
            <NaverImg src={Naver} onClick={()=>window.location.href = NaverURL}/>
        )
    }
    
    const Googlehandle=()=>{
      const navigate=useNavigate();

      const google_client_id="743660424403-m90u60mbrhlgc3hrphv0r65o1df56ffs.apps.googleusercontent.com" 
      const redirect_uri = 'http://localhost:3000/CreateAccount' //Redirect URI
      const googleURL = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=${google_client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=email`;
      const code = new URL(window.location.href).searchParams.get("code"); //인가코드 받아오기

    useEffect(()=>{
      (async ()=> {
        try {
          const res = await axios 
            .get(
              `http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/oauth/token?code=${code}`
            )
            .then((response)=>{
              console.log("응답 확인", response);
              const token = response.headers.authorization;
              window.localStorage.setItem("token", token);
            })
            console.log(res);
        } catch(e) {
          console.error(e);
        }
        const token = window.localStorage.getItem("token");
        try {
          const res= await axios
            .get(
            "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/user/mypage",
            {
              headers: {
                Authorization: token,
                request: token,
              },
            }
          )
          .then((data) => {
            window.localStorage.setItem("profile", data);
            console.log(data);
            if (data) {
              navigate("/CreateAccount");
            }
          });
      } catch (e) {
          console.error(e);
        }
      })();
    }, []);

      return(
          <GoogleImg src={Google} onClick={()=>window.location.href = googleURL}/>
      )
  }

   /* const Googlehandle = () => {
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
      
    }*/
    
    return(
        <div>
            <Kakaohandle/>
            <Naverhandle/>
            <Googlehandle />
        </div>
    )
}