import React from "react";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";


export const Successful = () => {
  const navigate = useNavigate()
  const handlerSubmit = () => {
    navigate('/')
  }
  return (
      <div className="flex justify-center items-center p-12 m-6">
        <div className="border flex border-gray-400 rounded-lg p-8 bg-white flex-col h-72 justify-around">
          <h1 className='text-teal-700 font-sans '><b>YOUR APPOINTMENT HAS BEEN CREATED SUCCESSFULLY</b></h1>
          <h3 className="fonts-sans">CONTINUE WITH US</h3>
          <Button onClick={handlerSubmit} sx={{ backgroundColor: '#10403b', color: 'white', borderColor: '#8AA6A3' }} variant='outlined'>GO TO HOME</Button>
        </div>
      </div>
  );
};
