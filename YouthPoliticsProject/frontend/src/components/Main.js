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
                        console.log("emp:",emp); //accrRqisCn: {_cdata: '제한없음'} 
                        console.log("emp key:",Object.keys(emp)); //[0,1,2]
                        setApiArr(emp);
                        } 
                                                               
                        // for(let i=0; i<apiarr.length;i++){
                        //     if(apiarr[i]==apiarr[2]){
                        //         console.log("apiarr[i]:",apiarr[i]);
                        //     }
                        // }

                             for(let i=0; i<Object.keys(apiarr).length; i++){
                                 let key = Object.keys(apiarr[i]);   //0: "rownum" 1: "bizId" 2: "polyBizSecd"
                                  for(let a=0; a<key.length; a++){
                                        let sub = Object.keys(apiarr[i][key[a]]);    //_cdata , _text 
                                        //console.log("key: " + key[a] + " / val: " + apiarr[i][key[a]][sub[0]]);

                                        //console.log("key data:",key[0]);//ROWNUM
                                        // if(apiarr[0][key[a]]._text){
                                        //     console.log(key[a]+":"+apiarr[0][key[a]]._text)
                                        // } else{
                                        //     console.log(key[a]+":"+apiarr[0][key[a]]._cdata)
                                        // }

                                        vsor.push(key[a],apiarr[i][key[a]][sub[0]]); 
                                 }
                                }
                                   
                                
        console.log("vc:",vc); //3
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