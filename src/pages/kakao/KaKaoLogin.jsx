// import axios from 'axios';
import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { GET_KAKAO_LOGIN_API } from '../../config';

export default function KaKaoLogin() {
  const [searchParams] = useSearchParams();
  const AUTHORIZE_CODE = searchParams.get('code');
  const navigate = useNavigate();

  const getKakaoToken = () => {
    fetch(GET_KAKAO_LOGIN_API, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=utf-8',
        code: AUTHORIZE_CODE,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.result.token) {
          localStorage.setItem('token', data.result.token);
          localStorage.setItem('name', data.result.name);
          localStorage.setItem('profile_image', data.result.profile_image);
          navigate('/');
        } else {
          alert('로그인 실패');
          navigate('/login');
        }
      });
  };

  useEffect(() => {
    if (!searchParams) return;
    getKakaoToken();
  }, [searchParams]);

  return <div>로딩중...</div>;
}
