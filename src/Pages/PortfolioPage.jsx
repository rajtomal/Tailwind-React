import React from 'react'
import MainLayout from '../component/Layout/MainLayout';
import Portfolio from '../component/Portfolio/Portfolio';

const PortfolioPage = () => {
  return (
    <>
    <div className='dark:bg-gray-800 bg-[#F7F9FC]'>
        <MainLayout>
            <Portfolio></Portfolio>
        </MainLayout>
    </div>
    </>
  )
}

export default PortfolioPage