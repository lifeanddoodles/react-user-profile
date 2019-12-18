import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='site-header'>
      <h1 className='logo'>
        <Link to='/' rel='home'>
          Logo
        </Link>
      </h1>
      <Nav />
    </header>
  );
}
