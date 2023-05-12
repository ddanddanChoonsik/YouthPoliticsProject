import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate,useParams,useLocation } from 'react-router-dom';

const PolicyDetail = () => {
    const navi = useNavigate();
    const location = useLocation();
    const params = useParams();
    //const srchPolicyId =Object.values(params);
   const [apidata,setApiData] = useState([]);
   const [parCurr,setParCurr]=useState();

    const getData= async()=>{
        const url ='http://localhost:3001/bizId'; ///bizId url
        const res = await fetch(url).then((res)=>res.json());
            const emp = res.empsInfo.emp;
            //const emval=Object.values(res.empsInfo.emp);
            setApiData(emp);
            console.log("emp:",emp);
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
                console.log(detailList);

    useEffect(()=>{
        console.log("정책디테일");
        setParCurr(params.curr);
        //console.log("parCurr:",parCurr);
        getData();
        //console.log("params:",params); //bizId 잘옴
    },[]);

    useEffect(()=>{
        console.log("location:",location);  //pathname:'/policy/R2023062003523/curr2'
        console.log("params:",params.curr);
    },[location])


    return (
<div id='detail'>

<div className='detailList'>
<div className='list'>
{
       Object.values(detailList).map((r,idx) =>(
           <ul>
              {/* <li>인덱스 번호 :{idx+1}번 정책</li> */}
                <li>정책 ID : {r.bizId}</li>
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
      }
     </div> 
     <div className='btnlist'>
     <button  onClick={() => navi(`/policy/list/${parCurr}`)} style={{width:'200px',height:'50px',margin:'0',fontSize:'15px',borderRadius:'10px'}}>
     <i class="fa-solid fa-table-list" style={{textAlign:'center',height:'fit-content',fontSize:'25px', color:'#0a2c66'}}></i>
     </button>
     </div>

</div>
{/* <div style={{display:'flex',height:'fint-content',justifyContent:'center'}}> */}
            {/* </div> */}
</div>
    );
};

export default PolicyDetail;