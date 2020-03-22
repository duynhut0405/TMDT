import React from 'react';
import '../../styles/components/Home/Nav.css';
import {Link} from 'react-router-dom';
const Nav =()=>{
    return (
        <nav className="nav-bar">
            <div>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/About'><li>About us</li></Link>
                    <Link to='/Products'><li>Our product</li></Link>
                </ul>
            </div>
            <div id = "searchBar">                
                <input type="search" id ="searchInput"></input>
            </div>
        </nav>
    );
}
export default Nav;