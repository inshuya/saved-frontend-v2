import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/login';
import SignUp from './Components/signup';
import { HomePage } from './Components/homepage';
import Header from './Components/Header';
import { Container } from 'react-bootstrap';
import InitAuth from './InitAuth';

function App() {
  InitAuth.auth=false;
  return (
    <Router>

      <Container style={{maxWidth:'100%',marginRight:0,marginLeft:0,paddingLeft:0,paddingRight:0}}>
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
        
      </Container>
    </Router>
  );
}

export default App;
