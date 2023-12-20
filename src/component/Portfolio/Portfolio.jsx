import React, { useEffect } from 'react'
import projectData from '../Services/PortfolioData'

const Portfolio = () => {
    return (
        <>
            <section className="dark:bg-[url('./assets/bg-img/portfolio-bg-light.svg')] bg-[url('./assets/bg-img/portfolio-bg-light.svg')] bg-center bg-repeat">
                <div className='lg:py-[70px] py-[50px] max-w-7xl mx-auto px-2'>
                    <h2 className='text-[#222831] text-[18px] font-semibold text-center dark:text-white'>Explore my work</h2>
                    <h1 className='custom-header-stroke text-transparent text-[28px] font-bold uppercase tracking-wider text-center'>Best Projects</h1>

                    <div className='grid grid-cols-1 md:grid-cols-12 gap-6 mt-5'>
                        {projectData.map((item, index) => (
                            <div key={index} className='md:col-span-4 rounded-[10px] mx-3 md:m-0 p-3 bg-white border border-[#E2E2E2] dark:bg-[#2d3a4f] dark:border-[#566279]'>
                                <div className='rounded-[10px] overflow-hidden relative'>
                                    <img className='scale-100 hover:scale-125 transition-all duration-300' src={item.img} alt="" />
                                    <div className='absolute top-3 right-3 z-50'>
                                        {item.link ? <a className='h-[35px] w-[35px] bg-white drop-shadow-lg flex items-center justify-center rounded-[50%]' href={item.link} target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <path d="M14.4375 1.96875H19.0312V6.5625M18.0469 2.95312L13.125 7.875M11.1562 3.28125H5.25C4.72786 3.28125 4.2271 3.48867 3.85788 3.85788C3.48867 4.2271 3.28125 4.72786 3.28125 5.25V15.75C3.28125 16.2721 3.48867 16.7729 3.85788 17.1421C4.2271 17.5113 4.72786 17.7188 5.25 17.7188H15.75C16.2721 17.7188 16.7729 17.5113 17.1421 17.1421C17.5113 16.7729 17.7188 16.2721 17.7188 15.75V9.84375" stroke="#222831" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></a> : null}

                                    </div>
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
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio