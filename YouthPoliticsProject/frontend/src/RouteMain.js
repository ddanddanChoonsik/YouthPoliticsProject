import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Header,Main, Menu } from "./components";
import {LoginForm, JoinForm,KakaoLogin} from "./pages/login";
import { Profile } from "./pages/mypage";

const RouteMain = () => {
    return (
        <div>
            <Routes>
                <Route path="/" elemet={<Main/>}/>

                {/* Join & Login */}
                <Route path="/join" elemet={<JoinForm/>}/>
                <Route path="/login" elemet={<LoginForm/>}/>
                <Route path="/kakao-join" elemet={<KakaoLogin/>}/>

                {/* Mypage */}
                <Route path="/mypage/profile" elemet={<Profile/>}/>
            </Routes>
        </div>
    );
};

export default RouteMain;