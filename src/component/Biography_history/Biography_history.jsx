import React from 'react'
import { Icon } from '@iconify/react';
import OfficeLogo from '../../assets/office-logo.jpg'

const Biography_history = () => {
    return (
        <>
            <section className="dark:bg-[url('./assets/bg-img/biography-bg-dark.svg')] bg-[url('./assets/bg-img/biography-bg-light.svg')] bg-center bg-no-repeat bg-cover">
                <div className='lg:py-[70px] py-[30px] max-w-7xl mx-auto px-2'>
                    <h2 className='text-[#222831] lg:text-[18px] text-[16px] font-semibold text-center dark:text-white'>Explore History</h2>
                    <h1 className='custom-header-stroke text-transparent lg:text-[28px] text-[22px] font-bold uppercase tracking-wider text-center '>Biography Experiences</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-5'>
                        <div className='rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] dark:bg-[#273346] dark:border-[#566279]'>
                            <div className='flex gap-4 items-center'>
                                <div className="bg-[url('./assets/myself-icon-bg.svg')] bg-center bg-no-repeat bg-cover w-[62px] h-[54px] flex justify-center items-center">
                                    <Icon className='text-[#27865c]' icon="material-symbols-light:home-work-outline-rounded" width="36" />
                                </div>
                                <div>
                                    <h2 className='lg:text-[18px] text-[16px] font-semibold text-[#222831] dark:text-white'>Full Time (Official)</h2>
                                </div>
                            </div>
                            <div className='flex items-center lg:justify-between gap-4 px-[15px] py-[10px] rounded-[10px] mt-4 bg-[#E2E2E2]/20 dark:bg-[#536f9b]/20 dark:border-[#566279]'>
                                <div className='lg:w-[10%]'>
                                    <div className='h-[50px] w-[50px] border border-[#E9E9E9] rounded-[50%] flex justify-center items-center'>
                                        <div className='h-[40px] w-[40px] rounded-[50%] overflow-hidden flex justify-center items-center bg-white'>
                                            <img src={OfficeLogo} alt="office-logo" />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-[90%] lg:flex lg:items-center lg:justify-between'>
                                    <div>
                                        <h4 className='lg:text-[16px] text-[16px] font-semibold text-[#222831] dark:text-slate-300 '>Intellier Ltd.</h4>
                                        <p className='text-[14px] font-regular text-[#808080] dark:text-slate-400'>Jr. Software Engineer</p>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] font-semibold text-[#222831] dark:text-slate-300 '>Apr 2022- Present</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center lg:justify-between gap-4 px-[15px] py-[10px] rounded-[10px] mt-4 bg-[#E2E2E2]/20 dark:bg-[#536f9b]/20 dark:border-[#566279] '>
                                <div className='lg:w-[10%]'>
                                    <div className='h-[50px] w-[50px] border border-[#E9E9E9] rounded-[50%] flex justify-center items-center'>
                                        <div className='h-[40px] w-[40px] rounded-[50%] overflow-hidden flex justify-center items-center bg-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                <path d="M17.9398 4.25012L12.8125 9.31653V4.25012H11.4639L6.5625 9.22149V1.12512H0.625V19.8751H19.375V4.25012H17.9398ZM18.125 18.6251H1.875V2.37512H5.3125V10.8126H6.74914L11.5625 5.93051V10.8126H13.0767L18.125 5.82434V18.6251Z" fill="#5B5B5B" />
                                                <path d="M5.3125 13.3126V13.6251H6.5625V12.3751H5.3125V13.3126ZM5.3125 15.1876H6.5625V16.4376H5.3125V15.1876ZM8.4375 13.3126V13.6251H9.6875V12.3751H8.4375V13.3126ZM8.4375 15.1876H9.6875V16.4376H8.4375V15.1876ZM11.5625 13.3126V13.6251H12.8125V12.3751H11.5625V13.3126ZM11.5625 15.1876H12.8125V16.4376H11.5625V15.1876ZM14.6875 12.3751H15.9375V13.6251H14.6875V12.3751ZM14.6875 15.1876H15.9375V16.4376H14.6875V15.1876Z" fill="#5B5B5B" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-[90%] lg:flex lg:items-center lg:justify-between'>
                                    <div>
                                        <h4 className='text-[16px] font-semibold text-[#222831] dark:text-slate-300 '>G-soft</h4>
                                        <p className='text-[14px] font-regular text-[#808080] dark:text-slate-400'>Web Designer <span className='text-[12px]'>(Remote)</span></p>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] font-semibold text-[#222831] dark:text-slate-300 '>Jan 2020 - Mar 2021</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] dark:bg-[#273346] dark:border-[#566279]'>
                            <div className='flex gap-4 items-center'>
                                <div className="bg-[url('./assets/myself-icon-bg.svg')] bg-center bg-no-repeat bg-cover w-[62px] h-[54px] flex justify-center items-center">
                                    <Icon className='text-[#27865c]' icon="fluent-mdl2:education" width="32" />
                                </div>
                                <div>
                                    <h2 className='text-[18px] font-semibold text-[#222831] dark:text-white'>Education (History)</h2>
                                </div>
                            </div>
                            <div className='flex items-center lg:justify-between gap-4 px-[15px] py-[10px] rounded-[10px] mt-4 bg-[#E2E2E2]/20 dark:border-[#566279] dark:bg-[#536f9b]/20'>
                                <div className='lg:w-[10%]'>
                                    <div className='h-[50px] w-[50px] border border-[#E9E9E9] rounded-[50%] flex justify-center items-center'>
                                        <div className='h-[40px] w-[40px] rounded-[50%] overflow-hidden flex justify-center items-center bg-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                                <path d="M14.6667 18.6667H13.3333V16.6667C13.3323 15.783 12.9807 14.9358 12.3559 14.3109C11.731 13.686 10.8837 13.3345 10 13.3334H6C5.11627 13.3345 4.26904 13.686 3.64415 14.3109C3.01925 14.9358 2.66773 15.783 2.66667 16.6667V18.6667H1.33333V16.6667C1.33474 15.4295 1.82686 14.2433 2.70173 13.3685C3.57659 12.4936 4.76276 12.0015 6 12.0001H10C11.2372 12.0015 12.4234 12.4936 13.2983 13.3685C14.1731 14.2433 14.6653 15.4295 14.6667 16.6667V18.6667ZM0.666667 2.66675C0.489856 2.66675 0.320287 2.73699 0.195262 2.86201C0.070238 2.98703 0 3.1566 0 3.33341V9.33341H1.33333V3.33341C1.33333 3.1566 1.2631 2.98703 1.13807 2.86201C1.01305 2.73699 0.843478 2.66675 0.666667 2.66675Z" fill="#5B5B5B" />
                                                <path d="M0 0.00012207V1.33346H3.33333V6.00012C3.33333 7.2378 3.825 8.42478 4.70017 9.29995C5.57534 10.1751 6.76232 10.6668 8 10.6668C9.23768 10.6668 10.4247 10.1751 11.2998 9.29995C12.175 8.42478 12.6667 7.2378 12.6667 6.00012V1.33346H16V0.00012207H0ZM4.66667 1.33346H11.3333V3.33346H4.66667V1.33346ZM8 9.33345C7.11595 9.33345 6.2681 8.98227 5.64298 8.35714C5.01786 7.73202 4.66667 6.88418 4.66667 6.00012V4.66679H11.3333V6.00012C11.3333 6.88418 10.9821 7.73202 10.357 8.35714C9.7319 8.98227 8.88406 9.33345 8 9.33345Z" fill="#5B5B5B" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-[90%] lg:flex lg:items-center lg:justify-between'>
                                    <div>
                                        <h4 className='text-[16px] font-semibold text-[#222831] dark:text-slate-300'>Sonargaon University</h4>
                                        <p className='text-[14px] font-regular text-[#808080] dark:text-slate-400'>B.Sc. in CSE</p>
                                    </div>

                                    <div>
                                        <h4 className='text-[14px] font-semibold text-[#222831] dark:text-slate-300 '>Jan 2023 - Present</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center lg:justify-between gap-4 px-[15px] py-[10px] rounded-[10px] mt-4 bg-[#E2E2E2]/20 dark:border-[#566279] dark:bg-[#536f9b]/20'>
                                <div className='lg:w-[10%]'>
                                    <div className='h-[50px] w-[50px] border border-[#E9E9E9] rounded-[50%] flex justify-center items-center'>
                                        <div className='h-[40px] w-[40px] rounded-[50%] overflow-hidden flex justify-center items-center bg-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                                <path d="M14.6667 18.6667H13.3333V16.6667C13.3323 15.783 12.9807 14.9358 12.3559 14.3109C11.731 13.686 10.8837 13.3345 10 13.3334H6C5.11627 13.3345 4.26904 13.686 3.64415 14.3109C3.01925 14.9358 2.66773 15.783 2.66667 16.6667V18.6667H1.33333V16.6667C1.33474 15.4295 1.82686 14.2433 2.70173 13.3685C3.57659 12.4936 4.76276 12.0015 6 12.0001H10C11.2372 12.0015 12.4234 12.4936 13.2983 13.3685C14.1731 14.2433 14.6653 15.4295 14.6667 16.6667V18.6667ZM0.666667 2.66675C0.489856 2.66675 0.320287 2.73699 0.195262 2.86201C0.070238 2.98703 0 3.1566 0 3.33341V9.33341H1.33333V3.33341C1.33333 3.1566 1.2631 2.98703 1.13807 2.86201C1.01305 2.73699 0.843478 2.66675 0.666667 2.66675Z" fill="#5B5B5B" />
                                                <path d="M0 0.00012207V1.33346H3.33333V6.00012C3.33333 7.2378 3.825 8.42478 4.70017 9.29995C5.57534 10.1751 6.76232 10.6668 8 10.6668C9.23768 10.6668 10.4247 10.1751 11.2998 9.29995C12.175 8.42478 12.6667 7.2378 12.6667 6.00012V1.33346H16V0.00012207H0ZM4.66667 1.33346H11.3333V3.33346H4.66667V1.33346ZM8 9.33345C7.11595 9.33345 6.2681 8.98227 5.64298 8.35714C5.01786 7.73202 4.66667 6.88418 4.66667 6.00012V4.66679H11.3333V6.00012C11.3333 6.88418 10.9821 7.73202 10.357 8.35714C9.7319 8.98227 8.88406 9.33345 8 9.33345Z" fill="#5B5B5B" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-[90%] lg:flex lg:items-center lg:justify-between'>
                                    <div>
                                        <h4 className='text-[16px] font-semibold text-[#222831] dark:text-slate-300'>Rangpur Polytechnic Institute</h4>
                                        <p className='text-[14px] font-regular text-[#808080] dark:text-slate-400'>Diploma in Engineering, (CSE)</p>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] font-semibold text-[#222831] dark:text-slate-300 '>Aug 2017 - Mar 2022</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center lg:justify-between gap-4 px-[15px] py-[10px] rounded-[10px] mt-4 mb-2 bg-[#E2E2E2]/20 dark:border-[#566279] dark:bg-[#536f9b]/20'>
                                <div className='lg:w-[10%]'>
                                    <div className='h-[50px] w-[50px] border border-[#E9E9E9] rounded-[50%] flex justify-center items-center'>
                                        <div className='h-[40px] w-[40px] rounded-[50%] overflow-hidden flex justify-center items-center bg-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                                <path d="M14.6667 18.6667H13.3333V16.6667C13.3323 15.783 12.9807 14.9358 12.3559 14.3109C11.731 13.686 10.8837 13.3345 10 13.3334H6C5.11627 13.3345 4.26904 13.686 3.64415 14.3109C3.01925 14.9358 2.66773 15.783 2.66667 16.6667V18.6667H1.33333V16.6667C1.33474 15.4295 1.82686 14.2433 2.70173 13.3685C3.57659 12.4936 4.76276 12.0015 6 12.0001H10C11.2372 12.0015 12.4234 12.4936 13.2983 13.3685C14.1731 14.2433 14.6653 15.4295 14.6667 16.6667V18.6667ZM0.666667 2.66675C0.489856 2.66675 0.320287 2.73699 0.195262 2.86201C0.070238 2.98703 0 3.1566 0 3.33341V9.33341H1.33333V3.33341C1.33333 3.1566 1.2631 2.98703 1.13807 2.86201C1.01305 2.73699 0.843478 2.66675 0.666667 2.66675Z" fill="#5B5B5B" />
                                                <path d="M0 0.00012207V1.33346H3.33333V6.00012C3.33333 7.2378 3.825 8.42478 4.70017 9.29995C5.57534 10.1751 6.76232 10.6668 8 10.6668C9.23768 10.6668 10.4247 10.1751 11.2998 9.29995C12.175 8.42478 12.6667 7.2378 12.6667 6.00012V1.33346H16V0.00012207H0ZM4.66667 1.33346H11.3333V3.33346H4.66667V1.33346ZM8 9.33345C7.11595 9.33345 6.2681 8.98227 5.64298 8.35714C5.01786 7.73202 4.66667 6.88418 4.66667 6.00012V4.66679H11.3333V6.00012C11.3333 6.88418 10.9821 7.73202 10.357 8.35714C9.7319 8.98227 8.88406 9.33345 8 9.33345Z" fill="#5B5B5B" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-[90%] lg:flex lg:items-center lg:justify-between'>
                                    <div>
                                        <h4 className='text-[16px] font-semibold text-[#222831] dark:text-slate-300'>Sukhanpukur High School</h4>
                                        <p className='text-[14px] font-regular text-[#808080] dark:text-slate-400'>Secondary School Certificate (SSC)</p>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] font-semibold text-[#222831] dark:text-slate-300 '>Feb 2017</h4>
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

export default Biography_history