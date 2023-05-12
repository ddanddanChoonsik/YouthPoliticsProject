import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, createStoreHook } from 'react-redux';
import {createStore} from 'redux';
// import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구


const 체중 = 100;   //state 맘대로 보관가능

//state 수정 및 꺼내쓰는게 reducer
function reducer(state = 체중 ,action){

    if(action.type === '증가'){
        state++;
        return state    
    }else if(action.type === '감소'){
        state--;
        return state
    }else{
    return state
}
}

const store = createStore(reducer)
// const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
