import React, { useEffect } from 'react';
import NavigationBar from './NavigationBar';
import './HomePage.css'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Transactions from './Transactions';
import Expense from './Expense';
import Accounts from './Accounts'
import Goals from './Goals';
import Savings from './Savings'
import InitAuth from '../InitAuth';

class HomePage extends React.Component
{

render() {
  InitAuth.auth = true;
  return (
    <>
    <div class="container" style={{marginLeft:'0px', paddingLeft:'0px', marginRight:'0px', paddingRight:'0px',maxWidth:'100%'}}>
      <div class="row">
        <div class="col-2">
        <NavigationBar />
        </div>
        <div class="col-10" style={{paddingLeft:0}}>
          <Route path={this.props.match.path} exact render={(props) => <Expense userid={1}/>}/>  
          <Route path={`${this.props.match.path}/accounts`} component={Accounts}/>
          <Route path={`${this.props.match.path}/goals`} component={Goals}/>
          <Route path={`${this.props.match.path}/savings`} component={Savings}/>
          <Route path={`${this.props.match.path}/transactions`} render={(props) => <Transactions userid={1}/>}/>
          <Route path={`${this.props.match.path}/expense`} render={(props) => <Expense userid={1}/>}/>
        </div>
      </div>
    </div>
    
    </>
);
}
}

export { HomePage };