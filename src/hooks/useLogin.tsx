import { useState, useEffect } from "react";
import axios from 'axios'


export const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:2000/login')
    .then( (response) => {
        setData(response.data)
    })
  }, []);

  return [data];
};
