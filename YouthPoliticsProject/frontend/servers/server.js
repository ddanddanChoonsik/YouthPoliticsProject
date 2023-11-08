const express = require('express');
const app = express();
const cors = require('cors');
const request = require("request")
const bodyParser = require('body-parser');
const convert = require("xml-js");
const port =process.env.PORT || 3001;
require("dotenv").config(); // dotenv 불러오기
const mysql = require("mysql"); // mysql 모듈을 불러옵니다.
// console.log("dotenv:",process.env.REACT_APP_SPRING_URL)
app.use(cors());
app.use(bodyParser.json());

const url = process.env.REACT_APP_YOUTH_POLITICS_API_URL;
const newYouthUrl = process.env.REACT_APP_NEW_YOUTH_POLITICS_API_URL;
const youthspaceUrl= process.env.REACT_APP_YOUTH_POLITICS_SPACE_URL;
const key =process.env.REACT_APP_YOUTH_POLITICS_API_KEY;


//mysql 커넥션 정보 확인하기
const connection = mysql.createConnection({
  host: process.env.REACT_APP_AWS_MYSQL_HOST,
  user: process.env.REACT_APP_AWS_MYSQL_USER,
  password: process.env.REACT_APP_AWS_MYSQL_PW,
  database: process.env.REACT_APP_AWS_MYSQL_DATABASE
});

//mainpage api url
const requestUrl = `${url}?pageIndex=1&display=5&openApiVlak=${key}`; 

//청년공간 api url
const spaceUrl = `${youthspaceUrl}?pageIndex=1&display=15&pageType=1&openApiVlak=${key}`;

//청년정책(신)api url
const newRequestUrl = `${newYouthUrl}?pageIndex=1&display=10&openApiVlak=${key}`;



//pagination에서 클릭한 page번호 받아옴 post
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
var pn = 1;
app.post('/pageNum', (req, res) => {
    //console.log("req:",req.body.page);
    if (!req.body.page) {
        return res.status(400).json({
          status: 'error',
          error: 'req body cannot be empty',
        });
    }
    res.status(200).json({
        status: 'succes', 
        data: req.body,
      })

      var page =req.body.page;
     // console.log("pn:",page);
      pn =page;
      return pn;

  });

//policy list 청년정책api
app.use('/list',(req,res)=>{
    //console.log("pn:",pn);
    const policyrequestUrl = `${url}?pageIndex=${pn}&display=8&openApiVlak=${key}`;  //policy list
    request(policyrequestUrl, (err,response,body)=>{
            var result = body
            var currNum = pn;
            console.log("pn:",currNum);
            var xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});      
            res.send(xmlToJson);
            //res.send(currNum);

            })
        });


//list에서 클릭한 bizId 받아옴 post
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
var pid = "";
 var rownum="";
app.post('/pid', (req, res) => {
    if (!req.body.id) {
        return res.status(400).json({
          status: 'error',
          error: 'req body cannot be empty',
        });
    }
    res.status(200).json({
        status: 'succes',
        data: req.body,
      })
      var bid =req.body.id;
      var num=req.body.num;
      //console.log("bid:",bid);
      pid =bid;
      rownum=num;
      return pid, rownum;

  });


//dtailpage로 bizId값을 넘겨서 출력 (get)
app.use('/bizId',(req,res)=>{
  console.log("pid:",pid);
  console.log("rownum:",rownum);
  const testUrl = `${url}?pageIndex=1&display=1&openApiVlak=${key}&srchPolicyId=${pid}`;
    request(testUrl,(err,response,body)=>{
        var result = body;
        var xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
        res.send(xmlToJson);
    //  console.log(xmlToJson);
    })
})

//main 청년정책api
app.use('/api',(req,res)=>{
    request(requestUrl, (err,response,body)=>{
            var result = body
            var xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
            //json 형태 출력
            res.send(xmlToJson);
            })
        });

//청년정책(신)
app.use('/newapi',(req,res)=>{
      request(newRequestUrl, (err,response,body)=>{
            var result = body   
            var xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
            //json 형태 출력
            res.send(xmlToJson);
            })
        });


//청년공간api
app.use('/space',(req,res)=>{
    request(spaceUrl, (err,response,body)=>{
      var spaceresult = body;
      var xmlToJson = convert.xml2js(spaceresult, {compact: true, space: 2});
      // console.log("space:",xmlToJson);
      res.send(xmlToJson);
    })
})

// const sliceData=(getDatas)=>{
//   const resultList = new Array();
//     for(let i=0; i<Object.keys(getDatas).length; i++){
//         let result = {};
//         let key = Object.keys(getDatas[i]);
//         for(let a=0; a<key.length; a++){
//             let sub = Object.keys(getDatas[i][key[a]])
//             result[key[a]] = getDatas[i][key[a]][sub[0]];
//         }
//         resultList.push(result);

//         return resultList;
//     }

// }

//내위치에 따른 청년공간 정보 불러오기
app.use('/myLocPolyCenter',(req,response)=>{
  const resultList =new Array();
  console.log("requset:",req.body);
      // 접속시 쿼리를 보냅니다.
        connection.query(`SELECT state_code,city_code FROM area WHERE state_name='${req.body.state}' and city_name='${req.body.city}'`, function(err, rows, fields) {
          console.log("mysql-row:",rows[0].state_code); //rows파일로 출력
          //내 위치에 따른 청년공간 url
          const mLocPolyCenterUrl=`${youthspaceUrl}?pageIndex=1&display=5&pageType=1&srchAreaCpvn=${rows[0].state_code}&srchAreaSggn=${rows[0].city_code}&openApiVlak=${key}`;
           request(mLocPolyCenterUrl,(err,res,body)=>{
            var spaceresult = body;
            var xmlToJson = convert.xml2js(spaceresult, {compact: true, space: 2});
            var polyCenterJson=new Array();
            polyCenterJson.push(xmlToJson.spacesInfo.space);
                for(let i=0; i<Object.keys(polyCenterJson).length; i++){
                    let result = {};
                    let key = Object.keys(polyCenterJson[i]);
                    for(let a=0; a<key.length; a++){
                        let sub = Object.keys(polyCenterJson[i][key[a]])
                        result[key[a]] = polyCenterJson[i][key[a]][sub[0]];
                    }
                     resultList.push(result);
                }
                console.log("resultList:",resultList);
                response.send(resultList);
           })
        });

 
      })

//port 3001로 연결
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})