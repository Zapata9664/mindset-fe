import { useState, useEffect } from "react";
import axios from 'axios'

export const useGetAppointments = (dateFilter: {month: number | null, year: number | null}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!dateFilter.month || !dateFilter.year ) {
      return;
    }
    
    const getAppointments = async () => {
      const response = await axios.get(`http://localhost:3200/appointment/FindByMonthAndYear/${dateFilter.month}/${dateFilter.year}`);
      setData(response.data)
    }
    getAppointments();

  }, [dateFilter]);
  
  return [data];

};