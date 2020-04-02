import React from 'react';
import '../../../styles/components/Home/Cardlist.css';
import Card from '../cardList/Card';
import {data} from '../../../data/data';

class Cardlist extends React.Component{
    render(){
      return (
          <div className="cardList">
              {
                  data.map(item=>( 
                      <Card
                      key={item.id}
                      img={item.img.src}
                      price={item.price}
                      productName={item.productName}
                      />
                  ))
              }
          </div>
      )
  }
}

export default Cardlist;

// let content = [];
//   let i = 0;
//   data.foreach((item,i)=>{
//       if ((i+1)%4 == 0){
//           content.push(
//             <Card
//             key={item.id}
//             img={item.img.src}
//             price={item.price}
//             productName={item.productName}
//             /> 
//           )
//       }else{
//         content.push(
//             <Card
//             key={item.id}
//             img={item.img.src}
//             price={item.price}
//             productName={item.productName}
//             />
//         )}
//   });
//   return (
//     <div>
//       {content}
//     </div>
//   )