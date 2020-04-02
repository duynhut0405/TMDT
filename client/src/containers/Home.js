import React from 'react';
import '../styles/containers/Home.css';
import BgHeader from '../components/Home/BgHeader';
import CardList from '../components/Home/cardList/Cardlist';
import CircleWrapper from '../components/Home/CircleWrapper';
import HotBar from '../components/Home/HotBar';
import SignUp from '../components/SignUp/SignUp';
const Home =props=>{
    if (props.ClickSignUp) {
        return (
          <div className="home">
            <BgHeader></BgHeader>
            <SignUp></SignUp>
            <CircleWrapper />
            <HotBar/>
      <CardList/>
          </div>
        );
      } else {
        return (
           <div className="home">
            <BgHeader/>
            <CircleWrapper />
            <HotBar/>
      <CardList/>
        </div>
        );
      }
    };
export default Home;
 