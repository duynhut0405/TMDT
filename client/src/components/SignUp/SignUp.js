import React from "react";
import '../../styles/components/SignUp/SignUp.css';
const SignUp = props => {
   return (
    <div className="signup_box_container">
      <div className="signup_box">
        <div className="container-form">
          <h1>SIGN UP </h1>
          <h4>Please fill in this form to create an account </h4>
          <label>UserName</label>
          <br />
          <input className="input-field" id="username"></input>
          <br />
          <label>Password</label>
          <br />
          <input className="input-field" id="password"></input>
          <br />
          <label>Confirm password</label>
          <br />
          <input className="input-field" id="confirm-password"></input>
          <br />
          <label>Email</label>
          <br />
          <input className="input-field" id="email"></input>
          <br />
          <input type="checkbox" style={{ width: "auto", height: "auto" }} />
          <label> Accept the term of Use & Privacy Policy </label>
        </div>
        <div className="signup_btn">
          <button className="btn-ok">Sign Up</button>
          {/* <button className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
