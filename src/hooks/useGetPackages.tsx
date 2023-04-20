import { useState, useEffect } from "react";
import axios from 'axios'

export const useGetPackages = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPackages = async () => {
      const response = await axios.get(`http://localhost:2000/packages/`);
      setData(response.data)
    }
    getPackages();

  }, []);

  return [data];

};