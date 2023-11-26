import React from 'react'
import CountUp from 'react-countup';

const About_myself = () => {
    return (
        <>
            <section className="about-myself bg-[url('./assets/about-bg.png')] bg-center bg-no-repeat bg-cover">
                <div className=" lg:py-[70px] py-[50px] max-w-7xl mx-auto px-2">
                    <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
                        <div className="md:col-span-4">
                            <div className="experience-part  relative h-full">
                                <div className='w-[80%] bg-white shadow-lg rounded-[10px]  bg-gradient-to-b from-[#46C5E8] h-full'>
                                    <div className='lg:py-[80px] pt-[50px] pb-[120px]'>
                                        <h1 className='text-[96px] font-black text-[#FF014F] text-center uppercase'>02+</h1>
                                        <h4 className='text-[16px] font-semibold text-[#222831] text-center'>Years Of Experience</h4>
                                    </div>
                                    <div className="overlay-experience w-[50%] absolute bottom-[20px] right-[0]">
                                        <div className="flex items-center justify-between  rounded-[10px] py-[10px] px-[15px] bg-gradient-to-r from-[#46C5E8]/50 border border-[#46C5E8] ">
                                            <h3 className='text-[20px] font-semibold text-[#222831] mr-[15px]'><CountUp delay={2}  end={100} />%</h3>
                                            <p className='text-[16px] font-medium text-[#222831]'>Clients Satisfections</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-8">
                            <div className="myself-text">
                                <h4 className='text-[#222831] text-[18px] font-semibold'>About Myself</h4>
                                <h2 className='custom-header-stroke text-transparent text-[28px] font-bold uppercase tracking-wider'>My Eyes to do</h2>
                                <p className='text-[#808080] text-[16px] font-regular tracking-wide leading-6'>An Addicted, Specialized, and Qualified to build UI/UX design for website and mobile applications
                                    (Dealing with the front end part). I always work with the need to understand the benefits of the users,
                                    give them something new to enjoy, and come close to new expectations in advance.</p>
                            </div>
                            <div className="category-part mt-7">
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                                    <div className="flex justify-between gap-5">
                                        <div className="flex justify-center items-center bg-[url('./assets/myself-icon-bg.svg')]  bg-center bg-no-repeat bg-cover w-[180px] h-[45px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.11733 0C0.948 0 0 0.96 0 2.14267V15C0 16.1833 0.948 17.1427 2.11733 17.1427H9.17667V18.5713H6.35267V20H17.6473V18.5713H14.8233V17.1427H21.8827C23.052 17.1427 24 16.1833 24 15V2.14267C24 0.96 23.052 0 21.8827 0H2.11733ZM10.588 18.5713H13.412V17.1427H10.588V18.5713ZM1.412 2.14267C1.412 1.74867 1.728 1.42867 2.11733 1.42867H21.8827C22.272 1.42867 22.588 1.74867 22.588 2.14267V15C22.588 15.3947 22.272 15.714 21.8827 15.714H2.11733C1.728 15.714 1.412 15.394 1.412 15V2.14267ZM6.35267 2.85733H4.94133V4.286H3.52933V5.714H4.94133V7.14267H6.35267V5.714H7.76467V4.28667H6.35267V2.85733ZM4.23533 8.57133C3.84533 8.57133 3.52867 8.89133 3.52867 9.286V12.1427C3.52867 12.5373 3.84533 12.8573 4.23533 12.8573H7.05867C7.44867 12.8573 7.76467 12.5373 7.76467 12.1427V9.28667C7.76467 8.892 7.44867 8.572 7.05867 8.572L4.23533 8.57133ZM4.94133 11.4287V10H6.35267V11.4287H4.94133ZM9.88267 3.57133C9.88267 3.17667 10.1987 2.85733 10.5887 2.85733H13.412C13.802 2.85733 14.118 3.17733 14.118 3.57133V6.42867C14.118 6.82333 13.802 7.14267 13.4113 7.14267H10.5887C10.1987 7.14267 9.882 6.82267 9.882 6.42867L9.88267 3.57133ZM11.294 4.286V5.714H12.706V4.28667H11.294V4.286ZM10.5887 8.57133C10.1987 8.57133 9.882 8.89133 9.882 9.286V12.1427C9.882 12.5373 10.1987 12.8573 10.5887 12.8573H13.412C13.802 12.8573 14.118 12.5373 14.118 12.1427V9.28667C14.118 8.892 13.802 8.572 13.4113 8.572L10.5887 8.57133ZM11.294 11.4287V10H12.706V11.4287H11.294ZM16.2353 3.57133C16.2353 3.17667 16.5513 2.85733 16.9413 2.85733H19.7647C20.1547 2.85733 20.4707 3.17733 20.4707 3.57133V6.42867C20.4707 6.82333 20.1547 7.14267 19.7647 7.14267H16.9413C16.5513 7.14267 16.2353 6.82267 16.2353 6.42867V3.57133ZM17.6473 4.286V5.714H19.0587V4.28667H17.6473V4.286Z" fill="#222831" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className='text-[#222831] text-[16px] font-semibold py-[8px]'>UI/UX Design</h2>
                                            <p className='text-[#808080] text-[14px] font-regular tracking-wide leading-6'>UX Design refers to the term User Experience Design, while
                                                UI Design stands for User Interface Design. Both elements
                                                are crucial to a product and work closely together.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between gap-5">
                                        <div className="flex justify-center items-center bg-[url('./assets/myself-icon-bg.svg')]  bg-center bg-no-repeat bg-cover w-[180px] h-[45px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M6 1.5H21C21.3978 1.5 21.7794 1.65804 22.0607 1.93934C22.342 2.22064 22.5 2.60218 22.5 3V13.5C22.5 13.8978 22.342 14.2794 22.0607 14.5607C21.7794 14.842 21.3978 15 21 15H10.5V16.5H15V19.5H10.5V21H18.75C18.9489 21 19.1397 20.921 19.2803 20.7803C19.421 20.6397 19.5 20.4489 19.5 20.25C19.5 20.0511 19.421 19.8603 19.2803 19.7197C19.1397 19.579 18.9489 19.5 18.75 19.5H16.5V16.5H21C21.7956 16.5 22.5587 16.1839 23.1213 15.6213C23.6839 15.0587 24 14.2956 24 13.5V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.31607 21.7956 0 21 0H6C5.20435 0 4.44129 0.31607 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3V7.5H4.5V3C4.5 2.60218 4.65804 2.22064 4.93934 1.93934C5.22064 1.65804 5.60218 1.5 6 1.5ZM3.75 19.5C3.55109 19.5 3.36032 19.579 3.21967 19.7197C3.07902 19.8603 3 20.0511 3 20.25C3 20.4489 3.07902 20.6397 3.21967 20.7803C3.36032 20.921 3.55109 21 3.75 21H5.25C5.44891 21 5.63968 20.921 5.78033 20.7803C5.92098 20.6397 6 20.4489 6 20.25C6 20.0511 5.92098 19.8603 5.78033 19.7197C5.63968 19.579 5.44891 19.5 5.25 19.5H3.75ZM0 11.25C0 10.6533 0.237053 10.081 0.65901 9.65901C1.08097 9.23705 1.65326 9 2.25 9H6.75C7.34674 9 7.91903 9.23705 8.34099 9.65901C8.76295 10.081 9 10.6533 9 11.25V21.75C9 22.3467 8.76295 22.919 8.34099 23.341C7.91903 23.7629 7.34674 24 6.75 24H2.25C1.65326 24 1.08097 23.7629 0.65901 23.341C0.237053 22.919 0 22.3467 0 21.75V11.25ZM2.25 10.5C2.05109 10.5 1.86032 10.579 1.71967 10.7197C1.57902 10.8603 1.5 11.0511 1.5 11.25V21.75C1.5 21.9489 1.57902 22.1397 1.71967 22.2803C1.86032 22.421 2.05109 22.5 2.25 22.5H6.75C6.94891 22.5 7.13968 22.421 7.28033 22.2803C7.42098 22.1397 7.5 21.9489 7.5 21.75V11.25C7.5 11.0511 7.42098 10.8603 7.28033 10.7197C7.13968 10.579 6.94891 10.5 6.75 10.5H2.25Z" fill="#222831" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className='text-[#222831] text-[16px] font-semibold py-[8px]'>Web Design</h2>
                                            <p className='text-[#808080] text-[14px] font-regular tracking-wide leading-6'>Web design encompasses many different skills and disciplines
                                                in the production and maintenance of websites. The different
                                                areas of web design include UI & UX design.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between gap-5">
                                        <div className="flex justify-center items-center bg-[url('./assets/myself-icon-bg.svg')]  bg-center bg-no-repeat bg-cover w-[180px] h-[45px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 18 25" fill="none">
                                                <path d="M9 20.44L9.01143 20.4274" stroke="#222831" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M15.8571 19.2857V23.1714C15.8571 23.2615 15.8394 23.3506 15.8049 23.4338C15.7705 23.517 15.72 23.5926 15.6563 23.6563C15.5926 23.72 15.517 23.7705 15.4338 23.8049C15.3506 23.8394 15.2615 23.8571 15.1714 23.8571H2.82857C2.73852 23.8571 2.64935 23.8394 2.56616 23.8049C2.48296 23.7705 2.40737 23.72 2.3437 23.6563C2.28002 23.5926 2.22951 23.517 2.19505 23.4338C2.16059 23.3506 2.14286 23.2615 2.14286 23.1714V19.2857M15.8571 5.57143V1.68571C15.8571 1.50385 15.7849 1.32944 15.6563 1.20084C15.5277 1.07224 15.3533 1 15.1714 1H2.82857C2.64671 1 2.47229 1.07224 2.3437 1.20084C2.2151 1.32944 2.14286 1.50385 2.14286 1.68571V5.57143" stroke="#222831" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M13 8.42857L17 12.4286L13 16.4286M5 8.42857L1 12.4286L5 16.4286" stroke="#222831" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className='text-[#222831] text-[16px] font-semibold py-[8px]'>Mobile Screen Design</h2>
                                            <p className='text-[#808080] text-[14px] font-regular tracking-wide leading-6'>A mobile user interface (mobile UI) is the graphical and usually
                                                touch-sensitive display, such as a smartphone or tablet, that
                                                allows the user features, content and functions.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between gap-5">
                                        <div className="flex justify-center items-center bg-[url('./assets/myself-icon-bg.svg')]  bg-center bg-no-repeat bg-cover w-[180px] h-[45px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                                                <path d="M17.0612 0H2.82353C2.07468 0 1.35651 0.297478 0.826993 0.826993C0.297478 1.35651 0 2.07468 0 2.82353V15.5294C0 16.2783 0.297478 16.9964 0.826993 17.5259C1.35651 18.0555 2.07468 18.3529 2.82353 18.3529H7.05882V21.1765H4.94118C4.75396 21.1765 4.57442 21.2508 4.44204 21.3832C4.30966 21.5156 4.23529 21.6951 4.23529 21.8824C4.23529 22.0696 4.30966 22.2491 4.44204 22.3815C4.57442 22.5139 4.75396 22.5882 4.94118 22.5882H17.6471C17.8343 22.5882 18.0138 22.5139 18.1462 22.3815C18.2786 22.2491 18.3529 22.0696 18.3529 21.8824C18.3529 21.6951 18.2786 21.5156 18.1462 21.3832C18.0138 21.2508 17.8343 21.1765 17.6471 21.1765H15.5294V18.3529H19.7647C20.5136 18.3529 21.2317 18.0555 21.7612 17.5259C22.2908 16.9964 22.5882 16.2783 22.5882 15.5294V7.05882H21.1765V15.5294C21.1765 15.9038 21.0277 16.2629 20.763 16.5277C20.4982 16.7924 20.1391 16.9412 19.7647 16.9412H2.82353C2.44911 16.9412 2.09002 16.7924 1.82526 16.5277C1.5605 16.2629 1.41176 15.9038 1.41176 15.5294V2.82353C1.41176 2.44911 1.5605 2.09002 1.82526 1.82526C2.09002 1.5605 2.44911 1.41176 2.82353 1.41176H16.9412V0.705882C16.9412 0.458824 16.9835 0.220235 17.0612 0ZM14.1176 21.1765H8.47059V18.3529H14.1176V21.1765ZM18.3529 0.705882C18.3529 0.518671 18.4273 0.339127 18.5597 0.206748C18.6921 0.0743697 18.8716 0 19.0588 0H23.2941C23.4813 0 23.6609 0.0743697 23.7933 0.206748C23.9256 0.339127 24 0.518671 24 0.705882V4.94118C24 5.12839 23.9256 5.30793 23.7933 5.44031C23.6609 5.57269 23.4813 5.64706 23.2941 5.64706H19.0588C18.8716 5.64706 18.6921 5.57269 18.5597 5.44031C18.4273 5.30793 18.3529 5.12839 18.3529 4.94118V4.23529H17.2518C17.1037 4.23541 16.9594 4.28209 16.8393 4.36874C16.7192 4.45539 16.6294 4.57762 16.5826 4.71812L15.8146 7.02212C15.6742 7.44362 15.4048 7.8103 15.0445 8.07025C14.6842 8.3302 14.2513 8.47025 13.8071 8.47059H12.7059V10.5882C12.7059 10.7754 12.6315 10.955 12.4991 11.0874C12.3668 11.2197 12.1872 11.2941 12 11.2941H7.76471C7.57749 11.2941 7.39795 11.2197 7.26557 11.0874C7.13319 10.955 7.05882 10.7754 7.05882 10.5882V6.35294C7.05882 6.16573 7.13319 5.98619 7.26557 5.85381C7.39795 5.72143 7.57749 5.64706 7.76471 5.64706H12C12.1872 5.64706 12.3668 5.72143 12.4991 5.85381C12.6315 5.98619 12.7059 6.16573 12.7059 6.35294V7.05882H13.8071C13.9551 7.05871 14.0995 7.01203 14.2195 6.92538C14.3396 6.83873 14.4294 6.7165 14.4762 6.576L15.2442 4.272C15.3846 3.8505 15.654 3.48382 16.0143 3.22387C16.3746 2.96392 16.8075 2.82387 17.2518 2.82353H18.3529V0.705882ZM11.2941 7.05882H8.47059V9.88235H11.2941V7.05882ZM19.7647 4.23529H22.5882V1.41176H19.7647V4.23529Z" fill="#222831" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className='text-[#222831] text-[16px] font-semibold py-[8px]'>Front End Development</h2>
                                            <p className='text-[#808080] text-[14px] font-regular tracking-wide leading-6'>Frontend web development is the producing HTML, CSS,
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