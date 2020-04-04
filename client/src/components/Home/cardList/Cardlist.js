import React from 'react';
import '../../../styles/components/Home/Cardlist.css';
import Card from '../cardList/Card';
import {data} from '../../../data/data';

class Cardlist extends React.Component{
  constructor(){
    super();
    this.state={};
  }
  createList(){
    let content = [];
    let result = [];
    data.map((item)=>{
      if((item.id % 4) == 0){
        result.push(
          <div className="row">
            {content}
          </div>
        );
      }
      else{
        content.push(
            <Card 
            key={item.id}
            img={item.img.src}
            price={item.price}
            productName={item.productName}
            />
        )
      }
    })
    console.log(result);
    return result;
  }
  render(){
    return (
        <div className="cardList">
            {this.createList()}
        </div>
    )
  }
}
export default Cardlist;


// }

// function Cardlist() {
//   console.log(data);
//   let content = [];
//   let i = 0;
//   data.forEach((item, i) =>{
//       if((i+1) % 4 == 0){
//         content.push(
//             <div className="row">
//                 <Card
//                   key={item.id}
//                   img={item.img.src}
//                   price={item.price}
//                   productName={item.productName}
//                   />
//             </div>
//         )
//       }else{
//           content.push(
//           <Card
              // key={item.id}
              // img={item.img.src}
              // price={item.price}
              // productName={item.productName}
//               />);
//       }
//   });
//   console.log(content);
//   return (
//     content
//   );
// }

