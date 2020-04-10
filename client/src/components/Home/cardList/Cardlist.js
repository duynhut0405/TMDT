import React from 'react';
import '../../../styles/components/Home/Cardlist.css';
import Card from '../cardList/Card';
import { data } from '../../../data/data';

class Cardlist extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  createList() {
     return data.map(item => <Card key={item.id} img={item.img.src} price={item.price} productName={item.productName}></Card>)
  }
  render() {
    return (
      <div className="classlist-container">
        <div className="cardList">
          {this.createList()}
        </div>
        <div className="clearFloat"></div>
      </div>
    )
  }
}
export default Cardlist;

