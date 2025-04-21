import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const CaptainLogin = () => {
    // State to manage the email input
  const [email, setEmail] = useState('');
  // State to manage the password input
  const [password, setPassword] = useState('');

  const [captainData, setCaptainData] = useState({});

  const SubmitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password
    });

    setEmail('');
    setPassword('');
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