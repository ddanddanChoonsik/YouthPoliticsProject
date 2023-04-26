import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NoticeList = () => {

    let allUserUrl = process.env.REACT_APP_SPRING_URL+"allUser";
    let countListUrl = process.env.REACT_APP_SPRING_URL+"notice/totalCount";
    let alldataUrl = process.env.REACT_APP_SPRING_URL+"notice/getAllDatas";
    let getAllUserUrl = process.env.REACT_APP_SPRING_URL+"member/getUser";

    const [allUser,setAllUser] =useState();
    const [countNotice,setCountNotice] = useState();
    const [allNotice,setAllNotice] = useState([]);
    const [user,setUser]=useState([]);

    const AllUserCount=()=>{
        axios.get(allUserUrl).then(res=>{
            setAllUser(res.data);
            // console.log("all user count:",res.data);
        }).catch(err=>{
            console.log("err:",err);
        })
    }

    const CountList=()=>{
        axios.get(countListUrl).then(res=>{
            setCountNotice(res.data);
        }).catch(err=>{
            console.log("err:",err);
        })
    }

    const getAllData=()=>{
        axios.get(alldataUrl).then(res=>{
            console.log(res.data);
            setAllNotice(res.data);
        }).catch(err=>{
            console.log("err:",err);
        })
    }

    const getUsers=()=>{
        axios.get(getAllUserUrl).then(res=>{
            console.log(res.data);
            setUser(res.data);
        }).catch(err=>{
            console.log("err:",err);
        })
    }
    useEffect(()=>{
        AllUserCount();
        CountList();
         getAllData();
         getUsers();
    },[])

    return (
        <div>
            <p>공지사항 리스트</p>
            <p>기존 back-end spring-boot & mysql 연동 test</p>
            <p>{allUser}명</p>
            <p>공지사항 : {countNotice}개</p>
           <div>
            {
                user.map((row,idx)=>(
                    <div style={{border:'1px solid black' , width:'fit-content'}}>
                    <p># : {row.num}</p>
                    <p>Name : {row.name}</p>
                    <p>Id : {row.id}</p>
                    <p>Email : {row.email}</p>
                    <p>Tel : {row.tel}</p>
                    <p>Birth {row.birthday}</p>
                    <p>Address [{row.zoncode}]</p>
                    <p>{row.address1}{row.address2}</p>
                    <p>Registered_at : {row.registered_at}</p>
                    <p>Grade : {row.type==0?"관리자":"일반회원"}</p>
                    </div>
                ))
            }
           </div>
        <table style={{width:'800px'}}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성자</th>
                    <th>날짜</th>
                </tr>
            </thead>
            <tbody>
            {allNotice.map((row,idx)=>(
                     <tr>
                       <td>{row.num}</td>
                        <td>{row.name}</td>
                        <td>{row.title}</td>
                        <td>{row.content}</td>
                        <td>{row.created_at}</td>
                     </tr> 
            ))
            }
            </tbody>
        </table>     
        </div>
    );
};

export default NoticeList;