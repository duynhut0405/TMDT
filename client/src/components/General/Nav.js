import React from 'react';
import '../../styles/components/General/Nav.css';
import {Link} from 'react-router-dom';
const Nav =()=>{
    return (
        <nav className="nav-bar">
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/Products'><li>Our product</li></Link>
                    <Link to='/Policy'><li>Policy</li></Link>
                    <Link to='/About'><li>About us</li></Link>
                </ul>
            <div id = "searchBar">                
                <input type="search" id ="searchInput"></input>
            </div>
        </nav>
    );
}
export default Nav;