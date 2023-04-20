import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useGetButtons } from '../hooks';
import { Button, Calendar } from '../components';
import { RootState, setDate, setHourState } from '../redux'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetPackages } from '../hooks';
import { PackagesComponent } from '../components';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Lading = () => {
    const navigate = useNavigate()
    const [res] = useGetPackages()
    const dateFormat = useSelector((state: RootState) => state.auth.date)
    const hour = useSelector((state: RootState) => state.auth.hour)
    const dispatch = useDispatch()
    const [buttons] = useGetButtons(dateFormat)

    const onChange = (newValue: string) => {
        dispatch(setDate(newValue));
    }

    const onChangeHour = (event: any) => {
        const res = buttons[event]
        dispatch(setHourState(res))
    }


    const takeDate = () => {
        if (dateFormat && hour)
            navigate('/form')
    }

    return (
        <div className="flex-col">
            <div className="grid grid-cols-2 gap-2 border-2 rounded-lg">
                <div className='px-20 m-24 space-y-6 '>
                    <h1 className='text-teal-700 font-sans text-lg'><b>PLEASE SELECT A DAY</b></h1>
                    <Calendar onChange={(newValue) => onChange(dayjs(newValue).format('DD-MM-YYYY'))} />
                </div>

                {dateFormat ? (
                    <div className='flex-col py-72'>
                        <h1 className='text-teal-700 font-sans text-lg py-2'><b>PLEASE SELECT A HOUR</b></h1>
                        <div className='flex space-x-6 p-4 py-2 px-44'>
                            {buttons.map((days: JSX.Element, index: number) => (
                                <Button onClick={() => onChangeHour(index)} sx={{ backgroundColor: '#8AA6A3', color: 'white', borderColor: '#8AA6A3' }} variant='outlined' key={index} data-index={index}>{days}</Button>
                            ))}
                        </div>
                        <div className='py-6'>
                            <Button onClick={takeDate} sx={{ backgroundColor: '#10403b', color: 'white', borderColor: '#8AA6A3' }} variant='outlined'>TAKE YOUR DATE</Button>
                        </div>
                    </div>
                ) :
                    <div className="flex space-y-5 h-96 w-96">
                        <div className="flex justify-center items-center m-14 my-80">
                            <div className=" flex w-96 h-80 rounded-lg p-10  bg-white flex-col justify-around bg-[url('/src/assets/backgroundImageContactAs.png')] bg-cover">
                                <h1 className='text-white font-sans text-2xl p-10 '>CONTACT WITH AS</h1>
                                <div className='flex'>
                                    <EmailIcon sx={{ color: '#A4B5A2' }} fontSize='large' className='m-2'></EmailIcon>
                                    <h1 className='text-xl font-sans text-gray-400 p-2'>mentalhealt@gmail.com</h1>
                                </div>
                            </div>
                        </div>
                    </div>}

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