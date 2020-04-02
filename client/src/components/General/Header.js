import React from 'react';
import Button from '../General/Button';
import Image from '../../assets/Logo.svg';
import '../../styles/components/General/Header.css';
const Header = props=>{
    return (
        <div className="header">
            <div>
                <img className="logo" src={Image} alt="Logo"/>
            </div>
            
            <div id = "btn1">
                <Button name='Login' className="header-btn"/>
            </div>
            <div id = "btn2">
                <Button name='Sign up' className="header-btn" color='#FD5E53' handleEventClickOnButton={props.handleEventClickOnButton} />
            </div>
        </div>
    );
}
export default Header;

