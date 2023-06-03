import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { useNavigate,useParams,useLocation } from 'react-router-dom';
import '../../styles/notice.css';


const NoticeDetail = () => {

    const [detailNotice, setDetailNotice] = useState({});
    const navi = useNavigate();
    const params = useParams();
    //const num = useState();
    //const num = 3;
    const num = params.num;

    let getDetailNotice = process.env.REACT_APP_SPRING_URL+"notice/getDetailData?num="+num;


    //선택한 공지사항 SELECT한 데이터
    const detailData = () => {
        axios.get(getDetailNotice).then(res=>{
            setDetailNotice(res.data);
            console.log("공지사항 :", res.data)
        }).catch(err=>{
            console.log("err:",err);
        })
    }

    useEffect(() =>{
        setDetailNotice(detailData(params.num));
        console.log("파람",params);
    }, [])


    return (
        <div id='detail'>
            {/*<br/>
            <h3>공지사항 상세보기</h3>
    <br/>*/}
            <div className='noticeDetail' >
                <div className='noticeTitle'>
                {/*제목 / 작성일*/}
                    <div className='title' style={{}}>
                        title
                        {/*detailNotice.title*/}
                    </div>
                    <div className='created_at' style={{}}>
                        created_at
                        {/*detailNotice.created_at*/}
                    </div>
                </div>
                <div className='noticeContent'>
                    contents
                    {/*detailNotice.content*/}
                </div>
                <div className='return'>
                    <button onClick={() => navi(`/notice/list`)}>
                        목록
                    </button>
                </div>
                <p></p>
            </div>
        </div>
    );
};

export default NoticeDetail;