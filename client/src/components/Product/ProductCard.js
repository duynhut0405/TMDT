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
                            <h1>{this.props.productName}</h1>
                            <p>status: {this.props.status}</p>
                        </div>
                        <div>
                            <h2>price: {this.props.price}</h2>
                        </div>
                        <div className = "numberOfProducts">
                            <div>
                                
                            </div>
                            <div>
                                <button title="add">Add</button>
                            </div>
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