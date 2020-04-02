import React from 'react';
import Button from '../General/Button';
import Form from '../General/Form';
import Image from '../../assets/Logo.svg';
import '../../styles/components/General/Header.css';
const Header =()=>{

    const [showForm, setshowForm] = React.useState(false);

    return (
        <div className="header">
            <div>
                <img className="logo" src={Image} alt="Logo"/>
            </div>
            
            <div id = "btn1">
                <button className="header-btn" onClick={() => setshowForm({showForm : true})}>Login</button>
            </div>
            
            <div id = "btn2">
                <Button name='Sign up' className="header-btn" color='#FD5E53' />
            </div>
            {showForm && <Form/>}
        </div>
    );
}
export default Header;

