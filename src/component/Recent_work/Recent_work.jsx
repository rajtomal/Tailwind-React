import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import One from '../../assets/UI-design/1.svg'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import projectData from '../Services/PortfolioData'

const Recent_work = () => {
    return (
        <>
            <section className="dark:bg-[url('./assets/bg-img/recent-bg-dark.svg')] bg-[url('./assets/bg-img/recent-bg-light.svg')] bg-center bg-no-repeat bg-cover">
                <div className='lg:py-[70px] py-[30px] max-w-7xl mx-auto px-2'>
                    <h2 className='text-[#222831] lg:text-[18px] text-[16px] font-semibold dark:text-white'>Explore my work</h2>
                    <h1 className='custom-header-stroke text-transparent lg:text-[28px] text-[22px] font-bold uppercase tracking-wider'>Recent Work</h1>
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
                            {projectData.slice(0, 5).map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] dark:bg-[#2d3a4f] dark:border-[#566279]'>
                                        <div className='rounded-[10px] overflow-hidden'>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div>
                                            <h1 className='text-[18px] font-semibold text-[#222831] py-2 dark:text-white'>{item.title}</h1>
                                            <div>
                                                {item.tags.includes('UI-UX') && <p className='mx-1 py-[1px] px-[10px] inline-block bg-[#3fd1be]/20 text-[12px] text-[#3fd1be] border border-[#3fd1be] rounded-[5px]'>UI-UX</p>}
                                                {item.tags.includes('Prototype') && <p className='mx-1 py-[1px] px-[10px] inline-block bg-[#7E13F8]/20 text-[12px] text-[#b77df8] border border-[#b77df8] rounded-[5px]'>Prototype</p>}
                                                {item.tags.includes('Figma') && <p className='mx-1 py-[1px] px-[10px] inline-block bg-[#0ACF83]/20 text-[12px] text-[#3fd1be] border border-[#0ACF83] rounded-[5px]'>Figma</p>}
                                                {item.tags.includes('PSD') && <p className='mx-1 py-[1px] px-[10px] inline-block bg-[#31A8FF]/20 text-[12px] text-[#1572B6] dark:text-[#5bcdfd] border border-[#38BDF8] rounded-[5px]'>PSD</p>}
                                                {item.tags.includes('HTML') && <p className='mx-1 py-[1px] px-[10px] inline-block bg-[#E44F26]/20 text-[12px] text-[#E44F26] border border-[#E44F26] rounded-[5px]'>HTML</p>}
                                                {item.tags.includes('CSS') && <p className='mx-1 py-[1px] px-[10px] inline-block bg-[#38BDF8]/20 text-[12px] text-[#1572B6] dark:text-[#5bcdfd] border border-[#38BDF8] rounded-[5px]'>CSS</p>}
                                                {item.tags.includes('Tailwind') && <p className='mx-1 py-[1px] px-[10px] inline-block bg-[#38BDF8]/20 text-[12px] text-[#1572B6] dark:text-[#5bcdfd] border border-[#38BDF8] rounded-[5px]'>Tailwind</p>}
                                                {item.tags.includes('Bootstrap') && <p className='mx-1 py-[1px] px-[10px] inline-block bg-[#7E13F8]/20 text-[12px] text-[#b77df8] border border-[#b77df8] rounded-[5px]'>Bootstrap</p>}
                                                {item.tags.includes('JavaScript') && <p className='mx-1 py-[1px] px-[10px] inline-block bg-[#F0DB4F]/20 text-[12px] text-[#b9a83b] border border-[#b9a83b] rounded-[5px]'>JavaScript</p>}
                                                {item.tags.includes('React') && <p className='mx-1 py-[1px] px-[10px] inline-block bg-[#65DBFB]/20 text-[12px] text-[#1572B6] dark:text-[#5bcdfd] border border-[#65DBFB] rounded-[5px]'>React</p>}
                                                {item.tags.includes('Angular') && <p className='mx-1 py-[1px] px-[10px] inline-block bg-[#E23237]/20 text-[12px] text-[#E23237] border border-[#E23237] rounded-[5px]'>Angular</p>}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Recent_work