import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoticeDetail = () => {
    const navi = useNavigate();

    //선택한 공지사항 SELECT한 데이터
    const detailData = () => {

    }


    return (
        <div>
            <p>공지사항 상세보기</p>
            <div className='noticeDetail'>
                {
                    
                }
            </div>
        </div>
    );
};

export default NoticeDetail;