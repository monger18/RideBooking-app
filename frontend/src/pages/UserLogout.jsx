import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const navigate = useNavigate();
    const tokenData = localStorage.getItem('user_token');
    const token = JSON.parse(tokenData);
    axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        if(response.status === 200) {
            localStorage.removeItem('user_token');
            navigate('/user-login');
        }
    })
  return (
    <div>UserLogout</div>
  )
}

export default UserLogout;