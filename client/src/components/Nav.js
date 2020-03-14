import React from 'react';
import '../styles/components/Nav.css';
const Nav =()=>{
    return (
        <div className="nav-bar">
           <ul>
               <li>Home</li>
               <li>About us</li>
               <li>Our product</li>
           </ul>
           <input type="search"></input>
        </div>
    );
}
export default Nav;