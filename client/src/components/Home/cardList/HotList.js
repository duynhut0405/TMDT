import React from 'react';
import '../../../styles/components/Home/HotList.css';
import Card from '../cardList/Card';
import { data } from '../../../data/data';
import { addToCart } from '../../../action/cart-action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const hData = data.items.slice(0, 6);
class HotList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick=(id)=>{
    this.props.addToCart(id)
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
    return this.props.items.slice(0, 6).map(item => {
      return <div className="card-container" key={item.id}>
          <Card
            key={item.id}
            img={item.img.src}
            price={item.price}
            productName={item.productName}
            id={item.id}
            handleClick={this.handleClick}
          />
      </div>
    })
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
    items: state.items
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