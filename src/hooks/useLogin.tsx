import { useState, useEffect } from "react";
import axios from 'axios'

export const useFetch = (dateFormat: string) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!dateFormat) {
      return;
    }
    const getAppoinments = async () => {
      const response = await axios.get(`http://localhost:3200/appointment/${dateFormat}`)
      setData(response.data)

    }
    getAppoinments();
    
  }, [dateFormat]);

  return [data];
};

