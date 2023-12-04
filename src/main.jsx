import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './index.css'

import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Portfolio from './Pages/PortfolioPage.jsx';
import Contact from './Pages/Contact.jsx';



const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "/About", element: <About /> },
  { path: "/Services", element: <Services /> },
  { path: "/Portfolio", element: <Portfolio/> },
  { path: "/Contact", element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
