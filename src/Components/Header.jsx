import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

function Header() {
    return(
        <nav class="navbar navbar-light header">
          <div class="navbar-brand mr-auto">SavED</div>
          <div class="navbar-nav ml-auto">
            <ul class="nav">
              <li class="nav-item">
                Hi Guest
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><Link to="/sign-in" style={{fontSize:'12px'}}>Logout</Link></a>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default Header;