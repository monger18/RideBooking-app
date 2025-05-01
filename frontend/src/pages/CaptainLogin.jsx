import React, { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';


const CaptainLogin = () => {
    // State to manage the email input
  const [email, setEmail] = useState('');
  // State to manage the password input
  const [password, setPassword] = useState('');

  const {setCaptain} = useContext(CaptainDataContext);
  const navigate = useNavigate();


  const SubmitHandler = async (e) => {
    e.preventDefault();
  const CaptainData ={
      email: email,
      password: password
    };

    setEmail('');
    setPassword('');

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, CaptainData);

    if(response?.status ===200) {
      const data= response?.data;
      setCaptain(data?.captain);
      localStorage.setItem('captain_token', JSON.stringify(data?.token));
      navigate('/captain-home');
    }
 }  
  return (
     <div className='p-7 h-screen flex flex-col justify-between'>
     <div>
       <img className='w-16 mb-3' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
      <form onSubmit={(e) => SubmitHandler(e)}>
        <h3 className='text-lg font-medium mb-2'>What's our Captain email?</h3>
        <input 
          required 
          type="email" 
          placeholder='email@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input 
          required 
          type="password" 
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        />
        <button className='bg-[#111] font-semibold mb-3 text-white rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
      </form>
      <p className='text-center'>
        Join a fleet?{' '}    
        <Link to={'/captain-signup'} className='text-blue-600'>Register as Captain</Link>
      </p>
     </div>
     <div>
      <Link  to={'/user-login'}className='bg-[#10b461] flex items-center justify-center font-semibold mb-5 text-white rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
     </div>
    </div>
  )
}

export default CaptainLogin