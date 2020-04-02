import React from 'react';
import Button from '../General/Button';
import Form from '../General/Form';
import Image from '../../assets/Logo.svg';
import '../../styles/components/General/Header.css';

const Header = props=>{

    return (
        <div className="header">
            <div className="iconImg">
                <img src={Image} alt="Logo"/>
            </div>
            

       <div className = "btnLocation">
            <div id = "btn1">
                <button className="header-btn" onClick={() => setshowForm({showForm : true})}>Login</button>
            </div>
            
            <div id = "btn2">
                <Button name='Sign up' className="header-btn" color='#FD5E53' handleEventClickOnButton={props.handleEventClickOnButton} />
               </div>

            </div>
            {showForm && <Form/>}
        </div>
    );
}
export default Header;

