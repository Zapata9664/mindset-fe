import React, { useState, useEffect } from 'react'
import { imagenLogoHeader } from '../../../assets'
import { NavLink } from 'react-router-dom'
import { Button } from '../../atoms/button.component'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';

export const Header = () => {
  const token = useSelector((state: RootState) => state.auth.token)
  return (
    <div className="flex items-center bg-white justify-between h-24 border-b-2 border-slate-100">
      <div className="flex flex-row justify-start w-36 px-6">
      <a title="Home" href="http://localhost:3000/"><img src={imagenLogoHeader} /></a>      
      </div>

      <div className="flex space-x-3 bg-white px-6">
        {token ? (
          <React.Fragment>
            <NavLink to={'/'}>
              <Button sx={{ backgroundColor: '#8AA6A3', color: 'white', borderColor: '#8AA6A3' }} variant='outlined' >INICIO</Button>
            </NavLink>
            <NavLink to={'/login'}>
              <Button sx={{ backgroundColor: '#8AA6A3', color: 'white', borderColor: '#8AA6A3' }} variant='outlined' >CERRAR SESION</Button>
            </NavLink>
          </React.Fragment>
        ) : (
          <React.Fragment><NavLink to={'/'}>
            <Button sx={{ backgroundColor: '#8AA6A3', color: 'white', borderColor: '#8AA6A3' }} variant='outlined' >INICIO</Button>
          </NavLink>
          </React.Fragment>
        )
        }
      </div>
    </div>
  );
};
