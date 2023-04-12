import React, { useEffect, useState } from 'react'
import { Input, Button } from '../components'
import { useDispatch } from 'react-redux';
import { setDate, setHourState } from '../redux';
import axios from 'axios';


export const Form = () => {

    const dispatch = useDispatch()
    const [dataDate, setDataDate] = useState({
        date: '',
        hour: '',
    })

    useEffect(() => {
        const dataDateSet = () => {
            const date = localStorage.getItem('date')
            const hour = localStorage.getItem('hour')

            if (date && hour) {
                dispatch(setDate(date))
                dispatch(setHourState(hour))
                setDataDate({ ...dataDate, date: date, hour: hour })
            }
        }
        dataDateSet()
    }, []
    )

    const [form, setForm] = useState({
        name: '',
        email: '',
        reason: '',

    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handlerSubmit = async () => {
        const appointment = {
            ...dataDate,
            ...form
        }
        console.log(appointment);
        
        const res = await axios.post('http://localhost:3200/appointment', JSON.stringify(appointment), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
    };

    return (
        <div className="flex justify-center items-center p-20">
            <div className="border flex border-gray-400 rounded-lg p-11 bg-white flex-col h-96 justify-around">
                <Input id="outlined-basic" label="Name" variant="outlined" name="name" onChange={onChange} />
                <Input id="outlined-basic" label="Email" variant="outlined" name="email" onChange={onChange} />
                <Input id="outlined-basic" label="Reason" variant="outlined" name='reason' onChange={onChange} />
                <Button sx={{ backgroundColor: '#10403B', color: 'white', BorderColor: '#10403B' }} variant='outlined' onClick={handlerSubmit} >Make a date</Button>
            </div>
        </div>
    )
}
