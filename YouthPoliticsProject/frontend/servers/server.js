const express = require('express');
const app = express();
const cors = require('cors');
const request = require("request")
const bodyParser = require('body-parser');
const convert = require("xml-js");
const port =process.env.PORT || 3001;
// dotenv 불러오기
require("dotenv").config();
console.log("dotenv:",process.env.REACT_APP_YOUTH_POLITICS_API_KEY)
app.use(cors());
app.use(bodyParser.json());

const url = 'https://www.youthcenter.go.kr/opi/empList.do';
const key =process.env.REACT_APP_YOUTH_POLITICS_API_KEY;
const requestUrl = `${url}?pageIndex=1&display=3&openApiVlak=${key}`;

//practice api
//app.use('/api1', (req, res)=> res.json({username:'bryan'}));

app.use('/api',(req,res)=>{
    request(requestUrl, (err,response,body)=>{

            //잘나옴!
            var result = body
            //console.log(`body data => ${result}`)
            var xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
           // console.log(`xml to json => ${xmlToJson}`)
            
            //json 형태 출력
            res.send(xmlToJson);
            })
        });


app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})