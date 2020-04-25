import React,{useState} from 'react';
import Image from '../../assets/Logo.svg';
import '../../styles/components/General/Form.css';
import Button from '../General/Button';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Form =()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const loginFunciton=()=>{
        //e.preventDefault();
        console.log(email,password)
        axios.post('http://localhost:3030/login',{email,password})
            .then((data)=>console.log(data));
    }
    return (
        <div className="login-wrap">
            <div className="modal-content animate">
                <div className="headerForm">
                    <h2> USER LOGIN </h2>
                    <img className="logo" src={Image} alt="Logo" />
                </div>

                <div className="form-container">
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                </div>

                <div className="form-container">
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                </div>
                
                <div className="form-container">
                    <Button name='Sign In' className="header-btn" onClick={loginFunciton}/>
                </div>
                
                <div className="forget">
                    <Link to="/ForgetPass"> Forget your password? </Link>
                </div>
            
            </div>
        </div>
    );
}
export default Form;