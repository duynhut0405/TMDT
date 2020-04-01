import React from 'react';
import '../styles/containers/Home.css';
import BgHeader from '../components/Home/BgHeader';
import CardList from '../components/Home/cardList/Cardlist'
import {data} from '../data/data';
import CircleWrapper from '../components/Home/CircleWrapper';
import HotBar from '../components/Home/HotBar';
const Home =()=>{
    //console.log(data)
    return (
        <div className="home">
            <BgHeader/>
            <CircleWrapper />
            <HotBar/>
      <CardList/>
        </div>
    );
}
export default Home;
 