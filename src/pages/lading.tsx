import React, { useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';
import { useFetch } from '../hooks';
import { Button, Calendar } from '../components';
import { RootState, setDate, setHourState } from '../redux'
import { useDispatch, useSelector } from 'react-redux';


export const Lading = () => {
    const [dateFormat, setDateFormat] = useState('');
    const [hour, setHour] = useState()
    const dispatch = useDispatch()



    const [buttons] = useFetch(dateFormat)
    console.log(buttons)

    const onChange = (newValue: Dayjs | null) => {
        setDateFormat(newValue?.format('DD-MM-YYYY') as string);
        dispatch(setDate(dateFormat));
        localStorage.setItem('date', (dateFormat))
    }

    const onChangeHour = (event: any) => {
        setHour(buttons[event])
        dispatch(setHourState(hour))
        localStorage.setItem('hour', JSON.stringify(hour))

    }

    return (
        <div className='flex'>
            <div className='p-20 m-24'>
                <Calendar onChange={onChange} className='bg-teal-50 border-gray-500 rounded-xl' />
            </div>
            <div>
                {buttons.map((days: JSX.Element, index: number) => (
                    <Button onClick={() => onChangeHour(index)} sx={{ backgroundColor: '#8AA6A3', color: 'white', BorderColor: '#10403B' }} variant='outlined' key={index} data-index={index}>{days}</Button>
                ))}
            </div>
            <div>
                <Button>Take your date</Button>
            </div>

        </div>
    )
};