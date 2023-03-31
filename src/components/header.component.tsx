import React, { useState, useEffect } from 'react'
import { imagenLogoHeader } from '../assets'
import { NavLink } from 'react-router-dom'
import { Button } from './button.component'


export const Header = () => {
    
  const [token, setToken] = useState()
  useEffect(() => {
     // console.log(localStorage.getItem("token")) 
      // console.log(token)
  }, [token])

        
    return (
        <div className="flex items-center bg-white justify-between h-20 border-b-2 border-gray-100">
          <div className="flex flex-row justify-start w-36 px-6">
            <img src={imagenLogoHeader} />
          </div>
    
          <div className="flex-row space-x-3 bg-white px-6">
            {token ? (
              <React.Fragment>
                <NavLink to={'/'}>
                <Button sx={{ backgroundColor: '#8AA6A3', color: 'white', BorderColor:'#10403B' }} variant='outlined' >HOME</Button>
                </NavLink>
                <NavLink to={'/login'}>
                <Button sx={{ backgroundColor: '#8AA6A3', color: 'white', BorderColor:'#10403B' }} variant='outlined' >LOGOUT</Button>
                </NavLink>
              </React.Fragment>
            ) : (
              <React.Fragment><NavLink to={'/'}>
                <Button sx={{ backgroundColor: '#8AA6A3', color: 'white', BorderColor:'#10403B' }} variant='outlined' >HOME</Button>
              </NavLink>
              </React.Fragment>
            )
            }
          </div>
        </div>
      );
    };
    