import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to={'/home'} className='fixed h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-md top-5 right-5'>
            <i className="ri-home-4-line"></i>
        </Link>
        <div className='h-1/2'>
         <img          
          className='h-full w-full object-cover'
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt="" />
        </div>
        <div className='h-1/2 p-4 '>
                   <div className='flex items-center justify-between'>
          <img className='h-10' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />  
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Sarthak</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className='flex gap-2 flex-col justify-between items-center'>
           <div className='w-full mt-5'>
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
        </div>
           <button
            className='w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg'>
             Make a payment
           </button>
        </div>
    </div>
  )
}

export default Riding