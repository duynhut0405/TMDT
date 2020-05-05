import React, { useState, useEffect } from 'react';
import '../styles/containers/Product.css';
import ProductImg from '../components/Product/ProductImg';
import ProductList from '../components/Product/ProductList';
import CardList from '../components/Home/cardList/Cardlist';
import Sort from '../components/Product/Sort';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Product(match){
    console.log(match);
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