import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../styles/components/General/Cart.css'
class Total extends Component{
    
    render(){
  
        return(
            <div className="cart_container">
                <div className="cart_collection">                 
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="cart_checkout">
                        <button className="waves-effect waves-light btn">Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.cartReducer.addedItems,
        total: state.cartReducer.total
    }
}
//shipping neu muon xai
const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Total)