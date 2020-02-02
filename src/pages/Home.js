import React from 'react';
import Hero from '../components/Hero';
import Register from '../components/Register';
import Login from '../components/Login';

export default function Home() {
  return (
    <div id='content' className='content'>
      <main>
        <Hero />
        <h1>Instructions</h1>
        <p>Register/login to view your profile.</p>
        <Register />
        {/* <Login /> */}
        <form action='/logout?_method=DELETE' method='POST'>
          <button type='submit'>Log Out</button>
        </form>
      </main>
    </div>
  );
}
