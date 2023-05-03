import React, { useEffect, useState } from 'react';
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
    useEffect(()=>{
        AllUserCount();
        CountList();
         getAllData();
         getUsers();
    },[])

    //!
      //임시 데이터
    //   const posts = [
    //     {
    //         num : 1, title : '제목1', created_at : '2023-04-16'
    //     },
    //     {
    //         num : 2, title : '제목2', created_at : '2023-04-17'
    //     },
    //     {
    //         num : 3, title : '제목3', created_at : '2023-04-18'
    //     }
    // ];

    // const SearchBar = () => {
    //     return (
    //         <div className='searchbar'>
    //             <input type="text" className='searchword'>
    //             </input>
    //             <button type='button'>
    //                 <span>검색</span>
    //             </button>
    //         </div>
    //     )
    // };
    
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage, setPostsPerPage] = useState(10);

    // const totalPosts = posts.length;
    // const indexOfLast = currentPage * postsPerPage;
    // const indexOfFirst = indexOfLast - postsPerPage;
    // const paginate = setCurrentPage;
    

    // const currentPosts = (posts) => {
    //     let currentPosts = 0;
    //     currentPosts = posts.slice(indexOfFirst, indexOfLast);
    //     return currentPosts;
    // };

    // const PageUl = styled.ul`
    // float: left;
    // list-style: none;
    // text-align: center;
    // border-radius: 3px;
    // color: white;
    // padding: 1px;
    // border-top: 3px solid #186ead;
    // border-bottom: 3px solid #186ead;
    // background-color: rgba(0, 0, 0, 0.4);
    // `;

    // const PageLi = styled.li`
    // display: inline-block;
    // font-size: 17px;
    // font-weight: 600;
    // padding: 5px;
    // border-radius: 5px;
    // width: 25px;
    // &:hover {
    //     cursor: pointer;
    //     color: white;
    //     background-color: #263a6c;
    // }
    // &:focus::after {
    //     color: white;
    //     background-color: #263a6c;
    // }
    // `;

    // const PageSpan = styled.span`
    // &:hover::after,
    // &:focus::after {
    //     border-radius: 100%;
    //     color: white;
    //     background-color: #263a6c;
    // }
    // `;

    // //기능 파일에 페이지네이션 기능 추가
    // const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    //     const pageNumbers = [];
    //     for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    //         pageNumbers.push(i);
    //     }

    return (
        <div>
            {/* ! */}
              {/* return (
            <div className='pagination'>
                <nav>
                    <PageUl>
                    {pageNumbers.map((number) => (
                        <PageLi key={number} className="page-item">
                        <PageSpan onClick={() => paginate(number)} className="page-link">
                            {number}
                        </PageSpan>
                        </PageLi>
                    ))}
                    </PageUl>
                </nav>
            </div>
        )
    };

    return (
        
        
        <div className='noticeListPage'>
            <p>공지사항 리스트</p>
            <div>
                <SearchBar></SearchBar>
            </div>
            <div>
                <table className='noticelist'>
                <thread>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>등록일</th>
                    </tr>
                </thread>
                <tbody>
                    {
                        posts.map(item => {
                            return (
                                <tr>
                                    <td>{item.num}</td>
                                    <td>{item.title}</td>
                                    <td>{item.created_at}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
            </div>
            <div>
                <Pagination
                postsPerPage={postPerPage}
                totalPosts={totalPosts}
                paginate={setCurrentPage}
                ></Pagination>
            </div>
            <div>
                <button>공지사항 작성</button>
            </div>
        </div>
        
        //관리자 계정 => 글작성 버튼
    );
}; */}

             <p>리덕스:{aaa}</p>
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