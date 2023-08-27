import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { useNavigate,useParams,useLocation } from 'react-router-dom';
import '../../styles/group.css';


const GroupDetail = () => {

    const [detailGroup, setDetailGroup] = useState({});
    const navi = useNavigate();
    const params = useParams();
    //const num = useState();
    //const num = 3;
    const num = params.num;

    let getDetailGroup = process.env.REACT_APP_SPRING_URL+"group/getDetailData?num="+num;


    //선택한 공지사항 SELECT한 데이터
    const detailData = () => {
        axios.get(getDetailGroup).then(res=>{
            setDetailGroup(res.data);
            //console.log("공지사항 :", res.data);
        }).catch(err=>{
            console.log("err:",err);
        })
    }

    useEffect(() =>{
        //setDetailNotice(detailData(params.num));
        detailData(params.num);
    }, [])


    return (
        <div id='detail'>
            <div className='groupDetail' >
                <div className='groupTitle'>
                {/*제목 / 작성일*/}
                    <div className='title' style={{}}>
                       {detailGroup.title}
                    </div>
                    <div className='created_at' style={{}}>
                        {detailGroup.created_at}
                    </div>
                </div>
                <div className='groupContent'>
                    <pre>{detailGroup.content}</pre>
                </div>
                <div className='return'>
                    <button onClick={() => navi(`/group/list`)}>
                        목록
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GroupDetail;