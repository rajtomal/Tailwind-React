import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Profilr1 from '../../assets/testi-profile-img.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
    return (
        <>
            <section className="bg-[url('./assets/Testimonial-bg.png')] bg-center bg-no-repeat bg-cover">
                <div className='lg:py-[70px] py-[50px] max-w-7xl mx-auto px-2'>
                    <h2 className='text-[#222831] text-[18px] font-semibold'>Satisfaction Quotes</h2>
                    <h1 className='custom-header-stroke text-transparent text-[28px] font-bold uppercase tracking-wider'>Satisfaction Quotes</h1>
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
                                <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] h-[315px] md:h-[250px] flex flex-col justify-between'>
                                    <div className='px-2'>
                                        <h1 className='text-[18px] font-semibold text-[#222831] py-2'>UI/UX for your website by Figma adobe XD.</h1>
                                        <p className='text-[14px] font-regular leading-6 text-[#808080]'>“The seller went about and beyond and this is by FAR the best experience I’ve ever had on Fiverr. There team was nice, creative and helpful and did more than what was expected. Without a doubt will work in the future.”</p>
                                    </div>
                                    <div className='flex justify-between items-center pt-3 mt-4 px-2 border-t border-[#E2E2E2]'>
                                        <div>
                                            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-[#29B6DD] to-[#005269] text-[18px] font-semibold'>Realpartyhopper</h2>
                                        </div>
                                        <div className='w-[50px] h-[50px] rounded-[50%] overflow-hedden'>
                                            <img src={Profilr1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] h-[315px] md:h-[250px] flex flex-col justify-between'>
                                    <div className='px-2'>
                                        <h1 className='text-[18px] font-semibold text-[#222831] py-2'>figma to HTML, PSD to HTML responsive.</h1>
                                        <p className='text-[14px] font-regular leading-6 text-[#808080]'>Great communication, great skills, project finished way ahead of schedule. He is really experienced regarding his gig. I would be glad to work again with Raj soon.</p>
                                    </div>
                                    <div className='flex justify-between items-center pt-3 mt-4 px-2 border-t border-[#E2E2E2]'>
                                        <div>
                                            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-[#29B6DD] to-[#005269] text-[18px] font-semibold'>Jacksonlcox</h2>
                                        </div>
                                        <div className='w-[50px] h-[50px] rounded-[50%] overflow-hedden'>
                                            <img src={Profilr1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] h-[315px] md:h-[250px] flex flex-col justify-between'>
                                    <div className='px-2'>
                                        <h1 className='text-[18px] font-semibold text-[#222831] py-2'>HTML Project</h1>
                                        <p className='text-[14px] font-regular leading-6 text-[#808080]'>Professional job - delivered as expected! Highly recommended! Amazing communication and response with great skills as always. Love it.</p>
                                    </div>
                                    <div className='flex justify-between items-center pt-3 mt-4 px-2 border-t border-[#E2E2E2] '>
                                        <div>
                                            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-[#29B6DD] to-[#005269] text-[18px] font-semibold'>Codighost</h2>
                                        </div>
                                        <div className='w-[50px] h-[50px] rounded-[50%] overflow-hedden'>
                                            <img src={Profilr1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] h-[315px] md:h-[250px] flex flex-col justify-between'>
                                    <div className='px-2'>
                                        <h1 className='text-[18px] font-semibold text-[#222831] py-2'>Figma Design</h1>
                                        <p className='text-[14px] font-regular leading-6 text-[#808080]'>“Amazing to work with, great job on our website and coding, quick turnaround time. We are already working on a next project.”</p>
                                    </div>
                                    <div className='flex justify-between items-center pt-3 mt-4 px-2 border-t border-[#E2E2E2]'>
                                        <div>
                                            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-[#29B6DD] to-[#005269] text-[18px] font-semibold'>vispol</h2>
                                        </div>
                                        <div className='w-[50px] h-[50px] rounded-[50%] overflow-hedden'>
                                            <img src={Profilr1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] h-[315px] md:h-[250px] flex flex-col justify-between'>
                                    <div className='px-2'>
                                        <h1 className='text-[18px] font-semibold text-[#222831] py-2'>UI/UX for your website by Figma.</h1>
                                        <p className='text-[14px] font-regular leading-6 text-[#808080]'>“Outstanding work once again , with every order the quality is high and communication is good.”</p>
                                    </div>
                                    <div className='flex justify-between items-center pt-3 mt-4 px-2 border-t border-[#E2E2E2]'>
                                        <div>
                                            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-[#29B6DD] to-[#005269] text-[18px] font-semibold'>debasischakrabo</h2>
                                        </div>
                                        <div className='w-[50px] h-[50px] rounded-[50%] overflow-hedden'>
                                            <img src={Profilr1} alt="" />
                                        </div>
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

export default Testimonial