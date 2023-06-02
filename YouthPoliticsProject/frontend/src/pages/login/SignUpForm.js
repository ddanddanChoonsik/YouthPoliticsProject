import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import "../../styles/LoginForm.css";
import {  Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from "axios";
import DaumPostcode from "react-daum-postcode";
import { useForm } from "react-hook-form";

const SignUpForm = () => {


// let joinUrl = `${process.env.REACT_APP_SPRING_URL}auth/join`;

const navi=useNavigate();
const [joinData,setJoinData]=useState({
    id:'',
    name:'',
    password:'',
    email:'',
    address1:'',
    address2:'',
    tel:'',
    birthday:'',
    zoncode:''
});

const [addr1,setAddr1]=useState('');
const [addr2,setAddr2]=useState('');
const [zoncode1,setZonecode1]=useState('');

const [birth,setBirth]=useState({
    year:'',
    month:'',
    day:''
  });


// const [address1, setAddress1] = useState(''); // 주소
// const [address2, setAddress2] = useState(''); // 상세주소
// const [zonecode,setZonecode]=useState('');

const [passOk,setPassOk]=useState(false);
const [btnOk,setBtnOk]=useState(false);

///이메일 중복확인
const [emailCheck, setEmailCheck] = useState(null);
const {
    register,
    watch,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors },
  } = useForm();


//submit 호출될 함수
const onSave=(data)=>{
    // e.preventDefault(); //기본이벤트(submit이 action으로 넘어가는것)를 무효화
            console.log("name:",data.name);
            console.log("id:",data.id);
            console.log("password:",data.password);
            console.log("email:",data.email);
            console.log("tel:",data.tel);
            console.log("address1:",addr1);
            console.log("address2:",addr2);
            console.log("zoncode:",zoncode1);
            console.log("birth:",data.year+"-"+data.month+"-"+data.day);
            
          //   if(!btnOk){
          //     alert("아이디 중복체크를 해주세요");
          //     return;
          // }

          // console.log({
          //     ...data,
          //     birthday:birth.year+"-"+birth.month+"-"+birth.day
          // });

          //console.log(typeof (data.year+"-"+data.month+"-"+data.day));
          //.toISOString().split('T')[0];

          const fullbirthday =new Date(data.year+"-"+data.month+"-"+data.day);
          const fullbirthday2 =data.year+"-"+data.month+"-"+data.day;
          //console.log(fullbirthday2);
          const url = process.env.REACT_APP_SPRING_URL+"member/insert";
          axios.post(url, {
              name:data.name,
              id:data.id,
              password:data.password,
              email:data.email,
              tel:data.tel,
              address1:addr1,
              address2:addr2,
              zoncode:zoncode1,
              birthday:fullbirthday2
            })
          .then(res => {
            alert("insert 성공");
              console.log("data:",res.data);
              navi("/login");
          })
          .catch(err => {
              console.log(err);
          })
          }



//data 관련 데이터 입력시 호출
const onDataChange=(e)=>{
    const {name,value}=e.target;
    //이벤트 발생 name이 pass일 경우 무조건 passok는 false
    // if(name==='pass')
    //     setPassOk(false);
    setJoinData({
        ...joinData,
        [name]:value
    });
    console.log("onDataChange:",value);
}


const onBirthChange=(e)=>{
  const {name,value}=e.target;
  setBirth({
      ...birth,
      [name]:value
  });
}

//두번째 pass 입력시 호출
// const onPassChange=(e)=>{
//     const {value}=e.target;
//     if(value===joinData.password)
//         setPassOk(true)
       
//     else
//         setPassOk(false);
    
// }

//아이디 중복 체크 버튼 이벤트
const onIdCheck=()=>{
    // const url=process.env.REACT_APP_SPRING_URL+"member/idcheck?id="+watch('id');
    // axios.get(url)
    // .then(res=>{
    //     if(res.data===0){
    //         setBtnOk(true);
    //         alert("가입가능아이디")
    //     }else{
    //         setBtnOk(false);
    //         alert("이미있는 아이디")
    //         // setData({
    //         //     ...data,
    //         //     id:''
    //         // });
    //     }
    // });
}


//이메일 중복 체크 버튼 이벤트
const onEmailCheck=()=>{
    // const url=process.env.REACT_APP_SPRING_URL+"member/emailcheck?email="+watch('email');
    // axios.get(url)
    // .then(res=>{
    //     if(res.data===0){
    //         setBtnOk(true);
    //         alert("가입가능 이메일주소")
    //     }else{
    //         setBtnOk(false);
    //         alert("이미있는 이메일주소")
    //     }
    // });
}

  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

        // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
        const handlePostCode = (kakaoData) => {
          let fullAddress = kakaoData.address;
          let extraAddress = ''; 
          
          if (kakaoData.addressType === 'R') {
              if (kakaoData.bname !== '') {
              extraAddress += kakaoData.bname;
              }
              if (kakaoData.buildingName !== '') {
              extraAddress += (extraAddress !== '' ? `, ${kakaoData.buildingName}` : kakaoData.buildingName);
              }
              fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
          }
          console.log(kakaoData)
          console.log(fullAddress)
          console.log(kakaoData.zonecode)
          //setJoinData({...joinData, address1: fullAddress, address2: extraAddress, zoncode: kakaoData.zonecode});
          setJoinData({address1: fullAddress, address2: extraAddress, zoncode: kakaoData.zonecode});
          handleClose();
          setAddr1(fullAddress);
          setAddr2(extraAddress);
          setZonecode1(kakaoData.zonecode);
          console.log(joinData);
          
      }

  return (
    <div style={{
    width: '100%',
    height: '95.7vh',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  }}
    >
            <div className='form-join'>
            <div className='main-join'>
              <form onSubmit={handleSubmit(onSave)}>
              <div className='join-id-wrap'>
              <label>ID<span class="ico">*</span></label>&nbsp;&nbsp;
                            <input type="text" name="id" label="아이디"
                            className="join-control"
                            onChange={onDataChange}
                            placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                            {...register("id", {
                                required: "아이디를 입력해주세요",
                                minLength: {
                                  value: 6,
                                  message: "6자 이상의 아이디만 사용 가능합니다.",
                                },
                                maxLength: {
                                  value: 12,
                                  message: "12자 이하의 아이디만 사용 가능합니다.",
                                },
                                pattern: {
                                  value: /^([a-z])|([a-z0-9])$/,
                                  message: "아이디는 소문자와 숫자만 입력해주세요",
                                },
                              })}
                              />
                            <button type='button' className='checkbtn' onClick={onIdCheck} >중복확인</button>
                            {/* <button type='button' className='checkbtn'>중복확인</button> */}
                            {errors.id && <p style={{color:'#1e87f0'}}>{errors.id?.message}</p>}
              </div>
              <div className='join-id-wrap'>
              <label>비밀번호<span class="ico">*</span></label>&nbsp;&nbsp;
                            <input type="password" name="password"   className="join-control"
                             placeholder="비밀번호를 입력해주세요"
                             onChange={onDataChange}
                            {...register("password", {
                                required: "비밀번호를 입력해주세요",
                                minLength: {
                                  value: 8,
                                  message: "8자 이상의 비밀번호만 사용 가능합니다.",
                                },
                                maxLength: {
                                  value: 16,
                                  message: "16자 이하의 비밀번호만 사용 가능합니다.",
                                },
                                pattern: {
                                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                  message: "영문, 숫자를 혼용하여 입력해주세요..",
                                }
                              })}
                              />
                              {errors.password && <p style={{color:'#1e87f0'}}>{errors.password?.message}</p>}
              </div>
              <div className='join-id-wrap'>
              <label>비밀번호확인<span class="ico">*</span></label>&nbsp;&nbsp;
                            <input type="password" name="password_confirm"   className="join-control"
                             placeholder="비밀번호를 입력해주세요"
                            {...register("password_confirm", {
                                validate: value => value===watch("password") || '비밀번호가 일치하지 않습니다.'
                              })}
                              />
                              {errors.password_confirm && <p style={{color:'#1e87f0'}}>{errors.password_confirm?.message}</p>}
              </div>
              <div className='join-id-wrap'>
              <label>이름<span class="ico">*</span></label>
                            <input type="text" name="name" className="join-control"
                            label="이름" placeholder="이름을 입력해주세요" required 
                            onChange={onDataChange} 
                            {...register("name", {
                                required: "이름을 입력해주세요",
                                minLength: {
                                  value: 2,
                                  message: "2자 이상의 이름만 사용 가능합니다.",
                                },
                                maxLength: {
                                  value: 12,
                                  message: "12자 이하의 이름만 사용 가능합니다.",
                                },
                                pattern: {
                                  value: /^([가-힣])|([a-zA-Z])$/,
                                  message: "이름은 한글 또는 영문으로만 입력해주세요",
                                },
                              })}
                               />
                              {errors.name && <p style={{color:'#1e87f0'}}>{errors.name?.message}</p>}
              </div>
              <div className='join-id-wrap'>
              <label>이메일<span class="ico">*</span></label>
                            <input type="text" name="email"
                             placeholder="예: test123@gmail.com" className="join-control"

                             onChange={onDataChange}
                            {...register("email", {
                              required: "이메일을 입력해주세요",
                              pattern: {
                                value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                                message: "이메일 형식에 맞게 입력해주세요",
                              },
                              // validate: (value) => value === user_email_check,
                            })}
                            />
                            {errors.email && <p style={{color:'#1e87f0'}}>{errors.email?.message}</p>}
                            <button type='button' className='checkbtn' onClick={onEmailCheck}>중복확인</button>
                            {/* <button type='button' className='checkbtn' >중복확인</button> */}
           </div>
           <div className='join-id-wrap'>
           <label>연락처<span class="ico">*</span></label>
                            <input type="text" name="tel" className="join-control" placeholder="숫자만 입력해주세요"
                            onChange={onDataChange}
                            {...register("tel", {
                                required: "숫자만 입력해주세요",
                                pattern: {
                                  value: /^01([0|1|6|7|8|9]{0})?([0-9]{8,9})$/,
                                  message: "숫자만 입력해주세요",
                                },
                              })}
                             />
                             {/* 아래 x */}
                            {/* <button id="" className='btn' type="button">인증번호 받기</button> */}
                             {errors.tel && <p style={{color:'#1e87f0'}}>{errors.tel?.message}</p>}
           </div>

           <div className='join-id-wrap2'>
           {/* <label>주소<span class="ico">*</span></label> */}

           <div className='join-zoncode-wrap'>
                  <input type='text' className="form-control"
                             name="zonecode" placeholder='우편번호'
                             value={joinData.zoncode} onChange={onDataChange}
                            required/>
                            <Button onClick={handleOpen} style={{marginLeft:'5px'}}>
                                <button type='button' className='checkbtn' style={{width:'300px'}}>주소찾기</button>
                              </Button>
                              </div>

                            <div className='join-addr-wrap'>
                            <input type='text' className="join-control"
                             name="address1" placeholder='주소'
                             value={joinData.address1} onChange={onDataChange}
                            required/>

                            <input type='text' className="join-control"
                             name="address2" placeholder='상세주소' onChange={onDataChange}
                            //  onChange={onAddr2Change}
                               value={joinData.address2}
                            />
                            </div>

                           <div className="App">
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={modalStyle}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                
                                <DaumPostcode onComplete={handlePostCode} />
                                <button type='button' onClick={handleClose} className='btn'>닫기</button>
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Youth:Policy
                                </Typography>
                                </Box>
                            </Modal>
                            </div>
           </div>

           <div className='join-id-wrap'>
           <th>생년월일<span class="ico">*</span></th>
                                <input type="text" name="year" id="birth_year"
                                maxLength="4"
                                onChange={onBirthChange} 
                                {...register("year", {
                                    required: "숫자만 입력해주세요",
                                    pattern: {
                                      value: /^[0-9]*$/,
                                      message: "숫자만 입력해주세요",
                                    },
                                    maxLength: {
                                        value: 4
                                      },
                                    minLength: {
                                        value: 4
                                      },
                                    validate: value => (value >= new Date().getFullYear()-100 && value <= new Date().getFullYear()) || '출생년도를 다시 입력하세요'
                                  })}
                                placeholder="YYYY"/>

                                {/* <span class="bar"></span> */}

                                <input type="text" name="month" id="birth_month"
                                 maxLength="2"
                                 onChange={onBirthChange}
                                 {...register("month", {
                                    required: "숫자만 입력해주세요",
                                    pattern: {
                                      value: /^[0-9]*$/,
                                      message: "숫자만 입력해주세요",
                                    },
                                    maxLength: {
                                        value: 2
                                      },
                                    minLength: {
                                        value: 2
                                      },
                                      validate: value => (value >= 1 && value <=12) || '양식에 맞게 입력하세요'
                                  })}
                                placeholder="MM"/>

                                {/* <span class="bar"></span> */}

                                <input type="text"  name="day" id="birth_day"
                                 maxLength="2"
                                 onChange={onBirthChange} 
                                {...register("day", {
                                    required: "숫자만 입력해주세요",
                                    pattern: {
                                    value: /^[0-9]*$/,
                                    message: "숫자만 입력해주세요",
                                    },
                                    maxLength: {
                                        value: 2
                                    },
                                    minLength: {
                                        value: 2
                                    },
                                    validate: value => (
                                        (((watch("year")%4===0 && watch("year")%100!==0) || watch("year")%400===0) && watch("month")==="02" && value >= 1 && value <=29) ||
                                        (!((watch("year")%4===0 && watch("year")%100!==0) || watch("year")%400===0) && watch("month")==="02" && value >= 1 && value <=28) ||
                                        ((watch("month")==="04" || watch("month")==="06" || watch("month")==="09" || watch("month")==="11" ) && value >= 1 && value <=30) ||
                                        ((watch("month")==="01" || watch("month")==="03" || watch("month")==="05" || watch("month")==="07" || watch("month")==="08" || watch("month")==="10" || watch("month")==="12") && value >= 1 && value <=31)
                                        ) || '양식에 맞게 입력하세요'
                                })}
                                placeholder="DD"/>
                                {errors.year && <p style={{color:'#1e87f0'}}>{errors.year?.message}</p>}
                                {!errors.year && errors.month && <p style={{color:'#1e87f0'}}>{errors.month?.message}</p>}
                                {!errors.year && !errors.month && errors.day && <p style={{color:'#1e87f0'}}>{errors.day?.message}</p>}
           </div>
           <div className='join-id-wrap'>
           <div className="formField">
                            <button className="formFieldButton" type="submit">Sign Up</button>{" "}
                            <Link to="/login" className="formFieldLink">
                              I'm already member
                            </Link>
                            {/* <button type="submit" className="btn_type1 btn_member">
                            <span className="txt_type">가입하기</span>
                            </button> */}
                          </div>
           </div>
           </form>
            </div>
    </div>
    </div>
  );
};

export default SignUpForm;
