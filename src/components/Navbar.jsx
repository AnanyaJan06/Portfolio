import React from 'react'
import Logo from '../assets/Namelogo.jpg'

function Navbar() {
  return (
    <div>
      <nav className='flex items-center justify-between  py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home'>
            <img src={Logo} alt="logo" className='mx-2' width={50} height={33}/>
            </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
