import React from 'react'
import styles from './App.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">Kro-Edit</h1>
        <nav>
          <ul className="header-nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header