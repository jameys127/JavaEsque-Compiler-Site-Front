import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='header-container'>
        <div className='header'>
            <ul className='list'>
                <li className='list-item'>
                    <Link to='/' className='list-link'>
                        Compiler
                    </Link>
                </li>
                <li className='list-item'>
                    <Link to='/docs' className='list-link'>
                        Docs
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header
