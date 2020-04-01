import React from 'react';
import '../styles/containers/Home.css';
import BgHeader from '../components/Home/BgHeader';
import CardList from '../components/Home/cardList/Cardlist'
import {data} from '../data/data';
const Home =()=>{
    //console.log(data)
    return (
        <div className="home">
            <BgHeader/>
            <CardList/>
        </div>
    );
}
export default Home;
 