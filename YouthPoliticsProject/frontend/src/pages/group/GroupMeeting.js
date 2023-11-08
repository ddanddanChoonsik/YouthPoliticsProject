import React, {useEffect,useState} from 'react';
import Editor from './EditorComponent';
import {Select, MenuItem} from "@mui/material";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/group.css';
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
import {useForm} from 'react-hook-form';
//import { GroupMeeting } from '.';


const GroupMeeting = () => {


    const tabs = [
        { value: '그룹만들기', text: '그룹만들기' }
    ];
    const { register, watch, handleSubmit } = useForm();
    const [id, setId] = useState(0);
    const [type, setType] = useState('그룹만들기');
    const navi = useNavigate();
    const insertUrl = "http://localhost:3000/group/form";
    //const uploadReference = React.createRef();
    let inputText = useState('');
    const params = useParams();
    // const paramData = [params.title, params.content];
    const [editorState, setEditorState] = React.useState(
        MUIEditorState.createEmpty()
    );

    //var inputText = document.getElementsByTagName("span")[80].innerHTML;
    const onContentChange = newState => {
        setEditorState(newState);

        //html 수정 시 span index 변경해야함
        inputText = document.getElementsByTagName("span")[80].innerText;
        setContent(inputText);
    };

    //const noticeData = { title:title, content: content};
    //let insertNoticeUrl = process.env.REACT_APP_SPRING_URL+"notice/insertData";
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const member_num = localStorage.usernum;
    const insertGroupUrl = process.env.REACT_APP_SPRING_URL + "group/insertData";
    //데이터 삽입 동작
    const insertData = (e) => {
        e.preventDefault();
        //inputText = document.getElementsByTagName("span")[80].innerText;
        //setContent(inputText);
        // if (noticeData.title.trim() == '') {
        //     alert('제목을 입력해주세요');
        // }
        // if (noticeData.content == '\n' || noticeData.content == '') {
        //     alert('내용을 입력해주세요');
        // }
        //console.log("title: ", noticeData.title, ", content: ", noticeData.content);
        //console.log(noticeData.conten)
        //navi(`/notice/list`);
        // await axios.post(insertNoticesUrl, {title : title, content : content}).then((res) => {
        //     alert('공지사항이 등록되었습니다.');
        //     navi('/notice/list');
        // }).catch(err => {
        //     console.log("err:", err);
        // })
        axios.post(insertGroupUrl, { member_num, title, content })
            .then(res => {
                console.log("그룹명" + title + "그룹내용:" + content);
                alert("그룹모임이 생성되었습니다.");
                console.log("그룹모임 : ", res.title, "-", res.content);
                navi('/group/list');
            })
            .catch(err => {
                console.log(err);
            });

    };

    return (
        <div id='form'>
            <br />
            <h3>그룹모임 생성</h3>
            <br />
            <br />
            <form onSubmit={insertData}>
                <div>

                    <div style={{ fontFamily: 'Noto Sans Korean,Malgun Gothic,sans-serif' }}>
                        {/*<div>
                <Select
                    sx={{marginTop:5,
                        width: 120,
                        height: 35,}}></Select>
                    </div>*/}
                        <div className='title' style={{ padding: "12px", paddingRight: "25px" }}>
                            <input name="title" type="text" placeholder='제목' onChange={(e) => { setTitle(e.target.value); } } />
                        </div>
                        <div style={{ padding: "12px", height: "650px" }}>
                            {/*EditorComponents Test
            <Editor value={content} onChange={onEditorChange} />*/}
                            <MUIEditor editorState={editorState} onChange={onContentChange} />
                        </div>
                    </div>
                </div>

                <div className='insert'>
                    <button type="submit">등록</button>
                </div>
            </form>
        </div>
    );
}


export default GroupMeeting;