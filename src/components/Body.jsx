import React from 'react'
import phoneMockUpImgMobile from '../Assets/Phone Mockup (Mobile).png'

const Body = () => {
  return (
    <div className='mx-2 bg-zinc-400 border-1 rounded-lg'>
      <h1>Secure your money with Escrow</h1>
      <p> Spense uses Escrow to secure all payments. We believe Escrow offers the highest level of security for your payments, so you never need to worry about scames.</p>
      <img src={phoneMockUpImgMobile}></img>
    </div>
  )
}

export default Body