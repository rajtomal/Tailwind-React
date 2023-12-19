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
                            {projectData.slice(0, 5).map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='md:col-span-4 rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] dark:bg-[#2d3a4f] dark:border-[#404E68]'>
                                        <div className='rounded-[10px] overflow-hidden'>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div>
                                            <h1 className='text-[18px] font-semibold text-[#222831] py-2 dark:text-white'>{item.title}</h1>
                                            <div>
                                                {item.tags.includes('UI-UX') && <span className='mx-1 py-[1px] px-[10px] bg-[#155E75]/20 text-[12px] text-[#155E75] border border-[#155E75] rounded-[5px]'>UI-UX</span>}
                                                {item.tags.includes('Prototype') && <span className='mx-1 py-[1px] px-[10px] bg-[#7E13F8]/20 text-[12px] text-[#7E13F8] border border-[#7E13F8] rounded-[5px]'>Prototype</span>}
                                                {item.tags.includes('Figma') && <span className='mx-1 py-[1px] px-[10px] bg-[#0ACF83]/20 text-[12px] text-[#0ACF83] border border-[#0ACF83] rounded-[5px]'>Figma</span>}
                                                {item.tags.includes('PSD') && <span className='mx-1 py-[1px] px-[10px] bg-[#31A8FF]/20 text-[12px] text-[#31A8FF] border border-[#31A8FF] rounded-[5px]'>PSD</span>}
                                                {item.tags.includes('HTML') && <span className='mx-1 py-[1px] px-[10px] bg-[#E44F26]/20 text-[12px] text-[#E44F26] border border-[#E44F26] rounded-[5px]'>HTML</span>}
                                                {item.tags.includes('CSS') && <span className='mx-1 py-[1px] px-[10px] bg-[#1572B6]/20 text-[12px] text-[#1572B6] border border-[#1572B6] rounded-[5px]'>CSS</span>}
                                                {item.tags.includes('Tailwind') && <span className='mx-1 py-[1px] px-[10px] bg-[#38BDF8]/20 text-[12px] text-[#38BDF8] border border-[#38BDF8] rounded-[5px]'>Tailwind</span>}
                                                {item.tags.includes('Bootstrap') && <span className='mx-1 py-[1px] px-[10px] bg-[#7E13F8]/20 text-[12px] text-[#7E13F8] border border-[#7E13F8] rounded-[5px]'>Bootstrap</span>}
                                                {item.tags.includes('JavaScript') && <span className='mx-1 py-[1px] px-[10px] bg-[#F0DB4F]/20 text-[12px] text-[#F0DB4F] border border-[#F0DB4F] rounded-[5px]'>JavaScript</span>}
                                                {item.tags.includes('React') && <span className='mx-1 py-[1px] px-[10px] bg-[#65DBFB]/20 text-[12px] text-[#65DBFB] border border-[#65DBFB] rounded-[5px]'>React</span>}
                                                {item.tags.includes('Angular') && <span className='mx-1 py-[1px] px-[10px] bg-[#E23237]/20 text-[12px] text-[#E23237] border border-[#E23237] rounded-[5px]'>Angular</span>}
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