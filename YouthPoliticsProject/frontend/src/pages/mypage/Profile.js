import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import MyPolicy from './MyPolicy';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

const Profile = () => {

    const navi = useNavigate();
    const loginid = localStorage.userid;
    const loginnum = localStorage.usernum;
    const loginok = localStorage.loginok;
    
    let myProfileUrl = process.env.REACT_APP_SPRING_URL+"member/myprofile?num="+loginnum;
    let uploadUrl=process.env.REACT_APP_SPRING_URL+"member/upload?loginNum="+loginnum;
    let photoUrl = process.env.REACT_APP_SPRING_URL + "save/";
    let updateUrl = process.env.REACT_APP_SPRING_URL + "member/update?loginNum="+loginnum + "&id=" + loginid;

    const [myInfo,setMyInfo]=useState({});
    const [photo,setPhoto] =useState('');
    const [img,setImg]=useState('');


    const myProfile =()=>{
        if(loginok){
        axios.get(myProfileUrl).then(res=>{
            setImg(photoUrl+res.data.photo);
            console.log("profile",res.data);
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
            setPhoto(photoUrl+res.data);
        }).catch(err=>{
            alert(err);
        })
    }

    const save=()=>{
        console.log(photo);
        axios.post(updateUrl,{photo}).then(res=>{
            alert("프로필변경 및 전송완료");
            console.log("save:",res.data);
            localStorage.photo=photoUrl+photo;
            myProfile();
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
                <div style={{display:'flex',textAlign:'center',flexDirection:'column',alignItems:'center'}}>
                    {/* {photo===null||undefined|''?"":<img src={photo} alt="안나옴" style={{width:'300px',height:'300px'}}/> }     <br/> */}
                    <Avatar 
                        src={img==null?'':img} 
                        // style={{textAlign:'center'}} 
                        // size={200} 
                        sx={{ width: 150, height: 150 }}
                        //onClick={()=>{fileInput.current.click()}}
                        >
                    </Avatar> 
                    <br/>
                    <label style={{border:'1px solid #333',borderRadius:'5px',padding:'3px',backgroundColor:'#F0F0F0'}}>파일업로드
                    <input type="file"  id="profileImg" name="profileImg" accept="image/*" onChange={uploadProfileImg} style={{display:'none'}}/>
                    </label>
                    <br/>
                    <button className="btn-normal" id="saveUserInfo" onClick={save}>저장하기</button>
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
            </div>
        }

        <br/>
        <div>
            <MyPolicy/>
        </div>
        {/* 정책tab */}
                      {/* <Box sx={{ width: 'inherit', typography: 'body1' }}>
            <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

            <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Map" value="1" />
            <Tab label="Review" value="2" />
            {/* <Tab label="Item Three" value="3" /> */}

           {/*</TabList>
            </Box>
        
            <TabPanel value="1">
               
            </TabPanel> */}
            {/* <TabPanel value="2" sx={{overflow:'scroll',overflowX:'hidden',padding:'0'}}> */}
            {/* </TabPanel>
            </TabContext>
            </Box> */}
        </div>
    );
};

export default Profile;