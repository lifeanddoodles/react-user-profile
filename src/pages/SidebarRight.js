import React from 'react';
import Aside from '../components/Aside';

export default function SidebarRight() {
  return (
    <div
      id='content'
      className='content content--sidebar content--sidebar-last'
    >
      <main>
        <h1>Sidebar Right</h1>
        <p>This is a sample page with a sidebar to the right.</p>
      </main>
      <Aside />
    </div>
  );
}
