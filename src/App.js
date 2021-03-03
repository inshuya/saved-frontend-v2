import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Components/login';
import SignUp from './Components/signup';
import { HomePage } from './Components/homepage';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/home" component={HomePage} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
