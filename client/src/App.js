import React,{useEffect,useState} from "react";
import Home from "./containers/Home";
import "./App.css";
import Header from "./components/General/Header";
import Nav from "./components/General/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./fonts/Roboto-Regular.ttf";
import About from "./containers/About";
import signUp from "./containers/signUp";
import Footer from "./components/General/footer";
import Policy from "./containers/Policy";
import Forgot_pass from "./containers/ForgetPass";
import Products from "./containers/Product";
import ProductInfo from "./components/Product/ProductInfo";
import Cart from "./components/General/Cart"
import {useDispatch} from 'react-redux';
import {usrLogin} from './action/user-login'
import axios from 'axios';
function App() {
  const dispatch=useDispatch();
  useEffect( ()=>{
    const token = localStorage.getItem('auth-token')
    if(token)
    {async function fetchUser()
    {
    console.log('token',token)
    await axios.get('http://localhost:3030/login',{headers:{"auth-token":token}}).then((data)=>{
        return dispatch(usrLogin(data.data))})}
fetchUser();}
}
  ,[]);
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path ="/Policy" component={Policy}/>
          <Route path="/About" exact component={About} />
          <Route path="/SignUp" exact component={signUp} /> 
          <Route path="/ForgetPass" exact component={Forgot_pass} />
          <Route path="/Products" exact component={Products}/>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/Products/:id" component={ProductInfo}/>
      </Switch>
          <Footer />
    </div>
  </Router>
  );
}

export default App;
