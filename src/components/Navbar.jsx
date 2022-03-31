import React from 'react'
import hamburger from '../Assets/Hamburger Menu.svg'


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-neutral-200 px-2 pt-5'>
      
      <div>
        <p className='font-extrabold text-lg'>spense.</p>
      </div>

      <div className='text-black cursor-pointer'>
        <img src={hamburger} alt=''></img>
      </div>

    </nav>

  )
}

export default Navbar