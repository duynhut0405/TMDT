import React,{Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../../action/cart-action'
import '../../styles/components/General/Cart.css';
import Total from '../General/Total'
import '../../styles/components/General/Cart.css'
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
        console.log(this.props.items)
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item_avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img.src} alt={item.name} className=""/>
                                    </div>
                                
                                    <div className="item-desc">

                                        <p>{item.productName}</p>
                                        <p><b>Price: {item.price}dong</b></p> 
                                        <p>
                                        <b>Quantity: {item.quantity}</b>
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" style={{textAlign:"end"}} onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p style={{textAlign:"center"}}>Nothing.</p>
             )
       return(
            <div className="cart_container">
                <div className="cart_ordered">
                    <h2>You have ordered:</h2>
                    <ul className="cart_collection">
                        {addedItems}
                    </ul>
                </div>    
                <Total></Total>
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.cartReducer.addedItems,
        //addedItems: state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)