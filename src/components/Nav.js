import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_Nav.scss';

export default function Nav() {
  return (
    <Fragment>
      <button
        id='btn_nav'
        className='menu-toggle button btn_nav button--primary'
        aria-controls='primary-menu'
        aria-expanded='false'
      >
        Menu
      </button>
      <nav
        aria-labelledby='mainmenulabel'
        id='site-navigation'
        className='main-navigation'
      >
        <ul
          id='menubar'
          className='menu nav-menu'
          aria-expanded='false'
          role='menubar'
        >
          <li className='menu-item' role='none'>
            <Link role='menuitem' aria-haspopup='false' to='/'>
              Home
            </Link>
          </li>
          <li className='menu-item' role='none'>
            <Link
              role='menuitem'
              aria-haspopup='false'
              to='/user-profile'
              aria-current='page'
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
