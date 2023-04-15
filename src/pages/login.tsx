import React, { useState } from "react";
import { Button, Input } from '../components';
import { imagenLogout } from '../assets';
import { setToken } from '../redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginUser } from "../hooks";

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState({
    username: null,
    password: null,
  });
  const [user, setUser] = useState<{username: null | string, password: null | string }>({
    username: null,
    password: null,
  });
  const [res] = useLoginUser(user);



  const OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value })
  }
  const handlerSubmit = () => {
    console.log(userInput);
    
    setUser({username: 'jose', password: 'jose' });
    console.log(user);
    
    dispatch(setToken(res))
    localStorage.setItem('token', JSON.stringify(res))
    navigate('/dashboard')
  };

  return (
    <div className="flex justify-center items-center p-16 bg-teal-50">
      <div>
        <img src={imagenLogout} className='border-gray-400 h-96' />
      </div>
      <div className="flex border-gray-400 p-8 bg-white flex-col h-96 justify-around">
        <h1 className='text-teal-700 font-sans'>We are <b>MENTAL HEALTH</b></h1>
        <Input id="outlined-basic" label="Email" variant="standard" name="username" onChange={OnChange} />
        <Input id="outlined-basic" label="Password" variant="standard" name='password' type="password" onChange={OnChange} />
        <Button sx={{ backgroundColor: '#10403B', color: 'white', BorderColor: '#10403B' }} variant='outlined' onClick={handlerSubmit} >Sign in</Button>
      </div>
    </div>
  )
}
