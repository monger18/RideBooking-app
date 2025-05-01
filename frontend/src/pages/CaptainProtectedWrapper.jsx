import React, {useEffect } from 'react'
import {CaptainDataContext} from '../context/CaptainContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const CaptainProtectedWrapper = ({children}) => {

    const captain_token = localStorage.getItem('captain_token');
    const token = JSON.parse(captain_token);
    const {setCaptain} = React.useContext(CaptainDataContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        if(!token) {
            navigate('/captain-login');
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then((response) => {
            if(response?.status === 200) {
                setCaptain(response?.data?.captain);
                setIsLoading(false);
            }
        }).catch((error) => {
            console.log(error);
            localStorage.removeItem('captain_token');
            navigate('/captain-login');
        })
    }, [token]);

    if(!token) {
        return null;
    }
  return (
    <>
      {children}
    </>
  )
}

export default CaptainProtectedWrapper