import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { KeyTwoTone } from '@mui/icons-material';


const MyPolicy = () => {

    const navi = useNavigate();

    const NewApiurl ='http://localhost:3001/newapi';
    const  [newApiArr,setNewApiArr]=useState('');
    //const newResultList = new Array();

    // const newApi =()=>{
    //     axios.get(NewApiurl).then(res=>{
    //         //console.log("정책목록(신):",res.data.youthPolicyList.youthPolicy);
    //         setNewApiArr(res.data.youthPolicyList.youthPolicy);
    //         for(let i=0;i<Object.keys(newApiArr).length; i++)
    //         {
    //             let apilst={};
    //             let key = Object.keys(newApiArr[i]);
                
    //             for(let a=0;a<key.length;a++){
    //                 let sub= Object.keys(newApiArr[i][key[a]]);
    //                 apilst[key[a]] = newApiArr[i][key[a]][sub[0]];
                  
    //             }
    //             // console.log("apilist:",apilst);
    //         }
    //         // setNewApiArr(res.data.youthPolicy);
    //     }).catch(err=>{
    //         console.log("err:",err);
    //     })
    // }


    //내정책 필터
    const loginnum = localStorage.usernum;
    const loginok = localStorage.loginok;
    const [myPolicyFilter,setMyPolicyFilter]=useState([]);
    const [myAreaFilter,setMyAreaFilter]=useState([]);

    let myPolicyFilterUrl = process.env.REACT_APP_SPRING_URL+"policy/mypolicyfilter?member_num="+loginnum;

    const myPolyFilter=()=>{
        if(loginok){
            axios.get(myPolicyFilterUrl).then(res=>{
                console.log("myfilter:",res.data);
                setMyPolicyFilter(res.data.mypoly);
                setMyAreaFilter(res.data.myarea);

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

    let getAllPolicyDataUrl = process.env.REACT_APP_SPRING_URL+"policy/getallpolicydata";

    const getAllPolicyData=()=>{
        axios.get(getAllPolicyDataUrl).then(res=>{
            console.log("res.data:",res.data);
            //잘나옴!!
        }).catch(err=>{
            console.log("err:",err);
        })
    }


    useEffect(()=>{
        // newApi();
        myPolyFilter();
        getAllPolicyData();
    },[])
    return (
        <div>





            <div style={{height:'fitContent',display:'flex',flexDirection:'row',border:'0.5px solid #000'}}>
            <div style={{width:'50%',display:'flex',flexDirection:'column',borderRight:'0.5px solid #000'}}>   
            <p>내 정책필터</p>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div>
                {myPolicyFilter.map((row,idx)=>(
                    <div key={idx} style={{borderTop:'0.5px solid #000',borderRight:'0.5px solid #000'}}>
                      <p>관심정책분야(대) = &gt; {row.bizTycdSel_name}</p>  
                      <p>{row.bizTycData_name}</p>
                    </div>
                ))}
                </div>
                <div >
                    {myAreaFilter.map((row,idx)=>(
                        <div key={idx} style={{height:'50%',borderTop:'0.5px solid #000',display:'flex',flexDirection:'column',justifyContent:'center'}} >
                             <p>도·시 =  &gt; {row.state_name}</p>   
                                <p>시·군·읍 =  &gt;{row.city_name}</p>
                        </div>
                    ))}
                </div>
                </div>
            </div>
            <div style={{width:'50%'}}>
                <p>추천정책</p>
            </div>
        </div>
        </div>
    );
};

export default MyPolicy;