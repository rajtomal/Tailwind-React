import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Portfolio from './Pages/PortfolioPage.jsx';
import Contact from './Pages/Contact.jsx';
import DarkModeToggle from './component/Layout/DarkModeToggle.jsx';
import NavBar from './component/Layout/Navbar/Navbar.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/contact', element: <Contact /> },
]);

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <React.StrictMode>
      <DarkModeToggle initialMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <div className={darkMode && 'dark'}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
