import React,{useEffect,useState} from 'react';
import { Link,useNavigate } from "react-router-dom";
import "../../styles/LoginForm.css";
import Kakaoimg from "../../images/kakaologin.png";
import axios from 'axios';
//import KakaoLogin from 'react-kakao-login';

const SignInForm = () => {

  const navi = useNavigate();
  const {Kakao} = window;
  const [isKakaoLogin, setIsKakaoLogin] = useState(false);

  //   const initKakao = () => {
  //     if (Kakao && !Kakao.isInitialized())
  //     {
  //       Kakao.init(jskey);
  //       console.log(window.Kakao.isInitialized());
  //     }
  //   }
    
  //   useEffect(() => {
  //     initKakao()
  //   }, [])

     const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY_SY;
     const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
    //const REST_API_KEY = "3fca2bcf4ac249e8d3ed096d7baa09cf";
    //const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
 

    // const Kakaologin = ()=>{
    // //  navi(KAKAO_AUTH_URL);
    //   window.location.href(KAKAO_AUTH_URL);
    // }

    return (
    <div>
        <div className="formCenter">
         {/* <form className="formFields" onSubmit={this.handleSubmit}> */}
         <form className="formFields">
           <div className="formField">
             <label className="formFieldLabel" htmlFor="email">
               E-Mail Address
             </label>
             <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              // value={this.state.email}
              // onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              // value={this.state.password}
              // onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/join" className="formFieldLink">
              Create an account
            </Link>
          </div>

          <div className="socialMediaButtons">
            <div className="kakaoButton">
              {/* <FacebookLoginButton onClick={() => alert("Hello")} /> */}
             {/* <button className="kakaologinbtn" ><img src={Kakaoimg} alt={"kakao-login"} style={{width:'fitContent',height:'fitContent'}}/></button>  */}
             {/* <h1><a href={KAKAO_AUTH_URL}>Kakao Login</a></h1> */}
             <a href={KAKAO_AUTH_URL}><img src={Kakaoimg} alt={"kakao-login"} style={{width:'fitContent',height:'fitContent'}}/></a>
            {/*<button onClick={kakaoLogout}>로그아웃</button> */}
            {/* <KakaoLogin token={kakaoClientId} onSuccess={KakaoOnSuccess} onFail={kakaoOnFailure} /> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
// class SignInForm extends Component {
//   constructor() {
//     super();

//     this.state = {
//       email: "",
//       password: ""
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     let target = event.target;
//     let value = target.type === "checkbox" ? target.checked : target.value;
//     let name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     console.log("The form was submitted with the following data:");
//     console.log(this.state);
//   }

//   render() {
//     return (
//       <div className="formCenter">
//         <form className="formFields" onSubmit={this.handleSubmit}>
//           <div className="formField">
//             <label className="formFieldLabel" htmlFor="email">
//               E-Mail Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="formFieldInput"
//               placeholder="Enter your email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="formField">
//             <label className="formFieldLabel" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="formFieldInput"
//               placeholder="Enter your password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="formField">
//             <button className="formFieldButton">Sign In</button>{" "}
//             <Link to="/" className="formFieldLink">
//               Create an account
//             </Link>
//           </div>

//           <div className="socialMediaButtons">
//             <div className="facebookButton">
//               {/* <FacebookLoginButton onClick={() => alert("Hello")} /> */}
//             </div>

//             <div className="instagramButton">
//               {/* <InstagramLoginButton onClick={() => alert("Hello")} /> */}
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SignInForm;
