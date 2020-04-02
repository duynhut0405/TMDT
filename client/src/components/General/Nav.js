import React from 'react';
import '../../styles/components/General/Nav.css';
import {NavLink} from 'react-router-dom';
const Nav =()=>{
    const styles={
    borderRadius:10,
    backgroundColor: '#00DD75'
    }
    //https://stackoverflow.com/questions/47879663/root-navlink-always-get-active-class-react-router-dom
    const checkActive = (match, location) => {
        //some additional logic to verify you are in the home URI
        if(!location) return false;
        const {pathname} = location;
        console.log(pathname);
        return pathname === "/";
    }
    return (
        <nav className="nav-bar">
                <ul>
                    <NavLink to='/' isActive={checkActive} activeStyle={styles}><li>Home</li></NavLink>
                    <NavLink to='/Products' activeStyle={styles}><li>Our product</li></NavLink>
                    <NavLink to='/Policy' activeStyle={styles}><li>Policy</li></NavLink>
                    <NavLink to='/About' activeStyle={styles}><li>About us</li></NavLink>
                </ul>
            <div id = "searchBar">                
                <input type="search" id ="searchInput"></input>
            </div>
        </nav>
    );
}
export default Nav;