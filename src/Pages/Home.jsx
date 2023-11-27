import React from 'react'
import MainLayout from '../component/Layout/MainLayout'
import BannerHeader from '../component/Banner/BannerHeader'
import About_myself from '../component/About_myself/About_myself'
import Technology from '../component/Technology/Technology'
import Recent_work from '../component/Recent_work/Recent_work'
import Biography_history from '../component/Biography_history/Biography_history'
import Testimonial from '../component/Testimonial/Testimonial'

const Home = () => {
  return (
    <>
        <MainLayout>
            <BannerHeader></BannerHeader>
            <About_myself></About_myself>
            <Technology></Technology>
            <Recent_work></Recent_work>
            <Biography_history></Biography_history>
            <Testimonial></Testimonial>
        </MainLayout>
    </>
  )
}

export default Home