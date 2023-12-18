import React from 'react'
import { Navbar } from 'flowbite-react';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

import Logo from '../../../assets/logo.svg'

function NavBar(props) {
    return (
        <>
            <section className='border-b border-gray-600/20 sticky top-0 z-50 backdrop-blur'>
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
                    <button className='px-3 py-2 rounded-[5px]' onClick={props.onToggleDarkMode}>{props.initialMode ? <Icon icon="entypo:light-up" color="rgb(156 163 175)"  width="22" height="22" /> :  <Icon icon="tdesign:mode-dark" color="#222831" width="22" height="22" /> }</button>
                        <a href='#' className='lg:inline-flex  sm:inline-flex  hidden flex justify-center items-center px-4 py-2 text-[#ffffff] ml-2 mr-2 bg-[#46CC8F] rounded-[5px] text-[16px] font-semibold'>
                            {/* <svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M20.33 3.67a1.45 1.45 0 0 0-1.47-.35L4.23 8.2A1.44 1.44 0 0 0 4 10.85l6.07 3l3 6.09a1.44 1.44 0 0 0 1.29.79h.1a1.43 1.43 0 0 0 1.26-1l4.95-14.59a1.41 1.41 0 0 0-.34-1.47M4.85 9.58l12.77-4.26l-7.09 7.09Zm9.58 9.57l-2.84-5.68l7.09-7.09Z" /></svg> */}
                            Let’s talk
                        </a>
                    </div>

                    <Navbar.Collapse>
                        <NavLink to="/" className='dark:text-slate-400 text-sm leading-6 lg:py-0 py-2 font-semibold text-center text-slate-700 text-[14px] text-[#222831] uppercase' active>
                            Home
                        </NavLink>
                        <NavLink to="/about" className='dark:text-slate-400 text-sm leading-6 lg:py-0 py-2 font-semibold text-center text-slate-700 text-[14px] text-[#222831] uppercase'>About</NavLink>
                        <NavLink to="/services" className='dark:text-slate-400 text-sm leading-6 lg:py-0 py-2 font-semibold text-center text-slate-700 text-[14px] text-[#222831] uppercase'>Services</NavLink>
                        <NavLink to="/portfolio" className='dark:text-slate-400 text-sm leading-6 lg:py-0 py-2 font-semibold text-center text-slate-700 text-[14px] text-[#222831] uppercase'>Portfolio</NavLink>
                        <NavLink to="/contact" className='dark:text-slate-400 text-sm leading-6 lg:py-0 py-2 font-semibold text-center text-slate-700 text-[14px] text-[#222831] uppercase'>Contact</NavLink>
                        <NavLink href="" className='lg:hidden sm:hidden lg:py-0 py-2 flex justify-center items-center px-5 text-[#ffffff] mr-2 bg-[#46CC8F] rounded-[5px] text-[14px] font-semibold'><svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
                            <path d="M7.73695 15.455C7.69818 15.6132 6.74304 19.185 1.42751 19.185C1.26513 19.185 1.10939 19.1205 0.99457 19.0056C0.879747 18.8908 0.81524 18.735 0.81524 18.5727C0.81524 13.2568 4.39294 12.3016 4.54499 12.2638C4.7014 12.2276 4.86581 12.2542 5.00278 12.338C5.13975 12.4218 5.23833 12.556 5.27727 12.7118C5.31621 12.8676 5.29241 13.0324 5.21098 13.1708C5.12955 13.3092 4.99702 13.4101 4.84194 13.4517C4.73989 13.4793 2.30714 14.1742 2.06019 17.942C5.87055 17.6899 6.54201 15.1866 6.55017 15.1601C6.58955 15.0024 6.68994 14.8668 6.82926 14.7832C6.96858 14.6996 7.13541 14.6747 7.29306 14.7141C7.45071 14.7535 7.58625 14.8539 7.66988 14.9932C7.75351 15.1325 7.77837 15.2994 7.73899 15.457L7.73695 15.455ZM17.2812 8.48284L16.7343 9.02881V15.0672C16.7346 15.2547 16.6979 15.4405 16.6261 15.6137C16.5542 15.7869 16.4488 15.9442 16.3159 16.0765L12.8106 19.5819C12.6232 19.7692 12.3874 19.9007 12.1295 19.9617C11.8716 20.0226 11.6019 20.0107 11.3504 19.9271C11.099 19.8436 10.8757 19.6918 10.7056 19.4886C10.5355 19.2855 10.4252 19.039 10.3871 18.7768L9.8299 14.7814L5.22154 10.1697L1.22852 9.61255C0.965678 9.57536 0.718393 9.46567 0.514404 9.29578C0.310415 9.1259 0.157792 8.90253 0.0736552 8.65074C-0.0104818 8.39895 -0.0228045 8.12869 0.0380688 7.87029C0.0989422 7.61189 0.230604 7.37556 0.418285 7.18781L3.92353 3.68234C4.05583 3.54953 4.21314 3.44426 4.38636 3.37262C4.55959 3.30098 4.7453 3.26438 4.93276 3.26495H10.9708L11.5167 2.71898C14.1811 0.0544198 17.3914 -0.0598777 18.6476 0.0146197C18.9952 0.0360829 19.323 0.183793 19.5694 0.429981C19.8157 0.676168 19.9637 1.00388 19.9854 1.35149C20.0599 2.60774 19.9446 5.81624 17.2812 8.48284ZM1.39996 8.40018L5.29195 8.94309L9.74622 4.48957H4.93276C4.87872 4.4898 4.82697 4.51145 4.78887 4.54978L1.28465 8.0532C1.25859 8.07949 1.24017 8.11237 1.23136 8.14832C1.22255 8.18428 1.22369 8.22195 1.23465 8.25731C1.24502 8.29478 1.26626 8.32834 1.29567 8.35377C1.32509 8.37919 1.36138 8.39534 1.39996 8.40018ZM15.5097 10.2534L11.0555 14.708L11.5983 18.6022C11.6039 18.6397 11.6199 18.6749 11.6443 18.7038C11.6688 18.7327 11.7008 18.7543 11.7368 18.766C11.7728 18.7778 11.8114 18.7793 11.8482 18.7704C11.885 18.7615 11.9187 18.7425 11.9453 18.7155L15.4495 15.2111C15.4878 15.173 15.5095 15.1212 15.5097 15.0672V10.2534ZM18.7629 1.42803C18.759 1.37982 18.738 1.33458 18.7038 1.30038C18.6696 1.26617 18.6244 1.24523 18.5762 1.24128C17.4362 1.16811 16.2938 1.3397 15.2256 1.74454C14.1574 2.14938 13.1882 2.77809 12.3831 3.58846L6.37567 9.59214L10.4075 13.6242L15.6893 8.34303L16.4149 7.61744C17.2248 6.8128 17.8534 5.84424 18.2584 4.77674C18.6633 3.70924 18.8354 2.56748 18.7629 1.42803Z" fill="white" />
                        </svg>Let’s talk</NavLink>
                    </Navbar.Collapse>
                </Navbar>
            </section>

        </>
    )
}


export default NavBar
