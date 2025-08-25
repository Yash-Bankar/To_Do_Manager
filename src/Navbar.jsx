import React, { Component } from 'react'
import './Navbar.css'
import logoSvg from './assets/logo.svg';

function Navbar({ logo }) {
  return (
    <nav>
      <div className='nav'>
        <h1 className='font-bold text-3xl text-green-500'>
          <img src={logoSvg} alt="Logo" className="inline w-8 h-8 mr-2 align-middle" /> {logo}
        </h1>
        <div className="nav-links text-green-500">
          <a className='nav-link' href="">Home</a>
          <a className='nav-link' href="">Your Task</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar