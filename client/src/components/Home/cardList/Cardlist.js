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





//inuse


  //test
  // createContent(){
  //   let content = [];
  //   data.map((item)=>{
  //     content.push(
  //       <Card 
  //       key={item.id}
  //       img={item.img.src}
  //       price={item.price}
  //       productName={item.productName}
  //     />)
  //   })
  //   console.log(content);
  //   return content;
  // }

  // createList(){
  //   let result = [];
  //   (this.createContent()).map((el)=>{
  //     if(el % 4 ==0){
  //       result.push(<div className ="row">{el}</div>)
  //     }
  //     else{
  //     result.push(el);
  //     }
  //   })
  //   return result;
  // }