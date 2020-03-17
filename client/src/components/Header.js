import React from 'react';
import Button from '../components/Button';
import Logo from '../assets/Logo.svg';
import '../styles/components/Header.css';
const Header =()=>{
    return (
        <div className="header">
            <div>
                <img src={Logo} alt="Logo"/>
            </div>
            
            <div id = "btn1">
                <Button name='Login' className="header-btn"/>
            </div>
            <div id = "btn2">
                <Button name='Sign up' className="header-btn" color='#FD5E53' />
            </div>
        </div>
    );
}
export default Header;

