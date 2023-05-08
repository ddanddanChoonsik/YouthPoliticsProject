import React, { useEffect, useState } from 'react';
import '../../styles/notice.css';

import Pagination from '@mui/material/Pagination';
import { Link, useNavigate,useLocation,useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';

//table mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';

import {useDispatch, useSelector} from 'react-redux'; //redux
const NoticeList = () => {

    let allUserUrl = process.env.REACT_APP_SPRING_URL+"allUser";
    let countListUrl = process.env.REACT_APP_SPRING_URL+"notice/totalCount";
    let alldataUrl = process.env.REACT_APP_SPRING_URL+"notice/getAllDatas";
    let getAllUserUrl = process.env.REACT_APP_SPRING_URL+"member/getUser";

    const [allUser,setAllUser] =useState();
    const [countNotice,setCountNotice] = useState();
    const [allNotice,setAllNotice] = useState([]);
    const [user,setUser]=useState([]);
    const [apiarr,setApiArr] = useState([]);
    const navi = useNavigate();  
    const params = useParams();
    const [page, setPage] = useState(1);

    //pagination
    const handleChange = (event, value) => {
        if(value===undefined){
            return value=1;
        }
        fetch("http://localhost:3001/pageNum", { 
            method: "post", //통신방법
            headers: {
            "content-type": "application/json",
            },
                   body: JSON.stringify({page:value}), //page 의 value값 넘겨주기 성공 page : (ex. 1,2, ...)
                }).then((res)=>{
                return res.json();
                }).then((res)=>{ 
                    setPage(res.data.page); //(ex. 1,2, ...)
                    navi(`/notice/list/${value}`);
                }).catch(e=>{
                    console.log("e:",e);
                }) 
        };

    const pageConut = parseInt(countNotice/20 + 1) ; //페이지네이션 페이지 갯수

    const aaa = useSelector( (state) => state); //redux
    const dispatch = useDispatch();

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

    /*
    const [searchInput, setSearchInput] = useState("");
    const searchHandler = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    if (searchInput.length > 0) {
        //검색동작
    }*/

    useEffect(()=>{
        AllUserCount();
        CountList();
        getAllData();
        getUsers();
    },[])



    //!

    const SearchBar = () => {
        return (
            <div className='searchbar'>
                <input type="text" className='searchInput' placeholder='검색어를 입력하세요' /*</div>onChange={searchHandler} value={searchInput}*/>
                </input>
                <button type='button'>
                    <span>검색</span>
                </button>
            </div>
        )
    };

    const noticeForm =(e)=>{
        navi("/notice/form");
    }


    return (
        <div id='notice'>
            <br/>
            <h3>공지사항</h3>
            <br/>
            <div id='noticeList' className='noticeList'>
                <div>    
                    <div className='noticeCount' >
                        <strong> 총 <span className='crimson-text'>{countNotice}</span> 건</strong>
                    </div>
                    
                    <Stack spacing={3} justifyContent="center" alignItems="center">
                        <TableContainer component={Paper} >
                            <Table  size="small" aria-label="a dense table" style={{minWidth:'1500px'}}>
                                <TableHead>
                                <TableRow>
                                    <TableCell width='50'>#</TableCell>
                                    <TableCell align="center" width='40%'>제목</TableCell> 
                                    <TableCell align="center" width='40%'>내용</TableCell>
                                    <TableCell align="center" width='20%'>작성일</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {Object.values(allNotice).map((row,idx) => (
                                    <TableRow value={row.num} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" value={row.num}>{row.num}</TableCell>
                                    <TableCell align="center"value={row.num}>{row.title}</TableCell>
                                    <TableCell align="center" value={row.num}>{row.content}</TableCell>
                                    <TableCell align="center" value={row.num}>{row.created_at}</TableCell>
                                
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                    </TableContainer>
                                    
                    <div>
                        <Pagination count={pageConut} page={page!=Number(Object.values(params))?Number(Object.values(params)):page} onChange={handleChange} color="primary" /> 
                    </div> 
                       
                    
                <SearchBar /> 
                </Stack>
                <div className='newNotice'>
                        <button type='button' onClick={noticeForm}>공지사항 작성</button>
                    </div> 

            {/* ! */}
              {/* 
        
            <div>
                <button>공지사항 작성</button> //관리자 계정 => 글작성 버튼
            </div>
        </div>
    );
}; */}

            {/*} <p>리덕스:{aaa}</p>
            <button onClick={()=>{dispatch({type:'증가'})}}>++</button>
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
                    <th>작성일</th>
                </tr>
            </thead>
            <tbody>
            {allNotice.map((row,idx)=>(
                     <tr>
                       <td>{row.num}</td>
                        <td>{row.title}</td>
                        <td>{row.content}</td>
                        <td>{row.created_at}</td>
                     </tr> 
            ))
            }
            </tbody>
        </table>*/}
            </div>
        </div>
        </div>
    );
};

export default NoticeList;