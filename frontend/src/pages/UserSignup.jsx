import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const {user, setUser} = useContext(UserDataContext);
 
  const SubmitHandler = async(e) => {
    e.preventDefault();

  const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
  };


  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser);
  
  if(response.status ===201) {
    const data = response?.data;
    setUser(data?.user);
    navigate('/home');
  }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
     <div>
       <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e) => SubmitHandler(e)}>
        <h3 className='text-base font-medium mb-2'>What's your name?</h3>
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
        <button className='bg-[#111] font-semibold mb-3 text-white rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign up</button>
      </form>
      <p className='text-center'>
        Already have an Account?{' '}    
        <Link to={'/user-login'} className='text-blue-600'>Sign in</Link>
      </p>
     </div>
     <div>
       <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy</span> and <span className='underline'>Terms of Service apply</span>.</p>
     </div>
    </div>
  )
}

export default UserSignup 