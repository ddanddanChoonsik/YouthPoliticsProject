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
    const myLocPolyCenterUrl='http://localhost:3001/myLocPolyCenter';
    const[allSpace,setAllSpace]=useState([]);
    const { kakao } = window;
    //test data
    const [spaceName,setSpaceName]=useState();
    const [spaceAddr,setSpaceAddr]=useState();

    const [selectAddr,setSelectAddr]=useState();
    const [selectSpcName,setSelectSpcName]=useState();

    const youthAreaApi= async()=>{
        axios.get(url).then(res=>{
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
     
     const [selectedIndex, setSelectedIndex] = React.useState();
     const handleListItemClick = (event, index,addr,spcName) => {
       setSelectedIndex(index);
        setSelectAddr(addr);
       setSelectSpcName(spcName);
       //console.log("index:",index);
       kakaomap();
     };

    //  const handleMap = (addr,spcName) =>{
    //          setSelectAddr(addr);
    //         setSelectSpcName(spcName);
    //  }

     const [myloc,setMyLoc]=useState('');
     const [locPolyCenter,setLocPolyCenter]=useState('');
     //내위치 찾기(위도,경도) -> 내위치 주소로 가져오기!
     const currentLocation = (position) =>{
        navigator.geolocation.getCurrentPosition(function(position) {
			let lat = position.coords.latitude; // 위도
			let lng = position.coords.longitude; // 경도
            const locPosition = new kakao.maps.LatLng(lat, lng); 
   
            function getAddr(lat,lng){
                let geocoder = new kakao.maps.services.Geocoder();
                let coord = new kakao.maps.LatLng(lat, lng);
                let callback = function(result, status) {
                    if (status === kakao.maps.services.Status.OK) {
                        //console.log("좌표로 내위치 주소찾기:",result[0].address.address_name);
                        const myaddr=result[0].address.address_name;
                        const myState=myaddr.split(' ')[0];
                        const myCity=myaddr.split(' ')[1];
                        setMyLoc(myaddr);
                        console.log("좌표로 내위치 주소찾기:",myaddr);
                        ///지역코드 넘겨서 같은 시군구에 있는 청년공간 가져오기.
                        axios.post(myLocPolyCenterUrl,{
                            state:myState,    //myState
                            city:myCity   //myCity
                        }).then(res=>{
                            console.log("response:",res.data); //잘들어옴.
                            let myArray=[{spcName:'내 위치',address:myaddr}];
                            let result=myArray.concat(res.data);
                            console.log("청년공간+내위치=>",result);
                            setLocPolyCenter(result);
                        }).catch(err=>{
                            console.log("err:",err);
                        })

                    }
                }
                geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
            }
            getAddr(lat,lng);

            })

        return true;
     }

     //카카오 지도
    const kakaomap = (myloc) => {
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        const mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 2 // 지도의 확대 레벨
            };  
            // 지도를 생성합니다     
            const map = new kakao.maps.Map(mapContainer, mapOption);

            // 주소->좌표 변환 객체를 생성합니다
            const geocoder = new kakao.maps.services.Geocoder();
            
             // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
            var bounds = new kakao.maps.LatLngBounds(); //추가한 코드

            locPolyCenter&&locPolyCenter.forEach(function (position) { //추가한 코드
                // 주소로 좌표를 검색합니다
                geocoder.addressSearch(position.address, function(result, status) {
            
                  // 정상적으로 검색이 완료됐으면
                  if (status === kakao.maps.services.Status.OK) {
            
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            
                    // 결과값으로 받은 위치를 마커로 표시합니다
                    var marker = new kakao.maps.Marker({
                      map: map,
                      position: coords
                    });
                    marker.setMap(map); //추가한 코드
                
                     // LatLngBounds 객체에 좌표를 추가합니다
                    bounds.extend(coords); //추가한 코드, 현재 코드에서 좌표정보는 point[i]가 아닌 coords이다.-

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: `<span style="text-align:center">
                     + ${position.spcName} + </span>`,
                     
                });
                
                infowindow.open(map, marker);
               
                 // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                // map.setCenter(coords); //제거한 코드
                setBounds(); //추가한 코드
            } 
        
        }); 
    });

    const setBounds=()=> { //추가한 함수
        // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
        // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
        map.setBounds(bounds);
      }

    }

    const addrSearch=(e)=>{
        console.log("검색글씨 바뀌는거 확인중:",e.target.value);
    }

    useEffect(()=>{
        youthAreaApi();        
        currentLocation();
    },[])

    useEffect(()=>{        
        kakaomap();
    },[selectSpcName,myloc])

    return (
        <div>   
            <div className='space-area'>  
            <div className='space'>
            <span>청년공간 ( {resultList.length}개 )</span><br/>
            <span>
            <form>
              <input type='text' maxLength='20' className='search_input' name='search' placeholder='검색어를 입력해주세요.' onChange={addrSearch}/>
              {/* onChange={(e)=>{addrSearch(e.target.value)}} */}
              <input type='submit' value='검색' className='serach_submit'/>
            </form>
            </span>

           {/*<span style={{color:'#999999',fontSize:'15px'}}> 
            {myloc}
             <Button variant="outlined" style={{width:'fit-content',textAlign:'right'}}><i className="fa-solid fa-rotate" />&nbsp;Refresh</Button> 
           </span>*/}

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
                                        {/* <ListItemButton className="fa-solid fa-location-dot" style={{color: '#0f67ff'}} onChange={(event)=>handleMap(row.address,row.spcName)} onClick={(event)=>handleMap(row.address,row.spcName)}/> */}
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
                <div id='map'>
                    {/* <div style={{zIndex:'10',position:'absolute',height:'fitContent',top:'1%',left:'1%'}}>
                    <Button variant="outlined" style={{width:'fit-content',textAlign:'right',backgroundColor:'white'}} onClick={(event)=>handleMap(myloc,"내위치")}><i className="fa-solid fa-location-dot" />&nbsp;내 위치로</Button>
                    </div> */}
                </div>
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