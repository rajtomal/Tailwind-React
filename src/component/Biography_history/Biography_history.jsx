import React from 'react'
import OfficeLogo from '../../assets/office-logo.jpg'

const Biography_history = () => {
    return (
        <>
            <section className="bg-[url('./assets/biography-bg.png')] bg-center bg-no-repeat bg-cover">
                <div className='lg:py-[70px] py-[50px] max-w-7xl mx-auto px-2'>
                    <h2 className='text-[#222831] text-[18px] font-semibold text-center dark:text-white'>Explore History</h2>
                    <h1 className='custom-header-stroke text-transparent text-[28px] font-bold uppercase tracking-wider text-center '>Biography Experiences</h1>
                    <div className='grid grid-cols-1 md:grid-cols-12 gap-3 mt-5'>
                        <div className='md:col-span-6 rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] dark:bg-[#273346] dark:border-[#404E68]'>
                            <div className='flex gap-4 items-center'>
                                <div className="bg-[url('./assets/myself-icon-bg.svg')] bg-center bg-no-repeat bg-cover w-[62px] h-[54px] flex justify-center items-center">
                                    <svg className='dark:fill-white' xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                        <path d="M6.53792 28.3333C5.88625 28.3333 5.34225 28.1151 4.90592 27.6788C4.46864 27.2415 4.25 26.697 4.25 26.0454V12.2045C4.25 11.5529 4.46864 11.0089 4.90592 10.5725C5.34225 10.1353 5.88625 9.91663 6.53792 9.91663H12.75V7.95454C12.75 7.30288 12.9686 6.75888 13.4059 6.32254C13.8423 5.88526 14.3858 5.66663 15.0365 5.66663H18.9607C19.6123 5.66663 20.1568 5.88526 20.5941 6.32254C21.0304 6.75888 21.2486 7.30288 21.2486 7.95454V9.91663H27.4607C28.1123 9.91663 28.6563 10.1353 29.0927 10.5725C29.5299 11.0089 29.7486 11.5529 29.7486 12.2045V26.0454C29.7486 26.697 29.5304 27.241 29.0941 27.6774C28.6568 28.1147 28.1123 28.3333 27.4607 28.3333H6.53792ZM6.53792 26.9166H27.4621C27.6793 26.9166 27.8791 26.826 28.0613 26.6446C28.2427 26.4623 28.3333 26.2626 28.3333 26.0454V12.2045C28.3333 11.9873 28.2427 11.7876 28.0613 11.6053C27.8791 11.424 27.6793 11.3333 27.4621 11.3333H6.53792C6.32069 11.3333 6.12094 11.424 5.93867 11.6053C5.75733 11.7876 5.66667 11.9873 5.66667 12.2045V26.0454C5.66667 26.2626 5.75733 26.4623 5.93867 26.6446C6.12094 26.826 6.32069 26.9166 6.53792 26.9166ZM14.1667 9.91663H19.8333V7.95454C19.8333 7.73732 19.7427 7.53757 19.5613 7.35529C19.3791 7.17396 19.1793 7.08329 18.9621 7.08329H15.0379C14.8207 7.08329 14.6209 7.17396 14.4387 7.35529C14.2573 7.53757 14.1667 7.73732 14.1667 7.95454V9.91663Z" fill="black" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className='text-[18px] font-semibold text-[#222831] dark:text-white'>Full Time (Official)</h2>
                                </div>
                            </div>
                            <div className='flex items-center justify-between px-[15px] py-[10px] rounded-[10px] mt-4 bg-[#E2E2E2]/20 dark:bg-[#536f9b]/20 dark:border-[#404E68]'>
                                <div className='flex items-center justify-between gap-4'>
                                    <div className='h-[50px] w-[50px] border border-[#E9E9E9] rounded-[50%] flex justify-center items-center'>
                                        <div className='h-[40px] w-[40px] rounded-[50%] overflow-hidden flex justify-center items-center bg-white'>
                                            <img src={OfficeLogo} alt="office-logo" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='text-[16px] font-semibold text-[#222831] dark:text-slate-400 '>Intellier Ltd.</h4>
                                        <p className='text-[16px] font-regular text-[#222831] dark:text-slate-400 '>Jr. Software Engineer</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='dark:text-slate-400 '>Apr 2022- Present</h4>
                                </div>
                            </div>
                            <div className='flex items-center justify-between px-[15px] py-[10px] rounded-[10px] mt-4 bg-[#E2E2E2]/20 dark:bg-[#536f9b]/20 dark:border-[#404E68] '>
                                <div className='flex items-center justify-between gap-4'>
                                    <div className='h-[50px] w-[50px] border border-[#E9E9E9] rounded-[50%] flex justify-center items-center'>
                                        <div className='h-[40px] w-[40px] rounded-[50%] overflow-hidden flex justify-center items-center bg-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                <path d="M17.9398 4.25012L12.8125 9.31653V4.25012H11.4639L6.5625 9.22149V1.12512H0.625V19.8751H19.375V4.25012H17.9398ZM18.125 18.6251H1.875V2.37512H5.3125V10.8126H6.74914L11.5625 5.93051V10.8126H13.0767L18.125 5.82434V18.6251Z" fill="#5B5B5B" />
                                                <path d="M5.3125 13.3126V13.6251H6.5625V12.3751H5.3125V13.3126ZM5.3125 15.1876H6.5625V16.4376H5.3125V15.1876ZM8.4375 13.3126V13.6251H9.6875V12.3751H8.4375V13.3126ZM8.4375 15.1876H9.6875V16.4376H8.4375V15.1876ZM11.5625 13.3126V13.6251H12.8125V12.3751H11.5625V13.3126ZM11.5625 15.1876H12.8125V16.4376H11.5625V15.1876ZM14.6875 12.3751H15.9375V13.6251H14.6875V12.3751ZM14.6875 15.1876H15.9375V16.4376H14.6875V15.1876Z" fill="#5B5B5B" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='text-[16px] font-semibold text-[#222831] dark:text-slate-400 '>G-soft</h4>
                                        <p className='text-[16px] font-regular text-[#222831] dark:text-slate-400'>Web Designer <span className='text-[12px]'>(Remote)</span></p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='dark:text-slate-400'>Jan 2020 - Mar 2021</h4>
                                </div>
                            </div>
                        </div>
                        <div className='md:col-span-6 rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] dark:bg-[#273346] dark:border-[#404E68]'>
                            <div className='flex gap-4 items-center'>
                                <div className="bg-[url('./assets/myself-icon-bg.svg')] bg-center bg-no-repeat bg-cover w-[62px] h-[54px] flex justify-center items-center">
                                    <svg className='dark:fill-white' xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                                        <path d="M19.5 27.3114C19.5001 26.861 19.6186 26.4187 19.8436 26.0286C20.0687 25.6386 20.3923 25.3146 20.7821 25.0892L34.9156 16.9195C35.0457 16.8443 35.1537 16.7362 35.2287 16.6061C35.3038 16.4759 35.3434 16.3283 35.3434 16.1781C35.3434 16.0278 35.3038 15.8802 35.2287 15.7501C35.1537 15.62 35.0457 15.5119 34.9156 15.4367L20.7821 7.26698C20.6523 7.192 20.505 7.1525 20.355 7.15247C20.205 7.15243 20.0577 7.19185 19.9278 7.26677C19.7979 7.34168 19.6899 7.44946 19.6149 7.57928C19.5398 7.7091 19.5002 7.85639 19.5 8.00636M19.5 27.3114V30.9936M19.5 27.3114C19.4999 26.861 19.3814 26.4187 19.1564 26.0286C18.9314 25.6386 18.6077 25.3146 18.2179 25.0892L4.08446 16.9195C3.95438 16.8443 3.84638 16.7362 3.77129 16.6061C3.6962 16.4759 3.65668 16.3283 3.65668 16.1781C3.65668 16.0278 3.6962 15.8802 3.77129 15.7501C3.84638 15.62 3.95438 15.5119 4.08446 15.4367L18.2179 7.26698C18.3478 7.192 18.4951 7.1525 18.6451 7.15247C18.795 7.15243 18.9424 7.19185 19.0723 7.26677C19.2022 7.34168 19.3101 7.44946 19.3852 7.57928C19.4603 7.7091 19.4999 7.85639 19.5 8.00636M19.5 30.9936C19.5002 31.1436 19.5398 31.2909 19.6149 31.4207C19.6899 31.5505 19.7979 31.6583 19.9278 31.7332C20.0577 31.8081 20.205 31.8475 20.355 31.8475C20.505 31.8475 20.6523 31.808 20.7821 31.733L26.689 28.3189C27.079 28.0935 27.4028 27.7696 27.628 27.3795C27.8532 26.9895 27.9718 26.5471 27.972 26.0967V22.3324C27.9719 21.8818 27.8534 21.4392 27.6282 21.049C27.403 20.6588 27.0791 20.3348 26.689 20.1094L20.7821 16.6952C20.3921 16.4697 20.0683 16.1454 19.8432 15.7551C19.6182 15.3647 19.4998 14.922 19.5 14.4714M19.5 30.9936C19.4999 31.1436 19.4603 31.2909 19.3852 31.4207C19.3101 31.5505 19.2022 31.6583 19.0723 31.7332C18.9424 31.8081 18.795 31.8475 18.6451 31.8475C18.4951 31.8475 18.3478 31.808 18.2179 31.733L12.311 28.3189C11.9211 28.0935 11.5972 27.7696 11.372 27.3795C11.1469 26.9895 11.0282 26.5471 11.0281 26.0967V22.3324C11.0281 21.8818 11.1466 21.4392 11.3718 21.049C11.597 20.6588 11.9209 20.3348 12.311 20.1094L18.2179 16.6952C18.6079 16.4697 18.9318 16.1454 19.1568 15.7551C19.3819 15.3647 19.5002 14.922 19.5 14.4714M19.5 14.4714V8.00636" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className='text-[18px] font-semibold text-[#222831] dark:text-white'>Education (History)</h2>
                                </div>
                            </div>
                            <div className='flex items-center justify-between px-[15px] py-[10px] rounded-[10px] mt-4 bg-[#E2E2E2]/20 dark:border-[#404E68] dark:bg-[#536f9b]/20'>
                                <div className='flex items-center justify-between gap-4'>
                                    <div className='h-[50px] w-[50px] border border-[#E9E9E9] rounded-[50%] flex justify-center items-center'>
                                        <div className='h-[40px] w-[40px] rounded-[50%] overflow-hidden flex justify-center items-center bg-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                                <path d="M14.6667 18.6667H13.3333V16.6667C13.3323 15.783 12.9807 14.9358 12.3559 14.3109C11.731 13.686 10.8837 13.3345 10 13.3334H6C5.11627 13.3345 4.26904 13.686 3.64415 14.3109C3.01925 14.9358 2.66773 15.783 2.66667 16.6667V18.6667H1.33333V16.6667C1.33474 15.4295 1.82686 14.2433 2.70173 13.3685C3.57659 12.4936 4.76276 12.0015 6 12.0001H10C11.2372 12.0015 12.4234 12.4936 13.2983 13.3685C14.1731 14.2433 14.6653 15.4295 14.6667 16.6667V18.6667ZM0.666667 2.66675C0.489856 2.66675 0.320287 2.73699 0.195262 2.86201C0.070238 2.98703 0 3.1566 0 3.33341V9.33341H1.33333V3.33341C1.33333 3.1566 1.2631 2.98703 1.13807 2.86201C1.01305 2.73699 0.843478 2.66675 0.666667 2.66675Z" fill="#5B5B5B" />
                                                <path d="M0 0.00012207V1.33346H3.33333V6.00012C3.33333 7.2378 3.825 8.42478 4.70017 9.29995C5.57534 10.1751 6.76232 10.6668 8 10.6668C9.23768 10.6668 10.4247 10.1751 11.2998 9.29995C12.175 8.42478 12.6667 7.2378 12.6667 6.00012V1.33346H16V0.00012207H0ZM4.66667 1.33346H11.3333V3.33346H4.66667V1.33346ZM8 9.33345C7.11595 9.33345 6.2681 8.98227 5.64298 8.35714C5.01786 7.73202 4.66667 6.88418 4.66667 6.00012V4.66679H11.3333V6.00012C11.3333 6.88418 10.9821 7.73202 10.357 8.35714C9.7319 8.98227 8.88406 9.33345 8 9.33345Z" fill="#5B5B5B" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='text-[16px] font-semibold text-[#222831] dark:text-slate-400'>Sonargaon University</h4>
                                        <p className='text-[16px] font-regular text-[#222831] dark:text-slate-400'>B.Sc. in CSE</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='dark:text-slate-400'>Jan 2023 - Present</h4>
                                </div>
                            </div>
                            <div className='flex items-center justify-between px-[15px] py-[10px] rounded-[10px] mt-4 bg-[#E2E2E2]/20 dark:border-[#404E68] dark:bg-[#536f9b]/20'>
                                <div className='flex items-center justify-between gap-4'>
                                    <div className='h-[50px] w-[50px] border border-[#E9E9E9] rounded-[50%] flex justify-center items-center'>
                                        <div className='h-[40px] w-[40px] rounded-[50%] overflow-hidden flex justify-center items-center bg-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                                <path d="M14.6667 18.6667H13.3333V16.6667C13.3323 15.783 12.9807 14.9358 12.3559 14.3109C11.731 13.686 10.8837 13.3345 10 13.3334H6C5.11627 13.3345 4.26904 13.686 3.64415 14.3109C3.01925 14.9358 2.66773 15.783 2.66667 16.6667V18.6667H1.33333V16.6667C1.33474 15.4295 1.82686 14.2433 2.70173 13.3685C3.57659 12.4936 4.76276 12.0015 6 12.0001H10C11.2372 12.0015 12.4234 12.4936 13.2983 13.3685C14.1731 14.2433 14.6653 15.4295 14.6667 16.6667V18.6667ZM0.666667 2.66675C0.489856 2.66675 0.320287 2.73699 0.195262 2.86201C0.070238 2.98703 0 3.1566 0 3.33341V9.33341H1.33333V3.33341C1.33333 3.1566 1.2631 2.98703 1.13807 2.86201C1.01305 2.73699 0.843478 2.66675 0.666667 2.66675Z" fill="#5B5B5B" />
                                                <path d="M0 0.00012207V1.33346H3.33333V6.00012C3.33333 7.2378 3.825 8.42478 4.70017 9.29995C5.57534 10.1751 6.76232 10.6668 8 10.6668C9.23768 10.6668 10.4247 10.1751 11.2998 9.29995C12.175 8.42478 12.6667 7.2378 12.6667 6.00012V1.33346H16V0.00012207H0ZM4.66667 1.33346H11.3333V3.33346H4.66667V1.33346ZM8 9.33345C7.11595 9.33345 6.2681 8.98227 5.64298 8.35714C5.01786 7.73202 4.66667 6.88418 4.66667 6.00012V4.66679H11.3333V6.00012C11.3333 6.88418 10.9821 7.73202 10.357 8.35714C9.7319 8.98227 8.88406 9.33345 8 9.33345Z" fill="#5B5B5B" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='text-[16px] font-semibold text-[#222831] dark:text-slate-400'>Rangpur Polytechnic Institute</h4>
                                        <p className='text-[16px] font-regular text-[#222831] dark:text-slate-400'>Diploma in Engineering, (CSE)</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='dark:text-slate-400'>Aug 2017 - Mar 2022</h4>
                                </div>
                            </div>
                            <div className='flex items-center justify-between px-[15px] py-[10px] rounded-[10px] mt-4 mb-2 bg-[#E2E2E2]/20 dark:border-[#404E68] dark:bg-[#536f9b]/20'>
                                <div className='flex items-center justify-between gap-4'>
                                    <div className='h-[50px] w-[50px] border border-[#E9E9E9] rounded-[50%] flex justify-center items-center'>
                                        <div className='h-[40px] w-[40px] rounded-[50%] overflow-hidden flex justify-center items-center bg-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                                <path d="M14.6667 18.6667H13.3333V16.6667C13.3323 15.783 12.9807 14.9358 12.3559 14.3109C11.731 13.686 10.8837 13.3345 10 13.3334H6C5.11627 13.3345 4.26904 13.686 3.64415 14.3109C3.01925 14.9358 2.66773 15.783 2.66667 16.6667V18.6667H1.33333V16.6667C1.33474 15.4295 1.82686 14.2433 2.70173 13.3685C3.57659 12.4936 4.76276 12.0015 6 12.0001H10C11.2372 12.0015 12.4234 12.4936 13.2983 13.3685C14.1731 14.2433 14.6653 15.4295 14.6667 16.6667V18.6667ZM0.666667 2.66675C0.489856 2.66675 0.320287 2.73699 0.195262 2.86201C0.070238 2.98703 0 3.1566 0 3.33341V9.33341H1.33333V3.33341C1.33333 3.1566 1.2631 2.98703 1.13807 2.86201C1.01305 2.73699 0.843478 2.66675 0.666667 2.66675Z" fill="#5B5B5B" />
                                                <path d="M0 0.00012207V1.33346H3.33333V6.00012C3.33333 7.2378 3.825 8.42478 4.70017 9.29995C5.57534 10.1751 6.76232 10.6668 8 10.6668C9.23768 10.6668 10.4247 10.1751 11.2998 9.29995C12.175 8.42478 12.6667 7.2378 12.6667 6.00012V1.33346H16V0.00012207H0ZM4.66667 1.33346H11.3333V3.33346H4.66667V1.33346ZM8 9.33345C7.11595 9.33345 6.2681 8.98227 5.64298 8.35714C5.01786 7.73202 4.66667 6.88418 4.66667 6.00012V4.66679H11.3333V6.00012C11.3333 6.88418 10.9821 7.73202 10.357 8.35714C9.7319 8.98227 8.88406 9.33345 8 9.33345Z" fill="#5B5B5B" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='text-[16px] font-semibold text-[#222831] dark:text-slate-400'>Sukhanpukur High School</h4>
                                        <p className='text-[16px] font-regular text-[#222831] dark:text-slate-400'>Secondary School Certificate (SSC)</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='dark:text-slate-400'>Feb 2017</h4>
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