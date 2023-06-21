import React, { useEffect, useState } from "react";
// import {useDispatch, useSelector} from 'react-redux'; //redux

const AuthProfile = (props) => {

    const [kakaouser, setKakaoUser] = useState({});
    
    //redux
    // const aaa = useSelector( (state) => state); 
    // const dispatch = useDispatch();

     const getProfile = async() => {
        try {
            // Kakao SDK API를 이용해 사용자 정보 획득
            let data = await window.Kakao.API.request({
              url: "/v2/user/me",
            });
      // 사용자 정보 변수에 저장
      const kakao_account = data.kakao_account;
      setKakaoUser({
              "id":data.id,
              "nickname":kakao_account.profile.nickname,
              "email":kakao_account.email,
              "age_range":kakao_account.age_range,
              "birthday":kakao_account.birthday,
             "gender":kakao_account.gender,
             "profileImg":kakao_account.profile.profile_image_url,
  
          })

    } catch (err) {
      console.log(err);
    }
  };
 

  useEffect(() => {
    getProfile();
  }, []);
  return (  
    <div>
            {/* <p>redux:{aaa}</p>
            <button onClick={()=>{dispatch({type:'증가'})}}>더하기 </button> */}
             {/* <br/><br/>
            <p>access token : {props.kakao}</p> */}
            <br/><br/>
            
            <p style={{fontWeight:'bold'}}>카카오 로그인시 정보</p>
            <br/><br/>
             {kakaouser&&( 
                <div style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',}} >
                      <figure>
                      
                      <img src={kakaouser.profileImg} alt='카카오로그인시 프사' style={{width:'500px'}}/>
                      <figcaption>{kakaouser.profileImg}</figcaption>
                      </figure>
                      <div style={{display:'flex',flexDirection:'column'}}>
                      <p>카카오로그인시 id(token): {kakaouser.id}</p>
                      <p>카카오로그인시 이메일: {kakaouser.email}</p>
                      <p>카카오로그인시 닉네임: {kakaouser.nickname}</p>
                      <p>카카오로그인시 성별: {kakaouser.gender}</p>
                      <p>카카오로그인시 생일:{kakaouser.birthday}</p>
                      <p>카카오로그인시 연령대:{kakaouser.age_range}대</p>
                      <p>카카오로그인시 친구목록:{kakaouser.friendlist}</p>
                      </div>
                </div>
             )} 
    </div>
  );
};
export default AuthProfile;