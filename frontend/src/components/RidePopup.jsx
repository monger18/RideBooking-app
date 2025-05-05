import React from 'react'

const RidePopup = (props) => {
 
  const { setRidePopupPanel, setConfirmRidePopupPanel } = props;

  return (
    <div>
       <h5 
         onClick={() => setRidePopupPanel(false)} 
         className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
        </h5>
        <h3 className='text-xxl mb-5 font-semibold'>New Ride Available</h3>
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
            <button
             onClick={() => {
              setConfirmRidePopupPanel(true);
              setRidePopupPanel(false);
             }}
             className='w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg'>
              Accept
            </button>
            <button
             onClick={() => {
              setRidePopupPanel(false);
             }}
             className='w-full mt-1 bg-gray-200 text-gray-700 font-semibold p-2 rounded-lg'>
              Decline
            </button>
        </div>
    </div>
  )
}

export default RidePopup