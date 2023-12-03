import React from 'react'
import MainLayout from '../component/Layout/MainLayout'
import About_myself from '../component/About_myself/About_myself'
import Biography_history from '../component/Biography_history/Biography_history'
import Technology from '../component/Technology/Technology'

const About = () => {
  return (
    <>
      <div className='dark:bg-gray-800 bg-[#F7F9FC]'>
        <MainLayout>
          <About_myself></About_myself>
          <Technology></Technology>
          <Biography_history></Biography_history>
        </MainLayout>
      </div>
    </>
  )
}

export default About