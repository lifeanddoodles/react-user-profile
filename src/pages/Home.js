import React from 'react';

export default function Home() {
  return (
    <div id='content' className='content'>
      <main>
        <h1>Welcome to React</h1>
        <p>
          You are in <i>{process.env.NODE_ENV}</i> mode.
        </p>
        <p>
          Your 'Secret Code' for this environment would be:{' '}
          <i>{process.env.REACT_APP_SECRET_CODE}</i>. You can change it in the{' '}
          <code>.env.{process.env.NODE_ENV}</code> file.
        </p>
        <button className='button--primary'>Click me!</button>
      </main>
    </div>
  );
}
