import React from 'react';
import '../styles/components/Nav.css';


const Nav =()=>{
    return (
        <div className="nav-bar">
            <div>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Our product</li>
                </ul>
            </div>
            <div id = "searchBar">                
                <input type="search" id ="searchInput"></input>
            </div>
        </div>
    );
}
export default Nav;