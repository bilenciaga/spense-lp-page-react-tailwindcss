import React from 'react'
import heroImgMobile from '../Assets/Hero Image (Mobile).png'
import heroImgTablet from '../Assets/Hero Image (Tablet).png'
import checkMark from '../Assets/Checkmark.svg'
const Header = () => {

  const liText= [
    {
      text:'Receive 99% off the earnings.'
    },
    {
      text:'Get paid via Debit Card, ACH, or PayPal'
    },
    {
      text:'Withdraw your earnings anytime.'
    }
  ]

  return (
    <div className='flex flex-col bg-neutral-200 px-3 pb-5 md:px-7'>
      <div className='my-10'>
        <img className='md:hidden' src={heroImgMobile} alt=''></img>
        <img className='' src={heroImgTablet} alt=''></img>
      </div>
      <h1 className='text-4xl font-bold leading-snug'>Share your unfiltered thoughts. Get paid.</h1>
      <p className='my-5 font-2xl text-neutral-500'>Spense is a open platform for individuals to share their unfiltered thoughts. Discuss the topics you love, and get paid for doing just that.</p>
      <div className='mb-5'>
      {liText.map((li,index) =>(
        <li className='flex flex-row list-none mb-3 font-bold text-neutral-500'>
          <img src={checkMark} className='mr-3' alt=''></img>
          {li.text}
        </li>
      ))}
      </div>
			
			<div className='flex flex-row justify-between items-center md:items-start mx-auto md:ml-2'>
				<input className='p-4 border border-gray-300 mr-5' placeholder='john@example.com'></input>
        <button className='p-4 bg-black border border-gray-500 rounded-md text-white font-extrabold'>Get Started </button>
			</div>
        
    </div>
  )
}

export default Header