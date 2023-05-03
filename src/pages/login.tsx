import React, { useState, useEffect } from "react";
import { Button, Input } from '../components';
import { imagenLogout } from '../assets';
import { RootState, setToken } from '../redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLogin } from "../hooks";

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector((state: RootState) => state.auth.token)

  const [user, setUser] = useState({
    username: null,
    password: null,
  });
  const [userInput, setUserInput] = useState({
    username: null,
    password: null,
  });
  
  const [res] = useLogin(user.username, user.password);
  

  const OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value })    
  }

  const handlerSubmit = () => {
    setUser(userInput)
    dispatch(setToken(res)) 
    
  };
  
  useEffect(() => {
    if (token) {
      navigate('/dashboard')  
    }
  })

  return (
    <div className="flex justify-center items-center p-28 bg-teal-50">
      <div>
        <img src={imagenLogout} className='border-gray-400 h-96' />
      </div>
      <div className="flex border-gray-400 p-8 bg-white flex-col h-96 justify-around">
        <h1 className='text-teal-700 font-sans'>Somos <b>MENTAL HEALTH</b></h1>
        <Input id="outlined-basic" label="Correo electronico" variant="standard" name="username" onChange={OnChange} />
        <Input id="outlined-basic" label="Contraseña" variant="standard" name='password' type="password" onChange={OnChange} />
        <Button sx={{ backgroundColor: '#10403B', color: 'white', borderColor: '#10403B' }} variant='outlined' onClick={handlerSubmit} >INICIAR SESION</Button>
      </div>
    </div>
  )
}
