import React from 'react'
import hamburger from '../Assets/Hamburger Menu.svg'


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
      
      <div>
        <p className='font-extrabold'>spense.</p>
      </div>

      <div className='text-black cursor-pointer'>
        <img src={hamburger} alt=''></img>
      </div>

    </nav>

  )
}

export default Navbar