import React, { useRef, useState } from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationPanel from '../components/LocationPanel';
import VehiclePanel from './VehiclePanel';
import ConfirmRide from './ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitForDriver from '../components/WaitForDriver';

const Home = () => {
 
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const panelCloseRef = useRef(null);
  const waitingforDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function() {
    if(panelOpen) {
       gsap.to(panelRef.current, {
       height:'70%',
       padding: 24,
      //  opacity: 1,
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      })
    } else { 
      gsap.to(panelRef.current, {
        height:'0%',
        padding: 0,
        // opacity: 0, 
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      })
    }
  }, [panelOpen, panelCloseRef]);

  useGSAP(function() {
    if(vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
        gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }

  },[vehiclePanelOpen]);

  useGSAP(function() {
    if(confirmRidePanelOpen) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
        gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  },[confirmRidePanelOpen]);


  useGSAP(function() {
    if(vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
        gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
      })
    }
  },[vehicleFound]);

  useGSAP(function() {
    if(waitingForDriver) {
      gsap.to(waitingforDriverRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
        gsap.to(waitingforDriverRef.current, {
        transform: 'translateY(100%)',
      })
    }
  },[waitingForDriver]);



  return (
    <div className='h-screen relative overflow-hidden'>
       <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
       <div className='h-screen w-screen'>
        {/* image for temporary use */}
        <img          
         className='h-full w-full object-cover'
         src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt="" />
       </div>
       <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => setPanelOpen(false)} className='absolute opacity-0 right-6 top-6 tex-22xl'><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input 
             className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
             type="text" 
             onClick={() => setPanelOpen(true)}
             placeholder='Add a pick-up location'
             value={pickup}
              onChange={(e) => setPickup(e.target.value)} 
            />
            <input 
             className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
             type="text" 
             onClick={() => setPanelOpen(true)}
             placeholder='Enter your destination'
             value={destination}
             onChange={(e) => setDestination(e.target.value)} 
            />
          </form>
        </div>
        <div className=' bg-white h-0' ref={panelRef}>
          <LocationPanel 
            setVehiclePanelOpen={setVehiclePanelOpen}
            setPanelOpen={setPanelOpen}
          />
        </div>
       </div>
       <div ref={vehiclePanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-10 translate-y-full'>
         <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanelOpen={setConfirmRidePanelOpen}/>
       </div>
       <div ref={confirmRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-6 pt-12 translate-y-full'>
         <ConfirmRide setConfirmRidePanelOpen={setConfirmRidePanelOpen} setVehicleFound={setVehicleFound}/>
       </div>
       <div ref={vehicleFoundRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-6 pt-12 translate-y-full'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
       </div>
       <div ref={waitingforDriverRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-6 pt-12'>
        <WaitForDriver setWaitingForDriver={setWaitingForDriver} />
       </div> 
    </div>
  )
}

export default Home