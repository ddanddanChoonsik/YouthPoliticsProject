import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Header,Main, Menu } from "./components";

import {LoginForm, JoinForm} from "./pages/login";
import {PolicyList,PolicyDetail,PolicyArea} from './pages/youthpolicy';
import {NoticeList,NoticeForm,NoticeDetail} from './pages/notice';
import {GroupList} from './pages/group';
import {Profile} from './pages/mypage';

const RouteMain = () => {
    return (
        <div id="main">
            <Routes>
                <Route exact path="/" element={<Main/>}/>

               {/* youthpolicy */}
               <Route path="/policy/list/:curr" element={<PolicyList/>}/>
               {/*정책id값을 가져와서 detail 출력 */}
               <Route path="/policy/:bizId/:curr/:rownum" element={<PolicyDetail/>}/>
               <Route path="/policy/area" element={<PolicyArea/>}/>

                
                {/* Join & Login */}
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/join" element={<JoinForm/>}/>
                {/* <Route path="/kakao-join" elemet={<KakaoLogin/>}/> */}

                {/* Mypage */}
                <Route path="/mypage/profile"  element={<Profile/>}/>

                {/* Notice */}
                <Route path="/notice/list"  element={<NoticeList/>}/>
                <Route path="/notice/form"  element={<NoticeForm/>}/>
                <Route path="/notice/detail/:num"  element={<NoticeDetail/>}/>


                {/* Group */}
                <Route path="/group/list"  element={<GroupList/>}/>
            </Routes>
        </div>
    );
};

export default RouteMain;