import React, {useEffect } from 'react'
import {UserDataContext} from '../context/UserContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const UserProtectedWrapper = ({children}) => {

    const tokenData = localStorage.getItem('user_token');
    const token = JSON.parse(tokenData);
    const navigate = useNavigate();
    const {setUser} = React.useContext(UserDataContext);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        if(!token) {
            navigate('/user-login');
        }

      axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
          headers: {
              Authorization: `Bearer ${token}`
          },
      }).then((response) => {
          if(response?.status === 200) {
              setUser(response?.data?.captain);
              setIsLoading(false);
          }
      }).catch((error) => {
          console.log(error);
          localStorage.removeItem('user_token');
          navigate('/user-login');
      })
    }, [token, navigate]);
    if(!token) {
        return null;
    }
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper