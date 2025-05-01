import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserLogin = () => {
  // State to manage the email input
  const [email, setEmail] = useState('');
  // State to manage the password input
  const [password, setPassword] = useState('');

  const {user, setUser} = useContext(UserDataContext);
  const navigate = useNavigate();

  const SubmitHandler = async(e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, newUser);

    if(response.status === 200) {
      const data = response?.data;
      setUser(data?.user);
      localStorage.setItem('user_token', JSON.stringify(data?.token));
      navigate('/home');
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
     <div>
       <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e) => SubmitHandler(e)}>
        <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
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
        New here?{' '}    
        <Link to={'/user-signup'} className='text-blue-600'>Create new Account</Link>
      </p>
     </div>
     <div>
      <Link  to={'/captain-login'}className='bg-[#f14a16] flex items-center justify-center font-semibold mb-5 text-white rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
     </div>
    </div>
  )
}

export default UserLogin;