import React, {useEffect,useState} from 'react';
//import '../../styles/notice.css';
import Editor from './EditorComponent';
import {Select, MenuItem} from "@mui/material";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/notice.css';
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
import {useForm} from 'react-hook-form';

/*현재 파일 업로드 기능 없음*/
//session 로그인 정보 없을 경우 alert 경고 후 list로 navigation 필요
//localstorage에서 

const NoticeForm = () => {
    

    const tabs = [
        { value: '공지사항', text: '공지사항' }
     ]
    const {register, watch, handleSubmit} = useForm();
    const [id, setId] = useState(0);
    const [type, setType] = useState('공지사항');
    const navi = useNavigate();
    //const insertUrl = "http://localhost:3000/notice/form";
    //const uploadReference = React.createRef();
    let inputText = useState('');
    const params = useParams();
    // const paramData = [params.title, params.content];
    
    const [editorState, setEditorState] = React.useState(
        MUIEditorState.createEmpty()
      )

    //var inputText = document.getElementsByTagName("span")[80].innerHTML;

    const onContentChange = newState => {
    setEditorState(newState);

    //html 수정 시 span index 변경해야함
    inputText = document.getElementsByTagName("span")[80].innerText;
    setContent(inputText);
    }

    //const noticeData = { title:title, content: content};

    //let insertNoticeUrl = process.env.REACT_APP_SPRING_URL+"notice/insertData";
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const member_num=localStorage.usernum;
    const insertNoticeUrl = process.env.REACT_APP_SPRING_URL+"notice/insertData";
    //데이터 삽입 동작
    const insertData = (e) => {
        e.preventDefault();
<<<<<<< HEAD
        const noticeData = {title:title, content: content};

        inputText = document.getElementsByTagName("span")[80].innerText;
        setContent(inputText);
=======
        //inputText = document.getElementsByTagName("span")[80].innerText;
        //setContent(inputText);
>>>>>>> branch 'master' of https://github.com/ddanddanChoonsik/YouthPoliticsProject.git

        if (noticeData.title.trim() == '') {
            alert('제목을 입력해주세요');
        }
       
        if (noticeData.content == '\n' || noticeData.content == '') {
            alert('내용을 입력해주세요');
        }

        //console.log("title: ", noticeData.title, ", content: ", noticeData.content);
        //console.log(noticeData.conten)
        //navi(`/notice/list`);

        // await axios.post(insertNoticesUrl, {title : title, content : content}).then((res) => {
        //     alert('공지사항이 등록되었습니다.');
        //     navi('/notice/list');
            
        // }).catch(err => {
        //     console.log("err:", err);
        // })
<<<<<<< HEAD
        const insertNoticeUrl = process.env.REACT_APP_SPRING_URL+"notice/insertData";
        
        //{noticeData} ==> title
        axios.post(insertNoticeUrl, {title:noticeData.title, content:noticeData.content})
=======
        
        axios.post(insertNoticeUrl, {member_num,title,content})
>>>>>>> branch 'master' of https://github.com/ddanddanChoonsik/YouthPoliticsProject.git
            .then(res => {
                console.log("등록한제목"+title+"등록한내용:"+content);
                alert("공지사항이 등록되었습니다.");
                    console.log("공지사항 : ", res.title, "-", res.content );
                    navi('/notice/list');
            })
            .catch(err => {
                console.log(err);
            })
        
    }
<<<<<<< HEAD

    const titleChange=(e)=>{
        setTitle(e.target.value)
    }
=======
>>>>>>> branch 'master' of https://github.com/ddanddanChoonsik/YouthPoliticsProject.git
    
    return (
        <div id='form'>
            <br/>
            <h3>공지사항 작성</h3>
            <br/>
            <br/>
            <form onSubmit={insertData}>
            <div >
            
                <div style={{ fontFamily: 'Noto Sans Korean,Malgun Gothic,sans-serif' }}>
                    {/*<div>
                        <Select 
                            sx={{marginTop:5,        
                                width: 120,
                                height: 35,}}></Select>
                            </div>*/}
                    <div className='title' style={{padding: "12px", paddingRight:"25px"}}>
                        <input name="title" type="text" placeholder='제목' onChange={(e)=>{setTitle(e.target.value)}}/>
                    </div>
                    <div style={{padding:"12px", height:"650px"}}>
                        {/*EditorComponents Test
                        <Editor value={content} onChange={onEditorChange} />*/ }
                        <MUIEditor editorState={editorState} onChange={onContentChange} />
                    </div>
                </div>
            </div>
            
            <div className='insert'>
                <button type="submit">등록</button>
            </div>
            </form>
        </div>
    )
};


export default NoticeForm;