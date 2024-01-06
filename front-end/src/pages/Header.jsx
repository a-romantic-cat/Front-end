import { useNavigate, Link } from "react-router-dom";
import React from 'react'
import "./Header.css";

export default function Header() {
    return (
        <div className="header-container">
            <div className="inner-container">
            <img
                className="logo"
                style={{ width: "154px", height: "20px" }}
                src=".svg"
                alt="로고">
                {/*onClick={goToHome}*/}

            </img>
            <div className="letter-frame">
                <div className="MyLetterbox"><Link to="/MyLetterbox" style={{ textDecoration: "none" , color:"black"}}>내 우편함</Link></div>
                <div className="AddressBook"><Link to="/AddressBook" style={{ textDecoration: "none" , color:"black"}}>주소록</Link></div>
                <div className="RomanticLetterbox"><Link to="/RomanticLetterbox" style={{ textDecoration: "none" , color:"black"}}>낭만우편함</Link></div>
                <div className="Store"><Link to="/Store" style={{ textDecoration: "none" , color:"black"}}>상점</Link></div>

            </div>
    
            {/*<button className="login-button" onClick={goToLogin}>
                아이콘
    </button>*/}
    
            </div>
        </div>
    )
  }