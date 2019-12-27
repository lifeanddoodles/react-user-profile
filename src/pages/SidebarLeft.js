import React from 'react';
import Aside from '../components/Aside';

export default function SidebarLeft() {
  return (
    <div
      id='content'
      className='content content--sidebar content--sidebar-first'
    >
      <main>
        <h1>Sidebar Left</h1>
        <p>This is a sample page with a sidebar to the left.</p>
      </main>
      <Aside />
    </div>
  );
}
