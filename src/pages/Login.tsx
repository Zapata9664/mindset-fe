import { Button } from '../components/button.component';
import React, { useState } from "react";
import { Input } from '../components/input.component';
import { useFetch } from '../hooks/useLogin'
import { useDispatch } from 'react-redux'
import { setUserLogin } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { imagenLogout } from '../assets';
import { BorderColor } from '@mui/icons-material';


export const Login = () => {
  const navigate = useNavigate()
  const res = useFetch()
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value })

  }

  const dispatch = useDispatch()
  const handlerSubmit = () => {

    console.log(res)
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', JSON.stringify(res))
    dispatch(setUserLogin(res))
    navigate('/dashboard')
  };


  return (
    <div className="flex justify-center items-center p-16 bg-teal-50">
      <div>
        <img src={imagenLogout} className='border-gray-400 h-96'/>
      </div>
      <div className="flex border-gray-400 p-8 bg-white flex-col h-96 justify-around">
          <h1 className='text-teal-700 font-sans'>We are <b>MENTAL HEALTH</b></h1>
          <Input id="outlined-basic" label="Email" variant="standard" name="email" onChange={OnChange} />
          <Input id="outlined-basic" label="Password" variant="standard" name='password' type="password" onChange={OnChange} />
          <Button sx={{ backgroundColor: '#10403B', color: 'white', BorderColor:'#10403B' }} variant='outlined' onClick={handlerSubmit} >Sign in</Button>
      </div>
    </div>
  )
}


