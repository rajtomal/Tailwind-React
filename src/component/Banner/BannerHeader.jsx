import React from 'react'
import { Button } from 'flowbite-react';
import BannerImg from '../../assets/slider-img.svg'
import BannerBG from '../../assets/banner-bg.svg'
import BannerBGLight from '../../assets/slider-light.svg'


const BannerHeader = () => {
  return (
    <>
      <div className="dark:bg-[url('./assets/banner-bg-light.png')] bg-[url('./assets/banner-bg-light.png')]  bg-center bg-no-repeat bg-cover">
        <div className="banner-part container mx-auto px-2 lg:py-[70px] py-3 ">
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex items-center'>
              <div>
                <h4 className='dark:text-white text-[22px] uppercase py-[3px]'>Welcome to my world</h4>
                <h1 className='dark:text-white text-[32px] font-bold py-[3px]'>Hi, I am <span className='text-[#FF014F]'>Tomal.M </span></h1>
                <h2 className='dark:text-white text-[32px] font-semibold py-[3px]'>I'm a <span className='text-[#46C5E8]'>UI/UX Designer</span></h2>
                <p className='dark:text-[#f1f1f1] text-[#515151] text-[16px] font-regular py-[3px]'>I am always working on new thinking and trends. <br />
                  The client's Happiness is everything to me.</p>
                <Button className='my-3'>Download CV</Button>
              </div>
            </div>
            <div className=''>
              <img className='m-auto rounded-2xl' src={BannerBGLight} alt="" />
            </div>
          </div>
          <img src="" alt="" />
        </div >
      </div>
    </>
  )
}

export default BannerHeader