import React from 'react';
import Home from './containers/Home';
import './App.css';
import Header from './components/Home/Header';
import Nav from './components/Home/Nav';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
  <Router>
    <div className="App">
      <Header/>
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
