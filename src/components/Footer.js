// import React, { Component, Fragment } from 'react';
import React from 'react';
const currentYear = () => {
  return new Date().getFullYear();
};
export default function Footer() {
  return (
    <footer id='site-footer'>
      <p>Copyright {currentYear()}.</p>
    </footer>
  );
}
