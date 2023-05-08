import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/policyarea.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';
import ListItemButton from '@mui/material/ListItemButton';
const PolicyArea = () => {

    const url='http://localhost:3001/space';
    const[allSpace,setAllSpace]=useState([]);
    const { kakao } = window;
    //test data
    const [spaceName,setSpaceName]=useState();
    const [spaceAddr,setSpaceAddr]=useState();

    const [selectAddr,setSelectAddr]=useState();
    const [selectSpcName,setSelectSpcName]=useState();

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
     
    //mui list
     const [selectedIndex, setSelectedIndex] = React.useState();
     const handleListItemClick = (event, index,addr,spcName) => {
       setSelectedIndex(index);
       setSelectAddr(addr);
       setSelectSpcName(spcName);
       //console.log("index:",index);
       console.log("mui list"); //2
       kakaomap();
     };

     const handleMap = (addr,spcName) =>{
            setSelectAddr(addr);
            setSelectSpcName(spcName);
            //kakaomapscript();
     }

    const kakaomap = () => {
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        const mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 2 // 지도의 확대 레벨
            };  

            // 지도를 생성합니다    
            const map = new kakao.maps.Map(mapContainer, mapOption);

            // 주소-좌표 변환 객체를 생성합니다
            const geocoder = new kakao.maps.services.Geocoder();
            // 주소로 좌표를 검색합니다
            geocoder.addressSearch(selectAddr==undefined?"경기도 파주시 주라위길 159":selectAddr, function(result, status) {
                // console.log("주소지:",Object.values(allSpace[0].address)[0]);
                  //1
            // geocoder.addressSearch("경기도 파주시 주라위길 159", function(result, status) {
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
                    content: `<div style="width:fit-content;text-align:center;height:fit-content;">${selectSpcName==undefined?"두원공과대학교":selectSpcName}</div>`
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        }); 
    }
    useEffect(()=>{
        youthAreaApi();
     
    },[])

    useEffect(()=>{
        kakaomap();
    },[selectAddr,selectSpcName])

    return (
        <div>   
            <div className='space-area'>  
            <div className='space'>
            <span>청년공간</span>
           <span>{resultList.length} 개 <Button variant="outlined" style={{width:'fit-content',textAlign:'right'}}><i class="fa-solid fa-filter" />&nbsp;Filter</Button></span>
           <div className='space-item'>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 'inherit',
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 'inherit',
                    '& ul': { padding: 0 },
                }}>
                {/* subheader={<li />} */}
                        <li>
                                <ul>
                                {
                                    Object.values(resultList).map((row,idx)=>(
                                        <ListItemButton selected={selectedIndex === row.rownum} onClick={(event) => handleListItemClick(event,row.rownum,row.address,row.spcName)} onChange={(event) => handleListItemClick(event,row.rownum,row.address,row.spcName)}>
                                        <ListItem key={`item-${row.rownum}`}>
                                        <ListItemText primary={`# ${row.rownum}`} style={{width:'fit-content'}}/>
                                            <ListItemText primary= {row.spcName} secondary={row.address}/>
                                            {/* <ListItemText secondary={row.address}/> */}
                                        </ListItem>
                                        <ListItemButton class="fa-solid fa-location-dot" style={{color: '#0f67ff'}} onChange={(event)=>handleMap(row.address,row.spcName)} onClick={(event)=>handleMap(row.address,row.spcName)}/>
                                    </ListItemButton>
                                    //     <div className='space-item' onClick={(e)=>findArea(e)} value={row.spcName}>
                                    //     <ul>
                                    //     <li> # {row.rownum}</li>
                                    //     <li>공간Id : {row.spcId}</li>
                                    //     <li>공간명 : {row.spcName}</li>
                                    //     <li>공간유형 : {row.spcType}</li>
                                    //     <li>지역 - 시,도 : {row.areaCpvn}</li>
                                    //     <li>지역 - 시,군,구 : {row.areaSggn}</li>
                                    //     <li>주소 : {row.address}</li>
                                    //     <li>공간이용시간 : {row.spcTime}</li>
                                    //     <li>개소일 : {row.openDate}</li>
                                    //     <li>업무시간 : {row.officeHours}</li>
                                    //     <li>부대시설 비용(유료,무료) : {row.addFacilCost}</li>
                                    //     <li>비용 : {row.spcCost}</li>
                                    //     <li>연락처 : {row.telNo}</li>
                                    //     <li>홈페이지 URL : {row.homepage}</li>
                                    //     <li>지원대상 : {row.applyTarget}</li>
                                    //     <li>식음료 제공 여부 : {row.foodYn}</li>
                                    //     <li>주요형태 : {row.majorForm}</li>
                                    //     <li>운영기관 : {row.operOrgan}</li>
                                    // </ul>     
                                    // </div>  
                                    ))
                                }
                                </ul>
                </li>
                    </List>
                    </div>
                    </div>
                <div id='map'></div>
                </div>
                 {/* <List
                    sx={{
                        width: '100%',
                        maxWidth: 'inherit',
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 300,
                        '& ul': { padding: 0 },
                    }}
                    subheader={<li />}
                    >
               
        <li>
          <ul>

            {[0, 1, 2,3,4,5,6].map((item) => (
                 <ListItemButton
                 selected={selectedIndex === 0}
                 onClick={(event) => handleListItemClick(event, 0)}
               >
              <ListItem key={`item-bb-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
                    </ListItemButton>
            ))}
          </ul>
        </li>
      {/* ))} */}
    {/* </List> */} 
        </div>
    );
};

export default PolicyArea;