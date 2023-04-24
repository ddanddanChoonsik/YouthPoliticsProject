const express = require('express');
const app = express();
const cors = require('cors');
const request = require("request")
const bodyParser = require('body-parser');
const convert = require("xml-js");
const port =process.env.PORT || 3001;
require("dotenv").config(); // dotenv 불러오기
//console.log("dotenv:",process.env.REACT_APP_YOUTH_POLITICS_API_KEY)
app.use(cors());
app.use(bodyParser.json());
const url = process.env.REACT_APP_YOUTH_POLITICS_API_URL;
const key =process.env.REACT_APP_YOUTH_POLITICS_API_KEY;
const requestUrl = `${url}?pageIndex=1&display=5&openApiVlak=${key}`;   

//practice api (테스트용)
//app.use('/api1', (req, res)=> res.json({username:'bryan'}));

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
    const policyrequestUrl = `${url}?pageIndex=${pn}&display=20&openApiVlak=${key}`;  //policy list
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
      console.log("bid:",bid);
      pid =bid;
      return pid;

  });



//dtailpage로 bizId값을 넘겨서 출력 (get)
app.use('/bizId',(req,res)=>{
  console.log("pid:",pid);
  const testUrl = `${url}?pageIndex=1&display=1&openApiVlak=${key}&srchPolicyId=${pid}`;
    request(testUrl,(err,response,body)=>{
        var result = body;
        var xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
        //console.log("res.values.bizId:",xmlToJson);
        res.send(xmlToJson);
    })
})


//main 청년정책api
app.use('/api',(req,res)=>{
    request(requestUrl, (err,response,body)=>{
            //잘나옴!
            var result = body
           //console.log(`body data => ${result}`)   //json 형태로 정책반환 server
            //console.log(`response =>${response}`)   //[Object Object]     
            var xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
           // console.log(`xml to json => ${xmlToJson}`)
            
            //json 형태 출력
            res.send(xmlToJson);
            })
        });


//port 3001로 연결
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})