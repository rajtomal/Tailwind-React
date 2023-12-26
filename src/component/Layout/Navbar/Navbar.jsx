import React from 'react'
import { Navbar } from 'flowbite-react';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { NavLink , Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import Logo from '../../../assets/logo.svg'

function NavBar(props) {
    return (
        <>
            <section className='border-b border-gray-600/20 sticky top-0 z-[999] backdrop-blur'>
                <Navbar className='max-w-7xl mx-auto bg-dark-bg/80 sticky w-full top-0 left-0 z-[999999999] dark:bg-transparent'>
                    <Navbar.Toggle />
                    <Navbar.Brand href="#">
                        <img src={Logo} className="mr-3 h-[3.25rem]" alt="Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white text-[22px]">Tomal.M</span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        {/* <Flowbite>
                        <DarkThemeToggle />
                    </Flowbite> */}
                        <button className='px-3 py-2 rounded-[5px]' onClick={props.onToggleDarkMode}>{props.initialMode ? <Icon icon="entypo:light-up" color="rgb(156 163 175)" width="22" height="22" /> : <Icon icon="tdesign:mode-dark" color="#222831" width="22" height="22" />}</button>
                        <Link to="/contact" className='lg:inline-flex  sm:inline-flex  hidden px-4 py-2 text-[#ffffff] ml-2 mr-2 bg-[#46CC8F] rounded-[5px] text-[16px] font-semibold'>
                            {/* <svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M20.33 3.67a1.45 1.45 0 0 0-1.47-.35L4.23 8.2A1.44 1.44 0 0 0 4 10.85l6.07 3l3 6.09a1.44 1.44 0 0 0 1.29.79h.1a1.43 1.43 0 0 0 1.26-1l4.95-14.59a1.41 1.41 0 0 0-.34-1.47M4.85 9.58l12.77-4.26l-7.09 7.09Zm9.58 9.57l-2.84-5.68l7.09-7.09Z" /></svg> */}
                            Let’s talk
                        </Link>
                    </div>

                    <Navbar.Collapse>
                        <NavLink to="/" className='dark:text-slate-400 text-sm leading-6 lg:py-0 py-2 font-semibold text-center text-slate-700 text-[14px] uppercase' active>
                            Home
                        </NavLink>
                        <NavLink to="/about" className='dark:text-slate-400 text-sm leading-6 lg:py-0 py-2 font-semibold text-center text-slate-700 text-[14px]  uppercase'>About</NavLink>
                        <NavLink to="/services" className='dark:text-slate-400 text-sm leading-6 lg:py-0 py-2 font-semibold text-center text-slate-700 text-[14px] uppercase'>Services</NavLink>
                        <NavLink to="/portfolio" className='dark:text-slate-400 text-sm leading-6 lg:py-0 py-2 font-semibold text-center text-slate-700 text-[14px] uppercase'>Portfolio</NavLink>
                        <NavLink to="/contact" className='dark:text-slate-400 text-sm leading-6 lg:py-0 py-2 font-semibold text-center text-slate-700 text-[14px] uppercase'>Contact</NavLink>
                    </Navbar.Collapse>
                </Navbar>
            </section>

        </>
    )
}


export default NavBar
