import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { KeyTwoTone } from '@mui/icons-material';


const MyPolicy = () => {

    const navi = useNavigate();

    const NewApiurl ='http://localhost:3001/newapi';
    const  [newApiArr,setNewApiArr]=useState('');
    const newResultList = new Array();

    const newApi =()=>{
        axios.get(NewApiurl).then(res=>{
            //console.log("정책목록(신):",res.data.youthPolicyList.youthPolicy);
            setNewApiArr(res.data.youthPolicyList.youthPolicy);
            for(let i=0;i<Object.keys(newApiArr).length; i++)
            {
                let apilst={};
                let key = Object.keys(newApiArr[i]);
                
                for(let a=0;a<key.length;a++){
                    let sub= Object.keys(newApiArr[i][key[a]]);
                    apilst[key[a]] = newApiArr[i][key[a]][sub[0]];
                  
                }
                // console.log("apilist:",apilst);
            }
            // setNewApiArr(res.data.youthPolicy);
        }).catch(err=>{
            console.log("err:",err);
        })
    }

    //내정책 필터
    const loginnum = localStorage.usernum;
    const loginok = localStorage.loginok;
    const [myPolicyFilter,setMyPolicyFilter]=useState([]);

    let myPolicyFilterUrl = process.env.REACT_APP_SPRING_URL+"policy/mypolicyfilter?member_num="+loginnum;

    const myPolyFilter=()=>{
        if(loginok){
            axios.get(myPolicyFilterUrl).then(res=>{
                console.log("myfilter:",res.data);
                setMyPolicyFilter(res.data);

                // for(let i =0; i<res.data.length;i++){
                //     if(res.data[i].bizTycdSel_name ===res.data[i+1].bizTycdSel_name){
                //         console.log("res.data[i]:",res.data[i]);
                //     }
                // }
                
            }).catch(err=>{
                console.log("filter.err:",err);
            })}else{
                alert("로그인먼저 해주세요");
                navi("/login");
            }
    }


    useEffect(()=>{
        newApi();
        myPolyFilter();
    },[])
    return (
        <div style={{height:'fitContent',display:'flex',flexDirection:'row'}}>
                       
            <div style={{border:'1px solid #000',width:'100%',display:'flex',flexDirection:'column'}}>   
            <p>내 정책필터</p>        
                {/* {myPolicyFilter.map((row,idx)=>(
                    <div key={idx}>
                    <p>관심 정책분야 : {row.bizTycdSel_name} &gt; {row.bizTycData_name} || 선택 지역 : {row.state_name}도 {row.city_name}</p>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default MyPolicy;