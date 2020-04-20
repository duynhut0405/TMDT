import React from 'react';
import '../../../styles/components/Home/HotList.css';
import Card from '../cardList/Card';
import { data } from '../../../data/data';

const hData = data.slice(0,6);
class HotList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  createHotList() {
    let hotContent = [];
    hData.map((item) => {
      hotContent.push(
        <li>
          <Card
            key={item.id}
            img={item.img.src}
            price={item.price}
            productName={item.productName}
          />
        </li>
      )
    }
    );
    return hotContent;
  }
  render() {
    return (
      <div className="hotList">
        <ul>
          <div className="scrollList" style={{ overflowX: 'scroll'}}>
            {this.createHotList()}
          </div>
        </ul>
      </div>
    )
  }
}
export default HotList;

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