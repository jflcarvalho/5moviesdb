import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../config/router';

import '../styles/Header.css';

const Header = () => {
  return (
    <header className="shadow">
      <div className="container">
        <nav>
          <div className='logo'>5 Movies db</div>
          <div className='nav-item'>
            <div className='nav-links'>
              {routes.map((route) => {
                if (route.isHeaderElement) {
                  return (
                    <li key={route.title}>
                      <Link to={route.path} className='link'>
                        {route.title}
                      </Link>
                    </li>
                  );
                } else return undefined;
              })}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;