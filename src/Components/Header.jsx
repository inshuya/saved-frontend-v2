import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'
import logo from '../logo.png'
import { Table } from 'react-bootstrap';
import InitAuth from '../InitAuth';

function Header() {
    return(
        <nav class="navbar navbar-light header">
          <div class="navbar-brand mr-auto saved">
            <Table className="table-borderless" style={{padding:0}}>
                <tbody>
                  <tr>
                    <td style={{padding:0}}>
                      <img src={logo} class="logo"/>
                    </td>
                    <td style={{padding:0}}>
                      SavED
                    </td>
                  </tr>
                </tbody>
            </Table>
          </div>
          <div class="navbar-nav ml-auto">
            <ul class="nav">
              <li class="nav-item username">
              <a class="nav-link username" href="#">Hi Guest!</a>
              </li>
              <span style={{display:'inline-block', width:20}}></span>
              <li class="nav-item">
                {InitAuth.auth && <a class="nav-link logout" href="#"><Link to="/sign-in">Logout</Link></a>}
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default Header;