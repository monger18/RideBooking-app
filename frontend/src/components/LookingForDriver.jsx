import React from 'react'

const LookingForDriver = ({setVehicleFound}) => {
  return (
    <div>
        <h5 
            onClick={() => setVehicleFound(false)}
         className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
        </h5>
        <h3 className='text-xxl mb-5 font-semibold'>Looking for a driver</h3>
        <div className='flex gap-2 flex-col justify-between items-center'>
           <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />  
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
        </div>
    </div>
  )
}

export default LookingForDriver