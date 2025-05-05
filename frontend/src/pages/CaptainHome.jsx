import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useGSAP} from '@gsap/react'
import gsap from 'gsap';
import ConfirmRidePopup from '../components/ConfirmRidePopup'

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  const confirmRidePopupPanelRef = useRef(null);
  const ridePopupPanelRef = useRef(null);

  useGSAP(function() {
    if(ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
        gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  },[ridePopupPanel]);

  useGSAP(function() {
    if(confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
        gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  },[confirmRidePopupPanel]);

  return (
    <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16'  src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
          <Link to={'/home'} className='h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-md'>
            <i className="ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className='h-3/5'>
         <img          
          className='h-full w-full object-cover'
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt="" />
        </div>
        <div className='h-2/5 p-6'>
          <CaptainDetails/>
        </div>
        <div ref={ridePopupPanelRef}  className='fixed w-full z-10 bg-white bottom-0 px-3 py-6 pt-12 translate-y-full'>
         <RidePopup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
       </div>
        <div ref={confirmRidePopupPanelRef}  className='fixed w-full z-10 bg- h-screen bg-white bottom-0 px-3 py-6 pt-12 translate-y-full'>
         <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
       </div>
    </div>
  )
}

export default CaptainHome