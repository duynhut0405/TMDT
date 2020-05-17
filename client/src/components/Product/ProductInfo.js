import React, { useState, useEffect } from 'react';
import '../../App.css';
// import Axios from 'axios';
// import { data } from '../../data/data';
import '../../styles/components/Product/ProductInfo.css';
import ProductCard from '../Product/ProductCard';
function ProductInfo({match}) {
    useEffect(()=>{
        fetchItems();
        // console.log(match);
        // console.log(match.params.id);
        // console.log(data);
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'http://localhost:3030/products'
        )
        const items = await data.json();
        setItems(items);
    }

    const createProduct= items.map((item)=>{
        let result;    
        if(item.id === match.params.id)
            {
                result = 
                <ProductCard
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    description={item.description}
                    status={item.status}
                    price={item.price}
                />
            }            
            return result;
        })

    return (
        <div className="productInfo">
            {createProduct}
        </div>
    )
}

export default ProductInfo;