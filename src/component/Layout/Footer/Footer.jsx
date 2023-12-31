import React from 'react'
import { NavLink , Link } from 'react-router-dom';
import Logo from '../../../assets/logo.svg'
const Footer = () => {
    return (
        <>
            <section className="dark:bg-[url('./assets/bg-img/footer-bg-dark.svg')] bg-[url('./assets/bg-img/footer-bg-light.svg')] bg-center bg-no-repeat bg-cover">
                <div className='lg:pt-[50px] pt-[30px] max-w-7xl mx-auto px-2'>

                    <div className='flex justify-center items-center'>
                        <div className='flex items-center'>
                            <img className='mr-3 h-[3.25rem]' src={Logo} alt="" />
                            <span className='self-center whitespace-nowrap text-xl font-bold dark:text-white text-[22px]'>Tomal.M</span>
                        </div>
                    </div>
                    <div className='text-center my-3'>
                        <ul className='inline-block '>
                            <li className='inline-block px-3 py-4'><Link to="/" className='text-[14px] font-semibold text-[#222831] uppercase dark:text-slate-400' href="#">Home</Link></li>
                            <li className='inline-block px-3 py-4'><Link to="/about" className='text-[14px] font-semibold text-[#222831] uppercase dark:text-slate-400' href="#">About</Link></li>
                            <li className='inline-block px-3 py-4'><Link to="/services" className='text-[14px] font-semibold text-[#222831] uppercase dark:text-slate-400' href="#">Service</Link></li>
                            <li className='inline-block px-3 py-4'><Link to="/portfolio" className='text-[14px] font-semibold text-[#222831] uppercase dark:text-slate-400' href="#">Portfolio</Link></li>
                            <li className='inline-block px-3 py-4'><Link to="/contact" className='text-[14px] font-semibold text-[#222831] uppercase dark:text-slate-400' href="#">Contact</Link></li>
                        </ul>
                    </div>
                    <div className='flex justify-center  gap-4 pb-[20px]'>
                        <div className='mx-2 md:m-0 bg-white border border-[#E2E2E2] rounded-[10px]  dark:bg-[#273346] dark:border-[#404E68]'>
                            <div className=' rounded-[10px] p-[8px] text-center'>
                                <div className='flex items-center gap-6 h-[100%]'>
                                    <div>
                                        <a href="https://dribbble.com/tomal_raj" target='_blank'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 80 80" fill="none">
                                                <path d="M38.66 32C34.58 24.75 30.19 18.66 29.54 17.77C22.66 21.02 17.51 27.36 15.92 34.99C17.02 35.01 27.16 35.06 38.66 32ZM45.31 34.18C45.88 35.35 46.43 36.54 46.94 37.74C47.12 38.16 47.3 38.58 47.47 39.01C55.65 37.98 63.79 39.63 64.6 39.8C64.55 33.99 62.47 28.66 59.05 24.47C58.52 25.18 54.4 30.47 45.31 34.18ZM76.8 0H3.2C1.43 0 0 1.43 0 3.2V76.8C0 78.57 1.43 80 3.2 80H76.8C78.57 80 80 78.57 80 76.8V3.2C80 1.43 78.57 0 76.8 0ZM40 68.8C24.12 68.8 11.2 55.88 11.2 40C11.2 24.12 24.12 11.2 40 11.2C55.88 11.2 68.8 24.12 68.8 40C68.8 55.88 55.88 68.8 40 68.8ZM48.97 42.89C52.19 51.73 53.5 58.93 53.75 60.43C59.27 56.7 63.2 50.79 64.29 43.94C63.45 43.68 56.68 41.66 48.97 42.89ZM41.72 40.25C42.04 40.15 42.36 40.05 42.69 39.96C42.07 38.56 41.4 37.16 40.7 35.79C28.42 39.47 16.49 39.31 15.42 39.29C15.41 39.54 15.41 39.79 15.41 40.04C15.41 46.36 17.8 52.13 21.73 56.49C22.28 55.53 29.03 44.35 41.72 40.25ZM56.31 21.63C53.349 18.9954 49.7934 17.1179 45.9479 16.1583C42.1025 15.1987 38.0817 15.1855 34.23 16.12C34.91 17.03 39.38 23.11 43.41 30.52C52.16 27.24 55.86 22.26 56.31 21.63ZM44.2 44.08C30.33 48.91 25.34 58.54 24.9 59.44C29.07 62.69 34.31 64.63 40 64.63C43.41 64.63 46.66 63.94 49.61 62.68C49.24 60.52 47.82 53 44.36 44.02L44.2 44.08Z" fill="#E8528B" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mx-2 md:m-0 bg-white border border-[#E2E2E2] rounded-[10px]  dark:bg-[#273346] dark:border-[#404E68]'>
                            <div className='rounded-[10px] p-[8px] text-center'>
                                <div className='flex items-center gap-6 h-[100%]'>
                                    <div>
                                        <a href="https://www.linkedin.com/in/tomal-m-6a5076232" target='_blank'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 80 80" fill="none">
                                                <path d="M68.1637 68.1649H56.3103V49.6014C56.3103 45.1749 56.2313 39.4764 50.1453 39.4764C43.9716 39.4764 43.0269 44.2996 43.0269 49.2793V68.1636H31.1737V29.9899H42.5528V35.2068H42.7122C43.851 33.2596 45.4966 31.6577 47.4737 30.5718C49.4508 29.4859 51.6855 28.9566 53.9397 29.0402C65.9538 29.0402 68.1688 36.9427 68.1688 47.2233L68.1637 68.1649ZM17.7987 24.7721C13.9997 24.7727 10.9194 21.6933 10.9187 17.8943C10.9181 14.0952 13.9972 11.0149 17.7962 11.0143C21.5953 11.0133 24.6756 14.0927 24.6762 17.8918C24.6766 19.7161 23.9522 21.4659 22.6624 22.7562C21.3726 24.0465 19.6231 24.7717 17.7987 24.7721ZM23.7256 68.1652H11.8597V29.9899H23.7253L23.7256 68.1652ZM74.0731 0.00582247H5.90344C2.68156 -0.0304275 0.039375 2.55051 0 5.77239V74.2264C0.038125 77.4499 2.68 80.0333 5.90312 79.9996H74.0731C77.3031 80.0396 79.9553 77.4561 80 74.2264V5.76707C79.9541 2.53895 77.3016 -0.0416775 74.0731 0.000509966" fill="#0A66C2" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mx-2 md:m-0 bg-white border border-[#E2E2E2] rounded-[10px]  dark:bg-[#273346] dark:border-[#404E68]'>
                            <div className='rounded-[10px] p-[8px] text-center'>
                                <div className='flex items-center gap-6 h-[100%]'>
                                    <div>
                                        <a href="https://github.com/rajtomal" target='_blank'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 80 80" fill="none">
                                                <path d="M71.4286 0H8.57143C3.83929 0 0 3.83929 0 8.57143V71.4286C0 76.1607 3.83929 80 8.57143 80H71.4286C76.1607 80 80 76.1607 80 71.4286V8.57143C80 3.83929 76.1607 0 71.4286 0ZM49.5179 68.5179C48.0179 68.7857 47.4643 67.8571 47.4643 67.0893C47.4643 66.125 47.5 61.1964 47.5 57.2143C47.5 54.4286 46.5714 52.6607 45.4821 51.7321C52.0893 51 59.0536 50.0893 59.0536 38.6786C59.0536 35.4286 57.8929 33.8036 56 31.7143C56.3036 30.9464 57.3214 27.7857 55.6964 23.6786C53.2143 22.9107 47.5357 26.875 47.5357 26.875C45.1786 26.2143 42.625 25.875 40.1071 25.875C37.5893 25.875 35.0357 26.2143 32.6786 26.875C32.6786 26.875 27 22.9107 24.5179 23.6786C22.8929 27.7679 23.8929 30.9286 24.2143 31.7143C22.3214 33.8036 21.4286 35.4286 21.4286 38.6786C21.4286 50.0357 28.0893 51 34.6964 51.7321C33.8393 52.5 33.0714 53.8214 32.8036 55.7143C31.1071 56.4821 26.7679 57.8036 24.1786 53.2321C22.5536 50.4107 19.625 50.1786 19.625 50.1786C16.7321 50.1429 19.4286 52 19.4286 52C21.3571 52.8929 22.7143 56.3214 22.7143 56.3214C24.4464 61.625 32.7321 59.8393 32.7321 59.8393C32.7321 62.3214 32.7679 66.3571 32.7679 67.0893C32.7679 67.8571 32.2321 68.7857 30.7143 68.5179C18.9286 64.5714 10.6786 53.3571 10.6786 40.25C10.6786 23.8571 23.2143 11.4107 39.6071 11.4107C56 11.4107 69.2857 23.8571 69.2857 40.25C69.3036 53.3571 61.3036 64.5893 49.5179 68.5179ZM32 57.6071C31.6607 57.6786 31.3393 57.5357 31.3036 57.3036C31.2679 57.0357 31.5 56.8036 31.8393 56.7321C32.1786 56.6964 32.5 56.8393 32.5357 57.0714C32.5893 57.3036 32.3571 57.5357 32 57.6071ZM30.3036 57.4464C30.3036 57.6786 30.0357 57.875 29.6786 57.875C29.2857 57.9107 29.0179 57.7143 29.0179 57.4464C29.0179 57.2143 29.2857 57.0179 29.6429 57.0179C29.9821 56.9821 30.3036 57.1786 30.3036 57.4464ZM27.8571 57.25C27.7857 57.4821 27.4286 57.5893 27.125 57.4821C26.7857 57.4107 26.5536 57.1429 26.625 56.9107C26.6964 56.6786 27.0536 56.5714 27.3571 56.6429C27.7143 56.75 27.9464 57.0179 27.8571 57.25ZM25.6607 56.2857C25.5 56.4821 25.1607 56.4464 24.8929 56.1786C24.625 55.9464 24.5536 55.6071 24.7321 55.4464C24.8929 55.25 25.2321 55.2857 25.5 55.5536C25.7321 55.7857 25.8214 56.1429 25.6607 56.2857ZM24.0357 54.6607C23.875 54.7679 23.5714 54.6607 23.375 54.3929C23.1786 54.125 23.1786 53.8214 23.375 53.6964C23.5714 53.5357 23.875 53.6607 24.0357 53.9286C24.2321 54.1964 24.2321 54.5179 24.0357 54.6607ZM22.875 52.9286C22.7143 53.0893 22.4464 53 22.25 52.8214C22.0536 52.5893 22.0179 52.3214 22.1786 52.1964C22.3393 52.0357 22.6071 52.125 22.8036 52.3036C23 52.5357 23.0357 52.8036 22.875 52.9286ZM21.6786 51.6071C21.6071 51.7679 21.375 51.8036 21.1786 51.6786C20.9464 51.5714 20.8393 51.375 20.9107 51.2143C20.9821 51.1071 21.1786 51.0536 21.4107 51.1429C21.6429 51.2679 21.75 51.4643 21.6786 51.6071Z" fill="#F15639" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mx-2 md:m-0 bg-white border border-[#E2E2E2] rounded-[10px]  dark:bg-[#273346] dark:border-[#404E68]'>
                            <div className='rounded-[10px] p-[8px] text-center'>
                                <div className='flex items-center gap-6 h-[100%]'>
                                    <div>
                                        <a href="https://www.facebook.com/people/Tomal-Ahmed/100071847061738/?mibextid=eHce3h" target='_blank'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 80 80" fill="none">
                                                <path d="M75.586 0H4.41403C1.97623 0 0 1.97623 0 4.41403V75.586C0 78.0238 1.97623 80 4.41403 80H75.586C78.0238 80 80 78.0238 80 75.586V4.41403C80 1.97623 78.0238 0 75.586 0Z" fill="#3D5A98" />
                                                <path d="M55.1922 79.9931V49.0138H65.5885L67.1432 36.9412H55.1922V29.2352C55.1922 25.7405 56.1656 23.3544 61.1745 23.3544H67.5691V12.539C64.4726 12.2163 61.3608 12.0628 58.2476 12.0793C49.041 12.0793 42.7005 17.6898 42.7005 28.0388V36.9412H32.3042V49.0138H42.7005V79.9931H55.1922Z" fill="white" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between py-5  border-t-[1px]  border-[#E2E2E2] dark:border-[#566279]'>
                        <div>
                            <p className='text-[14px] font-regular text-[#222831] dark:text-slate-400 '>© <span className='text-[#FF014F] font-semibold'>Tomal.M</span> 2023 - Present.</p>
                        </div>
                        <div>
                            <p className='text-[14px] font-regular text-[#222831] dark:text-slate-400 '>All right reserved</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Footer