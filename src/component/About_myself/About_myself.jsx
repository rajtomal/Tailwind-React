import React from 'react'
import CountUp from 'react-countup';
import { Icon } from '@iconify/react';

const About_myself = () => {
    return (
        <>
            <section className="about-myself dark:bg-[url('./assets/bg-img/about-bg-dark.svg')] bg-[url('./assets/bg-img/about-bg-light.svg')] bg-center bg-no-repeat bg-cover">
                <div className=" lg:py-[70px] py-[50px] max-w-7xl mx-auto px-2">
                    <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
                        <div className="md:col-span-4 flex flex-col justify-center">
                            <div className="experience-part  relative ">
                                <div className='w-[80%] bg-white shadow-lg rounded-[10px] h-full dark:bg-[#2d3a4f]'>
                                    <div className='lg:py-[70px] lg:pb-[130px] py-[120px]'>
                                        <h1 className='text-[96px] font-black text-[#FF014F] text-center uppercase'>02+</h1>
                                        <h4 className='text-[16px] font-semibold text-[#222831] text-center dark:text-white'>Years Of Experience</h4>
                                    </div>
                                    <div className="overlay-experience w-[50%] absolute bottom-[20px] right-[0]">
                                        <div className="flex items-center justify-between  rounded-[10px] py-[10px] px-[15px] bg-gradient-to-r from-[#46C5E8]/50 dark:bg-gradient-to-l from-[#46C5E8]/50 border border-[#46C5E8] ">
                                            <h3 className='text-[20px] font-semibold text-[#222831] mr-[15px] dark:text-white'><CountUp delay={2} end={100} />%</h3>
                                            <p className='text-[16px] font-medium text-[#222831] dark:text-white'>Clients Satisfections</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-8">
                            <div className="myself-text">
                                <h4 className='text-[#222831] text-[18px] font-semibold dark:text-white'>About Myself</h4>
                                <h2 className='custom-header-stroke text-transparent text-[28px] font-bold uppercase tracking-wider'>My Eyes to do</h2>
                                <p className='dark:text-slate-400 text-[#808080] text-[16px] font-regular tracking-wide leading-6'>An Addicted, Specialized, and Qualified to build UI/UX design for website and mobile applications
                                    (Dealing with the front end part). I always work with the need to understand the benefits of the users,
                                    give them something new to enjoy, and come close to new expectations in advance.</p>
                            </div>
                            <div className="category-part mt-7">
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                                    <div className="flex justify-between gap-5">
                                        <div className="flex justify-center items-center bg-[url('./assets/myself-icon-bg.svg')]  bg-center bg-no-repeat bg-cover w-[180px] h-[45px]">
                                            <Icon className='text-[#27865c]' icon="icon-park-outline:setting-computer" width="28" />
                                        </div>
                                        <div>
                                            <h2 className='dark:text-white text-[#222831] text-[16px] font-semibold py-[8px]'>UI/UX Design</h2>
                                            <p className='dark:text-slate-400 text-[#808080] text-[14px] font-regular tracking-wide leading-6'>UX Design refers to the term User Experience Design, while
                                                UI Design stands for User Interface Design. Both elements
                                                are crucial to a product and work closely together.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between gap-5">
                                        <div className="flex justify-center items-center bg-[url('./assets/myself-icon-bg.svg')]  bg-center bg-no-repeat bg-cover w-[180px] h-[45px]">
                                            <Icon className='text-[#27865c]' icon="fluent:phone-laptop-24-regular" width="34" />
                                        </div>
                                        <div>
                                            <h2 className='dark:text-white text-[#222831] text-[16px] font-semibold py-[8px]'>Web Design</h2>
                                            <p className='dark:text-slate-400 text-[#808080] text-[14px] font-regular tracking-wide leading-6'>Web design encompasses many different skills and disciplines
                                                in the production and maintenance of websites. The different
                                                areas of web design include UI & UX design.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between gap-5">
                                        <div className="flex justify-center items-center bg-[url('./assets/myself-icon-bg.svg')]  bg-center bg-no-repeat bg-cover w-[180px] h-[45px]">
                                            <Icon className='text-[#27865c]' icon="fluent:phone-span-in-16-regular" width="32" />
                                        </div>
                                        <div>
                                            <h2 className='dark:text-white text-[#222831] text-[16px] font-semibold py-[8px]'>Mobile Screen Design</h2>
                                            <p className='dark:text-slate-400 text-[#808080] text-[14px] font-regular tracking-wide leading-6'>A mobile user interface (mobile UI) is the graphical and usually
                                                touch-sensitive display, such as a smartphone or tablet, that
                                                allows the user features, content and functions.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between gap-5">
                                        <div className="flex justify-center items-center bg-[url('./assets/myself-icon-bg.svg')]  bg-center bg-no-repeat bg-cover w-[180px] h-[45px]">
                                            <Icon className='text-[#27865c]' icon="iconoir:laptop-dev-mode" width="26" />
                                        </div>
                                        <div>
                                            <h2 className='dark:text-white text-[#222831] text-[16px] font-semibold py-[8px]'>Front End Development</h2>
                                            <p className='dark:text-slate-400 text-[#808080] text-[14px] font-regular tracking-wide leading-6'>Frontend web development is the producing HTML, CSS,
                                                Tailwind Css, Bootstrap,JavaScript, React, Angular for a Web
                                                Application so user can see and interact with them directly.
                                            </p>
                                        </div>
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

export default About_myself