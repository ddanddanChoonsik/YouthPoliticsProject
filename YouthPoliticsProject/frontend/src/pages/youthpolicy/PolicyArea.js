import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PolicyArea = () => {

    let allUserUrl = process.env.REACT_APP_SPRING_URL+"/allUser";

    const [allUser,setAllUser] =useState();

    const AllUserCount=()=>{
        axios.get(allUserUrl).then(res=>{
            setAllUser(res.data);
            console.log("all user count:",res.data);
        }).catch(err=>{
            console.log("err:",err);
        })
    }

    useEffect(()=>{
        AllUserCount();
        console.log(allUserUrl);
    },[])

    return (
        <div>   
            <p>청년공간 추후 api 연결할 예정</p>
            <p>기존 back-end spring-boot & mysql 연동 test</p>
            <p>{allUser}명</p>
        </div>
    );
};

export default PolicyArea;