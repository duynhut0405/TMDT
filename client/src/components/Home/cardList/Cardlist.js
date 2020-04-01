import React from 'react';
import '../../../styles/components/Home/Cardlist.css';
import Card from '../cardList/Card';
import {data} from '../../../data/data';

class Cardlist extends React.Component {
    render(){
        console.log(data);
        return (
            <div className="cardList">
                {
                    data.map(item=>(
                        <Card
                        key={item.id}
                        img={item.img}
                        price={item.price}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Cardlist;