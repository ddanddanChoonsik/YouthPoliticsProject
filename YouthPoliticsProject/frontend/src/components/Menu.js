import React from 'react';

const Menu = () => {
    return (
        <div id="menu">
            <div className="icon">
                <span className='fa-solid fa-seedling'>
                </span><span>&nbsp;YouthPolitics</span>
            </div>
            <ul className="nav"> 
                <li>로그인</li>
                <li>청년정책</li>
                <li>청년공간</li>
                <li>청년고용지원</li>
                <li>고객지원센터</li>
                <li>삭제예정</li>
                <li>삭제예정</li>
                <li>삭제ㄴㄴㄴ예정</li>
            </ul>
            <div className="login">
                <button type="button" class="btn btn-primary" style={{marginRight:'10px'}}>Join</button>
                <button type="button" class="btn btn-primary">Login</button>
            </div>
        </div>
    );
};

export default Menu;