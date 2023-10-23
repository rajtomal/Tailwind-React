import React from 'react'
import { Navbar } from 'flowbite-react';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { Icon } from '@iconify/react';

function NavBar() {
    return (
        <>
            <Navbar Mx-fluid className='bg-dark-bg/80 backdrop-blur  sticky w-full top-0 left-0 border-b border-gray-600/20 z-[999999999] dark:backdrop-blur'>
                <Navbar.Toggle />
                <Navbar.Brand href="#">
                    <img src="https://www.flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">React</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <a href='#' className='flex justify-center items-center p-2 text-gray-500 mr-2'>
                    <Icon icon="ant-design:github-outlined" width="24" />
                    </a>
                    <Flowbite>
                        <DarkThemeToggle />
                    </Flowbite>
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" className='text-sm leading-6 font-semibold text-slate-700' active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#" className='text-sm leading-6 font-semibold text-slate-700'>About</Navbar.Link>
                    <Navbar.Link href="#" className='text-sm leading-6 font-semibold text-slate-700'>Services</Navbar.Link>
                    <Navbar.Link href="#" className='text-sm leading-6 font-semibold text-slate-700'>Pricing</Navbar.Link>
                    <Navbar.Link href="#" className='text-sm leading-6 font-semibold text-slate-700'>Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


export default NavBar
