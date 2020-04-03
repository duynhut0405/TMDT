import React from 'react';
import Button from '../General/Button';
import Image from '../../assets/Logo.svg';
import '../../styles/components/General/Header.css';
import { Redirect, Switch, NavLink } from 'react-router-dom';
const Header = props => {
    // console.log(props.history)
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
                    <Button name='Sign up' className="header-btn" color='#FD5E53'/>
                    <Redirect to='signUp'></Redirect>
                </div>

            </div>
        </div>
    );
}
export default Header;

