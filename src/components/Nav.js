import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/_Nav.scss';

export default function Nav() {
  return (
    <nav id='site-navigation' className='main-navigation'>
      <button
        id='btn_nav'
        className='menu-toggle btn btn_nav btn-primary'
        aria-controls='primary-menu'
        aria-expanded='false'
      >
        Menu
      </button>
      <ul
        id='primary-menu'
        className='menu nav-menu'
        aria-expanded='false'
        role='menubar'
      >
        <li className='menu-item current-menu-item' role='none'>
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
        <li className='menu-item menu-item-has-children'>
          <Link
            role='menuitem'
            aria-haspopup='true'
            aria-expanded='false'
            to='/about'
          >
            Other pages
          </Link>
          <ul className='sub-menu' aria-label='About the Company' role='menu'>
            <li className='menu-item' role='none'>
              <Link role='menuitem' aria-haspopup='false' to='/notfound'>
                Not found
              </Link>
            </li>
            <li className='menu-item' role='none'>
              <Link role='menuitem' aria-haspopup='false' to='/services'>
                Services
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
  );
}
