import React, { Component } from 'react';
import LandingPage from "./LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/SignUp" component={SignUp} /> 
          <Route component={LandingPage}/>
          </Switch>
        </div>
      </Router>
        
    );
  }
}

export default App;
