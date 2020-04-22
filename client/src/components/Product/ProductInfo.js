import React, { useState, useEffect } from 'react';
import '../../App.css';
import { data } from '../../data/data';
import ProductImg from './ProductImg';
import '../../styles/components/Product/ProductInfo.css';
import ProductCard from '../Product/ProductCard';
function ProductInfo({match}) {
    useEffect(()=>{
        fetchItem();
        console.log(match);
        console.log(match.params.id);
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(
            '../../data/data.js'
        )
        item = await fetchItem.json();
        setItem(item)
        console.log(item);
    }

    const createProduct= data.map((item)=>{
        let result;    
        if(item.id == match.params.id)
            {
                result = 
                <ProductCard
                    key={item.id}
                    img={item.img.src}
                    productName={item.productName}
                    description={item.description}
                    status={item.status}
                    price={item.price}
                />
            }
            
            return result;
        })

    return (
        <div className="productInfo">
            {/* <h1>Tesst</h1> */}
            {/* <ProductCard
                key={item.id}
                img={item.img}
                description={item.description}
            /> */}
            {createProduct}
        </div>
    )
}

export default ProductInfo;