import { useState, useEffect } from "react";
import axios from 'axios'

export const userLogin = (url: string, user: {}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const postHours = async () => {
      const response = await axios.post(url, user);
      setData(response.data)
    }
    postHours();

  }, []);

  return data;

};