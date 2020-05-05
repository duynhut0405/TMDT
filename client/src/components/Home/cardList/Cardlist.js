import React, {useState} from 'react';
import '../../../styles/components/Home/Cardlist.css';
import Card from '../cardList/Card';
import { data } from '../../../data/data';
import {Link} from 'react-router-dom';
//use this in product page :v
class Cardlist extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  createList() {
    let result = [];
    data.map((item) => {
      result.push(
          <div className="card-container" key={item.id}>
            <Link to={`/Products/${item.id}`}>
              <Card
              key={item.id}
              img={item.img.src}
              price={item.price}
              productName={item.productName}
              />
            </Link>
          </div>
      )
      // console.log(item.productName);
    }
    
    )
    return result;
  }
  render() {
    return (
      <div className="cardlist-container">
        {this.createList()}
      </div>
    )
  }
}
export default Cardlist;





