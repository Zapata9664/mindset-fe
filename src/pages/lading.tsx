import React, { useEffect, useState } from 'react'
import { Calendar, Button } from '../components'
import { useFetch } from '../hooks';
import { setDate, setHourState } from '../redux'
import { useDispatch } from 'react-redux';
import dayjs, { Dayjs } from 'dayjs';

export const Lading = () => {
    const [dateFormat, setDateFormat] = useState('');
    const [hour, setHour] = useState()
    const dispatch = useDispatch()

    const [buttons] = useFetch(dateFormat)

    const onChange = (newValue: Dayjs | null) => {
        setDateFormat(newValue?.format('DD/MM/YYYY') as string)
        dispatch(setDate(dateFormat))
    }

    const onChangeHour = (event: any) => {
        setHour(buttons[event])
        dispatch(setHourState(hour))
    }

    return (
        <div className='flex'>
            <div className='p-20'>
                <Calendar onChange={onChange} className='bg-teal-50 border-gray-500 rounded-xl' />
            </div>
            <div>
                {buttons.map((days: JSX.Element, index: number) => (
                    <Button onClick={() => onChangeHour(index)} key={index}>{days}</Button>
                ))}
            </div>

        </div>
    )
};
