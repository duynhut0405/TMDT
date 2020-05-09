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
            <NavLink to='/Products/Fruits' isActive={checkActive} activeStyle={styles}><p>Trái cây</p></NavLink>
                <ul>
                <NavLink to='/Products/Fruits/Viet'activeStyle={styles}><li>Trái cây Việt</li></NavLink>
                <NavLink to='/Products/Fruits/Import'activeStyle={styles}><li>Trái cây Nhập</li></NavLink> 
                </ul>
            </li>
            <ul>
            <NavLink to='/Products/Vegetables' activeStyle={styles}><li>Rau</li></NavLink>
            <NavLink to='/Products/' activeStyle={styles}><li>Củ</li></NavLink>
            <NavLink to='/Products/' activeStyle={styles}><li>Quả</li></NavLink>
            </ul>
            </ul>
        </nav>
    )
}

export default ProductList;