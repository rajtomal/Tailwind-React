import React from 'react'
import Figma from '../../assets/figma.svg'
import PhotoShop from '../../assets/photoshop.svg'
import XD from '../../assets/xd.svg'
import HTML from '../../assets/html.svg'
import CSS from '../../assets/css.svg'
import Bootstrap from '../../assets/bootstrap.svg'
import TechnologyImg from '../../assets/technology-img.svg'

const Technology = () => {
    return (
        <>
            <section className="bg-[url('./assets/about-bg.png')] bg-center bg-no-repeat bg-cover">
                <div className='lg:py-[70px] py-[50px] max-w-7xl mx-auto px-2'>
                    <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
                        <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 py-[30px] px-[30px] bg-white border border-[#E2E2E2]'>
                            <div className='grid grid-cols-12 md:grid-cols-12 gap-4 '>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#0ACF83] shadow-lg rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center'>
                                        <img className='m-auto' src={Figma} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#222831] pt-3'>Figma</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#001E36] shadow-lg rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center'>
                                        <img className='m-auto' src={PhotoShop} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#222831] pt-3'>PhotoShop</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#FF61F6] shadow-lg rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center'>
                                        <img className='m-auto' src={XD} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#222831] pt-3'>XD</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#F1662A] shadow-lg rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center'>
                                        <img className='m-auto' src={HTML} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#222831] pt-3'>HTML</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#1572B6] shadow-lg rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center'>
                                        <img className='m-auto' src={CSS} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#222831] pt-3'>CSS</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#7E13F8] shadow-lg rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center '>
                                        <img className='m-auto' src={Bootstrap} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#222831] pt-3'>Bootstrap</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:col-span-4 bg-white border border-[#E2E2E2] h-full rounded-[10px] mx-3 md:m-0 p-4'>
                            <div className=''>
                                    <div className='bg-[#F7F9FC] rounded-[10px] p-3'>
                                        <img className='m-auto' src={TechnologyImg} alt="Technology" />
                                    </div>
                                    <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-[#29B6DD] to-[#005269] text-center text-[24px] uppercase tracking-wide font-bold pt-3'>Design & Development Technology</h2>
                                
                            </div>
                        </div>
                        <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 py-[30px] px-[30px] bg-white border border-[#E2E2E2]'>
                            <div className='grid grid-cols-12 md:grid-cols-12 gap-4 '>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#0ACF83] shadow-lg rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center'>
                                        <img className='m-auto' src={Figma} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#222831] pt-3'>Figma</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#001E36] shadow-lg rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center'>
                                        <img className='m-auto' src={PhotoShop} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#222831] pt-3'>PhotoShop</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#FF61F6] shadow-lg rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center'>
                                        <img className='m-auto' src={XD} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#222831] pt-3'>XD</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#F1662A] shadow-lg rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center'>
                                        <img className='m-auto' src={HTML} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#222831] pt-3'>HTML</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#1572B6] shadow-lg rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center'>
                                        <img className='m-auto' src={CSS} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#222831] pt-3'>CSS</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#7E13F8] shadow-lg rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center'>
                                        <img className='m-auto' src={Bootstrap} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#222831] pt-3'>Bootstrap</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Technology