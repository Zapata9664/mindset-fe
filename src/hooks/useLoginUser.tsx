import { useState, useEffect } from "react";
import axios from 'axios'
import { RootState, setToken } from '../redux';
import { useDispatch, useSelector } from 'react-redux';


export const useLoginUser = (username: string | null, password: string  | null ): any => {
  const token = useSelector((state: RootState) => state.auth.token)
  const dispatch = useDispatch()
  useEffect(() => {
    if(!username || !password){
      return;
    }
    console.log(username, password);
    
    const postHours = async () => {
      const response = await axios.post('http://localhost:3200/auth/login', {username, password} );
      dispatch(setToken(response.data.access_token))
      
    }
    postHours();

  }, [username, password]);

  return [token];

};