import React from 'react';
import Image from '../../assets/Logo.svg';
import '../../styles/components/General/Form.css';
import Button from '../General/Button';
const Form =()=>{
    return (
        <div class="login-wrap">
            <form class="modal-content animate" method="post">
                <div className="headerForm">
                    <h2> USER LOGIN </h2>
                    <img className="logo" src={Image} alt="Logo" />
                </div>

                <div className="container">
                    <input type="text" placeholder="Email" name="uname" required/>
                </div>

                <div className="container">
                    <input type="password" placeholder="Password" name="psw" required/>
                </div>
                
                <div className="container">
                    <Button name='Sign In' className="header-btn"/>
                </div>
                
                <div className="forget">
                    <a href="uit.edu.vn"> Forget your password? </a>
                </div>
            
            </form>
        </div>
    );
}
export default Form;