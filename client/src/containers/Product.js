import React from 'react';
import '../styles/containers/Product.css';
import ProductImg from '../components/Product/ProductImg';
import ProductList from '../components/Product/ProductList';
import CardList from '../components/Home/cardList/Cardlist';
import Sort from '../components/Product/Sort';
const Product =()=>{
    return (
       <div className="product">
           <ProductImg/>
           <div className="product-shop">
           <div>
                <ProductList/>
           </div>
           <div className="product-main">
               <div>
                    <Sort/>
               </div>
               <div className="product-list">
                    <CardList/>
               </div>
           </div>
           </div>
       </div>
    );
    }
export default Product;