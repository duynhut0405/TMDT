import React from 'react';
import '../../../styles/components/Home/Cardlist.css';
import Card from '../cardList/Card';
// import { data } from '../../../data/data';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../action/cart-action'
import { connect } from 'react-redux'
import Axios from 'axios';
//use this in product page :v
class Cardlist extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this)
  }
  state={
    productsData:[]
  }
  //   createList(){
  //   let content = [];
  //   let result = [];
  //   data.map((item)=>{
  //     if((item.id % 4) == 0){
  //       result.push(
  //         <ul className="row">
  //           {content}
  //         </ul>
  //       );
  //     }
  //     else{
  //       content.push(
  //           <Card 
  //           key={item.id}
  //           img={item.img.src}
  //           price={item.price}
  //           productName={item.productName}
  //           />
  //       )
  //     }
  //   })
  //   console.log(result);
  //   return result;
  // }
  componentDidMount(){
    Axios.get('http://localhost:3030/products')
    .then(data=>{this.setState({productsData:data.data})}).catch(err=>console.log(err))
  }
  handleClick(id) {
    this.props.addToCart(id)
  }

  // createList() {
  //   const result = []
  //   this.props.items.map(item =>
  //     result.push(
  //       <div className="card-container" key={item.id}>
  //         <Link to={`/Products/${item.id}`}>
  //           <Card
  //             key={item.id}
  //             img={item.img.src}
  //             price={item.price}
  //             productName={item.productName}
  //             id={item.id}
  //             handleClick={this.handleClick}
  //           />
  //         </Link>
  //       </div>
  //     )
  //   )
  //   return result;
  // }

  render() {
    const listCard = this.state.productsData.map(item => (
      <div className="card-container" key={item.id}>
        <Link to={`/Products/${item.id}`}>
          <Card
            key={item.id}
            img={item.img}
            price={item.price}
            productName={item.name}
            id={item.id}
            handleClick={this.handleClick}
          />
        </Link>
      </div>))
    return (
      <div className="cardlist-container">
        {listCard}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.items
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cardlist);





