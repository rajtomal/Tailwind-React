import React from 'react'
import { Button } from 'flowbite-react';
// import BannerImg from '../../assets/slider-img.svg'
// import BannerBG from '../../assets/banner-bg.svg'
import BannerBGLight from '../../assets/slider-light.svg'


const BannerHeader = () => {
  return (
    <>
      <div className=" banner-part dark:bg-[url('./assets/banner-bg-light.png')] bg-[url('./assets/banner-bg-light.png')]  bg-center bg-no-repeat bg-cover">
        <div className=" lg:py-[70px] max-w-7xl mx-auto px-2">
          <div className='grid grid-cols-1 md:grid-cols-7 gap-6'>
            <div className=' md:col-span-4 flex items-center'>
              <div >
                <h4 className='dark:text-white text-[#545454] font-semibold text-[24px]  uppercase py-[3px]'>Welcome to my world</h4>
                <h1 className='dark:custom-banner-stroke text-transparent text-[60px] font-black py-[3px] custom-banner-name'>Hi, I am <span className='text-transparent font-black'>Tomal.M </span></h1>
                <div className="banner-right-text  lg:ml-[100px]">
                  <h2 className='dark:text-white text-[#222831] text-[32px] uppercase font-bold py-[3px]'>Creative <span className='text-[#46CC8F]'>UI/UX Designer</span></h2>
                  <p className='dark:text-[#f1f1f1] text-[#808080] text-[16px] font-regular py-[3px] leading-6'>I have been addicted to Advanced Design and Coding. I have hands-on experience efficiently using Photoshop, Illustrator, HTML, CSS, JavaScript, JQuery, and Bootstrap. I'm experienced and qualified in Website Design I always work with the requirements in order to arrive as close as we can to the expectations.</p>
                  <Button className='my-3 bg-[#46CC8F] text-[16px] font-semibold rounded-[5px]'>
                    <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path d="M2.59164 9.84231C2.59164 11.7256 3.16664 13.3923 4.31664 14.8423C5.46664 16.2923 6.93331 17.234 8.71664 17.6673C8.96664 17.734 9.16665 17.8756 9.31664 18.0923C9.46664 18.309 9.54165 18.5506 9.54165 18.8173C9.54165 19.084 9.44998 19.305 9.26664 19.4803C9.08331 19.6556 8.87498 19.718 8.64164 19.6673C6.30831 19.2006 4.38331 18.055 2.86664 16.2303C1.34998 14.4056 0.591644 12.2763 0.591644 9.84231C0.591644 7.40897 1.35431 5.27997 2.87964 3.45531C4.40498 1.63064 6.33398 0.484641 8.66665 0.0173077C8.89998 -0.0326923 9.10831 0.0299743 9.29165 0.205308C9.47498 0.380641 9.56664 0.601308 9.56664 0.867308C9.56664 1.13397 9.49164 1.37564 9.34164 1.59231C9.19164 1.80897 8.99164 1.95064 8.74164 2.01731C6.94164 2.45064 5.46664 3.39231 4.31664 4.84231C3.16664 6.29231 2.59164 7.95897 2.59164 9.84231ZM11.5416 10.9923L13.3916 9.14231C13.5916 8.94231 13.8333 8.84231 14.1166 8.84231C14.4 8.84231 14.6416 8.94231 14.8416 9.14231C15.0416 9.34231 15.1376 9.58397 15.1296 9.86731C15.1216 10.1506 15.0173 10.3923 14.8166 10.5923L11.2416 14.1673C11.0416 14.3673 10.8083 14.4673 10.5416 14.4673C10.275 14.4673 10.0416 14.3673 9.84164 14.1673L6.21664 10.5173C6.01664 10.3173 5.92064 10.0796 5.92864 9.80431C5.93664 9.52897 6.04098 9.29164 6.24164 9.09231C6.44164 8.89231 6.67931 8.79231 6.95464 8.79231C7.22998 8.79231 7.46731 8.89231 7.66664 9.09231L9.54165 10.9923V5.86731C9.54165 5.58397 9.63764 5.34631 9.82964 5.15431C10.0216 4.96231 10.259 4.86664 10.5416 4.86731C10.825 4.86731 11.0626 4.96331 11.2546 5.15531C11.4466 5.34731 11.5423 5.58464 11.5416 5.86731V10.9923ZM14.5916 16.7423C14.8416 16.5923 15.1126 16.5256 15.4046 16.5423C15.6966 16.559 15.9506 16.6756 16.1666 16.8923C16.3666 17.0923 16.45 17.33 16.4166 17.6053C16.3833 17.8806 16.25 18.093 16.0166 18.2423C15.4833 18.5756 14.925 18.8633 14.3416 19.1053C13.7583 19.3473 13.1583 19.5346 12.5416 19.6673C12.275 19.7173 12.0416 19.659 11.8416 19.4923C11.6416 19.3256 11.5416 19.1006 11.5416 18.8173C11.5416 18.534 11.6293 18.284 11.8046 18.0673C11.98 17.8506 12.209 17.7006 12.4916 17.6173C12.8583 17.5173 13.2166 17.3923 13.5666 17.2423C13.9166 17.0923 14.2583 16.9256 14.5916 16.7423ZM12.5416 2.06731C12.2583 1.98397 12.025 1.83397 11.8416 1.61731C11.6583 1.40064 11.5666 1.15064 11.5666 0.867308C11.5666 0.583974 11.6626 0.358974 11.8546 0.192308C12.0466 0.025641 12.2756 -0.0326923 12.5416 0.0173077C13.175 0.150641 13.7876 0.337974 14.3796 0.579307C14.9716 0.820641 15.534 1.11664 16.0666 1.46731C16.3 1.61731 16.425 1.82564 16.4416 2.09231C16.4583 2.35897 16.375 2.59231 16.1916 2.79231C15.9916 3.00897 15.7456 3.12564 15.4536 3.14231C15.1616 3.15897 14.891 3.09231 14.6416 2.94231C14.3083 2.75897 13.9666 2.59231 13.6166 2.44231C13.2666 2.29231 12.9083 2.16731 12.5416 2.06731ZM18.2916 11.8173C18.375 11.534 18.5293 11.3006 18.7546 11.1173C18.98 10.934 19.234 10.8423 19.5166 10.8423C19.8 10.8423 20.0293 10.9506 20.2046 11.1673C20.38 11.384 20.434 11.6256 20.3666 11.8923C20.2333 12.5256 20.0416 13.1296 19.7916 13.7043C19.5416 14.279 19.2416 14.8333 18.8916 15.3673C18.7416 15.6006 18.5333 15.7173 18.2666 15.7173C18 15.7173 17.775 15.6256 17.5916 15.4423C17.3916 15.2423 17.2793 15.0006 17.2546 14.7173C17.23 14.434 17.2923 14.1673 17.4416 13.9173C17.625 13.584 17.7876 13.2466 17.9296 12.9053C18.0716 12.564 18.1923 12.2013 18.2916 11.8173ZM17.4416 5.74231C17.2916 5.49231 17.229 5.22964 17.2536 4.95431C17.2783 4.67897 17.391 4.44164 17.5916 4.24231C17.775 4.05897 18 3.97131 18.2666 3.97931C18.5333 3.98731 18.7416 4.09997 18.8916 4.31731C19.2583 4.85064 19.5666 5.41331 19.8166 6.00531C20.0666 6.59731 20.2583 7.20964 20.3916 7.84231C20.4416 8.10897 20.3793 8.34231 20.2046 8.54231C20.03 8.74231 19.8006 8.84231 19.5166 8.84231C19.2333 8.84231 18.9793 8.74664 18.7546 8.55531C18.53 8.36397 18.3756 8.12631 18.2916 7.84231C18.1916 7.47564 18.0706 7.11731 17.9286 6.76731C17.7866 6.41731 17.6243 6.07564 17.4416 5.74231Z" fill="white" />
                    </svg>
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
            <div className='md:col-span-3'>
              <img className='m-auto rounded-2xl' src={BannerBGLight} alt="banner-bg" />
            </div>
          </div>
        </div >
      </div>
    </>
  )
}

export default BannerHeader