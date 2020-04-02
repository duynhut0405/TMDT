import React from "react";
import Home from "./containers/Home";
import "./App.css";
import Header from "./components/General/Header";
import Nav from "./components/General/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./fonts/Fondamento-Regular.ttf";
import About from "./containers/About";
import Footer from "./components/General/Footer";
function App() {
  const [stateSignUp, setstateSignUp] = useState(false);
  function toggleSignUp(params) {
    setstateSignUp(params);
  }
  return (
    <Router>
      <div className="App">
        <Header handleEventClickOnButton={toggleSignUp} />
        <Nav />
        <Switch>
          <Route path="/" exact
            render={props => (
              <Home
                ClickSignUp={stateSignUp}
                style={{ position: "relative" }}
              ></Home>
            )}
          />
          <Route path="/About" component={About} />
      </Switch>
          <Footer />
    </div>
  </Router>
  );
}

export default App;
