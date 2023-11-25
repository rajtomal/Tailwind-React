
import './App.css'
import { Button } from 'flowbite-react';
import NavBar from './component/Navbar/Navbar';
import BannerHeader from './component/Banner/BannerHeader';
import About_myself from './component/About_myself/About_myself';
import Technology from './component/Technology/Technology';
import Recent_work from './component/Recent_work/Recent_work';
import Biography_history from './component/Biography_history/Biography_history';
import Testimonial from './component/Testimonial/Testimonial';

function App() {

  return (
    <>
      <div className='dark:bg-gray-800 bg-[#F7F9FC]'>
        <NavBar></NavBar>
        <BannerHeader></BannerHeader>
        <About_myself></About_myself>
        <Technology></Technology>
        <Recent_work></Recent_work>
        <Biography_history></Biography_history>
        <Testimonial></Testimonial>
      </div>
    </>
  )
}

export default App
