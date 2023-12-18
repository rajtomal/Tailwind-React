import React from 'react'
import Figma from '../../assets/figma.svg'
import PhotoShop from '../../assets/photoshop.svg'
import XD from '../../assets/xd.svg'
import HTML from '../../assets/html.svg'
import CSS from '../../assets/css.svg'
import Bootstrap from '../../assets/bootstrap.svg'
import TechnologyImg from '../../assets/technology-img.svg'
import Javascript from '../../assets/javascript.svg'
import ReactImg from '../../assets/react.svg'
import Angular from '../../assets/Angular.svg'
import Jquery from '../../assets/jquery.svg'
import Tailwind from '../../assets/tailwind.svg'
import Git from '../../assets/git.svg'

const Technology = () => {
    return (
        <>
            <section className="dark:bg-none bg-[url('./assets/about-bg.png')] bg-center bg-no-repeat bg-cover">
                <div className='lg:py-[70px] py-[50px] max-w-7xl mx-auto px-2'>
                    <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
                        <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 py-[30px] px-[30px] bg-white border border-[#E2E2E2] dark:bg-[#2d3a4f] dark:border-[#404E68]'>
                            <div className='grid grid-cols-12 md:grid-cols-12 gap-4 '>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#0ACF83]  rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center dark:bg-slate-700'>
                                        <img className='m-auto' src={Figma} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#23344F] pt-3 dark:text-white'>Figma</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#008EFF]  rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center dark:bg-slate-700'>
                                        <img className='m-auto' src={PhotoShop} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#23344F] pt-3 dark:text-white'>PhotoShop</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#FF61F6]  rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center dark:bg-slate-700'>
                                        <img className='m-auto' src={XD} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#23344F] pt-3 dark:text-white'>XD</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#F1662A]  rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center dark:bg-slate-700'>
                                        <img className='m-auto' src={HTML} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#23344F] pt-3 dark:text-white'>HTML</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#1572B6]  rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center dark:bg-slate-700'>
                                        <img className='m-auto' src={CSS} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#23344F] pt-3 dark:text-white'>CSS</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#7E13F8]  rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center dark:bg-slate-700'>
                                        <img className='m-auto' src={Bootstrap} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#23344F] pt-3 dark:text-white'>Bootstrap</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:col-span-4 bg-white border border-[#E2E2E2] h-full rounded-[10px] mx-3 md:m-0 p-4 dark:bg-[#2d3a4f] dark:border-[#404E68]'>
                            <div className=''>
                                    <div className='bg-[#F7F9FC] rounded-[10px] p-3 dark:bg-slate-800/50'>
                                        <img className='m-auto' src={TechnologyImg} alt="Technology" />
                                    </div>
                                    <h2 className='dark:text-white text-[#222831] text-center text-[24px] uppercase tracking-wide font-bold pt-3'>Design & Development Technology</h2>
                                
                            </div>
                        </div>
                        <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 py-[30px] px-[30px] bg-white border border-[#E2E2E2] dark:bg-[#2d3a4f] dark:border-[#404E68]'>
                            <div className='grid grid-cols-12 md:grid-cols-12 gap-4 '>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#DCBF26]  rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center dark:bg-slate-700'>
                                        <img className='m-auto' src={Javascript} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#23344F] pt-3 dark:text-white'>JavaScript</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#61DAFB]  rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center dark:bg-slate-700'>
                                        <img className='m-auto' src={ReactImg} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#23344F] pt-3 dark:text-white'>React</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#E23237]  rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center dark:bg-slate-700'>
                                        <img className='m-auto' src={Angular} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#23344F] pt-3 dark:text-white'>Angular</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#FF2600]  rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center dark:bg-slate-700'>
                                        <img className='m-auto' src={Jquery} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#23344F] pt-3 dark:text-white'>jQuery</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#38BDF8]  rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center dark:bg-slate-700'>
                                        <img className='m-auto' src={Tailwind} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#23344F] pt-3 dark:text-white'>Tailwind</h2>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6 bg-gradient-to-b from-[#60ECFF]  rounded-[10px]'>
                                    <div className='bg-white m-[2px] rounded-[10px] p-[15px] text-center dark:bg-slate-700'>
                                        <img className='m-auto' src={Git} alt="figma" />
                                        <h2 className='text-[14px] font-semibold text-[#23344F] pt-3 dark:text-white'>Git</h2>
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