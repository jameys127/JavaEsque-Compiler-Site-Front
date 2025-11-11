import React from 'react'
import './Footer.css';

const Footer = () => {
  // const currentYear = new Date.getFullYear();
  return (
    <footer className='flex grow w-full h-full'>
      <div className='flex justify-center items-end w-full pb-1'>
        <p>© Copyright {new Date().getFullYear()} Jeremiah Sheehy. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
