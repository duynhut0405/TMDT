import React from 'react';
import Button from '../General/Button';
import Form from '../General/Form';
import Image from '../../assets/Logo.svg';
import '../../styles/components/General/Header.css';
import {  Link } from 'react-router-dom';
const Header = ()=>{
    return (
        <div className="header">
            <div className="iconImg">
                <img src={Image} alt="Logo" />
            </div>
            <div className="btnLocation">
                <div id="btn1">
                    <Button name='Login' className="header-btn" />
                </div>
                <div id="btn2">
                    <Link to="SignUp">
                    <Button name='Sign up' className="header-btn" color='#FD5E53'/>
                    </Link>
                </div>


            </div>
            {<Form/>}
        </div>
    );
}
export default Header;

