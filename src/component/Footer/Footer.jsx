import React from 'react'
import Logo from '../../assets/logo.svg'
const Footer = () => {
    return (
        <>
            <section className="bg-[url('./assets/footer-bg.png')] bg-center bg-no-repeat bg-cover">
                <div className='lg:pt-[70px] pt-[50px] max-w-7xl mx-auto px-2'>
                    <div className='flex justify-center items-center'>
                        <div className='flex items-center'>
                            <img className='mr-3 h-[3.25rem]' src={Logo} alt="" />
                            <span className='self-center whitespace-nowrap text-xl font-bold dark:text-white text-[22px]'>Tomal.M</span>
                        </div>
                    </div>
                    <div className='text-center my-5'>
                        <ul className='inline-block '>
                            <li className='inline-block px-3 py-4'><a className='text-[14px] font-semibold text-[#222831] uppercase' href="#">Home</a></li>
                            <li className='inline-block px-3 py-4'><a className='text-[14px] font-semibold text-[#222831] uppercase' href="#">About</a></li>
                            <li className='inline-block px-3 py-4'><a className='text-[14px] font-semibold text-[#222831] uppercase' href="#">Service</a></li>
                            <li className='inline-block px-3 py-4'><a className='text-[14px] font-semibold text-[#222831] uppercase' href="#">Portfolio</a></li>
                            <li className='inline-block px-3 py-4'><a className='text-[14px] font-semibold text-[#222831] uppercase' href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className='flex justify-between py-5  border-t-[1px]  border-[#E2E2E2]'>
                        <div>
                            <p className='text-[14px] font-regular text-[#222831]'>© <span className='text-[#FF014F] font-semibold'>Tomal.M</span> 2023 - Present.</p>
                        </div>
                        <div>
                            <p className='text-[14px] font-regular text-[#222831]'>All right reserved</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer