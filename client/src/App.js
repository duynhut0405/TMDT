import React,{useState} from "react";
import Home from "./containers/Home";
import "./App.css";
import Header from "./components/General/Header";
import Nav from "./components/General/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./fonts/Fondamento-Regular.ttf";
import About from "./containers/About";
import footer from "./components/General/footer";
import signUp from "./containers/signUp";
import Footer from "./components/General/Footer";
function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
        <Route path="/" exact
            render={props => (
              <Home/>
            )}
          />
          />
          <Route path="/About" exact component={About} />
          <Route path="/signUp" exact component={signUp} /> 
      </Switch>
          <footer />
    </div>
  </Router>
  );
}

export default App;
