import React,{ useEffect,useState } from 'react';
import qs from "qs";
import axios from "axios";
import Ayong from "../../images/IMG_1503.JPG";
 import { useNavigate } from "react-router-dom";

const Auth = () => {

    const {Kakao} = window;
     const JS_API_KEY=process.env.REACT_APP_KAKAO_JS_API_KEY_SY;
     const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY_SY;
     const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
     const CLIENT_SECRET = process.env.REACT_APP_KAKAO_CLIENT_SECRET_KEY_SY;

    //const JS_API_KEY="425ce677190e84ba1d0e11053d82041e";
    //const REST_API_KEY = "3fca2bcf4ac249e8d3ed096d7baa09cf";
    //const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    //const CLIENT_SECRET = "BJquGGQcHQSavRFdH0ipWzj6uOP13Nno";
    const navi = useNavigate();
    const [isKakaoLogin, setIsKakaoLogin] = useState(false);
    const code = new URL(window.location.href).searchParams.get("code");

    const getToken = async () => {
      const payload = qs.stringify({
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: code,
        client_secret: CLIENT_SECRET,
      });
      try {
        // access token 가져오기
        const res = await axios.post(
          "https://kauth.kakao.com/oauth/token",
          payload
        );
        
        // Kakao Javascript SDK 초기화
        Kakao.init(REST_API_KEY);
        // access token 설정
        Kakao.Auth.setAccessToken(res.data.access_token);
        console.log("access token 받기:",res.data.access_token);
        navi("/authprofile");
      } catch (err) {
        console.log(err);
      }
    };
    useEffect(() => {
      getToken();
    }, []);
    return null;
  };

export default Auth;