import React from 'react'
import phoneMockUpImgMobile from '../Assets/Phone Mockup (Mobile).png'
import textEditorImg from '../Assets/Text Editor.png'

const Body = () => {
  return (
  <>
    <div className='flex flex-col mx-2 bg-neutral-200 border-1 rounded-lg'>
      <div className='p-5'>
        <h1 className='font-bold text-5xl pb-3'>Secure your money with Escrow</h1>
        <p className='text-lg max-w-lg mb-8'> Spense uses Escrow to secure all payments. We believe Escrow offers the highest level of security for your payments, so you never need to worry about scames.</p>
        <a className="text-gray-700 inline-flex items-center font-semibold tracking-wide underline cursor-pointer"
        href="javascript:;">Learn more about Escrow &#8594;</a>
      </div>
      <div className='flex justify-center'>
        <img src={phoneMockUpImgMobile}></img>
      </div>
    </div>

    <div className='pt-10'>
      <div className='p-5'>
        <h1 className='font-bold text-5xl pb-3'>A text editor like no others.</h1>
        <p className='text-lg max-w-lg mb-8'>Our text editor pulls you into focus mode with it's simplistic design and usability so you can put out your best writtings.</p>
        <a className="text-gray-700 inline-flex items-center font-semibold tracking-wide underline cursor-pointer"
        href="javascript:;">Text Editor Live Demo &#8594;</a>
      </div>
      <div className='flex justify-center'>
        <img src={textEditorImg}></img>
      </div>
    </div>
  </>
  )
}

export default Body