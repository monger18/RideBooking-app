import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const Navigate = useNavigate();


  const {captain, setCaptain} = useContext(CaptainDataContext);
 
  const SubmitHandler =async(e) => {
    e.preventDefault();

    const CaptainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      }
    };
    console.log(import.meta.env.VITE_BACKEND_URL);

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, CaptainData);
    console.log(response);

    if(response.status === 201) {
      const data = response?.data;
      setCaptain(data?.captain);
      localStorage.setItem('captain_token', JSON.stringify(data?.token));
      Navigate("/captain-home");
    }
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setVehicleCapacity('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleType('');
  };

  return (
        <div className='p-7 h-screen flex flex-col justify-between'>
     <div>
       <img className='w-16 mb-3' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
      <form onSubmit={(e) => SubmitHandler(e)}>
        <h3 className='text-base font-medium mb-2'>What's our Captain name?</h3>
        <div className='flex gap-4 mb-5'>
          <input 
            required 
            type="text" 
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
          />
          <input 
            type="text" 
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-lg placeholder:text-base'
          />
        </div>
        <h3 className='text-base font-medium mb-2'>What's your email?</h3>
        <input 
          required 
          type="email" 
          placeholder='email@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        />
        <h3 className='text-base font-medium mb-2'>Enter Password</h3>
        <input 
          required 
          type="password" 
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        />
        <h3 className='text-lg font-medium mb-2'>Vehicle information</h3>
        <div className='flex gap-4 mb-2'>
          <input 
            required 
            type="text" 
            placeholder='Vehicle Color'
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          />
          <input 
            required 
            type="text" 
            placeholder='Vehicle Plate'
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          />
        </div>
        <div className='flex gap-4 mb-7'>
          <input
            required
            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
            type="number"
            placeholder='Vehicle Capacity'
            value={vehicleCapacity}
            onChange={(e) => {
              setVehicleCapacity(e.target.value)
            }}
          />
          <select
            required
            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
            value={vehicleType}
            onChange={(e) => {
              setVehicleType(e.target.value)
            }}
          >
            <option value="" disabled>Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="moto">Bike</option>
          </select>
        </div>
        <button className='bg-[#111] font-semibold mb-3 text-white rounded px-4 py-2 w-full text-lg placeholder:text-base'>Create Account</button>
      </form>
      <p className='text-center'>
        Already have an Account?{' '}    
        <Link to={'/captain-login'} className='text-blue-600'>Sign in</Link>
      </p>
     </div>
     <div>
       <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy</span> and <span className='underline'>Terms of Service apply</span>.</p>
     </div>
    </div>
  )
}

export default CaptainSignup