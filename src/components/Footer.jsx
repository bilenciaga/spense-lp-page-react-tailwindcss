import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-2 gap-2 bg-black px-10 py-10'>
      <div className='col-span-2 mb-3'>
        <h1 className='font-extrabold text-lg text-white'>spense.</h1>
        <p className='text-neutral-500'>Spense is an open platform for individuals to share their unfilterd thoughts. Discuss the topics you love, and get paid doing just that.</p>
      </div>
      <div className='mb-3'>
        <h1 className='text-white font-bold'>Company</h1>
        <li className='text-neutral-500 list-none'>About</li>
        <li className='text-neutral-500 list-none'>Customer</li>
        <li className='text-neutral-500 list-none'>Blog</li>
      </div>
      <div className='mb-3'>
        <h1 className='text-white font-bold'>Opportunities</h1>
        <li className='text-neutral-500 list-none'>Jobs</li>
      </div>
      <div className='mb-3'>
        <h1 className='text-white font-bold'>Sitemap</h1>
        <li className='text-neutral-500 list-none'>Homepage</li>
      </div>
      <div className='mb-3'>
        <h1 className='text-white font-bold'>Resources</h1>
        <li className='text-neutral-500 list-none'>Support</li>
        <li className='text-neutral-500 list-none'>Contact</li>
        <li className='text-neutral-500 list-none'>FAQ</li>
      </div>

    </div>
  )
}

export default Footer