import React, { useEffect } from 'react';
import NavigationBar from './NavigationBar';
//import './HomePage.css'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Transactions from './Transactions';
import Expense from './Expense';


function HomePage() {
    return (
        <>
        <div class="container" style={{marginLeft:'0px', paddingLeft:'0px', marginRight:'0px', paddingRight:'0px',maxWidth:'100%'}}>
          <div class="row">
            <Router>
            <div class="col-3">
            <NavigationBar />
            </div>
            <div class="col-9" >
            <Switch>
              {/* <Route path='/' exact component={Goals}/>  
              <Route path='/accounts' component={Accounts}/>
              <Route path='/goals' component={Goals}/>
              <Route path='/savings' component={Savings}/> */}
              <Route path='/transactions' render={(props) => <Transactions userid={1}/>}/>
              <Route path='/expense' render={(props) => <Expense userid={1}/>}/>
            </Switch>
            </div>
            </Router>
          </div>
        </div>
        
        </>
    );
}

export { HomePage };