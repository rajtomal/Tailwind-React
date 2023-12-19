import React from 'react';
import UIUX from '../../assets/UIUX.svg';
import Web from '../../assets/webdesign.svg';
import MobileDesign from '../../assets/mobile-design.svg';
import FrontEnd from '../../assets/front-end.svg';

const Services_All = () => {
    return (
        <>
            <section className="about-myself dark:bg-[url('./assets/bg-img/satisfaction-bg-dark.svg')] bg-[url('./assets/bg-img/satisfaction-bg-light.svg')] bg-center bg-no-repeat bg-cover">
                <div className=" lg:py-[70px] py-[50px] max-w-7xl mx-auto px-2">
                    <h2 className='text-[#222831] text-[18px] font-semibold text-center dark:text-white'>Explore Services</h2>
                    <h1 className='custom-header-stroke text-transparent text-[28px] text-center font-bold uppercase tracking-wider'>provide services</h1>
                    <div className='grid grid-cols-1 md:grid-cols-12 text-[#222831] gap-6 mt-5'>
                        <div className="md:col-span-3 px-3 py-3 bg-white border border-[#E2E2E2] rounded-[10px] dark:bg-slate-700 dark:border-[#697586]">
                            <div className='bg-[#F7F9FC] rounded-[10px] p-3 dark:bg-slate-800/50'>
                                <div className="flex justify-center items-center m-auto ">
                                    <img className='w-full' src={UIUX} alt="" />
                                </div>
                            </div>
                            <div className='text-center'>
                                <h2 className='text-[#222831] dark:text-white text-[18px] font-semibold uppercase tracking-wider mt-4 mb-2'>UI/UX Design</h2>
                                <p className='text-[14px] font-regular leading-6 text-[#808080] dark:text-slate-400 px-1'>UX Design refers to the term User Experience Design, while
                                    UI Design stands for User Interface Design. Both elements
                                    are crucial to a product and work closely together.
                                </p>
                            </div>
                        </div>
                        <div className="md:col-span-3 px-3 py-3 bg-white border border-[#E2E2E2] rounded-[10px] dark:bg-slate-700 dark:border-[#697586]">
                            <div className='bg-[#F7F9FC] rounded-[10px] p-3 dark:bg-slate-800/50'>
                                <div className="flex justify-center items-center m-auto">
                                    <img className='w-full' src={Web} alt="" />
                                </div>
                            </div>
                            <div className='text-center'>
                                <h2 className='text-[#222831] dark:text-white text-[18px] font-semibold uppercase tracking-wider mt-4 mb-2'>Web Design</h2>
                                <p className='text-[14px] font-regular leading-6 text-[#808080] dark:text-slate-400 px-1'>Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include UI & UX design.
                                </p>
                            </div>
                        </div>
                        <div className="md:col-span-3 px-3 py-3 bg-white border border-[#E2E2E2] rounded-[10px] dark:bg-slate-700 dark:border-[#697586]">
                            <div className='bg-[#F7F9FC] rounded-[10px] p-3 dark:bg-slate-800/50'>
                                <div className="flex justify-center items-center m-auto">
                                    <img className='w-full' src={MobileDesign} alt="" />
                                </div>
                            </div>
                            <div className='text-center'>
                                <h2 className='text-[#222831] dark:text-white text-[18px] font-semibold uppercase tracking-wider mt-4 mb-2'>Mobile Screen Design</h2>
                                <p className='text-[14px] font-regular leading-6 text-[#808080] dark:text-slate-400 px-1'>A mobile user interface (mobile UI) is the graphical and usually touch-sensitive display, such as a smartphone or tablet, that allows the user features, content and functions.
                                </p>
                            </div>
                        </div>
                        <div className="md:col-span-3 px-3 py-3 bg-white border border-[#E2E2E2] rounded-[10px] dark:bg-slate-700 dark:border-[#697586]">
                            <div className='bg-[#F7F9FC] rounded-[10px] p-3 dark:bg-slate-800/50'>
                                <div className="flex justify-center items-center m-auto">
                                    <img className='w-full' src={FrontEnd} alt="" />
                                </div>
                            </div>
                            <div className='text-center'>
                                <h2 className='text-[#222831] dark:text-white text-[18px] font-semibold uppercase tracking-wider mt-4 mb-2'>Front End Development</h2>
                                <p className='text-[14px] font-regular leading-6 text-[#808080] dark:text-slate-400 px-1'>Frontend web development is the producing HTML, CSS, Tailwind Css, Bootstrap, JavaScript, React, Angular for a Web Application so user can see and interact with them directly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services_All