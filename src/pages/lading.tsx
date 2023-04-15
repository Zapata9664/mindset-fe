import React, { useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';
import { useFetch } from '../hooks';
import { Button, Calendar } from '../components';
import { setDate, setHourState } from '../redux'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Packages } from '../components';


export const Lading = () => {
    const navigate = useNavigate()
    const [dateFormat, setDateFormat] = useState('');
    const [hour, setHour] = useState<{ hour: null }>()
    const dispatch = useDispatch()
    const [buttons] = useFetch(dateFormat)

    const onChange = (newValue: Dayjs | null) => {
        setDateFormat(newValue?.format('DD-MM-YYYY') as string);
        dispatch(setDate(dateFormat));
    }

    const onChangeHour = (event: any) => {
        setHour(buttons[event])
        dispatch(setHourState(hour))
    }


    const takeDate = () => {
        navigate('/form')
    }

    return (
        <div className="flex-col bg-[url('/src/assets/backgroundImageLading.png')] bg-cover">
            <div className="grid grid-cols-2 gap-2 ">


                <div className='p-20 m-24 space-y-6 '>
                    <h1 className='text-teal-700 font-sans text-lg'><b>PLEASE SELECT A DAY</b></h1>
                    <Calendar onChange={onChange} className='rounded-xl bg-teal-50 border-2 border-gray-400  w-96' />
                </div>


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


            </div>
            <div className='p-14'>
                <div className='p-7 '>
                    <h1 className='text-teal-700 font-sans text-lg '><b>OUR PACKAGES</b></h1>
                </div>
                <div>
                    <Packages></Packages>
                </div>
            </div>
        </div>
    )
};