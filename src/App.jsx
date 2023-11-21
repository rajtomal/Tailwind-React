
import './App.css'
import { Button } from 'flowbite-react';
import NavBar from './component/Navbar/Navbar';
import BannerHeader from './component/Banner/BannerHeader';
import About_myself from './component/About_myself/About_myself';

function App() {

  return (
    <>
      <div className='dark:bg-gray-800 bg-[#F7F9FC]'>
        <NavBar></NavBar>
        <BannerHeader></BannerHeader>
        <About_myself></About_myself>
      </div>
    </>
  )
}

export default App
