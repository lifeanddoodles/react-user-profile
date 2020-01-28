import React from 'react';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div id='content' className='content'>
      <main>
        <Hero />
        <h1>Instructions</h1>
        <p>Register/login to view your profile.</p>
      </main>
    </div>
  );
}
