import dribbble from '../Assets/Dribbble Logo.png'
import facebook from '../Assets/Facebook Logo.png'
import google from '../Assets/Google Logo.png'
import pinterest from '../Assets/Pinterest Logo.png'
import reddit from '../Assets/Reddit Logo.png'
import slack from '../Assets/Slack Logo.png'
import twitter from '../Assets/Twitter Logo.png'
import youtube from '../Assets/Youtube Logo.png'

import './LogoCarousel.css'


import React from 'react'

const LogoCarousel = () => {

  const logoList = [dribbble, facebook, google, pinterest, reddit, slack, twitter, youtube]


  return (
  <div className='overflow-x-hidden py-12 bg-white'>
    <div className='relative translate-x-1/2'>
      <div className='spense-logos'>
        {logoList.map((logo) => (
          <img src={logo} alt='' className='h-[50px]'></img>
        ))}
      </div>
    </div>
  </div>
  )
}

export default LogoCarousel