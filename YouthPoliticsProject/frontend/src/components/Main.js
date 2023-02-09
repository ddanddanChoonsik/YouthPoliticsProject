import React from 'react';
import TestImg from '../images/test.gif';

const Main = () => {
    return (
        <div id='main'>
            <div className='mainContent'>
                <p>대충 내용 작성예정111</p>
                <p>대충 내용 작성예정22</p>
                <p>대충 내용 작성예정3</p>
                <p>대충 내용 작성예정</p>
                <p>대충 내용 작성예정</p>
                <p>대충 내용 작성예정</p>
            </div>
            <div className='mainImg'>
                <img src={TestImg} alt="test용"/>
            </div>
        </div>
    );
};

export default Main;