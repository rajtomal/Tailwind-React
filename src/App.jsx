
import './App.css'
import { Button } from 'flowbite-react';
import NavBar from './Navbar/Navbar';
import BannerHeader from './Banner/BannerHeader';

function App() {

  return (
    <>
      <div className='dark:bg-gray-800'>
        <NavBar></NavBar>
        <BannerHeader></BannerHeader>
      </div>
    </>
  )
}

export default App
