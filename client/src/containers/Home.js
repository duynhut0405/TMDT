import React from 'react';
import '../styles/containers/Home.css';
import BgHeader from '../components/Home/BgHeader';
import SignUp from '../components/SignUp/SignUp';
const Home =props=>{
    if (props.ClickSignUp) {
        return (
          <div className="home">
            <BgHeader></BgHeader>
            <SignUp ClickCancel={props.ClickCancel}></SignUp>
          </div>
        );
      } else {
        return (
          <div>
            <BgHeader></BgHeader>
          </div>
        );
      }
    };
    
export default Home;
 