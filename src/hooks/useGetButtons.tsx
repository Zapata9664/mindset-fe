import { useState, useEffect } from "react";
import axios from 'axios'

export const useGetButtons = ({day, month, year} : {day: number | null, month: number | null, year: number | null}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!day || !month || !year ) {
      return;
    }
    
    const getAppointments = async () => {
      const response = await axios.get(`http://localhost:3200/appointment/Available/${day}/${month}/${year}`);
      setData(response.data)
    }
    getAppointments();

  }, [day, month, year]);
  
  return [data];

};