import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import One from '../../assets/UI-design/1.svg'
import Two from '../../assets/UI-design/2.svg'
import Three from '../../assets/UI-design/3.svg'
import Four from '../../assets/UI-design/4.svg'
import Five from '../../assets/UI-design/5.svg'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Recent_work = () => {
    return (
        <>
            {/* <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src={One} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Two} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Three} alt="" />
                </SwiperSlide> */}



            <section className="bg-[url('./assets/recant_work_bg.png')] bg-center bg-no-repeat bg-cover">
                <div className='lg:py-[70px] py-[50px] max-w-7xl mx-auto px-2'>
                    <h2 className='text-[#222831] text-[18px] font-semibold dark:text-white'>Explore my work</h2>
                    <h1 className='custom-header-stroke text-transparent text-[28px] font-bold uppercase tracking-wider'>Recent Work</h1>
                    <Swiper
                        spaceBetween={25}
                        loopAdditionalSlides={true}
                        pagination={{
                            clickable: true,
                          }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            640: {
                              slidesPerView: 1,
                            },
                            768: {
                              slidesPerView: 2,
                            },
                            1024: {
                              slidesPerView: 3,
                            },
                          }}
                          modules={[Pagination]}
                          className="mySwiper mt-5"
                    >
                        <div className='grid grid-cols-1 md:grid-cols-12 gap-3 '>
                            <SwiperSlide>
                                <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] dark:bg-[#273346] dark:border-[#404E68]'>
                                    <div className='rounded-[10px] overflow-hidden'>
                                        <img src={One} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[18px] font-semibold text-[#222831] py-2 dark:text-white'>SafeRide</h1>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#0ACF83]/20 text-[12px] text-[#3A7D68] border border-[#3A7D68] rounded-[5px]'>UI-UX</span>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#F1662A]/20 text-[12px] text-[#F1662A] border border-[#F1662A] rounded-[5px]'>HTML</span>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#4CB4E1]/20 text-[12px] text-[#1572B6] border border-[#1572B6] rounded-[5px]'>CSS</span>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#F0DB4F]/20 text-[12px] text-[#8C7C12] border border-[#8C7C12] rounded-[5px]'>JavaScript</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] dark:bg-[#273346] dark:border-[#404E68]'>
                                    <div className='rounded-[10px] overflow-hidden'>
                                        <img src={Two} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[18px] font-semibold text-[#222831] py-2 dark:text-white'>SafeRide</h1>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#0ACF83]/20 text-[12px] text-[#3A7D68] border border-[#3A7D68] rounded-[5px]'>UI-UX</span>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#F1662A]/20 text-[12px] text-[#F1662A] border border-[#F1662A] rounded-[5px]'>HTML</span>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#4CB4E1]/20 text-[12px] text-[#1572B6] border border-[#1572B6] rounded-[5px]'>CSS</span>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#F0DB4F]/20 text-[12px] text-[#8C7C12] border border-[#8C7C12] rounded-[5px]'>JavaScript</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] dark:bg-[#273346] dark:border-[#404E68]'>
                                    <div className='rounded-[10px] overflow-hidden'>
                                        <img src={Three} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[18px] font-semibold text-[#222831] py-2 dark:text-white'>SafeRide</h1>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#0ACF83]/20 text-[12px] text-[#3A7D68] border border-[#3A7D68] rounded-[5px]'>UI-UX</span>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#F1662A]/20 text-[12px] text-[#F1662A] border border-[#F1662A] rounded-[5px]'>HTML</span>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#4CB4E1]/20 text-[12px] text-[#1572B6] border border-[#1572B6] rounded-[5px]'>CSS</span>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#F0DB4F]/20 text-[12px] text-[#8C7C12] border border-[#8C7C12] rounded-[5px]'>JavaScript</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] dark:bg-[#273346] dark:border-[#404E68]'>
                                    <div className='rounded-[10px] overflow-hidden'>
                                        <img src={Four} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[18px] font-semibold text-[#222831] py-2 dark:text-white'>SafeRide</h1>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#0ACF83]/20 text-[12px] text-[#3A7D68] border border-[#3A7D68] rounded-[5px]'>UI-UX</span>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#F1662A]/20 text-[12px] text-[#F1662A] border border-[#F1662A] rounded-[5px]'>HTML</span>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#4CB4E1]/20 text-[12px] text-[#1572B6] border border-[#1572B6] rounded-[5px]'>CSS</span>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#F0DB4F]/20 text-[12px] text-[#8C7C12] border border-[#8C7C12] rounded-[5px]'>JavaScript</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] dark:bg-[#273346] dark:border-[#404E68]'>
                                    <div className='rounded-[10px] overflow-hidden'>
                                        <img src={Five} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[18px] font-semibold text-[#222831] py-2 dark:text-white'>SafeRide</h1>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#0ACF83]/20 text-[12px] text-[#3A7D68] border border-[#3A7D68] rounded-[5px]'>UI-UX</span>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#F1662A]/20 text-[12px] text-[#F1662A] border border-[#F1662A] rounded-[5px]'>HTML</span>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#4CB4E1]/20 text-[12px] text-[#1572B6] border border-[#1572B6] rounded-[5px]'>CSS</span>
                                        <span className='mx-1 py-[1px] px-[10px] bg-[#F0DB4F]/20 text-[12px] text-[#8C7C12] border border-[#8C7C12] rounded-[5px]'>JavaScript</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Recent_work