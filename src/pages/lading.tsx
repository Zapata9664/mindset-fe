import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useGetButtons } from '../hooks';
import { Button, Calendar } from '../components';
import { RootState, setDay, setMonth, setYear, setHourState } from '../redux'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetPackages } from '../hooks';
import { PackagesComponent } from '../components';
import EmailIcon from '@mui/icons-material/Email';
import { imagenLadingTransition, imagenLadingTransition2 } from '../assets';
import { Error } from '../components'

export const Lading = () => {
    const [showComponent, setShowComponent] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [res] = useGetPackages()
    const dayState = useSelector((state: RootState) => state.auth.day)
    const monthState = useSelector((state: RootState) => state.auth.month)    
    const yearState = useSelector((state: RootState) => state.auth.year)
    const hour = useSelector((state: RootState) => state.auth.hour)
    const dateFormat = {
        day: dayState,
        month: monthState,
        year: yearState,
    }    
    const [buttons] = useGetButtons(dateFormat)

    const onChange = (newValue: any) => {
        const newValueFormat = dayjs(newValue).format('DD-MM-YYYY').split('-')
        const day = newValueFormat[0]
        dispatch(setDay(day));
        const month = newValueFormat[1]
        dispatch(setMonth(month));
        const year = newValueFormat[2]
        dispatch(setYear(year));
    }

    const onChangeHour = (event: any) => {
        const res = buttons[event]
        dispatch(setHourState(res))
    }


    const takeDate = (props: any) => {
        if (dayState && monthState && yearState && hour)
            navigate('/form')
        else if(!hour) { 
            setShowComponent(true)
        }
    }

    return (
        <div className="flex-col animatecss animatecss-fadeInLeft">
            
            <div className='grid grid-cols-2 gap-2 bg-[#A4B5A2] m-7'>
                <div >
                    <img src={imagenLadingTransition} />
                </div>
                <div className='p-14 py-48'>
                    <img src={imagenLadingTransition2}/>
                </div>
            </div>


            <div className="grid grid-cols-2 gap-2 border-2 rounded-lg">
                <div className='px-32 m-24 space-y-6 '>
                    <h1 className='text-teal-700 font-sans text-lg '>BOOK YOUR APPOINTMENT</h1>
                    <Calendar onChange={onChange} />
                </div>

                {dayState && monthState && yearState ? (
                    <div className='flex-col py-44 animatecss animatecss-fadeInRight'>
                        <h1 className='text-teal-700 font-sans text-lg py-7 '><b>PLEASE SELECT A HOUR</b></h1>
                        <div className='flex space-x-6 p-4 py-2 px-44 '>
                            {buttons.map((days: JSX.Element, index: number) => (
                                <Button onClick={() => onChangeHour(index)} sx={{ backgroundColor: '#8AA6A3', color: 'white', borderColor: '#8AA6A3' }} variant='outlined' key={index} className='animatecss animatecss-fadeInRight'>{days}</Button>
                            ))}
                        </div>
                        <div className='py-6 space-y-7'>
                            {dayState && monthState && yearState && hour ? (
                                <div>
                                    <h1 className='font-sans text-lg text-[#10403b]'>You selected the day {dayState} of the month {monthState} of the year {yearState} at {hour} hours</h1>
                                </div>
                            ): <div> 
                            {showComponent && <Error  variant="outlined" severity="info" className='mx-20'>You are very close to creating your appointment, to continue please select a time</Error>}
                            </div> }
                            <Button onClick={takeDate} sx={{ backgroundColor: '#10403b', color: 'white', borderColor: '#8AA6A3' }} variant='outlined' className='animatecss animatecss-fadeInRight'>TAKE YOUR DATE</Button>
                        </div>
                    </div>
                ) :
                    <div className="flex justify-center items-center py-40">
                        <div className=" flex border rounded-lg p-16 h-80 space-y-16 bg-white flex-col justify-around bg-[url('/src/assets/backgroundImageContactAs.png')] bg-cover">
                            <h1 className='text-white font-sans text-2xl p-10 '>CONTACT WITH AS</h1>
                            <div className='flex'>
                                <EmailIcon sx={{ color: '#A4B5A2' }} fontSize='large' className='m-2'></EmailIcon>
                                <h1 className='text-xl font-sans text-gray-400 p-2'>mentalhealt@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                }

            </div>
            <div className='p-1 px-28'>
                <div className='p-7 '>
                    <h1 className='text-teal-700 font-sans text-lg '><b>OUR PACKAGES</b></h1>
                </div>
                <div className="flex justify-between flex-wrap my-8">
                    {res ? (
                        res.map(({ title, sessions, description, path }: { title: string, sessions: number, description: string, path: string }, index) => (
                            <PackagesComponent key={index} title={title} sessions={sessions} description={description} path={path}></PackagesComponent>
                        ))
                    ) : <div>
                    </div>}
                </div>
            </div>
        </div>
    )
};