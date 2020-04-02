import React from 'react';
import '../../styles/components/General/Button.css';
const Button = props =>{
    function handleOnClick() {
        props.handleEventClickOnButton(true);
      }    
    return(

            <input type="button" value={props.name} className="header-btn" style={{backgroundColor:props.color}}  onClick={handleOnClick}/>

    );
}
export default Button;