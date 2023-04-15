import { useState, useEffect } from "react";
import axios from 'axios'

export const useLoginUser = (user: {}): any => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if(!user){
      return;
    }
    const postHours = async () => {
      const response = await axios.post('http://localhost:3200/auth/login', user);
      setData(response.data)
    }
    postHours();

  }, []);

  return [data];

};