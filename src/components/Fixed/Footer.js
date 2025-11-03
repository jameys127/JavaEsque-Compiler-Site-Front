import React from 'react'
import './Footer.css';

const Footer = () => {
  // const currentYear = new Date.getFullYear();
  return (
    <footer className='fixed bottom-0 text-center w-full'>
      <p>© Copyright {new Date().getFullYear()} Jeremiah Sheehy. All rights reserved</p>
    </footer>
  )
}

export default Footer
