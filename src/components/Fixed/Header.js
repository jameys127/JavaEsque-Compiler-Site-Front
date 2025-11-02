import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
  return (
    <nav className='header-container'>
        <div className='header'>
            <ul className='list'>
                <li className='list-item'>
                    <Link to='/' className={location.pathname === '/' ? 'list-link-active' : 'list-link'}>
                        Compiler
                    </Link>
                </li>
                <li className='list-item'>
                    <Link to='/docs' className={location.pathname === '/docs' ? 'list-link-active' : 'list-link'}>
                        Docs
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header
