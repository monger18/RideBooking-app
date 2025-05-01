import React from 'react'

const LocationPanel = ({setVehiclePanelOpen, setPanelOpen}) => {
    // sample array for location data
    const locationData = [
        "24A, Near kapoor's cafe, Shreiyans Coding School, Bhopal",
        "24B, Near malhotra cafe, Shreiyans Coding School, Bhopal",
        "24C, Near sharma cafe, Shreiyans Coding School, Bhopal",
        "24C, Near srinath cafe, Shreiyans Coding School, Bhopal",
    ];
  return (
    <div>
        {/* this is just a sample data */}
        {locationData?.map((location, id) => {
            return (
                <div onClick={() => {
                    setVehiclePanelOpen(true);
                    setPanelOpen(false);
                }} 
                key={id}
                className='flex gap-4 border-2 p-3 rounded-xl border-gray-50 active:border-black items-center my-2 justify-start'>
                    <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'>
                        <i className="ri-map-pin-fill"></i>
                    </h2>  
                    <h4 className='font-medium'>{location}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default LocationPanel