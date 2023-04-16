import React, { useEffect,useState} from 'react';
import TestImg from '../images/test.gif';
import XMLParser from 'react-xml-parser'; //xml parsing json
import axios from 'axios';
import '../styles/main.css';

const Main = () => {
        //api data 받아서 client에 뿌릴예정
        const [apidata,setApiData]=useState();
        const [apiarr,setApiArr] = useState([]);
        const vsor = []; //하나하나
        const vc = apiarr.length;

        //api 호출
        const youthPolicyApi = async () => {
            const url ='http://localhost:3001/api';
            const res = await fetch(url).then((res) => res.json());
            const emp = res.empsInfo.emp; //api 호출값
            const value=Object.values(emp);
            setApiArr(value);
            console.log("apiarr:",apiarr);
            
        }

        //api value 값자체로 출력
        for(var i=0; i < vc; i++){
            // for(var j=0; j < apiarr[i].length ; j++){
                if(apiarr[i]._text){
                    vsor.push(apiarr[i]._text);
                }else{
                    vsor.push(apiarr[i]._cdata);
                }
            // }
        }
         console.log("vsor:",vsor); //2차원 arr일경우 undefind


            // for(var i=0; i < vc ; i++){
            //     if(apiarr[i]._text){
            //         vsor.push(apiarr[i]._text);
            //     }else{
            //         vsor.push(apiarr[i]._cdata);
            //     }
            // }
  

          const apilist = vsor.map((row,idx)=> <li key={idx} >{row}</li>)

        useEffect(()=>{
            // getTest();
            //온라인청년정책 api
            youthPolicyApi();
        },[])
        

    return (
        <div id='main'>
            <div className='mainContent'>
               <ul>{apilist}</ul>
            </div>
            <div className='mainImg'>
                <img src={TestImg} alt="test용"/>
            </div>
        </div>
    );
};

export default Main;