import React from 'react';
import Button from '../General/Button';
import Form from '../General/Form';
import Image from '../../assets/Logo.svg';
import '../../styles/components/General/Header.css';

const Header = ()=>{
    return (
        <div className="header">
            <div className="iconImg">
                <img src={Image} alt="Logo"/>
            </div>
            

       <div className = "btnLocation">
            <div id = "btn1">
                <button className="header-btn" >Login</button>
            </div>
            
            <div id = "btn2">
                <Button name='Sign up' className="header-btn" color='#FD5E53' />
               </div>

            </div>
            {<Form/>}
        </div>
    );
}
export default Header;

