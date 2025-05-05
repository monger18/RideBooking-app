import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(function() {
    if(finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
        gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  },[finishRidePanel]);

  return (
    <div className='h-screen relative'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16'  src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
          <Link to={'/home'} className='h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-md'>
            <i className="ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className='h-4/5'>
         <img          
          className='h-full w-full object-cover'
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt="" />
        </div>
        <div
          onClick={() => setFinishRidePanel(true)} 
          className='h-1/5 p-6 bg-yellow-400 relative flex items-center justify-between'>
          <h5 
           className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-black-200 ri-arrow-up-wide-fill"></i>
          </h5>
          <h4 className='text-xl font-semibold'>4 KM away</h4>
          <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
        </div>
       <div ref={finishRidePanelRef}  className='fixed w-full z-10 bg-white bottom-0 px-3 py-6 pt-12 translate-y-full'>
         <FinishRide setFinishRidePanel={setFinishRidePanel}/>
       </div>
    </div>  
)
}

export default CaptainRiding