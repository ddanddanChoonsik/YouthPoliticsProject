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
                                const [starcheck,setStarCheck]=useState([1,0]);

                                const starChange = (e,r)=>{   
                                    console.log("bookmark.checked:",e.target.checked);
                                    //return true or false
                                    console.log("bookmark.value:",r);
                                    // r value ok
                                    setStarCheck([e.target.checked, e.target.checked]);

                                    
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

    return (
        <div id='policy'>
                <div className='policyList'>
                    {/* <PolicyFilter /> */}
                    {/* <button onClick={onClick}>testtest</button> */}
                    <Stack spacing={3} justifyContent="center" alignItems="center">
                    {/* <TableContainer component={Paper} >
                        <Table  size="small" aria-label="a dense table" style={{minWidth:'1500px'}}>
                            <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="center">정책ID</TableCell> 
                                <TableCell align="center">정책유형</TableCell>
                                <TableCell align="center">기관 및 지자체 구분</TableCell>
                                <TableCell align="center">정책명</TableCell>
                                <TableCell align="center">신청기간</TableCell>
                                <TableCell align="center">신청기관명</TableCell>
                                <TableCell align="center">사이트링크주소</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {Object.values(resultList).map((r,idx) => (
                                <TableRow value={r.bizId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} onClick={(e)=>onClick(e)}>
                                {/* <TableCell component="th" scope="row" value={r.bizId}>{idx+1}</TableCell> */}
                               {/* <TableCell component="th" scope="row" value={r.bizId}>{r.rownum}</TableCell>
                                <TableCell align="center"value={r.bizId}>{r.bizId}</TableCell>
                                <TableCell align="center" value={r.bizId}>{r.plcyTpNm}</TableCell>
                                <TableCell align="center" value={r.bizId}>{r.polyBizTy}</TableCell>
                                <TableCell align="center" value={r.bizId}>{r.polyBizSjnm}</TableCell>
                                <TableCell align="center" value={r.bizId}>{r.rqutPrdCn}</TableCell>
                                <TableCell align="center" value={r.bizId}>{r.cnsgNmor}</TableCell>
                                <TableCell align="center" value={r.bizId}>
                                    {
                                    r.rqutUrla.charAt(0)==="h" ? <a href={r.rqutUrla} target="{_blank}"><i class="fa-solid fa-house-signal" style={{color:'green',fontSize:'18px'}}/></a>:<i class="fa-solid fa-house-circle-xmark"style={{fontSize:'14px'}}></i>
                                    }
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                </TableContainer> */}
                 {/* test ui */}
                 <div className='policyList1'>
                {Object.values(resultList).map((r,idx) => (
                    <div className='polyData'>
                        <div>
                        <div className="bookmark">
                            <Checkbox  sx={{padding:0}} size='small' icon={<StarIcon />} checkedIcon={<StarIcon />} 
                                check={starcheck} onChange={(e)=>starChange(e,r)}
                            />
                            </div>
                        </div>
                    <div className='policyData' onClick={(e,bzId,rnum)=>onClick(e,r.bizId,r.rownum)}>
                    {/* <div className='policyData' onClick={(e,rs)=>onClick2(e,r)}>  */}
                        <div className='policyFstItem'>
                            <div className='polyBizSjnm'>{r.polyBizSjnm}</div>
                            <div className='plcyTpNm'>{r.plcyTpNm}</div>
                            <div className='polyBizTy'>{r.polyBizTy}</div>  

                        </div>
                        <div className='policySndItem'>
                        <div className='cnsgNmor'>{r.cnsgNmor==="-"?"-":r.cnsgNmor}</div>
                            <div className='rqutPrdCn'><i class="fa-solid fa-calendar"></i>&nbsp;{r.rqutPrdCn}</div>
                            <div className='rqutUrla'> {/*•*/}   {
                                    r.rqutUrla.charAt(0)==="h" ? <a href={r.rqutUrla} target="{_blank}"><i class="fa-solid fa-house-signal" style={{color:'green'}}/></a>:<i class="fa-solid fa-house-circle-xmark"></i>
                                    }</div>
                        </div>
                    </div>
                    <div>
                    <div className='polyListmenu'><SmallMenu/> </div>
                    </div>
                    </div>
                            ))}
                </div> 
            
                <Pagination count={20} page={page!=Number(Object.values(params))?Number(Object.values(params)):page} onChange={handleChange} color="primary" />

                {/* <Typography>Page: {page}</Typography> */}
                </Stack>

                {/* <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">정책ID</th>
                        <th scope="col">정책유형</th>
                        <th scope="col">기관 및 지자체 구분</th>
                        <th scope="col">정책명</th>
                        <th scope="col">신청기간</th>
                        <th scope="col">신청기관명</th>
                        <th scope="col">사이트링크주소</th>
                        </tr>
                    </thead> */}
                    {/* <tbody>
                    {
                Object.values(resultList).map((r,idx) =>(
                         <tr value={r.bizId} onClick={(e)=>onClick(e)}> */}
                        {/* //<tr onClick={getId}> */}
                        {/* <th scope="row">{idx+1}</th>
                        <td>{r.bizId}</td>
                        <td>{r.plcyTpNm}</td>
                        <td>{r.polyBizTy}</td>
                        <td className='polyName'>{r.polyBizSjnm}</td>
                        <td>{r.rqutPrdCn}</td>
                        <td>{r.cnsgNmor}</td>
                        <td>{r.rqutUrla}</td>
                        <td style={{display:'none'}}>{r.bizId}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table> */}
               {/* {
                Object.values(resultList).map((r,idx) =>(
                    <ul>
                         <li>인덱스 번호 :{idx+1}번 정책</li>
                         <li>정책 ID :{r.bizId}</li>
                         <li>정책일련번호 : {r.polyBizSecd}</li>
                         <li>기관 및 지자체 구분 : {r.polyBizTy}</li>
                         <li>정책명 : {r.polyBizSjnm}</li>
                         <li>정책소개 : {r.polyItcnCn}</li>
                         <li>정책유형 : {r.plcyTpNm}</li>
                         <li>지원규모 : {r.sporScvl}</li>
                         <li>지원내용 : {r.sporCn}</li>
                         <li>참여요건 - 연령 : {r.ageInfo}</li>
                         <li>참여요건 - 취업상태 : {r.empmSttsCn}</li>
                         <li>참여요건 - 학력 : {r.accrRqisCn}</li>
                         <li>참여요건 - 전공 : {r.majrRqisCn}</li>
                         <li>참여요건 - 특화분야 : {r.splzRlmRqisCn}</li>
                         <li>신청기관명 : {r.cnsgNmor}</li>
                         <li>신청기간 : {r.rqutPrdCn}</li>
                         <li>신청절차 : {r.rqutProcCn}</li>
                         <li>심사발표 : {r.empmSttsCn}</li>
                         <li>사이트링크주소 : {r.rqutUrla}</li>
                    </ul>
                ))
               } */}
   
                </div>
        </div>
    );
};

export default PolicyList;