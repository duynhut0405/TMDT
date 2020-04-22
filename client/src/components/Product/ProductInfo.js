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
    // createProduct(){    
    //     let result= data.map((item)=>{
    //         <ProductCard
    //             key={item.id}
    //             img={item.img}
    //             description={item.description}
    //         />
    //     })
    // }

    return (
        <div className="productInfo">
            {/* <h1>Tesst</h1> */}
            {/* <ProductCard
                key={item.id}
                img={item.img}
                description={item.description}
            /> */}

        </div>
    )
}

export default ProductInfo;