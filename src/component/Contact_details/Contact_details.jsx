import React from 'react'
import { Icon } from '@iconify/react';

const Contact_details = () => {
    return (
        <>
            <section className="dark:bg-[url('./assets/bg-img/technology-bg-dark.svg')] bg-[url('./assets/bg-img/technology-bg-light.svg')] bg-center bg-no-repeat bg-cover">
                <div className='lg:py-[100px] py-[50px] max-w-7xl mx-auto px-2'>
                    <h2 className='text-[#222831] lg:text-[18px] text-[16px] font-semibold dark:text-white'>One steps to connect</h2>
                    <h1 className='custom-header-stroke text-transparent lg:text-[28px] text-[22px] font-bold uppercase tracking-wider'>Contact Me</h1>
                    <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 mt-5'>
                        <div className='md:col-span-3 rounded-[10px] mx-3 md:m-0 py-[30px] px-[30px] bg-white border border-[#E2E2E2] dark:bg-[#273346] dark:border-[#566279]'>
                            <div className='w-[50px] h-[50px] border border-[#E2E2E2 rounded-[10px] flex items-center justify-center mb-[40px] dark:border-[#566279]'>
                                <Icon className='dark:text-slate-300 text-slate-600' icon="mingcute:location-3-line" width="28" />
                            </div>
                            <div>
                                <h1 className='text-[22px] font-semibold text-[#222831] pb-[5px] dark:text-white'>Location</h1>
                                <p className='text-[16px] dark:text-slate-300 text-slate-600'>Bonani, Dhaka, Bangladesh.</p>
                            </div>
                        </div>
                        <div className='md:col-span-3 rounded-[10px] mx-3 md:m-0 py-[30px] px-[30px] bg-white border border-[#E2E2E2] dark:bg-[#273346] dark:border-[#566279]'>
                            <div className='w-[50px] h-[50px] border border-[#E2E2E2 rounded-[10px] flex items-center justify-center mb-[40px] dark:border-[#566279]'>
                                <Icon className='dark:text-slate-300 text-slate-600' icon="ion:mail-outline" width="28" />
                            </div>
                            <div>
                                <h1 className='text-[22px] font-semibold text-[#222831] pb-[5px] dark:text-white'>Mail</h1>
                                <p className='text-[16px] dark:text-slate-300 text-slate-600'>sj.tomalahmedraj@gmail.com</p>
                                <a className='underline font-regular mt-3 inline-block text-[#46CC8F]' href="mailto:sj.tomalahmedraj@gmail.com">Send Mail</a>
                            </div>
                        </div>
                        <div className='md:col-span-3 rounded-[10px] mx-3 md:m-0 py-[30px] px-[30px] bg-white border border-[#E2E2E2] dark:bg-[#273346] dark:border-[#566279]'>
                            <div className='w-[50px] h-[50px] border border-[#E2E2E2 rounded-[10px] flex items-center justify-center mb-[40px] dark:border-[#566279]'>
                                <Icon className='dark:text-slate-300 text-slate-600' icon="ic:outline-whatsapp" width="28" />
                            </div>
                            <div>
                                <h1 className='text-[22px] font-semibold text-[#222831] pb-[5px] dark:text-white'>WhatsApp</h1>
                                <p className='text-[16px] dark:text-slate-300 text-slate-600'>+880 1737-746673</p>
                                <a className='underline font-regular mt-3 inline-block text-[#46CC8F]' href="https://wa.me/8801737746673" target='_blank'>Send Message</a>
                            </div>
                        </div>
                        <div className='md:col-span-3 rounded-[10px] mx-3 md:m-0 py-[30px] px-[30px] bg-white border border-[#E2E2E2] dark:bg-[#273346] dark:border-[#566279]'>
                            <div className='w-[50px] h-[50px] border border-[#E2E2E2] rounded-[10px] flex items-center justify-center mb-[40px] dark:border-[#566279]'>
                                <Icon className='dark:text-slate-300 text-slate-600' icon="basil:linkedin-outline" width="28" />
                            </div>
                            <div>
                                <h1 className='text-[22px] font-semibold text-[#222831] pb-[5px] dark:text-white'>Linkedin</h1>
                                <p className='text-[16px] dark:text-slate-300 text-slate-600'>Tomal .M</p>
                                <a className='underline font-regular mt-3 inline-block text-[#46CC8F]' href="https://www.linkedin.com/in/tomal-m-6a5076232" target='_blank'>Open Linkedin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact_details
