import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';

const Profile = () => {

    const navi = useNavigate();
    const loginid = localStorage.userid;
    const loginnum = localStorage.usernum;
    const loginok = localStorage.loginok;
    
    const myProfileUrl = process.env.REACT_APP_SPRING_URL+"member/myprofile?num="+loginnum;
    let uploadUrl=process.env.REACT_APP_SPRING_URL+"member/upload?loginNum="+loginnum;
    let photoUrl = process.env.REACT_APP_SPRING_URL + "save/";
    let updateUrl = process.env.REACT_APP_SPRING_URL + "member/update?loginNum="+loginnum + "&id=" + loginid;

    const [myInfo,setMyInfo]=useState({});
    const [photo,setPhoto] =useState('');
    const [myImg,setMyImg]=useState('');    //upload시 프사 바뀌는거


    const myProfile =()=>{
        if(loginok){
        axios.get(myProfileUrl).then(res=>{
            setPhoto(res.data.photo);
            console.log("myprofile",res.data.photo);
            setMyInfo(res.data.member);

        }).catch(err=>{
            console.log("err:",err);
        })
    }else{
        alert("로그인먼저 해주세요");
        navi("/login");
    }
    }

  
    const uploadProfileImg=(e)=>{
        // const uploadImg = (e.target.files)[0].name;
        //setMyImg(URL.createObjectURL(e.target.files[0])); 
        //const imageFile = URL.createObjectURL(e.target.files[0]);
        
        const uploadFile=e.target.files[0];
         const imageFile=new FormData();
            //spring 에서 multipartfile로 받는 이름 
         imageFile.append("uploadFile",uploadFile);

        axios({
            method:'post',
            url:uploadUrl, //백앤드 url
            data:imageFile,
             headers:{'Content-Type':'multipart/form-data'}
        }).then(res=>{
            console.log("uploadprofile:",res.data);
            setMyImg(URL.createObjectURL(e.target.files[0])); //백엔드에서 보내는 변경된 이미지명을 photo변수에 넣는다
            // console.log()
        }).catch(err=>{
            alert(err);
        })
    }

    const save=()=>{
        //console.log(myImg);
        // setDto({
        //     ...dto,
        //     file_name: photo
        // });
        axios.post(updateUrl,{myImg}).then(res=>{
            alert("프로필변경 및 전송완료");
            console.log("save:",res);

        })
        .catch(err => console.log(err));
    }

    useEffect(()=>{
        myProfile();
    },[])

    return (
        <div>
            <p>{myInfo.name} 마이페이지</p>
            <br/>
            <div>
            {/* {photo&& */}
                <div style={{textAlign:'center'}}>
                    {myImg===null?"": <img src={myImg} alt="안나옴" style={{width:'300px',height:'300px'}}/>} 
                    <Avatar 
                        src={photoUrl+photo} 
                        // style={{marginTop:'150px',borderRadius:'10px'}} 
                        // size={200} 
                        sx={{ width: 56, height: 56 }}
                        //onClick={()=>{fileInput.current.click()}}
                        >
                    </Avatar>
                <input type="file"  id="profileImg" name="profileImg" accept="image/*" onChange={uploadProfileImg} /><br/>
                <p>{photo}</p>
            
                </div>
            {/* } */}
            </div>
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
                회원등급 :{myInfo.type===1?'일반회원':myInfo.type===0?'관리자':'카카오로그인'}
           
                <button className="btn-normal" id="saveUserInfo" onClick={save}>저장하기</button>
            </div>
        }
        </div>
    );
};

export default Profile;