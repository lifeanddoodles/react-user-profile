import React, { useState } from 'react';
import Hero from '../components/Hero';
import Register from '../components/Register';
import Login from '../components/Login';

export default function Home() {
  const [hasRegistered, setRegistered] = useState(false);
  const toggleHasRegistered = () => setRegistered(!hasRegistered);
  return (
    <div id='content' className='content home'>
      <main>
        <Hero />
        {hasRegistered ? <Login /> : <Register />}
        {hasRegistered ? (
          <p>
            Don't have an account?{' '}
            <button
              onClick={toggleHasRegistered}
              className='button button--link'
            >
              Register
            </button>
          </p>
        ) : (
          <p>
            Have an account?{' '}
            <button
              onClick={toggleHasRegistered}
              className='button button--link'
            >
              Log in
            </button>
          </p>
        )}
        {/* <form action='/logout?_method=DELETE' method='POST'>
          <button type='submit'>Log Out</button>
        </form> */}
      </main>
    </div>
  );
}
