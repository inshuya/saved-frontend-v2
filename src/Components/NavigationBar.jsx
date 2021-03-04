import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {NavbarData} from './NavigationBarData';
import './Navbar.css';
import {IconContext} from 'react-icons';

function NavigationBar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
      <>
      <IconContext.Provider value={{color: 'black'}}>
      <nav className={'nav-menu active'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className={item.cName} >
                <NavLink to={item.path} activeClassName="activeNav">
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
      </>
    );
  }


export default NavigationBar; 