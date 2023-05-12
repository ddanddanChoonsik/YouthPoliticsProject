import React from 'react';
import '../../styles/policyfilter.css';

const PolicyFilter = () => {
    return (
        <div class='filter_container' >
                    <div className='filter_search'>
                    <input type="search" name="txt" placeholder='검색'/><input type="button" name="search" value="search"/>
                    </div>
                    <div className='fillter_item'>
                     <form>
                    <div className='items'>
                    <label>취업지원 (004001) : </label>
                    <label><input type="checkbox" name="j1" value="004001001"/>&nbsp; 교육훈련·체험·인턴</label>&nbsp;
                    <label><input type="checkbox" name="j1" value="004001002 "/>&nbsp;중소(중견)기업 취업지원</label>&nbsp;
                    <label><input type="checkbox" name="j1" value="004001003 "/>&nbsp;전문분야 취업지원</label>&nbsp;
                    <label><input type="checkbox" name="j1" value="004001004"/>&nbsp;해외진출</label>&nbsp;
                    </div>

                    <div className='items'>
                    <label>창업지원  (004002) : </label>
                    <label><input type="checkbox" name="j1" value="004002001 "/>&nbsp;R&D 지원</label>&nbsp;
                    <label><input type="checkbox" name="j1" value="004002002 "/>&nbsp;경영 지원</label>&nbsp;
                    <label><input type="checkbox" name="j1" value="004002003 "/>&nbsp;자본금 지원</label>&nbsp;
                    </div>
                    
                    <div className='items'>
                    <label>주거·금융 (004003) : </label>
                    <label><input type="checkbox" name="j1" value="004003001 "/>&nbsp;생활비지원 및 금융 혜택</label>&nbsp;
                    <label><input type="checkbox" name="j1" value="004003002 "/>&nbsp;주거지원</label>&nbsp;
                    <label><input type="checkbox" name="j1" value="004003003 "/>&nbsp;학자금 지원</label>&nbsp;
                    </div>

                    <div className='items'>
                    <label>생활·복지 (004004) : </label>
                    <label><input type="checkbox" name="j1" value="004004001 "/>&nbsp; 건강</label>&nbsp;
                    <label><input type="checkbox" name="j1" value="004004002 "/>&nbsp;문화</label>&nbsp;
                    </div>

                    <div className='items'>
                    <label>정책참여  (004005) : </label>
                    <label><input type="checkbox" name="j1" value="004005001 "/>&nbsp;정책제안</label>&nbsp;
                    <label><input type="checkbox" name="j1" value="004005002"/>&nbsp;권리보호</label>&nbsp;
                    <label><input type="checkbox" name="j1" value="004005003"/>&nbsp;지역발전</label>&nbsp;
                    </div>

                    <div className='items'>
                    <label>코로나19 (004006) : </label>
                    <label><input type="checkbox" name="j1" value="004006001 "/>&nbsp;기본소득지원</label>&nbsp;
                    <label><input type="checkbox" name="j1" value="004006002"/>&nbsp;저소득층지원</label>&nbsp;
                    <label><input type="checkbox" name="j1" value="004006003"/>&nbsp;재난피해지원</label>&nbsp;
                    <label><input type="checkbox" name="j1" value="004006004"/>&nbsp;소득및일자리보전</label>&nbsp;
                    <label><input type="checkbox" name="j1" value="004006005"/>&nbsp;기타 인센티브</label>&nbsp;
                    <label><input type="checkbox" name="j1" value="004006006"/>&nbsp;심리지원</label>&nbsp;
                    </div>

                    <div className='items'>
                    <label>[지역코드] </label>
                    <label><input type="checkbox" name="j1" value="003002001"/>&nbsp; 서울</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="j1" value="003002002"/>&nbsp; 부산</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="j1" value="003002003"/>&nbsp; 대구</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="j1" value="003002004"/>&nbsp; 인천</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="j1" value="003002005"/>&nbsp; 광주</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="j1" value="003002006"/>&nbsp; 대전</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="j1" value="003002007"/>&nbsp; 울산</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="j1" value="003002008"/>&nbsp; 경기</label>&nbsp;<br/>
                    <label><input type="checkbox" name="j1" value="003002009"/>&nbsp; 강원</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="j1" value="0030020010"/>&nbsp; 충북</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="j1" value="0030020011"/>&nbsp; 충남</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="j1" value="0030020012"/>&nbsp; 전북</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="j1" value="0030020013"/>&nbsp; 전남</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="j1" value="0030020014"/>&nbsp; 경북</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="j1" value="0030020015"/>&nbsp; 경남</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="j1" value="0030020016"/>&nbsp; 제주</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="j1" value="0030020017"/>&nbsp; 세종</label>&nbsp;&nbsp;
                    </div>
                    <input type="reset" value="reset"/>
                    </form>
                    </div>
        </div>
    );
};

export default PolicyFilter;