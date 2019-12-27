import React from 'react';

export default function About() {
  return (
    <div id='content' className='content'>
      <main>
        <h1>About</h1>
        <p>I&apos;ve made this app to expedite setting up new React apps.</p>

        <p>
          Think I&apos;ve overlooked something? open up an{' '}
          <a href='https://github.com/lifeanddoodles/react-boilerplate/issues'>
            issue
          </a>{' '}
          in Github.
        </p>
      </main>
    </div>
  );
}
