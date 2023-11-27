import React from 'react'
import NavBar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const MainLayout = ({ children }) => {
    window.scrollTo(0, 0)
    return (
        <>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </>
    )
}

export default MainLayout