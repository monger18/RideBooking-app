import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
    const navigate = useNavigate();
    const tokenData = localStorage.getItem('captain_token');
    const token = JSON.parse(tokenData);
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        if(response.status === 200) {
            localStorage.removeItem('captain_token');
            navigate('/captain-login');
        }
    })
  return (
    <div>CaptainLogout</div>
  )
}

export default CaptainLogout;