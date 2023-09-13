import React, { useEffect, useState } from 'react';
import '../../styles/notice.css';

import Pagination from '@mui/material/Pagination';
import { Link, useNavigate,useLocation,useParams, useSearchParams } from 'react-router-dom';
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
import { ConstructionOutlined } from '@mui/icons-material';


const NoticeList = () => {

    let allUserUrl = process.env.REACT_APP_SPRING_URL+"allUser";
    let countListUrl = process.env.REACT_APP_SPRING_URL+"notice/totalCount";
    let alldataUrl = process.env.REACT_APP_SPRING_URL+"notice/getAllDatas";
    let filterdataUrl = process.env.REACT_APP_SPRING_URL+"notice/getFilterDatas";
    let getAllUserUrl = process.env.REACT_APP_SPRING_URL+"member/getUser";
    

    const [allUser,setAllUser] =useState();
    const [countNotice,setCountNotice] = useState();
    const [allNotice,setAllNotice] = useState([]);
    const [filterNotice, setFilterNotice] = useState([]);
    // const [user,setUser]=useState([]);
    const [apiarr,setApiArr] = useState([]);
    const navi = useNavigate();  
    const params = useParams();
    const location = useLocation();
    //const [searchParmas, setSearchParams] = useParams();
    const searchKeyword = useState();
    const [noticeState, setNoticeState] = useState();

    //페이지네이션 페이지 갯수
    const [page, setPage] = useState(1);
    //const pageConut = parseInt(countNotice/20 + 1) ; 
    const [pageCount,setPageCount]= useState(5);


    //pagination
    const handleChange =(e, value)=>{
        console.log("handlechange:",value);
        setPage(value);
    }

    /** 관리자 등급 확인 후 버튼 출력
     * 현재 member num = 3 일 때 isAdmin = true >> 추후 등급 0인 경우 출력
     * session에서 member_num 가져오는 함수 필요
     * 
    */
    //로그인시 관리자인지 확인하기
    const loginnum = localStorage.usernum;
    let adminChkUrl = process.env.REACT_APP_SPRING_URL+"member/chkAdmin?num="+loginnum;
    const [isAdmin, setIsAdmin] = useState(false)

    //관리자등급확인후 버튼출력 추가 =>딴딴230808
    const checkedAdmin = ()=>{
        
        axios.get(adminChkUrl).then(res=>{

            console.log("type번호 확인하기:",res.data);
            if(res.data===0){
                setIsAdmin(true);
            }else{
                setIsAdmin(false);
            }
        }).catch(err=>{

            console.log("type번호 err:",err);
        })
    }


    // const handleChange = (event, value) => {
    //     if(value===undefined){
    //         return value=1;
    //     }
    //     fetch("http://localhost:3001/pageNum", { 
    //         method: "post", //통신방법
    //         headers: {
    //         "content-type": "application/json",
    //         },
    //                body: JSON.stringify({page:value}), //page 의 value값 넘겨주기 성공 page : (ex. 1,2, ...)
    //             }).then((res)=>{
    //             return res.json();
    //             }).then((res)=>{ 
    //                 setPage(res.data.page); //(ex. 1,2, ...)
    //                 navi(`/notice/list/${value}`);
    //             }).catch(e=>{
    //                 console.log("e:",e);
    //             }) 
    //     };


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
            console.log("공지사항 :",res.data);
            setAllNotice(res.data);
        }).catch(err=>{
            console.log("err:",err);
        })
    }

    const getFilterData=()=>{
        axios.get(filterdataUrl).then(res=>{
            console.log("공지 검색:", res.data)
            setFilterNotice(res.data);
        }).catch(err=>{
            console.log("err:",err);
        })
    }

    // const getUsers=()=>{
    //     axios.get(getAllUserUrl).then(res=>{
    //         console.log(res.data);
    //         setUser(res.data);
    //     }).catch(err=>{
    //         console.log("err:",err);
    //     })
    // }

    //detail 페이지 전환
    const onClick = (e, num) => {
        console.log("공지사항 num : ", num);
        navi(`/notice/detail/${num}`);
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
        checkedAdmin();
        //getUsers();
    },[])



    //!

    

    const SearchBar = () => {
        return (
            <form onSubmit={searchClick}>
            <div className='searchbar'>
                <input type="text" className='searchInput' placeholder='검색어를 입력하세요' 
                    name='search' onChange={onChangeHandler}/>
                <input type="submit" value='검색'/>
                {/*<button type='submit'>
                    <span>검색</span>
                </button>*/}
            </div>
            </form>
        )
    };

    //검색 텍스트 입력 테스트
    const onChangeHandler = () => {
        
    }

    const noticeForm =(e)=>{
        navi("/notice/form");
    }

    //검색 기능 수행
    const searchClick = (location) => {

        console.log("location : ", location);
        console.log("search : ", location.search);

        const params = new URLSearchParams(location.search);

        let search = params.get("search");

        console.log("params.get('search') : ", search);

        searchNoticeHandler(search)
    }

    const searchNoticeHandler = (e) => {
        
    }

    const NoticeState = (e) => {
        // if (search) {
        //     setNoticeState(filterNotice)
        // }
        // else {
        //     setNoticeState(allNotice)
        // }
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
                            <Table  size="medium" aria-label="a dense table" style={{minWidth:'1000px'}}>
                                <TableHead>
                                <TableRow>
                                    <TableCell width='10%'>#</TableCell>
                                    <TableCell align="center" width='70%'>제목</TableCell> 
                                    {/*<TableCell align="center" width='40%'>내용</TableCell>*/}
                                    <TableCell align="center" width='20%'>작성일</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>

                                {Object.values(allNotice).map((row,idx) => (
                                    
                                    <TableRow key={idx} value={row.num} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={(e, num) => onClick(e, row.num)}>
                                    <TableCell component="th" scope="row" value={row.num}>{row.num}</TableCell>
                                    <TableCell align="left" value={row.num}>{row.title}</TableCell>
                                    {/*<TableCell align="center" value={row.num} >{row.content}</TableCell>*/}
                                    <TableCell align="center" value={row.num}>{row.created_at}</TableCell>
                                
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                    </TableContainer>
                                    
                    <div>
                        <Pagination count={pageCount} page={page} onChange={handleChange} color="primary" /> 
                    </div> 
                       
                <div>
                    <SearchBar /> 
                </div>    
                </Stack>

                {/**관리자 등급일 경우에만 버튼 출력
                 * 현재는 member num = 3 (임시 관리자계정) 일 때만 출력되도록 함 (미구현)
                 */}
                 { isAdmin && 
                <div className='newNotice'>
                        <button type='button' onClick={noticeForm}>공지사항 작성</button>
                    </div> 
                    }

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