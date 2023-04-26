import React, { useEffect,useState} from 'react';
import TestImg from '../images/test.gif';
import XMLParser from 'react-xml-parser'; //xml parsing json
import axios from 'axios';
import '../styles/main.css';
import '../styles/night.css';

//mui list
import { Link } from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { isCompositeComponent } from 'react-dom/test-utils';

import PolicyList from '../pages/youthpolicy/PolicyList'

const Main = () => {

      
        // //api data 받아서 client에 뿌릴예정
        //const [apidata,setApiData]=useState();
        const [apiarr,setApiArr] = useState([]);
        const [search,setSearch]= useState("");

        // //api 호출
        const youthPolicyApi = async () => {
                        const url ='http://localhost:3001/api';
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
                                //console.log(resultList);
    
         const onSearch = (e) =>{
                console.log("검색:",e.target.value);
                setSearch(e.target.value);
            }                       

         const getSearch =()=>{
            console.log("결과:",search);
        }   
        useEffect(()=>{
            // getTest();
            //온라인청년정책 api
            youthPolicyApi();
            console.log("메인");
        },[])
        
    
    return (
        <div id='mainpage'>
            <div className='mainContent'>
                <form>
                <input type="search" name="txt" placeholder='검색' onChange={(e)=>onSearch(e)}/>&nbsp;
                <input type="button" name="search" value='search' onClick={getSearch}/>
                </form>
                <div className='apiList'>
               {
                Object.values(resultList).map((r,idx) =>(
                    <ul>
                        <li key={idx}>{idx+1}번 정책</li>
                         {/* <li>{r.accrRqisCn}</li>
                         <li>{r.ageInfo}</li> */}
                         <li key={r.bizId}>정책 ID:{r.bizId}</li>
                         <li key={r.plcyTpNm}>기관 및 지자체 구분 : {r.plcyTpNm}</li>
                         <li key={r.cnsgNmor}>신청기관명 : {r.cnsgNmor}</li>
                         <li key={r.polyBizSjnm}>정책명 : {r.polyBizSjnm}</li>
                         <li key={r.rqutPrdCn}>신청기간 : {r.rqutPrdCn}</li>
                         {/* <li>{r.empmSttsCn}</li>
                         <li>{r.majrRqisCn}</li> */}                    
                         {/* <li>{r.polyBizSecd}</li> */}                  
                         {/* <li>{r.polyBizTy}</li>
                         <li>{r.polyItcnCn}</li> */}
                         {/* <li>{r.empmSttsCn}</li>
                         <li>{r.rqutProcCn}</li>
                         <li>{r.plcyTpNm}</li>
                         <li>{r.rqutUrla}</li>
                         <li>{r.splzRlmRqisCn}</li>
                         <li>{r.sporCn}</li>
                         <li>{r.sporScvl}</li> */}
                    </ul>
                ))
               }
               </div>
            </div>
            <div className='mainImg'>
                {/* <img src={TestImg} alt="test용"/> */}
                <div class="wrapper">
                    <div class="planet">
                        <div class="moon">

                        </div>
                    </div>
                    <div class="moon-spinner">
                        <div class="moon2">

                        </div>

                    </div>
                    </div>
                <div class="night" style={{top:'-379px'}}>

                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    
                </div>
                <div class="night" style={{top:'-32px',right:'38px'}}>
                        
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                </div>
                <div class="night" style={{top:'150px',right:'215'}}>

                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    <div class="shooting_star"></div>
                    
                </div>
            </div>
            {/* <p>메인</p> */}
        </div>
    );
};

export default Main;