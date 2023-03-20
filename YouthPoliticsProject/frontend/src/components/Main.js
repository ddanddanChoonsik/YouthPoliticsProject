import React, { useEffect,useState} from 'react';
import TestImg from '../images/test.gif';
import XMLParser from 'react-xml-parser'; //xml parsing json
import axios from 'axios';

const Main = () => {
    //청년정책 api key
    // const openApiVlak= "c4ef1792d2b792033d1e4126";
    // const pageIndex=1;
    // const display=1;
    // const url=`https://www.youthcenter.go.kr/opi/empList.do?pageIndex=${pageIndex}&display=${display}&openApiVlak=${openApiVlak}`;
    // console.log("url:",url); //값 들어옴

    // axios.get(url).then((Response)=>{
    //     const data = Response.data;
    //     console.log("data:",data);
    // })

    // const express = require('express');
    // const cors = require('cors');
  
    // let corsOption = {
    //     origin: 'http://localhost:3000' // 허락하는 요청 주소
    //     credentials: true // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
    // } 
  
    // app.use(cors(corsOption)); // CORS 미들웨어 추가
    useEffect(() => {
        async function fetchdata() {
          const { data } = await axios.get(
            '?pageIndex=1&display=1&openApiVlak=c4ef1792d2b792033d1e4126',
            );
          console.log(data);
        }
        fetchdata();
      }, []);
    return (
        <div id='main'>
            <div className='mainContent'>
                <p>대충 내용 작성예정1</p>
                <p>대충 내용 작성예정2</p>
                <p>대충 내용 작성예정3</p>
                <p>대충 내용 작성예정4</p>
                <p>대충 내용 작성예정5</p>
                <p>대충 내용 작성예정6</p>
                <p>대충 내용 작성예정7</p>
                <p>대충 내용 작성예정8</p>
            </div>
            <div className='mainImg'>
                <img src={TestImg} alt="test용"/>
            </div>
        </div>
    );
};

export default Main;