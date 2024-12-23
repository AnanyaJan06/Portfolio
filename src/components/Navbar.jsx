import React from 'react'
import {FaGithub, FaInstagram, FaLinkedin, FaSquare, FaTwitter} from "react-icons/fa"
import Logo from '../assets/Namelogo.jpg'

function Navbar() {
  return (
      <nav className='flex items-center justify-between  py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home'>
            <img src={Logo} alt="logo" className='mx-2' width={70} height={40}/>
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/ananya-p-712192317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noopener noreferrer" aria-label='LinkedIn'>
        <FaLinkedin />
        </a>
        <a href="https://github.com/AnanyaJan06" rel="noopener noreferrer" aria-label='GitHub'>
        <FaGithub />
        </a>
        <a href="https://www.instagram.com/_ananya_jan/profilecard/?igsh=MWF5MjJkbnF4cjBwNw==" rel="noopener noreferrer" aria-label='Instagram'>
        <FaInstagram />
        </a>
        </div>
      </nav>
  )
}

export default Navbar
