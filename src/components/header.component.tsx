import React, { useState, useEffect } from 'react'
import { imagenLogoHeader } from '../assets'
import { NavLink } from 'react-router-dom'
import { Button } from './button.component'
import { useSelector } from 'react-redux';
import { RootState } from '../redux';

export const Header = () => {
  const token = useSelector((state: RootState) => state.auth.token)
  return (
    <div className="flex items-center bg-white justify-between h-20">
      <div className="flex flex-row justify-start w-36 px-6">
        <img src={imagenLogoHeader} />
      </div>

      <div className="flex space-x-3 bg-white px-6">
        {token ? (
          <React.Fragment>
            <NavLink to={'/'}>
              <Button sx={{ backgroundColor: '#8AA6A3', color: 'white', borderColor: '#10403B' }} variant='outlined' >HOME</Button>
            </NavLink>
            <NavLink to={'/login'}>
              <Button sx={{ backgroundColor: '#8AA6A3', color: 'white', BorderColor: '#10403B' }} variant='outlined' >LOGOUT</Button>
            </NavLink>
          </React.Fragment>
        ) : (
          <React.Fragment><NavLink to={'/'}>
            <Button sx={{ backgroundColor: '#8AA6A3', color: 'white', BorderColor: '#10403B' }} variant='outlined' >HOME</Button>
          </NavLink>
          </React.Fragment>
        )
        }
      </div>
    </div>
  );
};
