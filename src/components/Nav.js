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
              to='/about'
              aria-current='page'
            >
              About
            </Link>
          </li>
          <li className='menu-item menu-item--has-children'>
            <Link
              role='menuitem'
              aria-haspopup='true'
              aria-expanded='false'
              to='/other'
            >
              Other pages
            </Link>
            <ul className='sub-menu' aria-label='About the Company' role='menu'>
              <li className='menu-item' role='none'>
                <Link role='menuitem' aria-haspopup='false' to='/sidebarleft'>
                  Sidebar Left
                </Link>
              </li>
              <li className='menu-item' role='none'>
                <Link role='menuitem' aria-haspopup='false' to='/sidebarright'>
                  Sidebar Right
                </Link>
              </li>
              <li className='menu-item' role='none'>
                <Link role='menuitem' aria-haspopup='false' to='/notfound'>
                  Not found
                </Link>
              </li>
            </ul>
          </li>
          <li className='menu-item' role='none'>
            <Link
              role='menuitem'
              aria-haspopup='false'
              to='/contact'
              aria-current='page'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
