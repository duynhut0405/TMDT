import React from 'react';
import '../../../styles/components/Home/HotList.css';
import Card from '../cardList/Card';
// import { data } from '../../../data/data';
import { addToCart } from '../../../action/cart-action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Axios from 'axios'
class HotList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = (id) => {
    this.props.addToCart(id)
  }
  async componentDidMount() {
    do {
      await Axios.get(`http://localhost:3030/products`)
        .then(data => data.data)
        .then(data => this.setState({ productsData: data })).catch(err => console.log(err))
    }
    while (this.state.productsData.length === 0);
  }

  async componentDidUpdate(prevProps, prevState) {
    do {
      await Axios.get(`http://localhost:3030/products`)
        .then(data => data.data)
        .then(data => this.setState({ productsData: data })).catch(err => console.log(err))
    }
    while (this.state.productsData.length === 0);
  }

  createHotList() {
    // let hotContent = [];
    // hData.map((item) => {
    //   hotContent.push(
    //     <li>
    //       <Card
    //         key={item.id}
    //         img={item.img.src}
    //         price={item.price}
    //         productName={item.productName}
    //       />
    //     </li>
    //   )
    // }
    // );
    // return hotContent;
    return this.state.productsData ? this.state.productsData.slice(0, 6).map(item => {
      return <div className="card-container" key={item.id}>
        <Link to={`/Products/${item._id}`}>
          <Card
            key={item.id}
            img={item.img}
            price={item.price}
            productName={item.name}
            id={item.id}
            handleClick={this.handleClick}
          />
        </Link>
      </div>
    }) : null
  }
  render() {
    return (
      <div className="hotList">
        <ul>
          <div className="scrollList" style={{ overflowX: 'scroll' }}>
            {this.createHotList()}
          </div>
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.cartReducer
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HotList);

// hData.map((item)=>{
//     hotContent.push(
//         <li>
//         <Card 
//           key={item.id}
//           img={item.img.src}
//           price={item.price}
//           productName={item.productName}
//           />
//         </li>
//     )
//   }