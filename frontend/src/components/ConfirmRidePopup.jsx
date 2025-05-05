import React, { use, useState } from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopup = (props) => {

    const { setRidePopupPanel, setConfirmRidePopupPanel } = props;

    const [otp, setOtp] = useState('');

    const submitHandlerOtp = (e) => {
        e.preventDefault();
        
    }

  return (
    <div>
       <h5 
         onClick={() => setRidePopupPanel(false)} 
         className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
        </h5>
        <h3 className='text-xxl mb-5 font-bold'>Confirm this ride to Start</h3>
        <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
          <div className='flex items-center gap-3'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://icon-library.com/images/person-png-icon/person-png-icon-29.jpg" alt="" />
            <h2 className='text-lg font-medium'>Harsh Patel</h2>
          </div> 
          <h5 className='text-lg font-semibold'>2.25 KM</h5>
        </div>
        <div className='flex gap-2 flex-col justify-between items-center'>
           <div className='w-full mt-5'>
              <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                <i className="ri-map-pin-user-fill"></i>
                <div>
                  <h3 className='text-lg font-medium'>562/11-A</h3>
                  <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                </div>
              </div>
              <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                 <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                  <h3 className='text-lg font-medium'>562/11-A</h3>
                  <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                </div>
              </div>
              <div className='flex items-center gap-5 p-3'>
                 <i className="ri-cash-fill"></i>
                <div>
                  <h3 className='text-lg font-medium'>₹192.20</h3>
                  <p className='text-sm -mt-1 text-gray-600'>Cash, Cash</p>
                </div>
              </div>
           </div>
           <div className='mt-6 w-full'>
             <form onSubmit={(e) => {
                submitHandlerOtp(e);
             }}>
                <input 
                 type='number' 
                 value={otp} 
                 placeholder='Enter OTP' 
                 onChange={(e) => setOtp(e.target.value)} 
                 className='bg-[#eee] px-6 py-4 text-lg text-center rounded-lg w-full mt-3 font-mono'
                />
                <Link
                to={'/captain-ride'}          
                className='w-full mt-5 flex justify-center bg-green-500 text-white text-center font-semibold p-3 rounded-lg'>
                  Confirm
                </Link>
                <button
                onClick={() => {
                  setConfirmRidePopupPanel(false);
                }}
                className='w-full mt-1 bg-red-500 text-white font-semibold p-3 rounded-lg'>
                  Cancel
                </button>
             </form>
           </div>
        </div>
    </div>
  )
}

export default ConfirmRidePopup