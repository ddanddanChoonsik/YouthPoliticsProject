import React from 'react';
import '../../styles/group.css';
const GroupList = () => {
    return (
        <div>
            <p>모임리스트</p>
            <div className='policyList1'>
                    <div className='policyData'>
                        <div className='policyFstItem'>
                            <div className='polyBizSjnm'>청년지원형 기숙사 입주생 모집 사업</div>
                            <div className='plcyTpNm'>창업지원</div>
                            <div className='polyBizTy'>중앙부처</div>
                        </div>
                        <div className='policySndItem'>
                        <div className='cnsgNmor'>한국장학재단</div>
                            <div className='rqutPrdCn'><i class="fa-solid fa-calendar"></i>&nbsp;22.12.15 ~ 23.1.11</div>
                            <div className='rqutUrla'> • 사이트링크주소</div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default GroupList;