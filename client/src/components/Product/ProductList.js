import React from "react";
import '../../styles/components/Product/ProductList.css';
import { NavLink } from 'react-router-dom';

function ProductList(){
    // const [appear,setAppear]=useState(false);

    const checkActive = (match, location) => {
        //some additional logic to verify you are in the home URI
        if (!location) return false;
        const { pathname } = location;
        // console.log(pathname);
        return pathname === "";
    }
    
    const styles = {
        backgroundColor: '#B0EACD'
    }

    return(
        <nav>
            <ul className="Product-list">
            <li className="Fruit">
            <NavLink to='/Products/?filter=fruit' isActive={checkActive} activeStyle={styles}><p>Fruits</p></NavLink>
            </li>
            <li>
            <NavLink to='/Products/Vegetables' activeStyle={styles}><li>Vegetables</li></NavLink>
            </li>
            <li>
            <NavLink to='/Products/Spices' activeStyle={styles}><li>Spices</li></NavLink>
            </li>
            </ul>
        </nav>
    )
}

export default ProductList;