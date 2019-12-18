import React from 'react';
const currentYear = () => {
  return new Date().getFullYear();
};
export default function Footer() {
  return (
    <footer className='site-footer'>
      <p className='copyright'>Copyright {currentYear()}.</p>
    </footer>
  );
}
