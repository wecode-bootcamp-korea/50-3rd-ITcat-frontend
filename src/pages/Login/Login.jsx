import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import SocialLogin from '../../components/Auth/SocialLogin';
import './Login.scss';

const Login = () => {
  const [userID, setUserID] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  // const Kakao = process.env.REACT_APP_CLIENT_ID;
  const REST_API_KEY = '0b443a4468627de5ea08a13f00b2c6dd';
  const REDIRECT_URI = 'http://localhost:3000/kakao/KaKaoLogin';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <div className="login">
      <div className="top">
        <div className="topback">
          <Link to="/main">
            <img alt="backimg" className="backimg" src="/images/backimg.png" />
            뒤로가기
          </Link>
        </div>

        <span className="toptext"> 로그인 </span>

        <div className="topadmin" onClick={() => setIsClicked(true)}>
          관리자 계정
        </div>
      </div>
      <div>
        <div className="main">
          <img alt="logoimg" className="logo" src="/images/gitcat.png" />
          <div className="maincont">"페이지 간단 소개 글"</div>
          <img alt="social" className="maincont" src="/images/social.png" />
          <div className="social">
            <SocialLogin />
          </div>
        </div>

        <div className={`loginArea${isClicked ? ' visible' : ''}`}>
          <input
            className="inputWrap"
            onChange={event => setUserID(event.target.value)}
            type="text"
            placeholder="아이디:"
          />

          <input
            className="inputWrap"
            onChange={event => setUserPassword(event.target.value)}
            type="password"
            placeholder="비밀번호:"
          />

          <Button width="500px">로그인</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
