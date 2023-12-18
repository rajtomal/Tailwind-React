import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Portfolio from './Pages/PortfolioPage.jsx';
import Contact from './Pages/Contact.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/contact', element: <Contact /> },
]);

const Root = () => {
  return (
    <React.StrictMode>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
