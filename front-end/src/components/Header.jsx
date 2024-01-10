import { Link } from "react-router-dom";
import React, {} from 'react';
import "./Header.css";

const Header = () => {
    /*const navigate = useNavigate();

    useEffect(() => {
        // 로컬스토리지에서 token 값을 가져오기
        const token = localStorage.getItem('token');
    
        // token이 없으면 로그인페이지로 가라
        if (token==null) {
        navigate("/")
        }
    }, [navigate]);

    const goToHome = () => {
        navigate("/");
    };
    const goToLogin = () => {
        localStorage.removeItem('token'); // 로그아웃 누르면 토큰 삭제
        navigate("/login");
    };*/

    return (
        <div className="header-container">
            <div className="logo">
                <img className="logo_img"
                    src=""
                    alt="로고"></img>
                    {/*onClick={goToHome}*/}
                <div className="logo_letter"><Link to="/" style={{ textDecoration: "none" , color:"black"}}>낭만고양이</Link>
                </div>
            </div>

            <div className="link_to">
                <div className="letter-frame">
                    <div className="MyLetterbox"><Link to="/MyLetterbox" style={{ textDecoration: "none" , color:"black"}}>내 우편함</Link></div>
                    <div className="AddressBook"><Link to="/AddressBook" style={{ textDecoration: "none" , color:"black"}}>주소록</Link></div>
                    <div className="RomanticLetterbox"><Link to="/RomanticLetterbox" style={{ textDecoration: "none" , color:"black"}}>낭만우편함</Link></div>
                    <div className="Store"><Link to="/Store" style={{ textDecoration: "none" , color:"black"}}>상점</Link></div>
                </div>

                <button className="my_page">
                    아이콘
                </button>
            </div>
        </div>
    )
  };

  export default Header;