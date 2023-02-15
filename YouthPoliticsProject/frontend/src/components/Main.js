import React, { useEffect,useState} from 'react';
import TestImg from '../images/test.gif';
import XMLParser from 'react-xml-parser'; //xml parsing json
import axios from 'axios';

const Main = () => {
    //청년정책 api key
    //const youthapikey=process.env.REACT_APP_YOUTH_POLITICS_API_KEY_SY;
    //const youthapikey="c4ef1792d2b792033d1e4126";

    //let apiURL=`https://www.youthcenter.go.kr/opi/empList.do?pageIndex=1&display=2&query=주거&openApiVlak=${youthapikey}&srchPolyBizSecd=003002001`;   

    // useEffect(() => {
    //     const config = {
    //         headers: {
    //             'Accept': 'application/json'
    //         }
    //     }
    //     fetch('/www.youthcenter.go.kr/opi/empList.do?pageIndex=1&display=1&query=%EC%A3%BC%EA%B1%B0&openApiVlak=c4ef1792d2b792033d1e4126&srchPolyBizSecd=003002001', config)
    //          .then((res) => console.log("response:", res.json()))
    //          .catch((error) => console.log("error:", error));
    // }, [])

    ///fail0.3
    // const [content, setContent] = useState([]);

    // useEffect(() => {
    //     fetch('https://www.youthcenter.go.kr/opi/empList.do?pageIndex=1&display=1&query=%EC%A3%BC%EA%B1%B0&openApiVlak=c4ef1792d2b792033d1e4126&srchPolyBizSecd=003002001').then(
    //       response=>{
    //         response.headers("Access-Control-Allow-Origin","*")
    //           return response.json();
    //       }
    //       ).then(data=>{
    //           setContent(data);
    //           console.log("api:",data);
    //       }
    //     )}, []);
    //0.4
    // const getData = async () => {
    //     const res = await fetch(
    //       "https://jsonplaceholder.typicode.com/comments"
    //     ).then((res) => res.json());
    //     console.log(res);
    //   };

    //0.5
    // const URL = "https://www.youthcenter.go.kr/opi/empList.do?";

    // const response = axios.get(URL, {
    //     params: {
    //       openApiVlak: process.env.REACT_APP_YOUTH_POLITICS_API_KEY_SY,
    //       pageIndex: 1,
    //       display: 1
    //     }
    // });

    //0.6
    // const getData = async () =>{
    //     const res = await axios.get('')
    // }
    const openApiVlak= "c4ef1792d2b792033d1e4126";
    const pageIndex=1;
    const display=1;
    const url=`https://www.youthcenter.go.kr/opi/empList.do?pageIndex=${pageIndex}&display=${display}&openApiVlak=${openApiVlak}`;
    console.log("url:",url); //값 들어옴

    axios.get(url).then((Response)=>{
        const data = Response.data;
        console.log("data:",data);
    })

    return (
        <div id='main'>
            <div className='mainContent'>
                <p>대충 내용 작성예정1</p>
                <p>대충 내용 작성예정2</p>
                <p>대충 내용 작성예정3</p>
                <p>대충 내용 작성예정</p>
                <p>대충 내용 작성예정</p>
                <p>대충 내용 작성예정</p>
            </div>
            <div className='mainImg'>
                <img src={TestImg} alt="test용"/>
            </div>
        </div>
    );
};

export default Main;