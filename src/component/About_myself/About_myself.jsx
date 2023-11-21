import React from 'react'

const About_myself = () => {
    return (
        <>
            <section className="about-myself bg-[url('./assets/about-bg.png')] bg-center bg-no-repeat bg-cover">
                <div className=" lg:py-[70px] max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className='grid grid-cols-1 md:grid-cols-12'>
                        <div className="md:col-span-4">
                            <div className="experience-part">
                                <h1>02+</h1>
                                <h4>Years Of Experience</h4>
                                <div className="overlay-experience">
                                    <div className="flex items-center justify-between w-[50%]">
                                        <h3>100%</h3>
                                        <p>Clients Satisfections</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-8">
                            <div className="myself-text">
                                <h4>About Myself</h4>
                                <h2 className='custom-header-stroke text-transparent text-[24px] font-bold'>My Eyes to do</h2>
                                <p>An Addicted, Specialized, and Qualified to build UI/UX design for website and mobile applications
                                    (Dealing with the front end part). I always work with the need to understand the benefits of the users,
                                    give them something new to enjoy, and come close to new expectations in advance.</p>
                            </div>
                            <div className="category-part">
                                hi
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About_myself