import { display, flexbox } from '@mui/system';
import React, { Component } from 'react';
//import ReactQuill, {Quill} from 'react-quill';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/////////////Toolbar 출력 이슈로 사용 X ==> mui-draft-wysiwyg 사용 ////////////////
class EditorComponent extends Component{
  constructor(props){
      super(props);
  }

  /*}
  modules = {
      toolbar: [
        //[{ 'font': [] }],
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        [{ 'align': [] }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        ['clean']
      ],
    }*/

   /* modules = {
      toolbar: [
        //[{ 'font': [] }],
        [{'header': [1, 2, false] }],
        ['bold'], ['italic'], ['underline'],['strike'], ['blockquote'],
        {'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'},
        'link', 'image',
        { 'align': [] }, { 'color': [] }, { 'background': [] },          // dropdown with defaults from theme
        'clean'
        ]
    }*/

  
    formats = [
      //'font',
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image',
      'align', 'color', 'background',        
    ]

  render(){
      const { value, onChange } = this.props;
      return(
          <div style={{height: "650px", background:"rgb(255, 253, 249)"}}>
              <ReactQuill 
                  style={{height: "600px"}} 
                  theme="snow" 
                  modules={this.modules} 
                  formats={this.formats} 
                  value={value || ''} 
                  onChange={(content, delta, source, editor) => onChange(editor.getHTML())} />
          </div>
      )
  }
}
export default EditorComponent