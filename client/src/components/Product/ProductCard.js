import React from 'react';
import '../../styles/components/Product/ProductCard.css';
// import ProductImg from './ProductImg';
// import {addToCart} from '../../action/cart-action'
import QuantitiesButton from './QuantitiesButton';
class ProductCard extends React.Component{
    render(){
        return(
            <div className="cardProduct">
                <div className = "detail">
                    <div>
                        <img className="productInfoImg" src={this.props.img} alt={this.props.productName} />
                    </div>
                    <div className="productDetail">
                        <div>
                            <h1>{this.props.name}</h1>
                            <p>Status: {this.props.status}</p>
                        </div>
                        <div>
                            <h3>Price: {this.props.price} $</h3>
                        </div>
                        <div className = "numberOfProducts">
                            <div>
                                <QuantitiesButton/>     
                            </div>
                            <button title="add" className="addBtn">ADD</button>
                        </div>
                    </div>
                </div>
                <div className = "description">
                    <h3>Description</h3>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default ProductCard;