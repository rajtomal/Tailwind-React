import React from 'react'
import NavBar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const MainLayout = ({ children }) => {
    window.scrollTo(0, 0)
    return (
        <>
            <div className="hi">
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
                </div>
        </>
    )
}

export default MainLayout
