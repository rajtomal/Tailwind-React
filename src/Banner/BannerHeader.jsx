import React from 'react'
import {Button } from 'flowbite-react';


const BannerHeader = () => {
  return (
    <>
      <div className='banner-part container mx-auto px-2 py-2.5 bg-[url("././")]'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className=''>
            <h4>Welcome to my world</h4>
            <h1>Hi, I am  Tomal.M </h1>
            <h2>I'm a UI/UX Designer</h2>
            <p>I am always working on new thinking and trends.
              The client's Happiness is everything to me.</p>
              <button>Download CV</button>
              <Button>Download CV</Button>
          </div>
          <div className=''>09</div>
        </div>
        {/* <img src="https://codesphere.com/img/llama2.webp" alt="" /> */}
      </div >
    </>
  )
}

export default BannerHeader