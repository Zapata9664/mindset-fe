import { useState, useEffect } from "react";
import axios from 'axios'

export const useGetButtons = (dateFormat: string | null) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!dateFormat) {
      return;
    }
    const getAppointments = async () => {
      const response = await axios.get(`http://localhost:3200/appointment/${dateFormat}`);
      setData(response.data)
    }
    getAppointments();

  }, [dateFormat]);

  return [data];

};