import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/policyarea.css';

const PolicyArea = () => {

    const url='http://localhost:3001/space';
    const[allSpace,setAllSpace]=useState([]);
    const { kakao } = window;

    //test data
    const [spaceName,setSpaceName]=useState();
    const [spaceAddr,setSpaceAddr]=useState();

    const youthAreaApi= async()=>{
        axios.get(url).then(res=>{
            // console.log("청년공간:",res.data.spacesInfo.space);
            setAllSpace(res.data.spacesInfo.space);
        }).catch(err=>{
            console.log("err:",err);
        })
    }

    const resultList = new Array();
    for(let i=0; i<Object.keys(allSpace).length; i++){
        let result = {};
        let key = Object.keys(allSpace[i]);
        for(let a=0; a<key.length; a++){
            let sub = Object.keys(allSpace[i][key[a]])
            result[key[a]] = allSpace[i][key[a]][sub[0]];
        }
        resultList.push(result);
    }

    const findArea = (e) =>{

        //console.log("event target:", Object.values(Object.values(e.target.childNodes[6])[1])[0][1]);
           //testObject.values(e.target)[1].value
            // setSpaceName(Object.values(resultList[0].spcName));
            // setSpaceAddr(Object.values(resultList[0].address));
            // setSpaceName(Object.values(Object.values(e.target.childNodes[2])[1])[0][1]);
            // setSpaceAddr(Object.values(Object.values(e.target.childNodes[6])[1])[0][1]);
               // console.log(e.target.childNodes[2]);
                //  console.log("1번청년공간:",resultList[0].spcName);
                //  console.log("1번청년공간:",resultList[0].address);
    }
    
    const kakaomapscript = () => {
     


        const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        const mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };  

            // 지도를 생성합니다    
            const map = new kakao.maps.Map(mapContainer, mapOption);

            // 주소-좌표 변환 객체를 생성합니다
            const geocoder = new kakao.maps.services.Geocoder();
            // 주소로 좌표를 검색합니다
            // geocoder.addressSearch(resultList[0].address!=spaceAddr?spaceAddr:resultList[0].address, function(result, status) {
            geocoder.addressSearch("경기도 파주시 주라위길 159", function(result, status) {
            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: `<div style="width:fit-content;text-align:center;padding:6px;">두원공과대학교</div>`
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        }); 
       

    }

    useEffect(()=>{
        youthAreaApi();
        kakaomapscript();
    },[])

    return (
        <div>   
            <div className='space-area'>
            <div className='space'>
                {
                    Object.values(resultList).map((row,idx)=>(
                        <div className='space-item' onClick={(e)=>findArea(e)} value={row.spcName}>
                        <ul>
                        <li> # {row.rownum}</li>
                        <li>공간Id : {row.spcId}</li>
                        <li>공간명 : {row.spcName}</li>
                        <li>공간유형 : {row.spcType}</li>
                        <li>지역 - 시,도 : {row.areaCpvn}</li>
                        <li>지역 - 시,군,구 : {row.areaSggn}</li>
                        <li>주소 : {row.address}</li>
                        <li>공간이용시간 : {row.spcTime}</li>
                        <li>개소일 : {row.openDate}</li>
                        <li>업무시간 : {row.officeHours}</li>
                        <li>부대시설 비용(유료,무료) : {row.addFacilCost}</li>
                        <li>비용 : {row.spcCost}</li>
                        <li>연락처 : {row.telNo}</li>
                        <li>홈페이지 URL : {row.homepage}</li>
                        <li>지원대상 : {row.applyTarget}</li>
                        <li>식음료 제공 여부 : {row.foodYn}</li>
                        <li>주요형태 : {row.majorForm}</li>
                        <li>운영기관 : {row.operOrgan}</li>
                    </ul>     
                     {/* <input type="text" value={row.rownum} text={row.rownum} readOnly />
                    <input type="text" value={row.spcId} text={row.spcId} readOnly/>
                    <input type="text" value={row.spcName} text={row.spcName} readOnly/>
                    <input type="text" value={row.spcType} text={row.spcType} readOnly/>
                    <input type="text" value={row.areaCpvn} text={row.areaCpvn} readOnly/>
                    <input type="text" value={row.areaSggn} text={row.areaSggn} readOnly/>
                    <input type="text" value={row.address} text={row.address} readOnly/>
                    <input type="text" value={row.spcTime} text={row.spcTime} readOnly/>
                    <input type="text" value={row.openDate} text={row.openDate} readOnly/>
                    <input type="text" value={row.officeHours} text={row.officeHours} readOnly/>
                    <input type="text" value={row.addFacilCost} text={row.addFacilCost} readOnly/>
                    <input type="text" value={row.spcCost} text={row.spcCost} readOnly/>
                    <input type="text" value={row.telNo} text={row.telNo} readOnly/>
                    <input type="text" value={row.homepage} text={row.homepage} readOnly/>
                    <input type="text" value={row.applyTarget} text={row.applyTarget} readOnly/>
                    <input type="text" value={row.foodYn} text={row.foodYn} readOnly/>
                    <input type="text" value={row.majorForm} text={row.majorForm} readOnly/>
                    <input type="text" value={row.operOrgan} text={row.operOrgan} readOnly/> */}
                    </div>  
                    ))
                }
                </div>
                <div id='map' style={{width:'1710px',height:'530px'}}></div>
                </div>
        </div>
    );
};

export default PolicyArea;