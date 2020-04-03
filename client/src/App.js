import React,{useState} from "react";
import Home from "./containers/Home";
import "./App.css";
import Header from "./components/General/Header";
import Nav from "./components/General/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./fonts/Fondamento-Regular.ttf";
import About from "./containers/About";
import Footer from "./components/General/Footer";
import Policy from "./containers/Policy";

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
          <Route path ="/Policy" component={Policy}/>
          <Route path="/About" component={About} />
      </Switch>
          <Footer />
    </div>
  </Router>
  );
}

export default App;
