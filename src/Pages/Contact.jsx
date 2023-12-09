import React from 'react'
import MainLayout from '../component/Layout/MainLayout'
import Contact_details from '../component/Contact_details/Contact_details'

const Contact = () => {
  return (
    <>
    <div className='dark:bg-gray-800 bg-[#F7F9FC]'>
      <MainLayout>
        <Contact_details></Contact_details>
      </MainLayout>
    </div>
    </>
  )
}

export default Contact
