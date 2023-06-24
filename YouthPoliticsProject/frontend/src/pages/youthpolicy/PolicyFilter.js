import React, { useEffect, useState } from 'react';
import '../../styles/policyfilter.css';

const PolicyFilter = () => {

    function fchk(){
        var chk_obj = document.getElementsByClassName('j1');
        var chk_leng = chk_obj.length;
        var checked = 0; //체크된 개수 파악을 위한 초기변수
        
        for (let i=0; i < chk_leng; i++) {
            if (chk_obj[i].checked == true) {
                checked += 1;
                  console.log("chk_obj:"+chk_obj[i].name+" / value:"+chk_obj[i].value);    // 선택된 순서대로 값을 출력
            }
        }
        // if (checked !== 0 ) {
        //     console.log(checked + "개 선택");
        //     return;
        // }
    }


    //const [data,setData]=useState('');

    const changeHandler=(e)=>{
        // var chk_obj = document.getElementsByClassName('j1');
        // var chk_leng = chk_obj.length;
        // var checked = 0; //체크된 개수 파악을 위한 초기변수
        
        // for (let i=0; i < chk_leng; i++) {
        //     if (chk_obj[i].checked == true) {
        //         checked += 1;
        //           console.log("chk_obj:"+chk_obj[i].name+" / value:"+chk_obj[i].value);    // 선택된 순서대로 값을 출력
        //     }
        // }

        const chk_obj = e.target.checked;
        const chk_obj_name = e.target.name;
        const chk_obj_value = e.target.value;

        if(chk_obj){
            
            console.log("name:"+chk_obj_name+" || value:"+chk_obj_value);
        
        }else{


        }

    }
    useEffect(()=>{
        //fchk();
    })

    return (
        <div className='filter_container' >
                    <div className='filter_search'>
                    <input type="search" name="txt" placeholder='검색'/><input type="button" name="search" value="search"/>
                    </div>

                    <div className='fillter_item'>
                    <form>
                    <div className='items'>
                    <label>취업지원 (004001) </label><br/> 
                    <label><input type="checkbox" className="j1" name="교육훈련·체험·인턴" value="004001001" text="교육훈련·체험·인턴" onChange={(e)=>changeHandler(e)}/>&nbsp; 교육훈련·체험·인턴</label><br/>
                    <label><input type="checkbox" className="j1" name="중소(중견)기업 취업지원" value="004001002 " text="중소(중견)기업 취업지원" onChange={(e)=>changeHandler(e)}/>&nbsp;중소(중견)기업 취업지원</label><br/>
                    <label><input type="checkbox" className="j1" name="전문분야 취업지원" value="004001003 " text="전문분야 취업지원" onChange={(e)=>changeHandler(e)}/>&nbsp;전문분야 취업지원</label><br/>
                    <label><input type="checkbox" className="j1" name="해외진출" value="004001004" text="해외진출" onChange={(e)=>changeHandler(e)}/>&nbsp;해외진출</label><br/>
                    </div>
                    <br/>
                    <div className='items'>
                    <label>창업지원  (004002) : </label><br/>
                    <label><input type="checkbox" className="j1" name="R&D 지원" value="004002001 " text="R&D 지원" onChange={(e)=>changeHandler(e)}/>&nbsp;R&D 지원</label><br/>
                    <label><input type="checkbox" className="j1" name="경영 지원" value="004002002 " text="경영 지원" onChange={(e)=>changeHandler(e)}/>&nbsp;경영 지원</label><br/>
                    <label><input type="checkbox" className="j1" name="자본금 지원" value="004002003 " text="자본금 지원" onChange={(e)=>changeHandler(e)}/>&nbsp;자본금 지원</label><br/>
                    </div>
                    <br/>
                    <div className='items'>
                    <label>주거·금융 (004003) : </label><br/>
                    <label><input type="checkbox" className="j1" name="생활비지원 및 금융 혜택" value="004003001 " text="생활비지원 및 금융 혜택" onChange={(e)=>changeHandler(e)}/>&nbsp;생활비지원 및 금융 혜택</label><br/>
                    <label><input type="checkbox" className="j1" name="주거지원" value="004003002 " text="주거지원" onChange={(e)=>changeHandler(e)}/>&nbsp;주거지원</label><br/>
                    <label><input type="checkbox" className="j1" name="학자금 지원" value="004003003 " text="학자금 지원" onChange={(e)=>changeHandler(e)}/>&nbsp;학자금 지원</label><br/>
                    </div>
                    <br/>
                    <div className='items'>
                    <label>생활·복지 (004004) : </label><br/>
                    <label><input type="checkbox" className="j1" name=" 건강" value="004004001 " text=" 건강" onChange={(e)=>changeHandler(e)}/>&nbsp; 건강</label>
                    <label><input type="checkbox" className="j1" name="문화" value="004004002 " text="문화" onChange={(e)=>changeHandler(e)}/>&nbsp;문화</label>
                    </div>
                    <br/>
                    <div className='items'>
                    <label>정책참여  (004005) : </label><br/>
                    <label><input type="checkbox" className="j1" name="정책제안" value="004005001 " text="정책제안" onChange={(e)=>changeHandler(e)}/>&nbsp;정책제안</label><br/>
                    <label><input type="checkbox" className="j1" name="권리보호" value="004005002" text="권리보호" onChange={(e)=>changeHandler(e)}/>&nbsp;권리보호</label><br/>
                    <label><input type="checkbox" className="j1" name="지역발전" value="004005003" text="지역발전" onChange={(e)=>changeHandler(e)}/>&nbsp;지역발전</label><br/>
                    </div>
                    <br/>
                    <div className='items'>
                    <label>코로나19 (004006) : </label><br/>
                    <label><input type="checkbox" className="j1" name="기본소득지원" value="004006001 " text="기본소득지원" onChange={(e)=>changeHandler(e)}/>&nbsp;기본소득지원</label><br/>
                    <label><input type="checkbox" className="j1" name="저소득층지원" value="004006002" text="저소득층지원" onChange={(e)=>changeHandler(e)}/>&nbsp;저소득층지원</label><br/>
                    <label><input type="checkbox" className="j1" name="재난피해지원" value="004006003" text="재난피해지원" onChange={(e)=>changeHandler(e)}/>&nbsp;재난피해지원</label><br/>
                    <label><input type="checkbox" className="j1" name="소득및일자리보전" value="004006004" text="소득및일자리보전" onChange={(e)=>changeHandler(e)}/>&nbsp;소득및일자리보전</label><br/>
                    <label><input type="checkbox" className="j1" name="기타 인센티브" value="004006005" text="기타 인센티브" onChange={(e)=>changeHandler(e)}/>&nbsp;기타 인센티브</label><br/>
                    <label><input type="checkbox" className="j1" name="심리지원" value="004006006" text="심리지원" onChange={(e)=>changeHandler(e)}/>&nbsp;심리지원</label><br/>
                    </div>
                    <br/>
                    <div className='items'>
                    <label>[지역코드] </label><br/>
                    <label><input type="checkbox" name="j1" value="003002001"/>&nbsp; 서울</label>
                    <label><input type="checkbox" name="j1" value="003002002"/>&nbsp; 부산</label>
                    <label><input type="checkbox" name="j1" value="003002003"/>&nbsp; 대구</label><br/>
                    <label><input type="checkbox" name="j1" value="003002004"/>&nbsp; 인천</label>
                    <label><input type="checkbox" name="j1" value="003002005"/>&nbsp; 광주</label>
                    <label><input type="checkbox" name="j1" value="003002006"/>&nbsp; 대전</label><br/>
                    <label><input type="checkbox" name="j1" value="003002007"/>&nbsp; 울산</label>
                    <label><input type="checkbox" name="j1" value="003002008"/>&nbsp; 경기</label>
                    <label><input type="checkbox" name="j1" value="003002009"/>&nbsp; 강원</label><br/>
                    <label><input type="checkbox" name="j1" value="0030020010"/>&nbsp; 충북</label>
                    <label><input type="checkbox" name="j1" value="0030020011"/>&nbsp; 충남</label>
                    <label><input type="checkbox" name="j1" value="0030020012"/>&nbsp; 전북</label><br/>
                    <label><input type="checkbox" name="j1" value="0030020013"/>&nbsp; 전남</label>
                    <label><input type="checkbox" name="j1" value="0030020014"/>&nbsp; 경북</label>
                    <label><input type="checkbox" name="j1" value="0030020015"/>&nbsp; 경남</label><br/>
                    <label><input type="checkbox" name="j1" value="0030020016"/>&nbsp; 제주</label>
                    <label><input type="checkbox" name="j1" value="0030020017"/>&nbsp; 세종</label>
                    </div>
                    <br/>
                    <input type="reset" value="reset"/>
                    </form>
                    </div>
        </div>
    );
};

export default PolicyFilter;