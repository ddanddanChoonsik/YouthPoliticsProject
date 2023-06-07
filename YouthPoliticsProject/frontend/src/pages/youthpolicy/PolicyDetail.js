import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { useNavigate,useParams,useLocation } from 'react-router-dom';
import SmallMenu from './SmallMenu';


//bookmark mui
import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';

const PolicyDetail = () => {
    const navi = useNavigate();
    const location = useLocation();
    const params = useParams();
    //const srchPolicyId =Object.values(params);
   const [apidata,setApiData] = useState([]);
   const [parCurr,setParCurr]=useState();
    const [parow,setParRow]=useState();

//    const [anchorEl, setAnchorEl] = React.useState(null); //배열...
//    const editopen = Boolean(anchorEl); //배열
//    const handleClick = (event) => {
//      setAnchorEl(event.currentTarget);
//    };
//    const handleClose = () => {
//      setAnchorEl(null);
//    };


    const getData= async()=>{
        const url ='http://localhost:3001/bizId'; ///bizId url
        const res = await fetch(url).then((res)=>res.json());
            const emp = res.empsInfo.emp;
            //const emval=Object.values(res.empsInfo.emp);
            setApiData(emp);
            //console.log("emp:",emp);
            //console.log("e:",emval[1]._text);
        
        }

        const detailList = new Array();
        let result = {};
        let key = Object.keys(apidata);
        for(let i=0; i<Object.keys(apidata).length; i++){   
                        let sub = Object.keys(apidata[key[i]]);
                        result[key[i]] = apidata[key[i]][sub[0]];                          
                             }
                detailList.push(result);                            
            
        
        //bookmark
            let bookMarkUrl = process.env.REACT_APP_SPRING_URL+"policy/bookmark";
            let selectBookMarkUrl = process.env.REACT_APP_SPRING_URL+"policy/getbookmark";
            
                                const [bookArr,setBookArr]=useState([]);

                                const starChange = (e,r)=>{   
                                     //return true or false
                                    console.log("bookmark.checked:",e.target.checked);
                                   // r value ok
                                    console.log("bookmark.value:",r);
                                    let rbizId = r.bizId;
                                    let checked = e.target.checked;
                                    axios.post(bookMarkUrl,{
                                        bookmark: checked,
                                        bizId:rbizId
                                    }).then(res=>{
                                        alert("즐겨찾기 추가 성공");
                                    }).catch(err=>{
                                        console.log("err:",err);
                                    })
                                }

        const selectStar =()=>{     
                                axios.get(selectBookMarkUrl).then(res=>{
                                    //console.log("북마크값 가져오기:",res.data);
                                    setBookArr(res.data);
                                })
                            }  



            useEffect(()=>{
               //console.log("정책디테일");
                setParCurr(params.curr);
                setParRow(params.rownum);
                //console.log("parCurr:",parCurr);
                 //console.log("location:",location);  //pathname:'/policy/R2023062003523/curr2'
                //console.log("params:",params.curr);
                getData();
                console.log("params:",params); //bizId 잘옴
            },[location]);

    return (
<div id='detail'>

<div className='detailList'>
<div className='list'>
{
       Object.values(detailList).map((r,idx) =>(
           <div className='detaildata'>
              {/* <li>인덱스 번호 :{idx+1}번 정책</li> */}
                {/* 정책 ID / 정책일련번호*/}
                {/* <div>{r.bizId} / {r.polyBizSecd} </div> */}

                {/* 정책명 */}
                <div  className='detaildata' style={{display:'inline-flex',width:'99.5%',alignItems:'center'}}>
                <div className='bookmark'>
                    <Checkbox  sx={{padding:0}} size='small' icon={<StarIcon />} checkedIcon={<StarIcon />} 
                                checked={true} onChange={(e)=>starChange(e,r)}
                            />
                </div>
                <div className='parrownum'>{params.rownum}</div>
                <div  style={{justifyContent:'left',width:'100%'}}>
                     {r.polyBizSjnm}
                    </div>
                <div style={{justifyContent:'right'}} >  
                         <SmallMenu/> 
                      </div>
                      </div>

                {/* 정책유형:plcyTpNm / 기관 및 지자체 구분 : polyBizTy  */}
                <div className='detaildata'>{r.plcyTpNm} / {r.polyBizTy}</div>
              
                <div className='detaildata'>
                {/* 정책소개 : polyItcnCn / 지원내용 : sporCn / 지원규모 : sporScvl */}
                    <pre>
                        {r.polyItcnCn}<br/><br/>
                        {r.sporCn}<br/><br/>
                        {r.sporScvl}<br/><br/>

                        참여요건 - 연령 : {r.ageInfo}<br/>
                        참여요건 - 취업상태 : {r.empmSttsCn}<br/>
                        참여요건 - 학력 : {r.accrRqisCn}<br/>
                        참여요건 - 전공 : {r.majrRqisCn}<br/>
                        참여요건 - 특화분야 : {r.splzRlmRqisCn}<br/><br/>

                        신청기관명 : {r.cnsgNmor} <br/>
                        신청기간 : {r.rqutPrdCn} <br/>
                        신청절차 : {r.rqutProcCn} <br/>
                        심사발표 : {r.empmSttsCn}<br/>
                        사이트링크주소 : {r.rqutUrla}<br/>
                    </pre>   
                </div>
           </div>
       ))
      }
     </div> 
     {/* onClick={()=>navi(`/policy/${policybizId}/${parCurr}/${parow-1}`)} */}
     <div className='btnlist'>
      {params.rownum==1?"":
        <button className='past' style={{width:'200px',height:'50px',margin:'0',fontSize:'15px',borderRadius:'10px'}}>
        <i class="fa-solid fa-chevron-left"></i>
        </button>
        }&nbsp;&nbsp;
     <button  onClick={() => navi(`/policy/list/${parCurr}`)} style={{width:'200px',height:'50px',margin:'0',fontSize:'15px',borderRadius:'10px'}}>
     <i class="fa-solid fa-table-list" style={{textAlign:'center',height:'fit-content',fontSize:'15px', color:'#0a2c66'}}></i>
     </button>&nbsp;&nbsp;
     <button className='next' style={{width:'200px',height:'50px',margin:'0',fontSize:'15px',borderRadius:'10px'}}>
     <i class="fa-solid fa-chevron-right"></i>
     </button>
     </div>

</div>
{/* <div style={{display:'flex',height:'fint-content',justifyContent:'center'}}> */}
            {/* </div> */}
</div>
    );
};

export default PolicyDetail;