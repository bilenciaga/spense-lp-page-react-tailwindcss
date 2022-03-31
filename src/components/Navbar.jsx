import React from 'react'
import hamburger from '../Assets/Hamburger Menu.svg'


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-neutral-200 px-2 pt-5 md:px-7'>
      
      <div>
        <p className='font-extrabold text-lg'>spense.</p>
      </div>

      {/* hamburger  */}
      <div className='text-black cursor-pointer md:hidden'>
        <img src={hamburger} alt=''></img>
      </div>

      {/* tablet */}
      <div className='hidden md:flex flex-row justify-center items-center list-none cursor-pointer font-semibold'>
        <li className='mx-3'>Business</li>
        <li className='mx-3'>Pricing</li>
        <li className='mx-3'>Features</li>
        <li className='mx-3'>Login</li>
        <button className='p-4 bg-black border border-gray-500 rounded-md text-white font-extrabold'>Get Started </button>
      </div>

    </nav>

  )
}

export default Navbar