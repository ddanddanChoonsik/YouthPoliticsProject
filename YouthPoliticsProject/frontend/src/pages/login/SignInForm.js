import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/LoginForm.css";
import Kakaoimg from "../../images/kakaologin.png";


const SignInForm = () => {
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
              <img src={Kakaoimg} alt="카카오로그인" onClick={() => alert("Hello")}/>
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
