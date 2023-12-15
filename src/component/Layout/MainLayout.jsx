import React, { useState, useEffect  } from 'react';
import NavBar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const MainLayout = ({ children }) => {
    window.scrollTo(0, 0)
    const initialDarkMode = localStorage.getItem('darkMode') === 'true';
    const [darkMode, setDarkMode] = useState(initialDarkMode);
    useEffect(() => {
        // Check local storage for dark mode preference
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode !== null && savedDarkMode !== darkMode.toString()) {
            setDarkMode(savedDarkMode === 'true');
        }
    }, [darkMode]);
    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
    };
    return (
        <>
            <div className={` ${darkMode && 'dark'}`}>
                <div className='dark:bg-gray-800 bg-[#F7F9FC] transition-colors duration-300'>
                    <NavBar initialMode={darkMode} onToggleDarkMode={toggleDarkMode}></NavBar>
                    {children}
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}

export default MainLayout
