import React from "react";
import '../../styles/components/SignUp/SignUp.css';
import bg_signup from '../../assets/ovegets.jpeg';
const SignUp = props => {
  return (
    <div className="signup_box_container">
      <div className="bg-signup">
        <img className="bg-image" src={bg_signup} alt="hero-img"></img>
        <div className="bg-text">
          <h3>READY TO DIVE INTO THE WORLD OF</h3>
          <h1>VEGATABLE?</h1>
        </div>
      </div>
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
          <input type="password" className="input-field" id="password"></input>
          <br />
          <label>Confirm password</label>
          <br />
          <input type="password" className="input-field" id="confirm-password"></input>
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
      <div className="clearFloat"></div>
    </div>
  );
};

export default SignUp;
