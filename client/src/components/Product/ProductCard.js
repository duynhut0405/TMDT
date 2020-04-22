import React from 'react';
import '../../styles/components/Product/ProductCard.css';
import ProductImg from './ProductImg';
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
                            <p>{this.props.productName}</p>
                            <p>{this.props.status}</p>
                        </div>
                        <div>
                            <h1>{this.props.price}</h1>
                            <p>rating</p>
                        </div>
                        <div className = "numberOfProducts">
                            <div>
                                <p>SL</p>
                            </div>
                            <div>
                                <button title="add">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "description">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default ProductCard;