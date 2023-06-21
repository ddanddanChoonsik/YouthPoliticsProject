import React, { useEffect ,useState} from 'react';
import '../../styles/policy.css';
import '../../styles/policyfilter.css';
import PolicyDetail from './PolicyDetail';
import PolicyFilter from './PolicyFilter';
import SmallMenu from './SmallMenu';
import axios from 'axios';

//pagination mui
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


//bookmark mui
import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';
import { CoPresentOutlined } from '@mui/icons-material';


const PolicyList = () => {
     const [apiarr,setApiArr] = useState([]);
     const navi = useNavigate();  
     const location = useLocation();
     const params = useParams();
     const [page, setPage] = useState(1);
     const [onedata,setOneData] =useState();

     // //api 호출 (pagination 총값도 가져와야함)
     const youthPolicyApi = async () => {
                     const url ='http://localhost:3001/list';   
                     const res = await fetch(url).then((res) => res.json());
                     const emp = res.empsInfo.emp; //api 호출값       
                     setApiArr(emp);                                
                     }                                  
                          const resultList = new Array();
                             for(let i=0; i<Object.keys(apiarr).length; i++){
                                 let result = {};
                                 let key = Object.keys(apiarr[i]);
                                 for(let a=0; a<key.length; a++){
                                     let sub = Object.keys(apiarr[i][key[a]])
                                     result[key[a]] = apiarr[i][key[a]][sub[0]];
                                 }
                                 resultList.push(result);
                             }

                                 
     //pagination
     const handleChange = (event, value) => {
        if(value===undefined){
            return value=1;
        }
        fetch("http://localhost:3001/pageNum", { //text 주소    서 받을 예정
            method: "post", //통신방법
            headers: {
            "content-type": "application/json",
            },
                   body: JSON.stringify({page:value}), //page 의 value값 넘겨주기 성공 page : (ex. 1,2, ...)
                }).then((res)=>{
                return res.json();
                }).then((res)=>{ 
                    setPage(res.data.page); //(ex. 1,2, ...)
                    navi(`/policy/list/${value}`);
                    youthPolicyApi();
                   // navi(`/policy/detail/${policybizId}`);
                }).catch(e=>{
                    console.log("e:",e);
                }) 
        };
                        // 정책하나 클릭시 policydetail로 넘어감            
                        const onClick = (e,bzId,rnum) => {
                            console.log("bzId:",bzId);
                                fetch("http://localhost:3001/pid", { //text 주소에서 받을 예정
                                    method: "post", //통신방법
                                    headers: {"content-type": "application/json",},
                                    body: JSON.stringify({id:bzId,num:rnum}), //id 의 value값 넘겨주기 성공 id : "R2023121904983" "R2023122005003"
                                }).then((res)=>{
                                return res.json();
                                }).then((res)=>{
                                    //console.log("res.id:",res.data.id); //bizId
                                    const policybizId = res.data.id;
                                    const rownum= res.data.num
                                    navi(`/policy/${policybizId}/${page}/${rownum}`);
                                    //console.log("hand:",page);  //unfiend
                                }).catch(e=>{
                                    console.log("e:",e);
                                })
                                };
                            

                            // 정책하나 클릭시 전체값 전달   (추후수정)       
                            const onClick2 = (e,rs) => {
                            console.log("bzId:",rs.bizId); //bizId
                            console.log('rownum:',rs.rownum);
                            //const policybizId=rs.bizId;
                            setOneData(rs);
                            //navi(`/policy/${policybizId}/${page}`);
                            
                            //const policybizId=rs.
                            //navi(`/policy/${policybizId}/${page}`);

                                // fetch("http://localhost:3001/pid", { //text 주소에서 받을 예정
                                //     method: "post", //통신방법
                                //     headers: {"content-type": "application/json",},
                                //     body: JSON.stringify({result:rs}), //id 의 value값 넘겨주기 성공 id : "R2023121904983" "R2023122005003"
                                // }).then((res)=>{
                                // return res.json();
                                // }).then((res)=>{
                                //     //console.log("res.id:",res.data.id); //bizId
                                //     const policybizId = res.data.result;
                                //     navi(`/policy/${policybizId}/${page}`);
                                //     //console.log("hand:",page);  //unfiend
                                // }).catch(e=>{
                                //     console.log("e:",e);
                                // })
                                };

                                //bookmark
                                let bookMarkUrl = process.env.REACT_APP_SPRING_URL+"policy/bookmark";
                                let selectBookMarkUrl = process.env.REACT_APP_SPRING_URL+"policy/getbookmark";
                                const [checkit,setCheckIt]=useState([]);


                                const starChange = (e,r)=>{   
                                    let deleteBookMarkUrl = process.env.REACT_APP_SPRING_URL+"policy/deletebookmark?bizId="+r.bizId;
                                    let rbizId = r.bizId;
                                    let checked = e.target.checked;
                                     console.log("checkedvalue:",checked);
                                    //let checkedvalue = e.target.value;
                                    //북마크 체크시 db에 값전달
                                    if(checked){
                                        axios.post(bookMarkUrl,{
                                            bookmark: checked,
                                            bizId:rbizId
                                        }).then(res=>{
                                            alert("즐겨찾기 추가 성공");
                                            setCheckVal(true);
                                            selectStar();
                                        }).catch(err=>{
                                            console.log("err:",err);
                                        })
                                    }
                                    else if(checked ===false){
                                        axios.delete(deleteBookMarkUrl).then(res=>{
                                            
                                             setCheckVal(false);
                                             
                                             //console.log("-liked value:",liked);
                                           })
                                        alert("db에서 삭제함",checkval);
                                        selectStar();

                                    }

                                    //return true or false
                                    //console.log("bookmark.checked:",e.target.checked);
                                    // r value ok
                                    //console.log("bookmark.value:",r);

                                    }

                            const [checkval,setCheckVal]=useState(false);
                            //북마크체크한값 보기
                             const selectStar =()=>{     
                                let dataArr = [];
                                 axios.get(selectBookMarkUrl).then(res=>{
                                    // setBookArr(res.data);
                                    // console.log("북마크된값 가져오기 :",res.data);
                                for(let i=0; i< res.data.length;i++){
                                        //   console.log(`bookmark[${i}]값:${res.data[i].bizId}`);
                                          dataArr.push(res.data[i].bizId);
                                }
                                        setCheckIt(dataArr)
                                })
                             }  

                                useEffect(()=>{
                                    console.log("정책리스트");
                                    //온라인청년정책 api
                                    youthPolicyApi();
                                    if(handleChange){
                                        handleChange();
                                }else{
                                    youthPolicyApi();

                                }
                            },[])


                            useEffect(()=>{
                                selectStar();
                            },[checkval])
    return (
        <div id='policy'>
                <div className='policyList'>
                    {/* <PolicyFilter /> */}
                    {/* <button onClick={onClick}>testtest</button> */}
                    <Stack spacing={3} justifyContent="center" alignItems="center">
                 {/* test ui */}
                 <div className='policyList1'>
                {resultList.map((r,idx) => (
                    <div className='polyData' key={idx}>
                        <div>
                        <div className="bookmark">
                        <Checkbox  sx={{padding:0}} size='small' icon={<StarIcon />} checkedIcon={<StarIcon />}
                            checked={checkit.includes(r.bizId)?true:false} onChange={(e)=>starChange(e,r)}
                          value={checkit.includes(r.bizId)?true:false}
                          />
                            </div>

                        </div>
                    <div className='policyData' onClick={(e,bzId,rnum)=>onClick(e,r.bizId,r.rownum)}>
                    {/* <div className='policyData' onClick={(e,rs)=>onClick2(e,r)}>  */}
                        <div className='policyFstItem'>
                        <div className='bizId'>{r.bizId}</div>
                            <div className='polyBizSjnm'>{r.polyBizSjnm}</div>
                            <div className='plcyTpNm'>{r.plcyTpNm}</div>
                            <div className='polyBizTy'>{r.polyBizTy}</div>  

                        </div>
                        <div className='policySndItem'>
                        <div className='cnsgNmor'>{r.cnsgNmor==="-"?"-":r.cnsgNmor}</div>
                            <div className='rqutPrdCn'><i className="fa-solid fa-calendar"></i>&nbsp;{r.rqutPrdCn}</div>
                            <div className='rqutUrla'> {/*•*/}   {
                                    r.rqutUrla.charAt(0)==="h" ? <a href={r.rqutUrla} target="{_blank}"><i className="fa-solid fa-house-signal" style={{color:'green'}}/></a>:<i class="fa-solid fa-house-circle-xmark"></i>
                                    }</div>
                        </div>
                    </div>
                    <div>
                    <div className='polyListmenu'><SmallMenu/> </div>
                    </div>
                    </div>
                            ))}
                </div> 
            
                <Pagination count={20} page={page!==Number(Object.values(params))?Number(Object.values(params)):page} onChange={handleChange} color="primary" />

                {/* <Typography>Page: {page}</Typography> */}
                </Stack>
                </div>
        </div>
    );
};

export default PolicyList;