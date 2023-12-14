import React from 'react'
import NavBar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const MainLayout = ({ children }) => {
    window.scrollTo(0, 0)
    return (
        <>
            <div className="dark">
                <div className='dark:bg-gray-800 bg-[#F7F9FC]'>
                    <NavBar></NavBar>
                        {children}
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}

export default MainLayout
