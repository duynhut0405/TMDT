import React from 'react';
import '../../../styles/components/Home/Card.css';

export default class Card extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="card text-left">
            <div>
                <img className="productImg" src={this.props.img} alt={this.props.name}/>
            </div>
            <div>
                <h4>{this.props.name}</h4>
            </div>
            <div>
                <p>Giá: {this.props.price}</p>
            </div>
            <div>
                <img src="https://img.icons8.com/bubbles/50/000000/buy.png" alt="cart-icon"/>
            </div>
        </div>
        )
    }
}
