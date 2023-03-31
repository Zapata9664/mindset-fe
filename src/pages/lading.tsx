import React, { useEffect, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { Calendar } from '../components/calendar.component'
import { useFetch } from '../hooks/useLogin';
import { Button } from '../components/button.component';


export const Lading = () => {
    const [value, setValue] = useState<Dayjs | null>(dayjs(''));
    const [ buttons ] = useFetch(value)

    const onChange = (newValue: Dayjs | null) => {
        setValue(newValue)
        console.log(newValue!.format('DD/MM/YYYY'))
        
    }
    
    return (
        <div className='flex'>
            <div className='p-20'>
            <Calendar value={value} onChange={onChange} className='bg-teal-50 border-gray-500 rounded-xl'/>
            </div>
            <div>
                {buttons.map((days: JSX.Element, index: number) => (
                    <Button key={index}>{days}</Button>
                ))}
            </div>

        </div>
    )
};
