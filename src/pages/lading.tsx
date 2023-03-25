import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { Calendar } from '../components/calendar.component'
import { Button } from '../components/button.component';

export const Lading = () => {

    const [value, setValue] = useState<Dayjs | null>(dayjs());
    const [valorButton, setValorButton] = useState({
        hour: '8:00',
    });
 

    const onChange = (newValue: Dayjs | null) => {
        setValue(newValue)
        console.log(newValue!.format('DD/MM/YYYY'))
    }

    const handlerSubmit = (event: any) => {
        setValorButton(event.target.value)
        console.log(valorButton)
      };

    
    return (
        <div className='flex'>
            <div className='p-20'>
            <Calendar value={value} onChange={onChange} className='bg-teal-50 border-gray-500 rounded-xl'/>
            </div>
            <div>
            <Button sx={{ backgroundColor: '#10403B', color: 'white', BorderColor:'#10403B' }} name='hour' variant='outlined' onClick={handlerSubmit}>8:00</Button>
            </div>

        </div>
    )
};
