import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {

    const navi = useNavigate();
    const loginid = localStorage.userid;
    const loginok = localStorage.loginok;
    const myProfileUrl = process.env.REACT_APP_SPRING_URL+"member/myprofile?id="+loginid;
    
    const [myInfo,setMyInfo]=useState({});

    const myProfile = async()=>{
        if(loginok){
        await axios.get(myProfileUrl).then(res=>{

            console.log("res.data",res);
            setMyInfo(res.data);

        }).catch(err=>{
            console.log("err:",err);
        })
    }else{
        alert("로그인먼저 해주세요");
        navi("/login");
    }
    }

    useEffect(()=>{
        myProfile();
    },[])

    return (
        <div>
            <p>{myInfo.name} 마이페이지</p>
            <br/>
            {myInfo&&
            <div>
                아이디: {myInfo.id} <br/>
                이름: {myInfo.name} <br/>
                이메일: {myInfo.email} <br/>
                전화번호: {myInfo.tel} <br/>
                주소: ({myInfo.zoncode}) {myInfo.address1} {myInfo.address2} <br/>
                생일: {myInfo.birthday} <br/>
                가입일: {myInfo.registered_at} <br/>
                회원등급 :{myInfo.type===1?'일반회원':'소셜로그인'}
            </div>
        }
        </div>
    );
};

export default Profile;