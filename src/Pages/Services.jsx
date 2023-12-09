import React from 'react'
import MainLayout from '../component/Layout/MainLayout'
import About_myself from '../component/About_myself/About_myself'
import Services_All from '../component/Services_All/Services_All'

const Services = () => {
  return (
    <>
    <div className='dark:bg-gray-800 bg-[#F7F9FC]'>
        <MainLayout>
            {/* <About_myself></About_myself> */}
            <Services_All></Services_All>
        </MainLayout>
    </div>
    </>
  )
}

export default Services