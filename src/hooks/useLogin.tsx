import { useState, useEffect } from "react";
import axios from 'axios'


export const useFetch = (value: any = []) => {
  const [data, setData] = useState([]);
  console.log(value)
  useEffect(() => {
    axios.get('http://localhost:2000/avility')
    .then( (response) => {
        setData(response.data)
    })
  }, [value]);

  return [data];
};
