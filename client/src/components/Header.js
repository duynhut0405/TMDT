import React from 'react';
import Button from '../components/Button';
import Logo from '../assets/Logo.svg';
import '../styles/components/Header.css';
const Header =()=>{
    return (
        <div className="header">
            <img src={Logo} alt="Logo"/>
            <div className='header-btn'> 
            <Button name='Login'/>
            <Button name='Sign up' color='#FD5E53'/>
            </div>
        </div>
    );
}
export default Header;