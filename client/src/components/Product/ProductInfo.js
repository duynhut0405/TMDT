import React, { useState, useEffect } from 'react';
import '../../App.css';
import { data } from '../../data/data';
import ProductImg from './ProductImg';
import '../../styles/components/Product/ProductInfo.css';

function ProductInfo(match) {
    useEffect(()=>{
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({

    });

    const fetchItem = async () => {
        const fetchItem = await fetch(
            '/Product/${item.id}'
        )
        const item = await fetchItem.json();
        console.log(item);
    }
    
    return (
        <div className="productInfo">
            <h1>Tesst</h1>
            <div>
                {/* <img src={item.img.src}></img> */}
            </div>
            <div>
                <h1>{item.productName}</h1>
            </div>
        </div>
    )
}

export default ProductInfo;