import React from 'react';
import '../../styles/components/Home/Button.css';
const Button=(props)=>{
    return(
            <input type="button" value={props.name} className="header-btn" style={{backgroundColor:props.color}} />
    );
}
export default Button;