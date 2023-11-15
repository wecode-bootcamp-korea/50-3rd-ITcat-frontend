import axios from 'axios';
import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function KaKaoLogin() {
  const [searchParams] = useSearchParams();
  const AUTHORIZE_CODE = searchParams.get('code');
  console.log(AUTHORIZE_CODE);
  const navigate = useNavigate();

  const getKakaoToken = () => {
    fetch(`http://10.58.52.212:8000/users/kakaologin`, {
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
          localStorage.setItem('userName', data.result.userName);
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